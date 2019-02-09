# task_screen_sharing
### THIS IS NOW ONLY RUNNING ON CHROME
1)```git clone https://github.com/TG1999/task_screen_sharing.git``` \
2)### Install extensions in chrome \
open ```chrome://extensions``` in google chrome \
Then tick the developer option at top right corner. \
Select load Unpacked at top left corner \
Then select the extension folder from task_screen_sharing \
After that there will be an extension downloaded Screen Capture with an ID like this:- \
![picture](img.png)
3)Change extension id at line number 29 in ```/public/index.html``` \
4)```npm install``` \
5)```npm start``` \
6)Then open ```localhost:2000(presenter)```  \
7)Open ```localhost:2000/client.html(reciever)``` \
### NOTE:- SETUP BOTH PRESENTER AND RECIEVER BEFORE START SCREEN SHARING JUST LIKE HANGOUTS BOTH MUST BE PRESENT BEFORE SCREEN SHARING
8)From Presenter Tab now start screen sharing Select Application,Entire Screen,Only that Tab \
![picture](img1.png)
9)Select a screen from that and start sharing<br>
10)Now reciever side will be recieving the stream.
