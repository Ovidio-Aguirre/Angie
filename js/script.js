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
        "Gracias por compartir tu pasión y tu alegría conmigo.",
        "Tu sonrisa ilumina mi día.",
"Eres una persona realmente especial.",
"Cada momento contigo es único.",
"Me encanta pasar tiempo a tu lado.",
"Tu inteligencia es impresionante.",
"Tus ojos tienen un brillo especial.",
"Eres una inspiración constante.",
"Tu amabilidad es contagiosa.",
"Disfruto mucho de nuestra compañía.",
"Tu risa es música para mis oídos.",
"Cada conversación contigo es enriquecedora.",
"Eres una mezcla perfecta de belleza y sabiduría.",
"Tu presencia hace todo mejor.",
"Admiro tu forma de ver la vida.",
"Gracias por estos momentos juntos.",
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
                square.appendChild(pieceElement);
            }
            square.addEventListener('dragover', dragOver);
            square.addEventListener('drop', drop);
            boardElement.appendChild(square);
        });
    }

    let draggedPiece = null;

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

    createBoard();

    document.getElementById('surprise-button').addEventListener('click', () => {
        const content = document.getElementById('surprise-content');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('link-button').addEventListener('click', () => {
        window.location.href = 'https://open.spotify.com/track/5QSYWruQQ7kBCHScI4xJ9g?si=viDGTsliST6jrRaH4w_vsQ&context=spotify%3Aartist%3A0i5iO6icb7kxg48thi9gBM'; // Cambia este enlace por el que desees
    });
});