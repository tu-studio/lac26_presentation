// Hot reload WebSocket connection
(function() {
  const ws = new WebSocket(`ws://${window.location.host}`);
  
  ws.onmessage = function(event) {
    if (event.data === 'reload') {
      // Store current slide position before reload
      if (window.Reveal && window.Reveal.getState) {
        const currentState = window.Reveal.getState();
        console.log(window.Reveal.getState())
        localStorage.setItem('reveal-slide-position', JSON.stringify({
          state: currentState,
          timestamp: Date.now()
        }));
      }
      window.location.reload();
    }
  };
  
  ws.onopen = function() {
    console.log('🔥 Hot reload connected');
  };
  
  ws.onclose = function() {
    console.log('🔌 Hot reload disconnected');
  };
  
  // Restore slide position after page load
  window.addEventListener('load', function() {
    // Wait for Reveal.js to initialize
    setTimeout(function() {
      if (window.Reveal && window.Reveal.isReady && window.Reveal.isReady()) {
        restoreSlidePosition();
      } else {
        // If Reveal.js isn't ready yet, wait for the ready event
        window.addEventListener('reveal-ready', restoreSlidePosition);
        // Fallback: try again after a longer delay
        setTimeout(restoreSlidePosition, 1000);
      }
    }, 100);
  });
  
  function restoreSlidePosition() {
    try {
      const savedPosition = localStorage.getItem('reveal-slide-position');
      if (savedPosition) {
        const position = JSON.parse(savedPosition);
        // Only restore if the save was recent (within last 10 seconds)
        if (Date.now() - position.timestamp < 30*60*1000) {
          console.log('🔄 Restoring slide position:', position);
          window.Reveal.setState(position.state);
          // Clean up the stored position
          localStorage.removeItem('reveal-slide-position');
        } else {
          console.log('Not reloading: Saved Position too old')
        }
      } else {
        console.log('Not reloading: No state found')

      }
    } catch (error) {
      console.log('Could not restore slide position:', error);
    }
  }
})();
