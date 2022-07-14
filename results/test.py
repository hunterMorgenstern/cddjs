def formatCompletion(responseText):
    lines = responseText.split("\n")
    cleanedLines = lines.filter((line) => line.length > 0))
    columns = {
        topic: None, # 10
        "summary of points": None, # 3
        "what facts, if any?": None, #5
        "what anecdotes, if any?": None, #6
        "anecdote quote": None, #7
    }
    cleanedLines.forEach((line) => {
        string = line.replace(/^\d+\. /, "")
        if line.startswith("3. "):
        # TODO remove redunandant string bits
        columns["summary of points"] = string
        if line.startswith("5. "):
        columns["what facts, if any?"] = string
        if line.startswith("6. "):
        columns["what anecdotes, if any?"] = string
        if line.startswith("7. "):
        columns["anecdote quote"] = string
        if line.startswith("10. "):
        columns["topic"] = string
    })
    return columns