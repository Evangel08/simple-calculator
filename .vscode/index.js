
<!DOCTYPE html>
<html>

	<head>
	<title> Simple Calculation</title>
	<script type = "text/javascript">
	
	function updateTextbox(value){
		document.getElementById("screen").value += value;
	}
	
	function result(){
		document.getElementById("screen").value = eval(document.getElementById("screen").value);
	}
	
	function reset(){
		document.getElementById("screen").value = '';
	}
	
	</script>
	</head>
	<body>
				<form NAME="myForm">
			<table BORDER=2>
				<tr>
					<td align="center">
						<input TYPE="text" ID="screen" NAME="screen" style="width:99%"><br/>
				</td>
				</tr>
				<tr>
					<td>
						<input TYPE="button" NAME="7"   VALUE="  7  " onclick="updateTextbox(7)">
						<input TYPE="button" NAME="8"   VALUE="  8  " onclick="updateTextbox(8)">
						<input TYPE="button" NAME="9" VALUE="  9  " onclick="updateTextbox(9)">
						<input TYPE="button" NAME="+"  VALUE="  +  " onclick="updateTextbox('+')">
						<br>
						<input TYPE="button" NAME="4"  VALUE="  4  " onclick="updateTextbox(4)">
						<input TYPE="button" NAME="5"  VALUE="  5  " onclick="updateTextbox(5)">
						<input TYPE="button" NAME="6"   VALUE="  6  " onclick="updateTextbox(6)">
						<input TYPE="button" NAME="-" VALUE="  -  " onclick="updateTextbox('-')">
						<br>
						<input TYPE="button" NAME="1" VALUE="  1  " onclick="updateTextbox(1)">
						<input TYPE="button" NAME="2" VALUE="  2  " onclick="updateTextbox(2)">
						<input TYPE="button" NAME="3"  VALUE="  3  " onclick="updateTextbox(3)">
						<input TYPE="button" NAME="*" VALUE="  x  " onclick="updateTextbox('*')">
						<br>
						<input TYPE="button" NAME="c" VALUE="  c  " onclick="reset();">
						<input TYPE="button" NAME="0"  VALUE="  0  " onclick="updateTextbox(0)">
						<input TYPE="button" NAME="="  VALUE="  =  " onclick="result();">
						<input TYPE="button" NAME="/"   VALUE="  /  " onclick="updateTextbox('/')">
					</td>
				</tr>
			</table>
		</form>
	</body>
</html>
