import { Component, OnInit } from '@angular/core';
import { ByUnicoSDK } from 'idpay-b2b-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Demo application with Angular 9.1.13';

  constructor() {}

  ngOnInit(): void {
    const processId = 'd0991225-c82a-44ae-965d-b55fe88b9535';
    const token =
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI3YzE1MDE3Yi0zYzlmLTQ1ZTktOTgzMy01M2ZjYzgyMjQ3YTgiLCJjbGlkIjoiNTdjMDlkMmYtMTAzOC00OGU0LWFiYTMtODhjOWIxYjdjY2JjIiwiZXhwIjoxNzU0NTM2NzMxLCJleHRyYSQiOnsiY29uZmlncyI6eyJzaWxlbnRTdGFydCI6ZmFsc2V9LCJkb21haW5zIjpbImh0dHBzOi8vY2FkYXN0cm8uZGV2LnVuaWNvLmFwcCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJwcm9jZXNzUGF0aCI6Ii9wcm9jZXNzL2QwOTkxMjI1LWM4MmEtNDRhZS05NjVkLWI1NWZlODhiOTUzNSJ9LCJpYXQiOjE3NTM5MzE5MzEsImlzcyI6Imh0dHBzOi8vY2FkYXN0cm8uZGV2LnVuaWNvLmFwcCIsImp0aSI6ImQwOTkxMjI1LWM4MmEtNDRhZS05NjVkLWI1NWZlODhiOTUzNSIsIm5iZiI6MTc1MzkzMTkzMSwic2NvcGUiOiIqIiwic3ViIjoiMmY2ZWYzMTctNDcwNS00MzI2LWFjZjAtNjY0YjE5YWIxMDYzIiwidmVyc2lvbiI6IjEuMCJ9.Cm8OWSCCvpFGZNqCBUKw6zmZUc7A4jtUQRanxexU_R-aG2F7NVx7we0djb1SgoDP1iGYcWy1Ug1XzSxH5iV2wdue3NUBEFGeSFG0V1Wl1DjIAcUyfXa4X2yfu6AztTZqwopSXsftL7_SQ36q5PV0UGs9O9ZNp4dYRQRDPy7S2zvjLVQ-oNsSKatS7EIXLuKKxumqIX1Pb13sT_J-sfYntrqa62RsaJmk0WOtW3DIVV1AxYPeVGFIXbem5l11UcAa8qbp6DA1LePi7u5j0i_5oW65pJu8sQlu7cLIv1sn9IjQ4pg3_bKfwMTQGldLqvMDlxMWRFOCeZ54zYhM-bIlv9vwgiLJ3G7oMz0Cj2fvhZs55g1Zh4A439eUJtbdAUFf5E3cTzwv9magHJOKoK4VFjHUWxeYmJU5l05nzFxPqb2tYp7DP-ORAaOG-BlBSBJD7I-OQAOanALu56KlphWJvIJEOSLMrbsYGmaCwZn9orM7eDHItg0hN1LLBs0iZfyrf77OJm6kyqrNE2QMXWYuMOjmYzd05OsXQsv1JO1-CxAWGNj9VcEzUVZ2jwKigMjCuby-AjGcuiDzvy35W9tu_AoOnX6WnXSaKCVjEH9ReBCNAySVk1Ntj8N9qXGHdG-drkJa4Q7LAaMkBB66Zc-GIXRmGpP-Uy3Jqb8a5FSXBzQ';

    const onFinishCallback = (data: any) => {
      console.log('>>> onFinishCallback:', data);
    };

    ByUnicoSDK.init({
      type: 'IFRAME',
      env: 'dev',
      token,
    });

    ByUnicoSDK.open({
      onFinish: onFinishCallback,
      transactionId: processId,
      token,
    });
  }
}
