<?php

require_once("db.php");

header('Content-Type: application/json');

function createSongTable(){
    // empty
}

function getSongNotes($song) {
    $projectRootPath = null;
    if (PHP_SAPI !== 'cli') 
        $projectRootPath = $_SERVER["DOCUMENT_ROOT"];
    else 
        $projectRootPath = getcwd();

    $db = new Db("$projectRootPath/config/db_config.php");

    $options = [
        "song_name='$song'"
    ];

    $resultNotes = $db->readValues("songs", ["note_name","at_time_played","volume","duration"], $options);

    // sol.1
    //print_r($resultNotes);
    // $notes = array_map(function ($queryResult) {

    //     return ["note_name" => $queryResult["note_name"],"at_time_played" => $queryResult["at_time_played"],
    //             "volume" => $queryResult["volume"],"duration" => $queryResult["duration"]];

    //     // return $queryResult["note_name"];

    // }, $resultNotes);
    //return $notes; 

    //sol.2
    return $resultNotes;
}

// $p = getSongNotes('demo');

// echo json_encode($p);



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = file_get_contents('php://input');

    $requestData = json_decode($jsonData, true);
    if ($requestData !== null) {

        $result = getSongNotes($requestData["song"]);
        
        echo json_encode($result);
    } else {
        
        echo json_encode([]);
    }
} else {
    // empty
}