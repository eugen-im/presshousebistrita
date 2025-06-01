<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <title>Adaugă Știre</title>
  <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f9f9f9;
    }
    form {
      background: white;
      padding: 20px;
      border-radius: 10px;
      max-width: 800px;
      margin: auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    input[type="text"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      font-size: 16px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    #preview {
      margin-top: 30px;
      background: #eee;
      padding: 15px;
      white-space: pre-wrap;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <h2>Adaugă o Știre Nouă</h2>
  <form id="form-stire">
    <input type="text" id="titlu" placeholder="Titlu știre" required>
    <textarea id="editor"></textarea>
    <button type="submit">Salvează Știrea</button>
  </form>

  <div id="preview"></div>

  <script>
    tinymce.init({
      selector: '#editor',
      plugins: 'lists link image media',
      toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image media',
      height: 300
    });

    document.getElementById('form-stire').addEventListener('submit', function (e) {
      e.preventDefault();

      const titlu = document.getElementById('titlu').value;
      const continut = tinymce.get("editor").getContent();

      const stireNoua = {
        id: Date.now(),
        titlu: titlu,
        rezumat: continut.replace(/<[^>]+>/g, '').substring(0, 100) + "...",
        continut: continut
      };

      let stiriExistente = JSON.parse(localStorage.getItem("stiri")) || [];
      stiriExistente.push(stireNoua);
      localStorage.setItem("stiri", JSON.stringify(stiriExistente));

      console.log("Stire salvată:", stireNoua);

      document.getElementById("preview").innerHTML = `
        <h3>Previzualizare:</h3>
        <h4>${stireNoua.titlu}</h4>
        ${stireNoua.continut}
      `;

      document.getElementById('form-stire').reset();
      tinymce.get("editor").setContent("");
    });
  </script>

</body>
</html>