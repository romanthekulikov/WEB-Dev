<?php

$json = get_object_vars(json_decode(file_get_contents('php://input')));

$email = $json["userEmail"];
$name = $json["userName"];
$profession = $json["userProfession"];
$checkbox = $json["isUserAgree"];

$arr = array();


if (($email != null) && ($name != null) && ($profession != null) && ($checkbox != null))
{
    $answer = $checkbox ? "Да" : "Нет";

    $email = strtolower($email);
    $filename = ("Admin/data/$email.json");

    $arr = array("userName" => "Имя: $name", "userEmail" => "Email: $email", "userProfession" => "Деятельность: $profession", "Согласие на рассылку: $answer");
    $text = json_encode($arr);

    file_put_contents($filename, $text);
}

if (file_exists("Admin/data/$email.json"))
{
    $message = 'HTTP: 200)';
    $response = [
        'status' => 200
    ];
} else {
    $response = [
        'status' => 500,
        'message' => 'Error'
    ];
    http_response_code(500);
}


//$response = ['message' => $message];



header('Content-type: application/json');
echo json_encode($response);

?>