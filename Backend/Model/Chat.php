<?php

class Chat
{
	private $_db;

	function __construct($db)
	{
		$this->_db = $db;
	}

	public function userlist()
	{
		try	
		{
			$query = $this->_db->prepare("SELECT * FROM login");
			$query->execute();
			$result = $query->fetchAll(PDO::FETCH_ASSOC);
			if(count($result) > 0)
				return json_encode($result);
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
			return json_encode($response);
		}
	}
		public function sendMsg($data)
	{
			try
			{
				$query = $this->_db->prepare("INSERT INTO chat (sendermail,recievermail,message) VALUES (:sendermail,:recievermail,:message)");
				$query->execute(array(
								":sendermail" => $_SESSION['name'],
								":recievermail"=>$data['reciever'],
								":message"=>$data['msg'],
				));
    
        
        
        	$response=  '$_SESSION[name]';
				
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
