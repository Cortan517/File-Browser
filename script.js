<body>
    <div class="container">
        <h1>File Browser with Authentication</h1>

        <div id="authSection">
            <h2>Register</h2>
            <input type="text" id="registerUsername" placeholder="Username">
            <input type="password" id="registerPassword" placeholder="Password">
            <button onclick="register()">Register</button>

            <h2>Login</h2>
            <input type="text" id="loginUsername" placeholder="Username">
            <input type="password" id="loginPassword" placeholder="Password">
            <button onclick="login()">Login</button>
        </div>

        <div id="fileManagerSection">
            <h2>Welcome to the File Manager</h2>

            <label for="folderName">Folder Name:</label>
            <input type="text" id="folderName" placeholder="Enter folder name">
            <br><br>

            <button onclick="createFolder()">Create Folder</button>
            <button onclick="deleteFolder()">Delete Folder</button>
            <br><br>

            <label for="fileInput">Upload File:</label>
            <input type="file" id="fileInput">
            <br><br>

            <button onclick="uploadFile()">Upload File</button>

            <div class="logout-btn">
                <button onclick="logout()">Log Out</button>
            </div>

            <h2>Folders:</h2>
            <div id="folderContainer"></div>
        </div>
    </div>
</body>
</html>
