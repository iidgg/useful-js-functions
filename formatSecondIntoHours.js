// i writed that function a few years ago, i guess.
// i don't really remember if i stole it or write it

function FormatSeconds(Time) {
  let FormattedSeconds = Time.toFixed(0);

  let TimeLeft = FormattedSeconds;
  let TimeFormat = "Seconds";

  if (FormattedSeconds > 60)
    (TimeLeft = FormattedSeconds / 60), (TimeFormat = "Minutes");

  if (FormattedSeconds > 3600)
    (TimeLeft = FormattedSeconds / 3600), (TimeFormat = "Hours");

  let Last;

  if (!TimeLeft.toString().includes(".")) {
    Last = FormattedSeconds;
    return {
      Last: Last,
      TimeFormat: TimeFormat,
    };
  } else {
    Last = TimeLeft.toFixed(1);
    return {
      Last: Last,
      TimeFormat: TimeFormat,
    };
  }
}
