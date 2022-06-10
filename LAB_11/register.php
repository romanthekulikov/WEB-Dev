<?php

$inputString = $_POST;

$email = $inputString["userEmail"];
$name = $inputString["userName"];
$profession = $inputString["userProfession"];
$checkbox = $inputString["isUserAgree"];


if (($email != null) && ($name != null) && ($profession != null) && ($checkbox != null))
{
    $answer = $checkbox ? "Да" : "Нет";

    $email = strtolower($email);
    $filename = ("C:/Users/Roman/Desktop/WEB-Development/Frontend_Lab/LAB_11/user/$email.txt");

    $text = "Имя: $name \r\nEmail: $email \r\nДеятельность: $profession \r\nСогласие: $answer";

    file_put_contents($filename, $text);
}

if (file_exists("C:/Users/Roman/Desktop/WEB-Development/Frontend_Lab/LAB_11/user/$email.txt"))
{
    $message = 'HTTP: 200)';
} else {
    $message = 'HTTP: 500( ';
    http_response_code(500);
}


$response = ['message' => $message];



header('Content-type: application/json');
echo json_encode($response);

?>
