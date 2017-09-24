<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<form id="form">
    <input type="text" name="name" value="Erik's bar">
    <input type="text" name="description" value="Melhor Wiski da região">
    <input type="file" name="photo" id="file">
</form>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">

  $('#file').on('change', function () {

    let formData = new FormData();
    formData.append('name', 'Erik\'s bar');
    formData.append('description', 'Melhor Wiski da região');
    formData.append('photo', $('#file')[0].files[0]);

    let headers = {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhlNmE2OTYzYmYyOTgyMTg1M2U4MGZjZWMyNjVmN2VkYjE4MTQ5Zjk3MjA5MGYzMDZlZWYyNzJhYWU4NzZhM2QwMWIyMmExZjUzODc4ZmIyIn0.eyJhdWQiOiIzIiwianRpIjoiOGU2YTY5NjNiZjI5ODIxODUzZTgwZmNlYzI2NWY3ZWRiMTgxNDlmOTcyMDkwZjMwNmVlZjI3MmFhZTg3NmEzZDAxYjIyYTFmNTM4NzhmYjIiLCJpYXQiOjE1MDYyODYxNDUsIm5iZiI6MTUwNjI4NjE0NSwiZXhwIjoxNTM3ODIyMTQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qWWF1fIeVYrNki5RrNT7KfsTaUwJLVRRHbc8kbqUPdI1Ll_MZwWeiEBxLdgUGxWolp1YJfdnTK6g_51H4AAQbsWAIcXrNcySw_YkOJ8Xc51eMEJGm4H4oZ9vUrmuy3HF9lG3UTntA2U1PdqT1qrsgLm4beDcAyP0qX_GPLqtkh2KkKrMyLKXELttw82W71_VUl6KUX5ShiHQP-PGyHgdXTy-fdPfQAUlLIUHgvH0BHEzFYMc2lIPajnZRhL4y0V9_ZrHEA8O_mNviCvlDmD6IezMxtr1jswQuRYvBdX2ircXc8OMi1Zf8tHBPCj8Du2-IjpKd7fgsupiQ5Y_1hnFczi6vVGTmrq-1qJzWuIXqJsI4D77aJvfb2TGQ8ttB9SJel2gCgA9LiXRd4Fb7ExZGEhKhYvd7NDBNuhYxj_-SmxkBq_WHGreArQSFJVmI6GN2pMDyR8zTNG56YmKtctdil6MltbPCjr9Nl30h-aJqI4jN60Mf_EnGGaym-xnut-5a-c01GjtgTW72iweTuVXkgm2UyFwxQJsOSSPPMMSgWrwBNWeimI6l5xe7xvmRnL5oTq4LrvVd4N6GQgjx7NbQLMXvWYade2i1yiate-L40LqGBf39GTY4GqFIpnpoQF7FA6hQY4fPfbVH0knyL0-g5sCZyNAsVN5ZH0IIzQ0LKQ',
      //'content-type': 'multipart/form-data'
      'content-type': 'application/x-www-form-urlencoded'
    }

    axios.post('http://localhost:8000/api/v1/restaurants', formData, {headers: headers})
  })
</script>
</body>
</html>