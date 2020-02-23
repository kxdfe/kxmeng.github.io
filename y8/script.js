var shapestext = "<h2>Shapes and solids</h2><ul><li>Know the definition of a prism and specific names</li><li>Use nets as 2D representations of 3D solids</li><li>Calculate the surface area and volume of prisms</li><li>Use appropriate language and terminology for the parts of a circle</li><li>Understand the significance of \(\pi\) and be able to use it on a calculator</li><li>Calculate and solve problems involving the circumference and area of a circle, as well as related composite shapes (semi circles, qudrants and annuli, not sectors or segments)</li><li>Apply knowledge of prisms and circles to cylinders</li><li>Use Pythagoras' Theorem to find a missing length using a calculator and rounding to a given degree of accuracy</li><li>Knowledge of Pythagorean triples</li><li>(Extension: Geometrical proof of Pythagoras' Theorem)</li><li>(Extension: Application of the theorem to real life problems)</li></ul>";
var transformationstext = "<h2>Transformations</h2><ul><li>Describe and carry out translations (including with vectors), reflections (equations for mirror lines), and rotations. Tracing paper may be used</li><li>Describe and carry out enlargements using positive integer, negative and fractional scale factors</li><li>Transform 2D shapes using a combination of transformations</li></ul>";
var fractionstext = "<h2>Fractions, decimals and percentages</h2><ul><li>Revise fractions, decimals and percentages</li><li>Use multipliers to calculate percentage changes</li><li>Work out an original quantity before a percentage change</li></ul>";
var constructionstext = "<h2>Constructions and loci</h2><ul><li>Use a pair of compasses to accurately draw circles</li><li>Construct triangles accurately using rulers and compasses</li><li>Draw diagrams to scale</li><li>Construction of perpendicular and angle bisectors</li><li>Draw a locus and use loci to solve problems</li></ul>";
var probabilitytext = "<h2>Probability</h2><ul><li>Use appropriate probability language (likely, certain, impossible, even chance, unlikely) and the 0 - 1 probability scale</li><li>Identify mutually exclusive events</li><li>Use probability notation and appreciate that p(A') = 1 - p(A)</li><li>Calculate relative frequency and use it to make estimates of the probability of an event and to calculate expected frequencies</li><li>Record, describe and analyse the frequency of outcomes of simple probability experiments involving randomness, fairness, equally and unequally likely outcomes. Work out expected results when an experiment is repeated</li><li>Generate theoretical sample spaces (e.g. lists of outcomes or tables) for single and combined events and use these to calculate theoretical probabilities</li><li>Use tree diagrams to find the probability of two or more events</li><li>Extension: Probability with Venn Diagrams</li></ul>";
var graphstext = "<h2>Graphs</h2><ul><li>Plot straight line graphs from tables</li><li>Find the y-intercept of a straight line</li><li>Find the gradient of a straight line</li><li>Plot graphs using the y-intercept and gradient</li><li>Use y=mx+c and find the equation of a line from its graph</li><li>Understand the relationship between parallel and perpendicular lines.</li></ul>";
var speedtext = "<h2>Speed, distance and time</h2><ul><li>Revise direct proportion</li><li>Draw and interpret distance time graphs</li><li>Use the graphs to solve problems</li><li>Calculate average speed from distance and time (relate to gradient)</li></ul>";
var scalestext = "<h2>Scale drawings and measures</h2><ul><li>Interpret scale drawings and use a scale in converting between real and drawn distances e.g. 1:100,000 is equivalent to 1cm to 1km.</li><li>Relate scales to ratio</li><li>Revise angle rules in parallel lines</li><li>Bearings measured in degrees, clockwise from the North. Calculate back bearings</li><li>The link between bearings and eight point compass directions</li><li>Combining up to three stages of a journey, given in terms of distances and bearings</li><li>Extension: Similarity and congruence</li></ul>";
var powerstext = "<h2>Powers and roots</h2><ul><li>Revise fractions</li><li>Find the reciprocal of a number and work with reciprocals</li><li>Revise indices rules</li><li>Work with negative indices and work out powers of fractions</li><li>Write and order numbers in standard form (positive and negative powers)</li><li>Calculate with numbers in standard from</li></ul>";
var inequalitiestext = "<h2>Inequalities, equations and formulae</h2><ul><li>Solve linear inequalities and represent the solution on a number line</li><li>Use indices laws with algebraic terms, including zero and negative powers</li><li>Revise solving linear equations</li><li>Solve linear equations involving algebraic fractions</li><li>Change the subject of a basic formula</li><li>Change algebraic fractions in equivalent fractions, finding an algebraic common denominator</li><li>Solve more complex problems with fractions in formulae</li></ul>";
var graphicaltext = "<h2>Graphical solutions</h2><ul><li>Solve simple simultaneous equations by substitution and elimination</li><li>Solve more complex simultaneous equations</li><li>Revise y=mx+c and rearrange equations to find the gradient and y-intercept</li><li>Find an equation of a line between two points</li><li>Solve simultaneous equations by drawing graphs</li></ul>";
var quadratictext = "<h2>Quadratic graphs</h2><ul><li>Understand the parabolic shape of quadratic functions and identify their graphs</li><li>Draw quadratic graphs from tables of values</li></ul>";
var prooftext = "<h2>Proof</h2><ul><li>Explain, show and justify a mathematical solution</li><li>Identify the difference between giving an example and proving a theory</li><li>Understand how to use mathematical proof</li><li>Present a logical argument using algebra</li></ul>";

$("#shapes").click(function() {
	$("#content").html(shapestext);
});

$("#transformations").click(function() {
	$("#content").html(transformationstext);
});

$("#fractions").click(function() {
	$("#content").html(fractionstext);
});

$("#constructions").click(function() {
	$("#content").html(constructionstext);
});

$("#probability").click(function() {
	$("#content").html(probabilitytext);
});

$("#graphs").click(function() {
	$("#content").html(graphstext);
});

$("#speed").click(function() {
	$("#content").html(speedtext);
});

$("#scales").click(function() {
	$("#content").html(scalestext);
});

$("#powers").click(function() {
	$("#content").html(powerstext);
});

$("#inequalities").click(function() {
	$("#content").html(inequalitiestext);
});

$("#graphical").click(function() {
	$("#content").html(graphicaltext);
});

$("#quadratic").click(function() {
	$("#content").html(quadratictext);
});

$("#proof").click(function() {
	$("#content").html(prooftext);
});