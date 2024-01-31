<?php

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $host = $_SERVER['HTTP_HOST'];
    $targetUrl = "/piano/playground/piano_play.html";
    $params = [
        "chord" => ["A", "B"]
    ];

    $queryString = implode("&", array_map(function ($chord) {
        return "chord=$chord";
    } ,$params["chord"]));
    $url = $targetUrl ."?". $queryString;
    // header("Location: $url");
    
    exec("start chrome \"$host$url\"");
    exit;
}
