def inc(x):
	return x + 1

def dec(x):
	return x - 1

def test_increment():
	assert inc(3) == 4

def test_decrement():
	assert dec(3) == 2