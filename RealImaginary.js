class RealImaginary
{
	constructor(real,imaginary)
	{
		let r_i;
		this.real = real;
		this.imaginary = imaginary;
		if ((this.real == 0) && ((this.imaginary > 0) || (this.imaginary < 0)))
		{
			r_i = `${(this.imaginary==-1)?"-":(this.imaginary==1)?"":this.imaginary}i`
		} else if ((this.real > 0) && ((this.imaginary > 0) || (this.imaginary < 0)))
		{
			r_i = `${this.real} + ${(this.imaginary==1)?"":this.imaginary}i`
		} else if ((this.real < 0) && ((this.imaginary > 0) || (this.imaginary < 0)))
		{
			 r_i = `${-this.real} - ${(this.imaginary==1)?"":this.imaginary}i`
		} else
		{
			r_i = real;
		}
		return { real: real, imaginary: imaginary, result: r_i }
	}
}
RealImaginary.sqrt = function(n)
{
	if(n>0)
	{
		return Math.sqrt(n)
	} else
	{
		return new RealImaginary(0,Math.sqrt(-n))
	}
}
RealImaginary.add = function(a,b)
{
	return new RealImaginary(a.real + b.real, a.imaginary + b.imaginary)
}
RealImaginary.sub = function(a,b)
{
	return new RealImaginary(a.real - b.real, a.imaginary - b.imaginary)
}
