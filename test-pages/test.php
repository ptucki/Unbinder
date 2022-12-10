<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello!</title>
    <meta name="description" content="description"/>
    <meta name="author" content="author" />
    <meta name="keywords" content="keywords" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="css/reset.css" type="text/css" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  <body>
    <div class="container">
      <form class="form" action="function.php" method="get">
        <input type="text" name="num01" placeholder="Number 1"/>
        <select name="oper">
          <label>Choose operation!</label>
          <option value="add">Add</option>
          <option value="sub">Substract</option>
        </select>
        <input type="text" name="num02" placeholder="Number 2"/>
        <button type="submit">Calculate!</button>
      </form>
    </div>
  </body>
</html>