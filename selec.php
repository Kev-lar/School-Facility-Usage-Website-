<html><head><title>schools and events</title></head>
<body>
<table border=1>
<tr><th>ID</th><th>Name of School</th><th>City</th><th>ZipCode</th>
<th>StreetAddress</th></tr>
<?php
include 'db.inc.php';

if (!($connection = @ mysql_connect($hostName, $username,
  $password)))
  showerror();

if (!mysql_select_db($databaseName, $connection))
  showerror();
 

$query = "SELECT * FROM SCHOOLS";

if (!($result = @ mysql_query ($query, $connection)))
  showerror();

while ($row = @ mysql_fetch_array($result))
  echo "<tr><td>{$row["id"]}</td>
<td>{$row["name"]}</td>
<td>{$row["location"]}</td>
<td>{$row["zip"]}</td>
<td>{$row["address"]}</td>
<td>{$row["state"]}</td></tr>";
?>
</table></body>
</html>