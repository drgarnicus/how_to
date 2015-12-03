require("hiw-api")
apiKey = "533aa05d6b034a08a84de9ed8c8b598f";
    		baseURL = "http://services.healthindicators.gov/v5/REST.svc/";
    		api = new hiw.API(apiKey, baseURL);
 
            logInfo("API Key: " + api.apiKey)
 
            api.callMethod("/VerifyApiKey", null, function (r) {
                if (r.Data == true)
                    logInfo("Your API key is valid.");
                else
                    logError("Your API key is not valid.");
            });
