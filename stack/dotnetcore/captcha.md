# .NET Core 中生成验证码

在开发中，有时候生成验证码的场景目前还是存在的，本篇演示不依赖第三方组件，生成随机验证码图片。

先添加验证码接口

```csharp
public interface ICaptcha
{
    /// <summary>
    /// 生成随机验证码
    /// </summary>
    /// <param name="codeLength"></param>
    /// <returns></returns>
    Task<string> GenerateRandomCaptchaAsync(int codeLength = 4);

    /// <summary>
    /// 生成验证码图片
    /// </summary>
    /// <param name="captchaCode">验证码</param>
    /// <param name="width">宽为0将根据验证码长度自动匹配合适宽度</param>
    /// <param name="height">高</param>
    /// <returns></returns>
    Task<CaptchaResult> GenerateCaptchaImageAsync(string captchaCode, int width = 0, int height = 30);
}
```

验证码返回模型

```csharp
public class CaptchaResult
{
    /// <summary>
    /// CaptchaCode
    /// </summary>
    public string CaptchaCode { get; set; }

    /// <summary>
    /// CaptchaMemoryStream
    /// </summary>
    public MemoryStream CaptchaMemoryStream { get; set; }

    /// <summary>
    /// Timestamp
    /// </summary>
    public DateTime Timestamp { get; set; }
}
```

接下来实现接口，主要是依赖微软的`System.Drawing.Common`组件，注意命名空间的引用

```csharp
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Threading.Tasks;

...

public class Captcha : ICaptcha
{
    private const string Letters = "1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,U,V,W,X,Y,Z";

    public Task<CaptchaResult> GenerateCaptchaImageAsync(string captchaCode, int width = 0, int height = 30)
    {
        //验证码颜色集合
        Color[] c = { Color.Black, Color.Red, Color.DarkBlue, Color.Green, Color.Orange, Color.Brown, Color.DarkCyan, Color.Purple };

        //验证码字体集合
        string[] fonts = { "Verdana", "Microsoft Sans Serif", "Comic Sans MS", "Arial" };

        //定义图像的大小，生成图像的实例
        var image = new Bitmap(width == 0 ? captchaCode.Length * 25 : width, height);

        var g = Graphics.FromImage(image);

        //背景设为白色
        g.Clear(Color.White);

        var random = new Random();

        for (var i = 0; i < 100; i++)
        {
            var x = random.Next(image.Width);
            var y = random.Next(image.Height);
            g.DrawRectangle(new Pen(Color.LightGray, 0), x, y, 1, 1);
        }

        //验证码绘制在g中
        for (var i = 0; i < captchaCode.Length; i++)
        {
            //随机颜色索引值
            var cindex = random.Next(c.Length);

            //随机字体索引值
            var findex = random.Next(fonts.Length);

            //字体
            var f = new Font(fonts[findex], 15, FontStyle.Bold);

            //颜色  
            Brush b = new SolidBrush(c[cindex]);

            var ii = 4;
            if ((i + 1) % 2 == 0)
                ii = 2;

            //绘制一个验证字符  
            g.DrawString(captchaCode.Substring(i, 1), f, b, 17 + (i * 17), ii);
        }

        var ms = new MemoryStream();
        image.Save(ms, ImageFormat.Png);

        g.Dispose();
        image.Dispose();

        return Task.FromResult(new CaptchaResult
        {
            CaptchaCode = captchaCode,
            CaptchaMemoryStream = ms,
            Timestamp = DateTime.Now
        });
    }

    public Task<string> GenerateRandomCaptchaAsync(int codeLength = 4)
    {
        var array = Letters.Split(new[] { ',' });

        var random = new Random();

        var temp = -1;

        var captcheCode = string.Empty;

        for (int i = 0; i < codeLength; i++)
        {
            if (temp != -1)
                random = new Random(i * temp * unchecked((int)DateTime.Now.Ticks));

            var index = random.Next(array.Length);

            if (temp != -1 && temp == index)
                return GenerateRandomCaptchaAsync(codeLength);

            temp = index;

            captcheCode += array[index];
        }

        return Task.FromResult(captcheCode);
    }
}
```

在控制器中注入调用

```csharp
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class CaptchaController : ControllerBase
{
    [HttpGet]
    public async Task<FileContentResult> CaptchaAsync([FromServices] ICaptcha _captcha)
    {
        var code = await _captcha.GenerateRandomCaptchaAsync();

        var result = await _captcha.GenerateCaptchaImageAsync(code);

        return File(result.CaptchaMemoryStream.ToArray(), "image/png");
    }
}
```

实际使用的时候，`code`就是本次生成的验证码，可以将其保存在`session`中，进行验证，或者其它方式。

![ ](./images/captcha-01.png)
