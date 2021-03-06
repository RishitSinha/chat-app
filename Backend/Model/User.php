<?php

class User
{
	private $_db;

	function __construct($db)
	{
		$this->_db = $db;
	}
	public function logins($data)
	{
		try	
		{
			$query = $this->_db->prepare("SELECT * FROM login  WHERE name=:name AND pass=:pass");
			$query->execute(array(
					":name" => $data['name'],
					":pass" => $data['pass']
				));
			$result = $query->fetchAll(PDO::FETCH_ASSOC);
			if(count($result) > 0){
				  $_SESSION['name']=$data['name'];
       		 $_SESSION['email']=$result['0']['email'];
				return json_encode($result);
			}
			else
			{
				$response['msg'] = "No Query Found";
				$response['code'] = 1;
				return json_encode($response);
			}

		}
		catch(PDOException $e)
		{
			$response['msg'] = "Unable to Fetch Queries!";
			$response['code'] = 0;
			return json_encode($e);
		}
	}
	public function signup($data)
	{
			try
			{	$query = $this->_db->prepare("SELECT * FROM login  WHERE name=:name OR email=:email");
			$query->execute(array(
					":name" => $data['name'],
					":email" => $data['email']
				));
			$result = $query->fetchAll(PDO::FETCH_ASSOC);
			if(count($result) > 0){
				 $response['msg'] = "user aldready exists";
				$response['code'] = 1;
				return json_encode($response);
				return json_encode($result);
			}
			else
			{
				$query = $this->_db->prepare("INSERT INTO login (email,name,pass) VALUES (:email,:name,:pass)");
				$query->execute(array(
								":email" => $data['email'],
								":name"=>$data['name'],
								":pass"=>$data['pass'],
				));
    
        
        $_SESSION['name']=$data['name'];
        $_SESSION['email']=$data['email'];
     
        	$response=  $_SESSION['name'];
				
        return json_encode($response);
			}
				
			}
			catch(PDOException $e)
			{
					$response['msg'] = "Unable to check User!";
					$response['code'] = 0;
					return $e;
			}
	}
	public function logout()
	{
			try
			{
				$query = $this->_db->prepare("INSERT INTO login (email,online) VALUES (:email,0) ON DUPLICATE KEY UPDATE online = 0");
				$query->execute(array(
								":email" => $_SESSION["email"]
								
				));
    
    $response=  $_SESSION['name'];    
     unset($_SESSION["name"]);  
     unset($_SESSION["email"]);  // where $_SESSION["nome"] is your own variable. if you do not have one use only this as follow **session_unset();**

        	
				
        return json_encode($response);
			}
			catch(PDOException $e)
			{
					$response['msg'] = "Unable to check User!";
					$response['code'] = 0;
					return $e;
			}
	}

}

?>
