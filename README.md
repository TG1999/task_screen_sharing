# task_screen_sharing
### THIS IS NOW ONLY RUNNING ON CHROME
1)'''git clone https://github.com/TG1999/task_screen_sharing.git''' \
2)### Install extensions in chrome \
open '''chrome://extensions''' in google chrome \
Then tick the developer option at top right corner. \
Select load Unpacked at top left corner \
Then select the extension folder from task_screen_sharing \
After that there will be an extension downloaded Screen Capture with an ID like this:- \
![picture](img.png)
3)Change extension id at line number 29 in <code>/public/index.html</code> <br>
4)<code>npm install</code><br>
5)<code>npm start</code><br>
6)Then open <code>localhost:2000(presenter)</code><br>
7)Open <code>localhost:2000/client.html(reciever)</code><br>
<h3>NOTE:- SETUP BOTH PRESENTER AND RECIEVER BEFORE START SCREEN SHARING JUST LIKE HANGOUTS BOTH MUST BE PRESENT BEFORE SCREEN SHARING</h3>
8)From Presenter Tab now start screen sharing Select Application,Entire Screen,Only that Tab<br>
9)Select a screen from that and start sharing<br>
10)Now reciever side will be recieving the stream.
