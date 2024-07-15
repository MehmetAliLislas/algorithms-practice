// Introduction
// The Jedi council has granted you the astromech droid C0-DY as an assistant to navigate your
// starship. Before planning your first space flight, you want to get familiar with the droid navigation
// system in an XY-Cartesian plane. Given a set of points (x0, y0), (x1, y1), ... (xn, yn) write a program
// that prints instructions for the droid to move to each point. Follow the order the points were given
// starting at the axis origin (0, 0) and moving in the cardinal directions. If one axis does not require
// a move, then do not print the move.
// Input
// The first line defines the number of points that the droid must follow.
// The content of each line, after the first one, is a pair of integer values defining a (x, y) point.
// Output
// A pair of lines defining how to reach the corresponding (x, y) point. First line for the movement in
// Y-axis (North-South) and second line for the movement in X-axis (West-East).
// Example
// Input 4
// 3 5
// 2 5
// 2 7
// 9 5 Output
// Walk 5 steps north
// Walk 3 steps east
// Walk 1 steps west
// Walk 2 steps north
// Walk 2 steps south
// Walk 7 steps east
