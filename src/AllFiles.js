import React, { useEffect, useState } from "react";

function AllFiles() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:4000/api/files`);
      const jsonResult = await result.json();

      setFiles(jsonResult);
    };

    fetchData();
  }, []);

  return (
    <body>
      <div class="AllFiles">
        <div class="titles">
          <h1>AllFiles</h1>

          <hs>Files</hs>
          {files.map((file) => (
            <div class="item-card">
              <h3>{file.file_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
}

export default AllFiles;
