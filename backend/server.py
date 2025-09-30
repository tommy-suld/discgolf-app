from flask import Flask, jsonify, send_from_directory
import random
import json
import os

app = Flask(__name__, static_folder="../public")

# Läs in din JSON
with open("../challenges.json", "r", encoding="utf-8") as f:
    challenges = json.load(f)

@app.route("/draw")
def draw_card():
    # Kombinera alla kategorier till en lista
    all_cards = challenges["utkast"] + challenges["inspel"] + challenges["putt"] + challenges["special"]
    card = random.choice(all_cards)
    return jsonify(card)

# Serve HTML och bilder
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
