ALGORITHM linear<x,y>
BEGIN
x : table_set1:=[0]
y : table_set2:=[0]
FOR i IN x FROM 0 TO x.length-1 DO
    FOR j IN y FROM 0 TO y.length-1 DO
        IF x[i] NOT y[i] DO
            VAR sum := x.pop() AND y.pop()
            VAR result := sum.reduce()
        END_IF
        write(sum)
    END_FOR
END_FOR
END_ALGORITHM