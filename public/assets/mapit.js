import React, { useState, useEffect } from 'react';

function DirectoryMap() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const directoryPath = '/path/to/target/directory';
    const mappedFiles = [];

    function mapDirectory(directoryPath) {
      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          console.error(err);
          return;
        }

        files.forEach(file => {
          const filePath = `${directoryPath}/${file}`;
          fs.stat(filePath, (err, stats) => {
            if (err) {
              console.error(err);
              return;
            }

            if (stats.isDirectory()) {
              mapDirectory(filePath);
            } else {
              mappedFiles.push(filePath);
            }
          });
        });

        setFiles(mappedFiles);
      });
    }

    mapDirectory(directoryPath);
  }, []);

  return (
    <div>
      {files.map((file, index) => (
        <div key={index}>{file}</div>
      ))}
    </div>
  );
}

export default DirectoryMap;