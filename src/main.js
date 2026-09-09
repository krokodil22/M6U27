import {GameEngine} from './game/GameEngine.js';
import {BlocklyManager} from './blockly/BlocklyManager.js';
import {UIManager} from './ui/UIManager.js';
import {ProgressManager} from './progress/ProgressManager.js';

document.querySelector('#app').innerHTML=`
  <main class="app-shell">
    <section class="editor-pane">
      <div class="editor-toolbar">
        <button id="run" class="run-button">▶ <span>Запуск</span></button>
        <span class="shortcut">или Ctrl/⌘ + Enter</span>
      </div>
      <div class="editor-surface">
        <div id="blockly"></div>
        <div class="editor-actions">
          <button id="hint" title="Подсказка">?</button>
          <button id="reset" title="Сбросить уровень">↻</button>
          <button id="clear" title="Очистить программу">⌫</button>
        </div>
      </div>
    </section>

    <section class="preview-pane">
      <div class="level-bar">
        <div>
          <div class="progress-line">Открыто уровней: <b id="openCount">1</b> из 5</div>
          <h1 id="levelTitle"></h1>
          <p id="task"></p>
        </div>
        <select id="levelSelect" aria-label="Выбрать уровень"></select>
      </div>

      <div class="game-stage">
        <div class="game-card">
          <div id="board" class="board"></div>
          <div class="controls"><button data-move="0,-1">↑</button><div><button data-move="-1,0">←</button><button data-move="0,1">↓</button><button data-move="1,0">→</button></div><small>Управляй стрелками</small></div>
          <aside class="memory-panel"><div class="memory-heading"><b>ПЕРЕМЕННЫЕ</b><small>Память робота</small></div><div id="variables"></div></aside>
          <button id="wipe" class="wipe" title="Сбросить весь прогресс">Сбросить прогресс</button>
        </div>
      </div>
    </section>
  </main>
  <div id="toast" class="toast"></div><div id="modal" class="modal"></div>`;

const progress=new ProgressManager(),ui=new UIManager(),engine=new GameEngine(ui,progress),blockly=new BlocklyManager(document.querySelector('#blockly'),engine);
engine.attachBlockly(blockly);ui.bind(engine,blockly,progress);engine.load(Math.min(progress.data.unlockedLevel,5));
