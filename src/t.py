import sqlite3
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS


class DBclass:
    def __init__(self, path):
        self.path = path
        self.db = sqlite3.connect(self.path)
        self.cur = self.db.cursor()

    def execute(self, query):
        self.cur.execute(query)
        return [i[0] for i in self.cur.description], self.cur.fetchall()


app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    return render_template("sample.html")


song = ""
duration = ""


@app.route('/endpoint', methods=['POST', 'GET'])
def endpoint():
    if request.method == 'POST':
        data = request.json
        connect = sqlite3.connect('playlist.db', check_same_thread=False)
        cur = connect.cursor()
        cur.execute(
        "CREATE TABLE IF NOT EXISTS songs(id INTEGER PRIMARY KEY AUTOINCREMENT, songname TEXT NOT NULL, duration TEXT NOT NULL)")
        song = data['songname']
        duration = data['duration']
        # count=cur.execute("SELECT COUNT(songname) FROM songs WHERE songname=?",(song,))
        cur.execute('SELECT * FROM songs WHERE songname=?', (song,))
        if cur.fetchone() is None:
            cur.execute(
                'INSERT INTO songs (songname,duration) VALUES (?,?)', (song, duration))
            connect.commit()
            cur.close()
            return {'data': 'received'}
        else:
            cur.close()
            return {'data': 'exist'}
        # cur.execute("SELECT * FROM songs")

        # response = jsonify({"message": "Data received"})

    else:
        return "This endpoint only supports POST requests"

# cur.execute("INSERT INTO songs(songname,duration) VALUES (?,?)",(song,duration))
# cur.execute("SELECT * FROM songs")
# print(cur.fetchall())


@app.route('/playlist.html')
def playlist():
    db = DBclass('playlist.db')
    getsongs = "SELECT songname FROM songs"
    data2 = db.execute(getsongs)
    getduration="SELECT duration FROM songs"
    data3 = db.execute(getduration)
    # print(data2)
    return render_template('playlist.html', songs=data2[1],duration=data3[1] ,length=len(data2[1]))


app.run(debug=True)
# <!-- <table>
#         <tbody>
#              {% for i in range(length) %} 
#             <tr>
#                  <td>{{i+1}}</td>
#                  <td>{{ songs[i][0] }}</td>
#                  <td>{{duration[i][0]}}</td>
#             </tr>
#             {% endfor %}
#         </tbody>
#     </table> -->