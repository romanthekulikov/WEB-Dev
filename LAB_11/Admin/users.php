<?php 

$arrDir = scandir("data");
$name = array();
$email = array();
$profession = array();
$agree = array();
$response = array();


for ($i = 2; $i < count($arrDir); $i++)
{
  $arrFile = $arrDir[$i];
  $user = file_get_contents("data/$arrFile");
  $param = json_decode($user, true);
  array_push($name, $param['userName']);
  array_push($email, $param['userEmail']);
  array_push($profession, $param['userProfession']);
  array_push($agree, $param['isUserAgree']);
}

for ($i = 0; $i < count($name); $i++)
{
  $tempName = $name[$i];
  $tempEmail = $email[$i];
  $tempProfession = $profession[$i];
  $tempAgree = $agree[$i];
  $temp = array("userName" => $tempName, "userEmail" => $tempEmail, "userProfession" => $tempProfession, "isUserAgree" => $tempAgree);
  array_push($response, $temp);
}


header('Content-type: application/json');
echo json_encode($response);


?>