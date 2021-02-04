try {
  $(document).off("jsav-log-event");
  $(document).on("jsav-log-event",  function (event, eventData) {
    if(eventData.type === 'jsav-exercise-grade') {
      sendToAcos(eventData.score);
    }
  });
} catch (error) {
  console.warn(error)
}

function sendToAcos(score) {
  ACOS.sendEvent('grade', {
    'points': score.correct,
    'max_points': score.total,
    'status': 'graded',
    'feedback': '',
    'log': '',
  });
}