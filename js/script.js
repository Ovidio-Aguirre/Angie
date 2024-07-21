document.addEventListener("DOMContentLoaded", () => {
    const boardElement = document.getElementById('board');
    const messages = [
        "Tus ojos brillan más que cualquier estrella.",
        "Eres increíblemente talentosa en el ajedrez y en todo lo que haces.",
        "Tu risa ilumina cualquier habitación.",
        "Cada jugada tuya es una obra maestra.",
        "Me encanta tu forma de ser, eres única.",
        "Tu cabello y tu sonrisa son simplemente perfectos.",
        "Cada momento contigo es especial.",
        "Tu inteligencia y belleza son una combinación perfecta.",
        "Eres mi inspiración constante.",
        "Gracias por compartir tu pasión y tu alegría conmigo."
    ];

    const getRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    };

    const initialBoardSetup = [
        'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
        'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
        'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'
    ];

    const pieceSymbols = {
        'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
        'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
    };

    function createBoard() {
        initialBoardSetup.forEach((piece, index) => {
            const square = document.createElement('div');
            square.classList.add('square');
            // Ensure the correct color pattern for the board
            if (Math.floor(index / 8) % 2 === 0) {
                square.style.backgroundColor = index % 2 === 0 ? '#f0d9b5' : '#b58863';
            } else {
                square.style.backgroundColor = index % 2 === 0 ? '#b58863' : '#f0d9b5';
            }
            if (piece) {
                const pieceElement = document.createElement('div');
                pieceElement.classList.add('piece');
                pieceElement.textContent = pieceSymbols[piece];
                pieceElement.draggable = true;
                pieceElement.addEventListener('dragstart', dragStart);
                pieceElement.addEventListener('dragend', dragEnd);
                pieceElement.addEventListener('touchstart', touchStart);
                pieceElement.addEventListener('touchmove', touchMove);
                pieceElement.addEventListener('touchend', touchEnd);
                square.appendChild(pieceElement);
            }
            square.addEventListener('dragover', dragOver);
            square.addEventListener('drop', drop);
            square.addEventListener('touchmove', touchMove);
            square.addEventListener('touchend', touchEnd);
            boardElement.appendChild(square);
        });
    }

    let draggedPiece = null;
    let touchOffsetX = 0;
    let touchOffsetY = 0;

    function dragStart(event) {
        draggedPiece = event.target;
        setTimeout(() => {
            event.target.style.display = 'none';
        }, 0);
    }

    function dragEnd(event) {
        setTimeout(() => {
            draggedPiece.style.display = 'block';
            draggedPiece = null;
        }, 0);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        if (event.target.classList.contains('square')) {
            event.target.appendChild(draggedPiece);
            document.getElementById('message').textContent = getRandomMessage();
        }
    }

    function touchStart(event) {
        draggedPiece = event.target;
        const rect = draggedPiece.getBoundingClientRect();
        touchOffsetX = event.touches[0].clientX - rect.left;
        touchOffsetY = event.touches[0].clientY - rect.top;
        draggedPiece.style.position = 'absolute';
    }

    function touchMove(event) {
        event.preventDefault();
        if (draggedPiece) {
            const touch = event.touches[0];
            draggedPiece.style.left = `${touch.clientX - touchOffsetX}px`;
            draggedPiece.style.top = `${touch.clientY - touchOffsetY}px`;
        }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }

    function touchEnd(event) {
        const touch = event.changedTouches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        if (element && element.classList.contains('square')) {
            element.appendChild(draggedPiece);
            document.getElementById('message').textContent = getRandomMessage();
        }
        draggedPiece.style.position = '';
        draggedPiece = null;
    }

    createBoard();

    document.getElementById('surprise-button').addEventListener('click', () => {
        const content = document.getElementById('surprise-content');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('link-button').addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/watch?v=zLX_GcXt2pI'; // Cambia este enlace por el que desees
    });
});