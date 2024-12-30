// Pomodoro Timer
const pomodoroTimer = document.getElementById('pomodoro-timer');
const startPomodoroBtn = document.getElementById('start-pomodoro');
const resetPomodoroBtn = document.getElementById('reset-pomodoro');
const pomodoroStatus = document.getElementById('pomodoro-status');
const pomodoroBtnEl = document.getElementById('pomodoro-btn');
const shortBreakBtnEl = document.getElementById('short-break-btn');
const longBreakBtnEl = document.getElementById('long-break-btn');

const POMODORO_TIME = 25 * 60;
const SHORT_BREAK_TIME = 5 * 60;
const LONG_BREAK_TIME = 10 * 60;

let currentTime = POMODORO_TIME;
let originalTime = POMODORO_TIME;
let interval;
let isRunning = false;

function updateTimerDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    pomodoroTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startPomodoroBtn.textContent = 'Pause';
        interval = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                updateTimerDisplay();
            } else {
                clearInterval(interval);
                isRunning = false;
                startPomodoroBtn.textContent = 'Start';
                pomodoroStatus.textContent = 'Time is up!';
                playAlarm();
            }
        }, 1000);
    } else {
        clearInterval(interval);
        isRunning = false;
        startPomodoroBtn.textContent = 'Start';
    }
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    currentTime = originalTime;
    startPomodoroBtn.textContent = 'Start';
    updateTimerDisplay();
    pomodoroStatus.textContent = 'Timer reset!';
}

function setTimer(time, status) {
    clearInterval(interval);
    isRunning = false;
    currentTime = time;
    originalTime = time;
    startPomodoroBtn.textContent = 'Start';
    updateTimerDisplay();
    pomodoroStatus.textContent = status;
}

function playAlarm() {
    const alarmSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
    alarmSound.play();
}

pomodoroBtnEl.addEventListener('click', () => setTimer(POMODORO_TIME, 'Pomodoro session ready!'));
shortBreakBtnEl.addEventListener('click', () => setTimer(SHORT_BREAK_TIME, 'Short break ready!'));
longBreakBtnEl.addEventListener('click', () => setTimer(LONG_BREAK_TIME, 'Long break ready!'));
startPomodoroBtn.addEventListener('click', startTimer);
resetPomodoroBtn.addEventListener('click', resetTimer);

// To-Do List
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('flex', 'justify-between', 'items-center', 'bg-gray-50', 'p-3', 'rounded', 'transition-all', 'duration-200');

        const leftSection = document.createElement('div');
        leftSection.classList.add('flex', 'items-center', 'flex-1');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.classList.add('h-5', 'w-5', 'cursor-pointer');
        checkbox.addEventListener('change', () => toggleTodo(index));

        const label = document.createElement('label');
        label.textContent = todo.text;
        label.classList.add('ml-3', 'flex-1', 'cursor-pointer');
        if (todo.completed) {
            label.classList.add('line-through', 'text-gray-500');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&times;';
        deleteBtn.classList.add('bg-red-500', 'hover:bg-red-600', 'text-white', 'px-3', 'py-1', 'rounded', 'ml-2');
        deleteBtn.addEventListener('click', () => deleteTodo(index));

        leftSection.appendChild(checkbox);
        leftSection.appendChild(label);
        todoItem.appendChild(leftSection);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
    });

    if (todos.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'No tasks yet. Add some!';
        emptyMessage.classList.add('text-center');
        todoList.appendChild(emptyMessage);
    }
}

function addTodo(e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push({ text: todoText, completed: false });
        saveTodos();
        todoInput.value = '';
        renderTodos();
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

todoForm.addEventListener('submit', addTodo);
renderTodos();

// Auto Scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Spotify Playlist
async function updateSpotify() {
    const clientId = 'YOUR_CLIENT_ID'; // Ganti dengan Client ID Spotify Anda
    const clientSecret = 'YOUR_CLIENT_SECRET'; // Ganti dengan Client Secret Spotify Anda
    const urlInput = document.getElementById('spotify-url').value;
    const spotifyIframe = document.getElementById('spotify-iframe');
    const songListContainer = document.getElementById('spotify-song-list');

    if (!urlInput) {
        alert('Please enter a valid Spotify playlist URL.');
        return;
    }

    // Authenticate with Spotify API
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        body: 'grant_type=client_credentials',
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Extract playlist ID from URL
    const playlistId = urlInput.split('/playlist/')[1].split('?')[0];

    // Fetch playlist data
    const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const playlistData = await playlistResponse.json();

    // Update Spotify iframe
    const embedUrl = urlInput.replace('https://open.spotify.com/', 'https://open.spotify.com/embed/');
    spotifyIframe.src = embedUrl;

    // Display songs in the playlist
    songListContainer.innerHTML = '';
    playlistData.tracks.items.forEach((item) => {
        const track = item.track;
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.innerHTML = `
            <p><strong>${track.name}</strong> by ${track.artists.map((artist) => artist.name).join(', ')}</p>
        `;
        songListContainer.appendChild(songItem);
    });
}

// Logout
function confirmLogout(event) {
    event.preventDefault();
    const confirmation = confirm("Apakah Anda yakin ingin keluar?");
    if (confirmation) {
        alert("Anda telah berhasil keluar.");
        window.location.href = "login.html";
    }
}
