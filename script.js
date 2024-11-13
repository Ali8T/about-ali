body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f0f8ff;
}

header {
    background-color: #4a90e2;
    color: #fff;
    padding: 20px;
    animation: fadeIn 2s ease-out;
}

header h1 {
    font-size: 2em;
    margin: 0;
}

h1 i, h2 i {
    color: #ffffff;
    margin-right: 8px;
}

#links i {
    color: #4a90e2;
    margin-right: 5px;
}

section {
    margin: 20px 0;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

section:hover {
    transform: scale(1.05);
}

img {
    width: 150px;
    border-radius: 50%;
    margin-top: 10px;
    transition: transform 0.5s ease;
}

img:hover {
    transform: rotate(360deg);
}

#links ul {
    list-style: none;
    padding: 0;
}

#links li {
    display: inline;
    margin: 0 10px;
}

#links a {
    color: #4a90e2;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

#links a:hover {
    color: #ff6347;
}

footer {
    background-color: #222;
    color: #fff;
    padding: 10px;
    animation: fadeInUp 2s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
