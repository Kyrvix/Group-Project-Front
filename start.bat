call npm install
call del "node_modules\react-timelines\lib\utils\formatDate.js"
call xcopy formatDate.js "node_modules\react-timelines\lib\utils\formatDate.js" /Y
call npm start /K