import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Board from "../Components/Board";
import GameInfo from "../Components/GameInfo";
import global from "../css/global";

export default () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [isAscending, setIsAscending] = useState(true);
  const [xPoints, setXPoints] = useState(0);
  const [oPoints, setOPoints] = useState(0);

  const handleClick = (i) => {
    const hst = history.slice(0, stepNumber + 1);
    const current = hst[hst.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    const winner = calculateWinner(squares).winner;
    updateScore(winner);
    setHistory(
      hst.concat([
        {
          squares: squares,
          lastMove: i,
        },
      ])
    );
    setStepNumber(hst.length);
    setXIsNext(!xIsNext);
  };

  const handleSortToggle = () => {
    setIsAscending(!isAscending);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(!(step % 2));
  };

  const updateScore = (winner) => {
    winner &&
      (winner === "X" ? setXPoints(xPoints + 1) : setOPoints(oPoints + 1));
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let isVictory = false;
    let allLines = [];
    let winner;

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        winner = squares[a];
        Array.prototype.push.apply(allLines, lines[i]);
        isVictory = true;
      }
    }
    if (isVictory) {
      return {
        winner: winner,
        line: allLines,
        isDraw: false,
      };
    }

    let isDraw = true;
    if (squares.filter((x) => x === null).length !== 0) {
      isDraw = false;
    }

    return {
      winner: null,
      line: null,
      isDraw: isDraw,
    };
  };

  const current = history[stepNumber];
  const info = calculateWinner(current.squares);
  const winner = info.winner;
  const line = info.line;
  const isDraw = info.isDraw;

  const moves = history.map((step, move) => {
    const lastMove = step.lastMove;
    const col = (lastMove % 3) + 1,
      row = Math.floor(lastMove / 3) + 1;
    const desc = move
      ? `Go to move #${move} (${col}, ${row})`
      : "Go to game start";

    return (
      <TouchableOpacity
        key={move}
        style={[global.button, styles.moveButton]}
        onPress={() => jumpTo(move)}
      >
        <Text style={global.buttonText}>{desc}</Text>
      </TouchableOpacity>
    );
  });

  if (!isAscending) {
    moves.reverse();
  }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Draw";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.gameBoardContainer}>
        <View style={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={(i) => handleClick(i)}
            winLine={line}
          />
        </View>
      </View>
      <GameInfo
        status={status}
        xPoints={xPoints}
        handleSortToggle={handleSortToggle}
        oPoints={oPoints}
        isAscending={isAscending}
        moves={moves}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  gameBoardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  moveButton: {
    borderColor: "#2e6da4",
    margin: 3,
  },
});
