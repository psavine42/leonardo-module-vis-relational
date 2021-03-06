
function treemap(config) {
  var width = config.width,
    height = config.height;

  var color = d3.scale.category20c();

  var treemap = d3.layout.treemap()
    .size([width, height])
    .padding(4)
    .value(function(d) { return d.size; });

  var div = d3.select(config.placeholder).append("div")
    .style("position", "relative")
    .style("width", width + "px")
    .style("height", height + "px");

  d3.json(config.data_source, function(error, root) {
    div.selectAll(".node")
      .data(treemap.nodes(root))
      .enter().append("div")
        .attr("class", "node")
        .style("left", function(d) { return d.x + "px"; })
        .style("top", function(d) { return d.y + "px"; })
        .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
        .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; })
        .style("background", function(d) { return d.children ? color(d.name) : null; })
        .text(function(d) { return d.children ? null : d.name; });
  });

}
