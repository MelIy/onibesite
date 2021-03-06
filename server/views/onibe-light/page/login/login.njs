<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/">
    <link rel="stylesheet" href="/dist/onibe-light/styles/index.css"  />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
    <link href="//fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800" rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Raleway:200,300,400,500,600,700,800" rel="stylesheet">
    <title></title>
</head>
<body>
<div id="root"></div>
<!-- Scripts -->

<div class="container">
    <h2>Login</h2>
    <div class="well">
        <form action="/login" method="post">
            <div class="form-group">
                <label htmlFor={props.label}>Username</label>
                <input name="username" class="form-control" type="text" />
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" class="form-control" type="password" />
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</div>
</body>
</html>