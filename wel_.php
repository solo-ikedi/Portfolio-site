<!DOCTYPE html>
<html>
<head>
<title>

</title>
</head>
<body>
<?php
$name =$_POST['text']; 
$email =$_POST['email']; 
$message =$_POST['message'];

echo "{$name}: {$email}: {$message}";
?>
</body>
</html>