<?php

require_once "../Model/connect.php";
if(isset($_POST['function_name']))
{
	$calling_function = $_POST['function_name'];

	if($calling_function == 'login')
	{
    $data['email'] = $_POST['email'];
    $data['name'] = $_POST['name'];
    $data['image'] = $_POST['image'];
		$response = $user->login($data);
		print_r($response);
	}
		if($calling_function == 'logins')
	{

    $data['name'] = $_POST['username'];
    $data['pass'] = $_POST['password'];
		$response = $user->logins($data);
		print_r($response);
	}
	if($calling_function == 'logout')
	{
    
		$response = $user->logout();
		print_r($response);
	}

}

else
{
	$response['msg'] = "Error! Please Login Again";
	$response['code'] = -1;
	print_r($response);
}
?>
