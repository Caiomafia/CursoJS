def ABCheck(str):
  for i in range(len(str) - 4):
    if str[i] == 'a' and str[i+4] == 'b':
      return True
  return False