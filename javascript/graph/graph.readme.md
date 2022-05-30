# Graphs
<!-- Short summary or background information -->
A graph is a data structure where a node can have zero or more adjacent elements.

The connection between two nodes is called edge. Nodes can also be called vertices.

If the edges are bi-directional, then we have an undirected graph. If the edges have a direction, then we have a directed graph or di-graph for short. You can think of it as a one-way street (directed) or two-way street (undirected).
A graph can have cycles, which means you could get the same node more than once. The graph without cycles is called acyclic graph.
## Challenge
<!-- Description of the challenge -->
implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

add_node
Arguments: value
Returns: The added node
Add a node to the graph

add_edge
Arguments: 2 nodes to be connected by the edge, weight (optional)
Returns: nothing
Adds a new edge between two nodes in the graph
If specified, assign a weight to the edge
Both nodes should already be in the Graph

get_nodes
Arguments: none
Returns all of the nodes in the graph as a collection (set, list, or similar)
get neighbors
Arguments: node
Returns a collection of edges connected to the given node
Include the weight of the connection in the returned collection

size
Arguments: none
Returns the total number of nodes in the graph
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
add_node:i didn't ude any loops so the time and space BigO(1)
add_edge:i used if statement time and space BigO(1)
get_nodes:didn't ude any loops so the time and space BigO(1)
size:i used if statement time and space BigO(1)
