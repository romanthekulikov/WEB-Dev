<?php

$email = $_POST['email'];

if (file_exists("C:/Users/Roman/Desktop/WEB-Development/Frontend_Lab/LAB_8/user/$email.txt"))
{
    echo file_get_contents("C:/Users/Roman/Desktop/WEB-Development/Frontend_Lab/LAB_8/user/$email.txt") ;
}
else
{
    echo "Пользователь не найден";
}

?>