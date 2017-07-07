<?php

require_once "../Model/connect.php";
if(isset($_POST['function_name']))
{
	$calling_function = $_POST['function_name'];

	if($calling_function == 'userlist')
	{

		$response = $chat->userlist();
		print_r($response);
	}
	if($calling_function == 'sendMsg')
	{ $data['reciever']=$_POST['reciever'];
    $data['msg']=$_POST['msg'];
		$response = $chat->sendMsg($data);
		print_r($response);
	}
	if($calling_function == 'getMsg')
	{ $data['partner']=$_POST['partner'];
    
		$response = $chat->getMsg($data);
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
