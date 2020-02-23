var surdstext = "<h2>Surds and indices</h2><ul><li>use index notation and index laws for multiplication and division of positive and negative integer powers including zero</li><li>understand the meaning of surds</li><li>manipulate surds, including rationalising a denominator</li><li>use index laws to simplify and evaluate numerical expressions involving integer, fractional and negative powers</li></ul>";
var recurringtext = "<h2>Recurring decimals</h2><ul><li>convert a decimal to a fraction or a percentage</li><li>recognise that a terminating decimal is a fraction</li></ul>";
var bracketstext = "<h2>Expanding brackets</h2><ul><li>multiply a single term over a bracket</li><li>expand the product of two or more linear expressions</li></ul>";
var quadraticstext = "<h2>Quadratics</h2><ul><li>understand the concept of a quadratic expression and be able to factorise such expressions</li><li>solve quadratic equations by factorisation</li><li>solve quadratic equations by using the formula</li><li>form and solve quadratic equations from data given in a context</li></ul>";
var trigonometrytext = "<h2>Trigonometry</h2><ul><li>know, understand and use Pythagoras' theorem in two and three dimensions</li><li>know, understand and use sine, cosine and tangent of acute angles to determine lengths and angles of a right angled triangle</li><li>understand and use sine, cosine and tangent of obtuse angles</li><li>understand and use angles of elevation and depression</li><li>apply trigonometrical methods to solve problems in three dimensions, including finding the angle between a line and a plane</li></ul>";
var sinecosinetext = "<h2>Sine, cosine rules</h2><ul><li>understand and use the sine and cosine rules for any triangle</li></ul>";
var areatext = "<h2>Area of triangles</h2><ul><li>understand and use the formula for area of a triangle</li></ul>";
var triggraphstext = "<h2>Trigonometric graphs</h2><ul><li>(know the shapes of the graphs of the sine, cosine and tangent functions)</li></ul>";
var proportiontext = "<h2>Proportion</h2><ul><li>use the process of proportionality to evaluate unknown quantities</li><li>calculate an unknown quantity from quantities that vary in direct proportion</li><li>solve word problems about ratio and proportion</li></ul>";
var rearrangingtext = "<h2>Rearranging formulae</h2><ul><li>understand the process of manipulating formulae or equations to change the subject, to include cases where the subject may appear twice or a power of the subject occurs</li></ul>";
var algfractionstext = "<h2>Algebraic fractions</h2><ul><li>manipulate algebraic fractions where the numerator and/or the denominator can be numeric, linear or quadratic</li></ul>";
var circlestext = "<h2>Circle theorems</h2><ul><li>understand chord and tangent properties of circles</li>recognise the term 'cyclic quadrilateral' (and its properties)<li>understand and use angle properties of the circle: angle subtended by an arc at the centre is twice the angle at the circumference; angle subtended at the circumference by a diameter is a right angle; angles in the same segment are equal; opposite angles in a cyclic quadrilateral sum to 180 degrees; the alternate segment theorem</li><li></li></ul>";
var chordstext = "<h2>Intersecting chords</h2><ul><li>understand and use the internal and external intersecting chord properties</li><li>provide reasons, using standard geometrical statements, to support numerical values for angles obtained in any geometrical context involving lines, polygons and circles</li></ul>";
var constructionstext = "<h2>Constructions</h2><ul><li>measure and draw lines to the nearest millimetre</li><li>construct triangles and other two dimensional shapes using a combination of a ruler, protractor and compass</li><li>solve problems using scale drawings</li><li>use straight edge and compasses to construct the perpendicular bisector of a line segment and the bisector of an angle</li></ul>";
var setstext = "<h2>Sets</h2><ul><li>understand the definition of a set</li><li>use the set notation ∪, ∩, ∈, ∉</li><li>understand the concept of the universal set and the empty set and the symbols for these sets</li><li>understand and use the complement of a set</li><li>use Venn diagrams to represent sets</li><li>understand sets defined in algebraic terms, and understand and use subsets</li><li>use Venn diagrams to represent sets and the number of elements in sets</li><li>use the notation n(A) for the number of elements in the set A</li><li>use sets in practical situations</li></ul>";
var functionstext = "<h2>Functions</h2><ul><li>understand the concept that a function is a mapping between elements of two sets</li><li>use function notations</li><li>understand the terms 'domain' and 'range' and which values may need to be excluded from a domain</li><li>understand and find the composite function and the inverse function</li></ul>";
var geometrytext = "<h2>Coordinate geometry</h2><ul><li>determine the coordinates of the midpoint of a line segment, given the coordinates of the two end points</li><li>calculate the gradient of a straight line given the coordinates of two points</li><li>(distance between two points)</li></ul>";
var graphstext = "<h2>(Non) linear graphs</h2><ul><li>interpret information presented in a range of linear and non-linear graphs</li><li>recognise that equations of the form y = mx + c are straight line graphs with gradient m and intercept on the y-axis (0,c)</li><li>recognise, generate points and plot graphs of linear and quadratic functions</li><li>recognise, plot and draw cubic graphs where the letters x and y can be replaced with any two other letters</li></ul>";
var graphicaltext = "<h2>Graphical solutions</h2><ul><li>find the intersection points of two graphs, one linear and one non-linear, and recognise that the solutions correspond to the solutions of y<sub>2</sub> - y<sub>1</sub> = 0</li></ul>";
var vectorstext = "<h2>Vectors</h2><ul><li>understand that a vector has both magnitude and direction</li><li>understand and use vector notation including column vectors</li><li>multiply vectors by scalar quantities</li><li>add and subtract vectors</li><li>calculate the modulus of a vector</li><li>find the resultant of two or more vectors</li><li>apply vector methods for simple geometrical proofs</li></ul>";
var transformationstext = "<h2>Transformations of trig graphs</h2><ul><li>apply to the graph of y = f(x) the transformations y = f(x)+a, f(ax), f(x+a), af(x) for sine and cosine functions</li></ul>";

$("#surds").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(surdstext);
});

$("#recurring").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(recurringtext);
});

$("#brackets").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(bracketstext);
});

$("#quadratics").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(quadraticstext);
});

$("#trigonometry").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(trigonometrytext);
});

$("#sinecosine").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(sinecosinetext);
});

$("#area").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(areatext);
});

$("#triggraphs").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(triggraphstext);
});

$("#proportion").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(proportiontext);
});

$("#rearranging").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(rearrangingtext);
});

$("#algfractions").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(algfractionstext);
});

$("#circles").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(circlestext);
});

$("#chords").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(chordstext);
});

$("#constructions").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(constructionstext);
});

$("#sets").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(setstext);
});

$("#functions").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(functionstext);
});

$("#geometry").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(geometrytext);
});

$("#graphs").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(graphstext);
});

$("#graphical").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(graphicaltext);
});

$("#vectors").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(vectorstext);
});

$("#transformations").click(function() {
	$('.active').removeClass("active");
	$(this).addClass("active");
	$("#content").html(transformationstext);
});