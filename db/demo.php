<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $jsonData = file_get_contents('php://input');

    // Decode the JSON data
    $requestData = json_decode($jsonData, true);

    // Check if the decoding was successful
    if ($requestData !== null) {
        // Process the data (in this example, double numeric values)
        $resultData = array_map(function($value) {
            return is_numeric($value) ? $value * 2 : "$value is the best";
        }, $requestData);

        // Return the result as JSON
        echo json_encode(['success' => true, 'data' => $resultData]);
    } else {
        // Return an error response if JSON decoding fails
        echo json_encode(['success' => false, 'error' => 'Invalid JSON data']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}