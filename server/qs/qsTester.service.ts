import { Injectable } from '@nestjs/common';
import { ConfigService, InjectConfig } from 'nestjs-config';
import * as path from 'path';
import * as Datastore from 'nedb-promise';

@Injectable()
export class QSTester {
  private caseDB: any;
  private caseDetailDB: any;

  constructor(
    @InjectConfig()
    private readonly config: ConfigService,
  ) {
    const dbConfig = config.get('config.qs.db');
    this.caseDB = new Datastore({
      filename: path.resolve(dbConfig.path, 'qs_test_cases.db'),
      autoload: true,
    });
    this.caseDetailDB = new Datastore({
      filename: path.resolve(dbConfig.path, 'qs_test_case_details.db'),
      autoload: true,
    });
  }

  async getCases(): Promise<any> {
    const cases = await this.caseDB.find({});
    return Promise.resolve(cases);
  }
}
