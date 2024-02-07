<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $host = 'http://' . $_SERVER['HTTP_HOST'];
    $targetUrl = "/piano/playground/piano_play.html";

    $jsonData = file_get_contents('php://input');
    $requestData = json_decode($jsonData, true);
    
    if ($requestData !== null) {
        $paramString =  http_build_query(["chord" => $requestData["chord"], "user" => $requestData["user"], "logging" => true]);
        $url = "$targetUrl?$paramString";
        exec("start \"\" \"$host$url\"");
        exit;
    } else {
        exec("start \"\" \"$host$targetUrl\"");
        exit;
    }
    

    // $queryString = implode("&", array_map(function ($chord) {
    //     return "chord=$chord";
    // } ,$params["chord"]));
    
    
    // header("Location: $url");
    
    
}
