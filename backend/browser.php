<?php

	include('config.php');
	include('libraries/database.php');
	include('libraries/template.php');
	include('libraries/model.php');

	
	$tpl = new Template('templates/browser.html');
	

	$tpl->set('results', getAllBrowsers($version));
	
	if (isset($_REQUEST['show'])) {
		$show = explode('/', $_REQUEST['show']);
	
		if (isset($show[0])) {
			if ($show[0] == 'mybrowser') {
				$tpl->set('one', '');
			}
		
			else if (preg_match("/^[a-f0-9]{16,16}$/", $show[0])) {
				if ($row = getResultsForUniqueId($show[0])) {
					$tpl->set('one', json_encode($row));
				}
			}
			
			else {
				if ($row = getResultsForBrowser($show[0], $version)) {
					$tpl->set('one', json_encode($row));
				}
			}
		}
		
		if (isset($show[1])) {
			if ($show[1] == 'mybrowser') {
				$tpl->set('two', '');
			}
		
			else if (preg_match("/^[a-f0-9]{16,16}$/", $show[1])) {
				if ($row = getResultsForUniqueId($show[1])) {
					$tpl->set('two', json_encode($row));
				}
			}
			
			else {
				if ($row = getResultsForBrowser($show[1], $version)) {
					$tpl->set('two', json_encode($row));
				}
			}
		}
			
		if (isset($show[2])) {
			if ($show[2] == 'mybrowser') {
				$tpl->set('three', '');
			}
		
			else if (preg_match("/^[a-f0-9]{16,16}$/", $show[2])) {
				if ($row = getResultsForUniqueId($show[2])) {
					$tpl->set('three', json_encode($row));
				}
			}
			
			else {
				if ($row = getResultsForBrowser($show[2], $version)) {
					$tpl->set('three', json_encode($row));
				}
			}
		}

		if (isset($show[3])) {
			if ($show[3] == 'mybrowser') {
				$tpl->set('four', '');
			}
		
			else if (preg_match("/^[a-f0-9]{16,16}$/", $show[3])) {
				if ($row = getResultsForUniqueId($show[3])) {
					$tpl->set('four', json_encode($row));
				}
			}
			
			else {
				if ($row = getResultsForBrowser($show[3], $version)) {
					$tpl->set('four', json_encode($row));
				}
			}
		}

		if (isset($show[4])) {
			if ($show[4] == 'mybrowser') {
				$tpl->set('five', '');
			}
		
			else if (preg_match("/^[a-f0-9]{16,16}$/", $show[4])) {
				if ($row = getResultsForUniqueId($show[4])) {
					$tpl->set('five', json_encode($row));
				}
			}
			
			else {
				if ($row = getResultsForBrowser($show[4], $version)) {
					$tpl->set('five', json_encode($row));
				}
			}
		}
	}
	
	
	echo $tpl->fetch();
	
		
	
	
	
	