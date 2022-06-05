<?php

function getPostParameter(string $paremeterName): ?string
{
    return isset($_POST[$paremeterName]) ? $_POST[$paremeterName] : null;
}

$email = getPostParameter('email');

if ($email != null)
{
    if (file_exists("C:/Users/Roman/Desktop/WEB-Development/Frontend_Lab/LAB_11/user/$email.txt"))
    {
        echo file_get_contents("C:/Users/Roman/Desktop/WEB-Development/Frontend_Lab/LAB_11/user/$email.txt") ;
    }
    else
    {
        echo "Пользователь не найден";
    }
}
else
{
    echo "Не передан параметр";
}


?>