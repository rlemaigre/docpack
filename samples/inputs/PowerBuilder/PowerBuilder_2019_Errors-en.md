## 1 SQL Anywhere - Error Messages

This book describes a complete listing of SQL Anywhere error messages together with any relevant diagnostic
information.

### 1.1 SQL Anywhere Error Messages

Each error has a numeric error code, called the SQLCODE. Negative codes are errors, and positive codes are
warnings. SQLCODE 0 indicates successful completion.
Many of the error messages contain the characters %1, %2, and so on. These characters are replaced by the
parameters to the error message.

#### 1.1.1 SQL Anywhere Error Messages Sorted by SQLCODE

SQL Anywhere SQLCODE
Message text
The ICU collation '%1' has defaulted to another collation

Warning: %1
Invalid floating point value detected in internal point compu-
tation
UltraLite performed database recovery on startup
Database contains no tables to synchronize
Automatic database upgrade applied
Event notification queue '%1' not found warning
Event notifications lost on queue '%1'
Event notification queue '%1' is full, notification discarded

Two rows with the same primary key have been downloaded
for table '%1'
Mirror file requires higher checksum_level
Retrying read of corrupt page (page '%1')
UltraLite database state was restored
Encryption has not been enabled
Option '%1' specified more than once
Publication predicates were not evaluated

SQL Anywhere SQLCODE
Message text
Row was dropped from table %1 to maintain referential in-

#### 1.1.2 SQL Anywhere Error Messages Sorted by SQLSTATE

SQLSTATE
Message text
(no message text)
Warning: %1
Null value eliminated in aggregate function
Value truncated
Encryption has not been enabled
01F01
Position %1 is invalid (should be between %2 and %3)
Polygon ring order has been reoriented
01FW2
CircularString with 3 points has been converted to use 5
points
01FW3
Invalid floating point value detected in internal point compu-
tation
01S02
Cursor option values changed
01W01
Invalid data conversion: NULL was inserted for column '%1'
on row %2
01W02
Using temporary table
01W03
Invalid data conversion
01W04
Row has been updated since last time read
01W05
Procedure has completed
01W06
Value for column '%1' in table '%2' has changed
01W07
Language extension detected in syntax near '%1' on line %2

01W08
Statement cannot be executed

SQLSTATE
Message text
01W09

#### 1.1.3 SQL Anywhere Error Messages Sorted by Sybase Error Code

Code
Sybase error code
SQL Anywhere SQLCODE
Message text
-631
RAISERROR executed: %1
-171
Error opening cursor
-199
INSERT/DELETE on cursor can modify
only one table
-273
COMMIT/ROLLBACK not allowed
within trigger actions
-131
Syntax error near '%1' %2 %3
-875
There is no way to join to '%1'
-145
Foreign key name '%1' not found
-271
Trigger definition conflicts with existing
triggers
-272
Invalid REFERENCES clause in trigger
definition
-635
GRANT of column permission on view
not allowed
-151
Subquery allowed only one SELECT list
item
-269
Cannot delete or rename a column ref-
erenced in a trigger definition
-250
Identifier '%1' too long
-854
Function or column reference to '%1' in
the ORDER BY clause is invalid
-152
Invalid ORDER BY specification
-262
Label '%1' not found
-261
There is already a variable named '%1'

-260
Variable '%1' not found

Sybase error code
SQL Anywhere SQLCODE
Message text
-623
Data definition statements not allowed
in procedures or triggers
-200
Invalid option '%1' -- no PUBLIC setting
exists
-154
Wrong number of parameters to func-
tion '%1'
-611
Transact-SQL feature not supported

-1702
Collection types not supported
-148
Unknown function '%1'
-1965
Feature '%1' not supported
-159
Invalid column number
-639
Parameter name missing in call to pro-
cedure '%1'
-615
Parameter '%1' not found in procedure
'%2'
-737
Signature '%1' does not match proce-
dure parameters
-153
Select lists in UNION, INTERSECT, or
EXCEPT do not match in length
-124
Dropping all columns from table '%1' is
not allowed
-143
Column '%1' not found
-142
Correlation name '%1' not found
-144
Column '%1' found in more than one
table or it is used more than once in
the SELECT list -- it needs a correlation
name
-163
Derived table '%1' has no name for col-
umn %2
-207
Wrong number of values for INSERT

-274
Procedure or trigger calls have nested
too deeply
-158
Value %1 out of range for destination

-191
Cannot modify column '%1' in table
'%2'

Sybase error code
SQL Anywhere SQLCODE
Message text
-190
Cannot update an expression
-195
Column '%1' in table '%2' cannot be
NULL
-733
Number of columns allowing NULLs ex-
ceeds limit
-157
Cannot convert %1 to %2
-705
Return type of void from procedure '%1'
cannot be used in any expression
-121
Permission denied: %1
-637
Duplicate insert column
-708
READTEXT or WRITETEXT statement
cannot refer to a view
-147
There is more than one way to join '%1'
to '%2'
-680
Invalid expression in WHERE clause of
Transact-SQL outer join
-146
There is no way to join '%1' to '%2'

-681
Invalid join type used with Transact-SQL
outer join
-295
Cannot uniquely identify rows in cursor

-122
Operation would cause a group cycle

-136
Table '%1' is in an outer join cycle
-137
Table '%1' requires a unique correlation
name
-134
Feature '%1' not implemented
-135
Language extension
-156
Invalid expression near '%1'
-994
Too many arguments for function or
procedure '%1'
-890
Statement size or complexity exceeds
server limits
Null value eliminated in aggregate func-
tion

Sybase error code
SQL Anywhere SQLCODE
Message text
-90
Argument %1 of procedure '%2' cannot
be NULL
-265
Procedure '%1' not found
-140
User ID '%1' does not exist
-186
Subquery cannot return more than one
row
Invalid data conversion
Row has been updated since last time
read
Value for column '%1' in table '%2' has
changed
-627
Disallowed language extension de-
tected in syntax near '%1' on line %2

-194
No primary key value for foreign key
'%1' in table '%2'
-198
Primary key for row in table '%1' is ref-
erenced by foreign key '%2' in table
'%3'
-677
Table '%1' has a foreign key with a refer-
ential action
-196
Index '%1' for table '%2' would not be
unique
-209
Constraint '%1' violated: Invalid value
for column '%2' in table '%3'
-1091
Constraint '%1' violated: Invalid value in
table '%2'
-729
The specified foreign key (%1) cannot
be enforced
-632
WITH CHECK OPTION violated for in-
sert/update on base table '%1'
-264
Wrong number of variables in FETCH

-208
Row has changed since last read -- op-
eration canceled
-853
Cursor not in a valid state
-170
Cursor has not been declared
-172
Cursor already open
-180
Cursor not open

Sybase error code
SQL Anywhere SQLCODE
Message text
Row not found
-197
No current row of cursor
-738
Password must be at least %1 charac-
ters
Statement cannot be executed
-642
Invalid SQL descriptor name
-80
Unable to start database server
-86
Not enough memory to start
-1179
Unable to start database server: miss-
ing license file
-996
Specified local connection ID not found

-997
Local connection ID does not refer to
the current database
-998
Cannot close a remote JDBC connec-
tion that is not the current connection

-82
Unable to start specified database: %1

-87
Database name required to start server

-1008
Unable to start specified database: '%1'
is an invalid transaction log mirror

-1009
Unable to start specified database: The
transaction log '%1' or its mirror '%2' is
invalid
-1010
Unable to start specified database: '%1'
not expecting any operations in trans-
action log
-1011
Unable to start specified database: Un-
known encryption algorithm
-1012
Unable to start specified database: '%1'
must be upgraded to start with this
server (capability %2 missing)
-1016
Unable to start specified database:
Cannot use log file '%1' since it has
been used more recently than the data-
base file

Sybase error code
SQL Anywhere SQLCODE
Message text
-1017
Unable to start specified database:
'%1': transaction log file not found

-1018
Unable to start specified database:
Cannot use log file '%1' since the offsets
do not match the offsets in the data-
base file
-1019
Unable to start specified database:
Cannot use log file '%1' since the data-
base file has been used more recently

-1020
Unable to start specified database:
Cannot use log file '%1' since it is
shorter than expected
-1004
Unable to start specified database: '%1'
is not a database
-1005
Unable to start specified database: '%1'
was created by a different version of the
software
-1006
Unable to start specified database: '%1'
is not a valid database file
-1007
Unable to start specified database: '%1'
is an invalid transaction log
-1063
Unable to start database %1: Cannot
use read-only mode since auditing is
currently logging to the transaction log

-1147
Database '%1' cannot be
started on this platform. See
http://ianywhere.com/developer/prod-
uct_manuals/sqlanywhere/notes/en/
endian_corruption_warning.html
-1149
Database '%1' cannot be
started on this platform. See
http://ianywhere.com/developer/prod-
uct_manuals/sqlanywhere/notes/en/
endian_cant_change_platform.html

-83
Specified database not found
-816
Specified database file already in use

-97
Database page size too big: %1
-644
Invalid database page size

Sybase error code
SQL Anywhere SQLCODE
Message text
-645
Database creation failed: %1
-311
Internal rollback log corrupted
-76
Request denied -- no active databases

-74
The selected database is currently inac-
tive
-306
Deadlock detected
-307
All threads are blocked
-684
Rollback occurred due to deadlock dur-
ing prefetch
-102
Database server connection limit ex-
ceeded
-85
Communication error
-88
Client/server communications protocol
version mismatch
-616
Too many columns in table
-849
Referential integrity actions other than
RESTRICT not allowed for temporary
tables
-850
Tables related by key constraint must
both be permanent, or both be tempo-
rary and not created with ON COMMIT
DELETE ROWS. For global temporary
tables they must both be shared if one
is shared
-865
Key constraint between temporary ta-
bles requires a primary key (not unique
constraint)
-118
Table '%1' has no primary key
-113
Column '%1' in foreign key has a differ-
ent definition than primary key
-77
Database name not unique
-138
Dbspace '%1' not found
-636
Duplicate referencing column
-119
Primary key column '%1' already de-
fined
-251
Foreign key '%1' for table '%2' dupli-
cates an existing foreign key

Sybase error code
SQL Anywhere SQLCODE
Message text
-111
Index name '%1' not unique
-678
Index name '%1' is ambiguous
-126
Table cannot have two primary keys

-112
Table already has a primary key
-106
Cannot open transaction log file -- %1

-193
Primary key for table '%1' is not unique:
Primary key value ('%2')
-141
Table '%1' not found
-613
User-defined type '%1' not found
-189
Unable to find in index '%1' for table
'%2'
-296
Error number %1 for RAISERROR must
not be less than 17000
-612
User message %1 not found
-294
Format string argument number %1 is
invalid
-305
I/O error %1 -- transaction rolled back

-309
Memory error -- transaction rolled back

-240
Unknown backup operation
-241
Database backup not started
-242
Incomplete transactions prevent trans-
action log renaming
-1021
Invalid backup operation
-672
Database upgrade failed
-673
Database upgrade not possible
-302
Terminated by user -- transaction rolled
back
-304
Disk full '%1' -- transaction rolled back

-107
Error writing to transaction log file


Sybase error code
SQL Anywhere SQLCODE
Message text
-299
Statement interrupted by user
-214
Table in use
-215
Procedure in use by '%1'
-750
User owns procedures in use
-751
User owns tables in use
-160
Can only describe a SELECT statement

-105
Database cannot be started -- %1
-84
Specified database is invalid
-72
No database file specified
-103
Invalid user ID or password
-104
Invalid user ID or password on prepro-
cessed module
-1497
The synchronization failed because Mo-
biLink returned authentication status
'%1' with value '%2'
-108
Connection not found
-99
Connections to database have been
disabled
-308
Connection was terminated
-703
Cannot insert or update computed col-
umn '%1'
-114
Number of columns defined for the
view does not match SELECT state-
ment
-766
View references '%1', which is a tempo-
rary object. Views can only refer to per-
manent objects
-702
TRUNCATE TABLE statement cannot
be used on a view
-116
Table must be empty
-127
Cannot alter a column in an index
-604
A dbspace has reached its maximum
file size
-605
The server attempted to access a page
beyond the end of the maximum allow-
able dbspace file size

Sybase error code
SQL Anywhere SQLCODE
Message text
Language extension detected in syntax
near '%1' on line %2
-201
Invalid setting for option '%1'
-1053
'%1' is an invalid value for '%2'
-81
Invalid database server command line

-735
Invalid parameter
-79
Invalid local database option
-95
Parse error: %1
-754
Parse error: %1
-204
You do not have '%1' system privilege or
authority to set the option '%2'
-216
The option '%1' can only be set as a
temporary option
-217
The option '%1' cannot be set from
within a procedure
-109
There are still active database connec-
tions
-75
Request to start/stop database denied

-183
Cannot find index named '%1'
-263
Invalid absolute or relative offset in
FETCH
-814
Cannot update column '%1' since it ap-
pears in the ORDER BY clause
-220
Savepoint '%1' not found
-608
Invalid TEXTPTR value used with
WRITETEXT or READTEXT
-609
Invalid data type for column in WRITE-
TEXT or READTEXT
-155
Invalid host variable
-89
Database server not running in multi-
user mode
-192
Update operation attempted on non-
updatable query

Sybase error code
SQL Anywhere SQLCODE
Message text
-813
FOR UPDATE has been incorrectly
specified for a READ ONLY cursor
-149
Function or column reference to '%1'
must also appear in a GROUP BY
Value truncated
-728
Update operation attempted on non-
updatable remote query
-139
More than one table is identified as '%1'

-676
The specified transaction isolation is in-
valid
-630
Invalid escape sequence '%1'
-606
The pattern is too long
-629
Invalid escape character '%1'
-633
Update operation attempted on a read-
only cursor
-815
Cannot update column '%1' since it
does not appear in the SELECT clause

-100
Database server not found
-96
Database server already running
-640
Invalid descriptor index
-641
Error in assignment
-210
User '%1' has the row in '%2' locked

-78
Dynamic memory exhausted during %1

-638
Right truncation of string data
-187
Illegal cursor operation attempt
-268
Trigger '%1' not found
-624
Expression has unsupported data type

-698
The remote server does not support
an auto-incrementing data type
Sybase error code
SQL Anywhere SQLCODE
Message text
-732
Creating remote tables with computed
columns is not supported
-736
The data type of column or variable '%1'
is not supported
-656
Unable to connect to server '%1': %2

-667
Could not access column information
for the table '%1'
-722
The column '%1' does not exist in the
remote table
-721
The data type specified for column '%1'
is not compatible with the actual data
type
-723
The length specified for column '%1' is
different than the actual length
-724
NULL attribute mismatch for column
'%1'
-725
Identity attribute mismatch for column
'%1'
-659
Remote server '%1' could not be found

-666
The remote table '%1' could not be
found
-726
The table specification '%1' identifies
more than one remote table
-712
External login for server '%1' could not
be found
-706
Remote server does not have the ability
to support this statement
-658
Remote server '%1' is currently config-
ured as read-only
-110
Item '%1' already exists
-2088
RENAME can not be used with SYSTEM
dbspace
-2072
Could not write the profiler data be-
cause the previous session is still being
processed.
-2071
Could not start a new profiling session
because the previous session is still be-
ing processed.

Sybase error code
SQL Anywhere SQLCODE
Message text
-2069
The sample wait time cannot be
changed once samples have been col-
lected. Clear the sample data and then
set the option.
-2068
The minimum percentage '%1' is inva-
lid. The minimum percentage must be
between 0 and 100.
-2065
The output path '%1' is invalid
-2064
The profiler has not been initialized.
Contact SAP support.
-2063
The profiler is already running
-2062
The profiler is not running
-2061
The operation cannot be executed while
the profiler is running
-2060
There is no profiler data available
-2059
A memory error occurred causing the
profiler operation to fail
-2058
The profiler is not supported
-2057
A fatal error has occurred in the profiler
library
-2056
An internal error has occurred in the
profiler library
-2000
JWT Provider '%1' does not exist
-1994
Offline reset password not supported

-1993
Offline reset password is not allowed for
user ID '%1' that has no password
-1992
Offline reset password failed: %1
-1991
CHAR configuration provided for
NCHAR column for text index \"%1\"
on table \"%2\"
-1990
Failed to load %1 HANA library
-1987
Database upgrade not possible; data-
base has auditing enabled

Sybase error code
SQL Anywhere SQLCODE
Message text
-1986
The database must be upgraded to use
the KEY option on the SYNCHRONIZE
command
-1983
Cannot proceed with online backup, log
backup already in progress
-1984
Cannot proceed with online backup,
SQLA log guid is ahead
-1979
Cannot create a proxy table LIKE an-
other table
-1978
'%1' statement is not allowed as a con-
sumer
-1975
Restoring database from an upgrade
image
-1971
Format string contains more than %2
format specifiers: '%1
-1970
Format string contains invalid format
specifiers: '%1'
-1969
Operation failed - could not complete
checkpoint
-1968
Unable to clean directory %1
-1967
Command '%1' received BACKINT_ER-
ROR from HANA
-1963
RENAME and FOR REPLICATION can-
not be used together
-1962
RECOVER UNTIL and FOR REPLICA-
TION cannot be used together
-1961
VERIFY and FOR REPLICATION cannot
be used together
-1960
Unable to save and restart the SQL
Anywhere Cockpit when it is not pre-
pared.
-1958
DBF parameter cannot be used when
the SQL Anywhere Cockpit is being pre-
pared to save.
-1959
Unable to prepare to save the SQL Any-
where Cockpit when it is already being
prepared.
-1955
Cannot save SQL Anywhere Cockpit to
existing file '%1'
-1954
Unable to prepare to save the SQL Any-
where Cockpit when it is not active.


Sybase error code
SQL Anywhere SQLCODE
Message text
-1950
Option '%1' cannot be used with HSQL
COMPATIBLE
-1949
Dialect '%1' is not supported by this da-
tabase
-1947
Text index \"%1\" on table \"%2\" ex-
ists. Table with text index is not sup-
ported for LOAD TABLE statement in
BEGIN PARALLEL WORK...END PARAL-
LEL WORK statement
-1946
Table '%1' for LOAD TABLE statement
not supported in BEGIN PARALLEL
WORK...END PARALLEL WORK state-
ment
-1945
VIRTUAL clause for CREATE INDEX
statement not supported in BEGIN
PARALLEL WORK...END PARALLEL
WORK statement
-1944
Error executing BEGIN PARALLEL
WORK...END PARALLEL WORK state-
ment
-1943
'%1' for CREATE INDEX statement
not supported in BEGIN PARALLEL
WORK...END PARALLEL WORK state-
ment
-1942
Function-name clause for CREATE IN-
DEX statement not supported in BE-
GIN PARALLEL WORK...END PARALLEL
WORK statement
-1941
Unable to start the SQL Anywhere
Cockpit: Please restart the server with a
minimum page size of 4096
-1940
Logging type ( '%1' ) for LOAD TA-
BLE statement not supported in BE-
GIN PARALLEL WORK...END PARALLEL
WORK statement
-1939
Load-source for LOAD TABLE state-
ment not supported in BEGIN PAR-
ALLEL WORK...END PARALLEL WORK
statement
-1938
When wait_for_commit database op-
tion is enabled, LOAD TABLE statement
is not supported in BEGIN PARALLEL
WORK...END PARALLEL WORK state-
ment
-1937
Table '%1' specified more than once in
BEGIN PARALLEL WORK...END PARAL-
LEL WORK statement

Sybase error code
SQL Anywhere SQLCODE
Message text
-1936
SQL statements in BEGIN PARALLEL
WORK...END PARALLEL WORK state-
ment are not of the same type
-1935
SQL statement not supported in BE-
GIN PARALLEL WORK...END PARALLEL
WORK statement
-1934
Cannot use both the OR REPLACE and
IF NOT EXISTS clauses
-1933
Duplicate options not allowed in %1!s!

-1931
PBKDF2 error: %1!s!
-1928
Error backing up existing log area.
Found '%1' logs in '%2' directory
-1929
Found a file '%1' with relative path in
delta dbspace during backup existing
log area.
-1927
No external backup identity found for
archive file '%1' in HANA strategy docu-
ment
-1926
Unable to start the SQL Anywhere
Cockpit: Please restart the server with a
minimum page size of 4096
-1925
Possible database corruption found: %1

-1907
Error processing SAP HANA strategy

-1908
RESTORE statement missing a FROM
clause
-1902
Invalid setting '%1' specified for option
'%2' for target type '%3'
-1909
Cannot use CLEAR LOG clause with off-
line log backups
-1898
IN-list is too long
-1910
Unsupported extended storage syntax

-1894
Too many tables in query
-1895
Too many columns in schema
-1911
Failed to create pipe %1 during
BACKUP using BACKINT %2
Sybase error code
SQL Anywhere SQLCODE
Message text
-1896
Too many columns in row type
-1912
Failed to open pipe %1 during BACKUP
using BACKINT %2
-1899
Statement requires too much memory
during %1
-1897
Array contains too many elements

-1913
Failed to close pipe %1 during BACKUP
using BACKINT %2
-1914
Failed to write pipe %1 during BACKUP
using BACKINT %2
-1900
JSON nesting too deep
-1889
No stored cache pages
-1915
Failed to read pipe %1 during BACKUP
using BACKINT %2
-1892
JSON object contains too many proper-
ties
-1888
Reading %1 database pages exceeds
available cache of %2 pages
-1916
SAP HANA environment error, unable
to execute command on name server

-1893
JSON array contains too many ele-
ments
-1887
Feature '%1' is not supported for this
database
-1917
Invalid BACKUP operation or type
specified: %1
-1886
Scalar variable '%1' not found
-1918
Verify fails, bytes written to pipe %1 and
bytes written to file %2
-1885
Stop listener error: %1
-1919
BACKINT configuration file error, %1

-1884
The address parameter "%1" provided
to stop a listener has an invalid IP ad-
dress or no port
-1920
SAP HANA environment error, unable
to ping name server

Sybase error code
SQL Anywhere SQLCODE
Message text
-1883
Address parameter "%1" is not sup-
ported to start a listener for the per-
sonal database server
-1921
Failed to get BACKUP id for file name
%1
-1922
Error in parsing BACKINT configuration
file
-1882
There is already a database variable
named '%1'
-1881
Procedure '%1' needs a RESULT clause
for returned ROW or ARRAY
-1880
Failed to get file system statistics for
the path '%1'
-1879
Failed to get status information on the
path '%1': %2
-1878
The SQL Anywhere Cockpit template
'%1' cannot be used for the current op-
eration
-1877
Encryption failed for the SQL Anywhere
Cockpit setting file. Error message '%1'

-1876
Failed to rename the SQL Anywhere
Cockpit file '%1' to '%2': %3
-1872
Unable to upgrade the SQL Anywhere
Cockpit when it is not active
-1957
Unable to stop the SQL Anywhere
Cockpit when it is being prepared to
save.
-1871
Unable to stop the SQL Anywhere
Cockpit when it is being started
-1870
DBF parameter cannot be used when
the SQL Anywhere Cockpit is not stop-
ped. The SQL Anywhere Cockpit is
stopping
-1869
DBF parameter cannot be used when
the SQL Anywhere Cockpit is not stop-
ped. The SQL Anywhere Cockpit is ac-
tive
-1868
DBF parameter cannot be used when
the SQL Anywhere Cockpit is not stop-
ped. The SQL Anywhere Cockpit is
starting

Sybase error code
SQL Anywhere SQLCODE
Message text
-1867
DBF parameter cannot be used when
the SQL Anywhere Cockpit is not stop-
ped. The SQL Anywhere Cockpit is be-
ing started
-1866
Unable to start the SQL Anywhere
Cockpit when it is stopping
-1874
Invalid empty string specified as
'ESCAPE CHARACTER' option of LOAD
or UNLOAD TABLE
-1865
Failed to write the SQL Anywhere Cock-
pit setting file '%1'
-1864
Failed to read the SQL Anywhere Cock-
pit setting file '%1'
-1863
Failed to access the SQL Anywhere
Cockpit file '%1': %2
-1875
Unable to find the cockpit parameters
used to start or stop
-1861
Failed to delete the SQL Anywhere
Cockpit file '%1': %2
-1860
The SQL Anywhere Cockpit template
file '%1' not found
-1859
Failed to copy the SQL Anywhere Cock-
pit template file '%1' to destination '%2'

-1858
Unable to open the SQL Anywhere
Cockpit template -- '%1'
-1855
Remote server is currently in use and
cannot be dropped
-1853
Invalid event parameter for event '%1'

-1852
Invalid repeat interval for event '%1'

-1851
Unable to start the SQL Anywhere
Cockpit: %1
-1850
Too many mutexes and semaphores
created
-1849
Too many temporary mutexes and sem-
aphores created
-1847
UNPIVOT error: Cannot create valid
identifiers for IN clause items
-1846
PIVOT error: PIVOT XML does not con-
tain a valid subquery, ANY, or ALL in the
IN clause

Sybase error code
SQL Anywhere SQLCODE
Message text
-1845
PIVOT error: Too many aggregate func-
tions and IN clause items
-1843
The database name is reserved for SQL
Anywhere Cockpit
-1842
Cannot change the setting of the Sin-
gleCLRInstanceVersion server option
after the CLR external environment has
already been started
-1841
The SQL Anywhere Cockpit '%1' cannot
be used for the current operation
-1840
The database '%1' cannot be used for
the SQL Anywhere Cockpit
-1873
Unable to finish upgrade the SQL Any-
where Cockpit when it is not active

-1857
RESTORE unable to find a log backup
on the latest timeline
-1836
Invalid cockpit parameter
-1835
%2 error occurred while trying to read
file %1 during backup
-1834
Unable to start specified database:
Cannot use log file '%1' since the time-
line does do not match the timeline of
the database file
-1832
Cannot specify read only in both the
READ ONLY clause and the USING
clause
-1831
Mutex "%1" is locked by another con-
nection
-1830
User owns locked mutexes
-1826
PIVOT error: only one aggregate func-
tion can be specified without an alias

-1825
Cannot change the setting of the Use-
SingleJVMInstance server option after
Java has already been started
-1821
Start listener error: %1
-1820
Invalid ROW or ARRAY domain
-1819
Indirect identifier `[%1]` yielded an in-
valid identifier name '%2'

Sybase error code
SQL Anywhere SQLCODE
Message text
-1818
Indirect identifiers not supported
-1817
UNPIVOT error: An IN clause item does
not contain the same number of items
as the FOR clause
-1816
Invalid generated identifier '%1'
-1815
Unsupported use of ROW type in an
INTO clause
-1814
The variable in the INTO clause is not a
row type
-1813
Mutex "%1" was not locked by this con-
nection
-1812
Mutex "%1" with transaction scope can-
not be released
-1811
Invalid timeout value %1
-1810
Invalid increment value for semaphore
"%1": %2
-1809
Temporary mutex or semaphore can
only be dropped by the connection that
created it
-1808
Semaphore "%1" not found
-1807
Mutex "%1" not found
-1806
Deadlock involving a mutex detected

-1805
Semaphore was dropped
-1804
Mutex was dropped
-1803
Invalid start value for semaphore "%1":
%2
-1802
Cannot create mutex "%1" as a tempo-
rary mutex with this name already ex-
ists
-1801
Cannot create semaphore "%1" as a
temporary semaphore with this name
already exists
-1800
Cannot create semaphore "%1": %2
with this name already exists
-1799
Cannot create mutex "%1": %2 with this
name already exists
-1798
PIVOT error: An IN clause item does not
contain the same number of items as
the FOR clause

Sybase error code
SQL Anywhere SQLCODE
Message text
-1796
The OData server returned an error: %1

-1795
Expression of type %1 is not allowed in
this context (near: %2)
-1794
Table reference '%1' has been invali-
dated
-1793
Table reference types not supported

-1792
Invalid use of table reference type
-1790
Time zone option error: %1
-1789
Storing time zone information is not
supported for this database
-1788
Time zone '%1' not found
-1785
Invalid address parameter "%1" pro-
vided to stop a listener
-1783
Invalid address parameter "%1" pro-
vided to start a listener
-1782
Listener type "%1" failed to initialize
when starting a listener
-1781
The last HTTP or HTTPS listener cannot
be stopped without using the force pa-
rameter
-1780
No running shared memory listener
was found
-1779
Shared memory listener already started

-1778
Database upgrade not possible; user-
defined database option "%1" conflicts
with the system-defined database op-
tion with the same name
-1777
Database connection limit exceeded

-1776
%1 listener start option includes an un-
supported option: %2
-1775
%1 listener start option parse error: %2

-1774
OData Producer option error: %1
-1773
OData Producer '%1' not found
-1772
Storing OData Producers is not sup-
ported for this database

Sybase error code
SQL Anywhere SQLCODE
Message text
-1770
The USING LOG PATH clause must be
used in conjunction with the RECOVER
UNTIL clause
-1769
Cannot convert value to a timestamp

-1768
The last shared memory or TCPIP lis-
tener cannot be stopped without using
the force parameter
-1767
%1 listener for the address parameter
"%2" is not found
-1766
%1 listener binding failure for the ad-
dress parameter "%2"
-1765
The address parameter "%1" conflicts
with an existing %2 listener
-1764
REORGANIZE TABLE ran out of space

-1761
Host variables must not be used in this
context
-1797
Cannot drop the database's current
time zone
-1753
Transact-SQL expression in a non-
Transact-SQL statement near '%1' %2

-1749
The PAM User Authentication (PAMUA)
feature is not supported on this com-
puter
-1742
DBA password must be specified in the
CREATE DATABASE statement
-1741
DBA user ID must be specified in the
CREATE DATABASE statement
-1740
Cannot load encryption DLL %1: ver-
sion mismatch
-1739
Need a function entry point
-1738
Cannot create table '%1': Name is used
by a non-table object
-1737
Number of columns defined for the ta-
ble does not match SELECT statement

-1736
Debugger error: %1
-1735
Cursor %1 cannot be used to declare
a row variable using %ROWTYPE
Sybase error code
SQL Anywhere SQLCODE
Message text
-1734
Unable to declare a row variable from
the cursor using %ROWTYPE; no fields
were found in the cursor
-1733
Unable to declare a row variable from
the cursor using %ROWTYPE; invalid
name for field %1
-1729
Cannot create base table '%1': A global
temporary table with the same name
exists
-1730
Cannot create global temporary table
'%1': A base table with the same name
exists
-1731
Cannot set audit_log to the transaction
log: The transaction log is not enabled
for the database
-1732
Cannot update the audit_log option:
one or more of the specified targets is
invalid
-1728
Function '%1' has invalid parameter
'%2' ('%3')
-1727
Use of %TYPE or %ROWTYPE is not al-
lowed for variable or temporary objects

-1725
Failed to set up audit log session for
database '%1'
-1724
The variable '%1' must be %2 in this
context
-1723
The length of the variable '%1' is too
long in this context; it exceeds the limit
of %2 bytes
-1722
The variable '%1' must not be NULL in
this context
-1715
Invalid options for UPGRADE: SCRIPT
FILE can only be specified with RE-
START
-1716
Statement %1 disallowed during up-
grade from script
UltraLite performed database recovery
on startup
-1714
The dbmlsync server did not have suffi-
cient database permissions
-1709
Invalid DEFAULT value near '%1' on line
%2

Sybase error code
SQL Anywhere SQLCODE
Message text
-1710
Invalid value for INSERT near '%1' on
line %2
-1704
Remote column %1 has been specified
with the wrong case
-1703
The user name specified must be the
user name of the current connection

-1701
TDS login requests with RSA encrypted
passwords must also use a nonce
-1700
TDS login requests with unencrypted
passwords are not permitted
-1698
change_password_dual_control is ena-
bled for this user. Use ALTER USER to
change password
-1685
There was insufficient memory to com-
plete the %1 operation
-1686
Invalid parameter was used in the call
to %1
-1684
Trace target option '%1' conflicts with
option '%2'
-1687
The secure feature key name '%2' is not
valid in the call to %1
-1688
An invalid authorization code was
specified in the call to %1
-1683
Cannot change the mirror server type
from %1 to %2
-1689
An invalid secure feature list '%2' was
specified in the call to %1
-1680
Invalid variable or type
-1690
You are not authorized to assign the
feature list '%2' to a secure feature key
using %1
-1679
Error at offset '%1': mismatched object
or array terminator
-1691
You are not authorized to change the
secure feature key named '%2' using
%1
-1678
Error at offset '%1': expected JSON
name/value pair
-1692
Call to %1 failed - the maximum num-
ber of secure feature keys has already
been created

Sybase error code
SQL Anywhere SQLCODE
Message text
-1677
Error at offset '%1': expected token '%2'

-1693
Call to %1 failed - the secure feature key
named '%2' already exists
-1676
Error at offset '%1': invalid data
-1694
Call to %1 failed - the secure feature key
named '%2' does not exist
-1675
Error at offset '%1': unexpected trailing
text
-1695
Call to %1 failed - the authorization
code specified for the secure feature
key named '%2' is incorrect
-1674
Error at offset '%1': unexpected token
'%2'
-1696
Call to %1 failed - the key named '%2'
is the last key with the MANAGE_FEA-
TURES and MANAGE_KEYS features

-1673
A disk sandbox error occurred for data-
base '%1' when finding the full path for
file '%1'
-1672
A disk sandbox error occurred for da-
tabase '%1' when determining the disk
sandbox status for file '%2'
-1681
Procedure is currently being altered or
dropped
-1671
The file '%1' is invalid when the disk
sandbox feature is enabled for database
'%2'
-1666
Expression is not an array
-1665
Cannot change password because
change_password_dual_control proc-
ess is in progress
-1664
Prevented removal of LDAP server "%1"
because it is the only LDAP server and
the value of login_mode is "LDAPUA"

-1663
Prevented removal of LDAP server be-
cause it is referenced by login policy
"%1" which is the only login policy
with an LDAP server and the value of
login_mode is "LDAPUA"
-1659
File or directory %1 not found
Sybase error code
SQL Anywhere SQLCODE
Message text
-1660
Fail to compare %1 and %2
-1661
%1 is not a directory
-1662
%1 and %2 must not be the same
-1655
Invalid value for login policy option "%1"

-1640
Too many active trace event sessions

-1639
Database alter failed: %1
-1641
Trace event session '%1' already active

-1634
The specified session name '%1' is not
valid
-1642
One or more targets in the trace event
session '%1' failed to start
-1635
Trace event '%1' already exists
-1643
Trace event session '%1' failed to start

-1638
Too many arguments for trace event
'%1'
-1644
Trace event session '%1' is already stop-
ped
-1637
Trace event session '%1' is active. Stop
active session before dropping the ses-
sion
-1645
Trace event session '%1' already has
trace event '%2'
-1633
Trace event '%1' is not valid
-1646
The specified target type '%1' is not
valid
-1647
Unknown option '%1' specified for tar-
get type '%2'
-1632
Dropping or altering arbiter "%1" re-
quires a connection to the partner

-1631
Use of table privilege '%1' is not sup-
ported on the current database
-1648
The option '%1' was not specified for
target type '%2'

Sybase error code
SQL Anywhere SQLCODE
Message text
-1636
Trace event '%1' is referenced by one
or more sessions. Drop referencing ses-
sions first
-1649
Trace event session '%1' already has
target type '%2'
-1650
Trace event session '%1' does not have
trace event '%2'
-1629
Only one IDENTIFIED BY value may be
specified
-1651
Trace event session '%1' does not have
target type '%2'
-1652
Trace event session '%1' already exists

-1627
TLS ON cannot be used with URL %1

-1625
The UltraLite database deploy file is in-
valid (code: %1, file: %2)
-1624
The length of the value specified is too
long, it exceeds the limit of %1 bytes

-1623
The search on LDAP server %1 com-
pleted with no matching results
-1622
Bind to LDAP server %1 without a pass-
word is not allowed
-1621
LDAP server %1 may not accept anony-
mous binds
-1620
The value specified is not within the re-
quired range %1 to %2
-1617
The %1 remote data access class is
no longer supported, please use %2 in-
stead
-1613
Tag ID: '%1' specifies a value not
bounded by an array
-1612
Cannot ALTER LDAP SERVER '%1' while
LDAP server is in active state
-1611
Unable to copy file %1
-1610
Unable to create directory %1
-1609
File %1 already exists
-1608
Unable to delete file %1

Sybase error code
SQL Anywhere SQLCODE
Message text
-1607
Outer references are not allowed for
TPF input tables
-1605
Table Parameterized Functions and V4
TableUDFs are not supported for this
database
-1606
Multiple table parameters are not sup-
ported
-1603
The search using '%1' failed due to one
or more invalid values set
-1602
The specified distinguished name '%1'
does not match the search result '%2'

-1601
Password encryption failed. Error mes-
sage '%1'
-1600
The bind to URL '%1' failed. The most
recently reported LDAP API error is:
'%2'
-1599
Invalid use of collection type
-1598
Array element error: array index '%1' is
out of range
-1597
The transaction may not be committed
because the primary server lost quo-
rum
-1596
Database contains users with 'SYS_'
prefix and '_ROLE' suffix
-1594
LDAP server definition of "%1" is in-
complete. A search URL, access distin-
guished name, password, and authenti-
cation URL are required
-1593
Unable to copy file %1 to destination
%2
-1592
Text indexes on materialized views are
not supported for this database
-1591
Invalid use of BEFORE operator in text
query
-1590
You cannot use a security token when
making remote connections
-1589
Certificate '%1' not found
-1588
The specified certificate is not valid

-1587
Storing certificates is not supported for
this database

Sybase error code
SQL Anywhere SQLCODE
Message text
-1586
Error modifying refresh type for text
index "%1" on materialized view "%2"

-1585
Invalid tool name or admin user for gen-
erating security token
-1584
Unable to load the dbrsakp shared ob-
ject
-1582
Server name can only be specified
when connecting to a cloud database
server with NODETYPE=DIRECT
-1581
Database name must be specified when
connecting to a cloud database server

-1580
Failed to load the MobiLink client sup-
port libraries
-1579
External procedures or functions are
not allowed across server types
-1578
Table parameterized functions are not
allowed across server types
-1576
LDAP server "%1" is in use by login pol-
icy "%2"
-1574
You must upgrade your database in or-
der to use the MIRROR server class

-1573
MIRROR server class is not supported
for SAP IQ databases
-1572
LDAP User Authentication feature is not
supported in this database
-1571
The attempt to drop LDAP server "%1"
failed, suspend the server to drop it

-1570
Attempt to allocate memory for LDAP
server "%1" failed
-1569
LDAP Server "%1" already exists
-1567
External environment cannot be
started, external process terminated on
start up
-1566
Cannot drop a role that owns external
environment objects in runtime server


Sybase error code
SQL Anywhere SQLCODE
Message text
-1565
Cannot drop a role that owns web serv-
ices in runtime server
-1564
Cannot drop a role that owns events in
runtime server
-1563
Cannot drop a role that owns sequen-
ces in runtime server
-1562
The role '%1' was not dropped because
it is granted to other users or roles. Use
the 'WITH REVOKE' option to drop it

-1561
Use of WITH DROP OBJECTS is not al-
lowed with '%1'
-1560
Specified role '%1' is a user extended as
role
-1559
Specified role '%1' is not a user ex-
tended as role
-1558
Specified user '%1' is a role
-1557
External environment cannot be started
during database startup
-1556
External environment failed to start and
establish a connection within the %1
second timeout
-1555
Statement not allowed on text index for
a materialized view
-1554
Specified LDAP server '%1' is not found

-1553
Cannot perform specified operation,
set user condition violated
-1552
Invalid text index type for the material-
ized view
-1551
Login redirection is required to com-
plete the connection, but it is not sup-
ported by the client
-1541
Specified System Privilege '%1' is Inva-
lid
-1540
Operation would cause a role cycle

-1539
Use of WITH NO SYSTEM PRIVILEGE
INHERITANCE option is not allowed
with %1
-1538
User or Role ID '%1' does not exist

-1537
Role "%1" already exists

Sybase error code
SQL Anywhere SQLCODE
Message text
-1536
Invalid user ID or role name '%1' speci-
fied
-1535
System Privileges and Roles feature is
not supported in this database
-1532
Failed to transform point %1 (error %2)

-1531
Geometry expressions cannot be used
in the ORDER BY specification (near
'%1')
-1530
Format '%1' is not supported in the UN-
LOAD statement
-1529
Outer reference not permitted in DML
derived table
-1528
No more role grant permitted
-1527
Task '%1' is not allowed
-1525
Cannot perform specified operation,
number of administrators for role '%1'
falls below min_role_admins option
value
-1526
Text index %1 cannot be used with text
procedure %2
-1522
Database needs to be upgraded to sup-
port the use of external libraries with
text indexes
-1516
The intermediate point (%3) of the
ST_CircularString segment between %1
and %2 is collinear with but not be-
tween the start and end points
-1515
Support for spatial is not available for
this CPU
-1512
Text index with external prefilter cannot
contain both binary and string columns

-1511
Text indexes are not allowed across
server types
-1509
The materialized view cannot be
changed to immediate because the pri-
mary key columns of any table in the
preserved side of an OUTER JOIN must
exist in the SELECT list

Sybase error code
SQL Anywhere SQLCODE
Message text
-1508
The materialized view cannot be
changed to immediate because at least
one non-nullable column from any null-
supplying side of an OUTER JOIN must
exist in the SELECT list
-1507
The materialized view cannot be
changed to immediate because the ON
conditions refer to tables which are
not in the null-supplying and preserved
sides of the OUTER JOINs
-1506
Unknown collation '%1'
Database contains no tables to syn-
chronize
-1398
VERIFY and RENAME cannot be used
together
-1787
CATALOG ONLY and MULTIPLEX can-
not be used together
Using temporary table
-1510
Cannot specify range that excludes
next value for sequence %1
-1491
CircularString with 3 points has been
converted to use 5 points
-1490
Polygon ring order has been reoriented

-1489
Position %1 is invalid (should be be-
tween %2 and %3)
-1488
Invalid polygon: ring is larger than al-
lowed for SRID=%1 (near '%2')
-1487
Invalid polygon: curve is not a ring

-1486
Invalid polygon: ring has zero area (near
'%1')
-1485
Invalid polygon: ring is not closed (near
'%1')
-1484
Value %1 out of range for coordinate
%2 (SRS bounds [%3, %4] exceeded
by more than 50%)
-1483
LineString must contain at least 2
points (near '%1')
-1482
Curve contains nearly antipodal points
%1 and %2 (near '%3')
-1480
An internal error has occurred in the
spatial library

Sybase error code
SQL Anywhere SQLCODE
Message text
-1479
An expression of type %1 is not union-
compatible with type %2
-1478
ST_Geometry arguments not sup-
ported by SQL function %1
-1477
The SRID %1 does not identify a geo-
graphic spatial reference system
-1476
SRID %1 is referenced by domain
"%3"."%2"
-1475
SRID %1 is referenced by parameter
'%2' of procedure '%3'
-1474
SRID %1 is referenced by column '%2'
of table '%3'
-1473
Spatial unit of measure "%1" is reserved

-1472
Spatial reference system "%1" is re-
served
-1471
Spatial reference system %1 cannot be
modified because it is in use
-1470
Invalid storage format '%1'
-1469
The specified polygon format '%1' is not
supported for this type of spatial refer-
ence system
-1468
The specified axis order is not sup-
ported for this type of spatial reference
system
-1467
Coordinate bounds missing for coordi-
nate %1
-1466
Ellipsoid parameters specified for non-
geographic spatial reference system

-1465
Ellipsoid parameters missing for geo-
graphic spatial reference system
-1464
The spatial reference system type is not
supported ('%1')
-1463
Error parsing definition string '%1'

-1462
Spatial reference system must specify
the SRID to use
-1461
Spatial reference system '%1' already
exists

Sybase error code
SQL Anywhere SQLCODE
Message text
-1460
Unit of measure '%1' already exists

-1459
Spatial reference system '%1' not found

-1458
Unit of measure '%1' not found
-1457
The string '%1' is not a valid coordinate
name
-1456
The string '%1' is not a valid axis order

-1455
The CONVERT USING clause must be
specified when creating a unit of meas-
ure
-1454
Spatial column '%1' cannot be included
in an index because it is not constrained
to a single SRID
-1453
Spatial column '%1' cannot be included
in a primary key or unique index
-1452
Table '%1' contains a spatial column
'%2' and no primary key
-1451
Invalid polygon: multiple exterior rings

-1450
Invalid polygon nesting
-1449
Invalid polygon: no exterior ring
-1448
Invalid polygon format '%1'
-1447
Unit of measure "%1" is not an angular
unit
-1446
Unit of measure "%1" is not a linear unit

-1445
Transform from SRID %1 not supported

-1444
Transform from SRID %1 to %2 not
supported
-1443
Transform definition is too long
-1442
Invalid transform definition '%1'
-1441
Invalid spatial reference system well-
known-text (WKT)
-1440
The comparison '%1' cannot be used
with geometries

Sybase error code
SQL Anywhere SQLCODE
Message text
-1439
Invalid configuration name %1
-1438
Error reading configuration file
-1505
Mirror server "%1" defined with type
COPY does not include a parent defini-
tion
-1436
A geometry with SRID=%1 is not sup-
ported when computing distance be-
tween non-point geometries
-1435
A geometry with SRID=%1 is not sup-
ported for method %2
-1434
The data is not in a recognized format

-1433
The value '%2' is not a valid setting
for the '%1' format specification option

-1432
The format specification option '%1' is
not recognized
-1431
The format specification syntax is inva-
lid
-1430
An input string in '%1' format cannot be
used here
-1429
The format type '%1' cannot be used
here
-1428
The format type '%1' is not recognized

-1427
The embedded SRID are inconsistent
(%1 and %2)
-1426
The embedded SRID (%1) conflicts with
the provided SRID (%2)
-1425
The multi patch shapefile shape is not
supported
-1424
Invalid shapefile filename
-1423
Error parsing shapefile attributes
-1422
Error parsing shapefile record
-1421
Error parsing well-known-binary (WKB):
invalid byte order mark %1 at offset %2


Sybase error code
SQL Anywhere SQLCODE
Message text
-1420
Error parsing well-known-binary (WKB):
inconsistent dimensions at offset %1

-1419
Error parsing well-known-binary (WKB):
unexpected end of input
-1418
Error parsing well-known-binary (WKB):
type code %1 at offset %2 is not a valid
subtype of the parent
-1417
Error parsing well-known-binary (WKB):
type code %1 at offset %2 is invalid

-1504
Error from external library: -%1: %2

-1415
Error parsing geometry internal seriali-
zation at offset %1
-1414
Error parsing well-known-text (WKT):
inconsistent dimensions at offset %1

-1413
Spatial feature %1 is not supported

-1412
Support for spatial is not available for
this database
-1411
Cannot convert from %1 to %2 (near
%3)
-1410
An ST_CircularString cannot be con-
structed from %1 points (near '%2')

-1409
Unknown spatial reference system (%1)

-1408
Mixed coordinate dimensions
-1407
Error parsing well-known-binary (WKB)
at offset %1
-1406
Error parsing well-known-text (WKT)
scanning '%1' at offset %2
-1405
Failed to transform geometry (error %1)

-1404
Unknown unit of measure '%1'
-1403
Non-contiguous curves near '%1'
-1402
Mixed spatial reference systems %1 and
%2 (near %3)

Sybase error code
SQL Anywhere SQLCODE
Message text
-1401
Element is an empty set (near '%1')

-1400
Point is duplicated %1
-1399
Invalid intersection matrix '%1'
-1397
The definition of temporary table '%1'
has changed since last used
-1395
Invalid external term breaker name
specified
-1394
Invalid external prefilter name specified

-1393
Error initializing external term breaker

-1392
Unique indexes with the clause WITH
NULLS NOT DISTINCT are not sup-
ported for this database
-1396
Error initializing external prefilter
-1389
The value for the stoplist cannot be
NULL
-1390
An incremental refresh is not possible
when handles are exhausted
-1388
Failed to start the dbmlsync server.
Check the dbmlsync log file for more
details
-1391
Invalid stoplist value
-1387
Failed to shut down the dbmlsync
server. Check the dbmlsync log file for
more details
-1386
Failed to connect to the dbmlsync
server. Check the dbmlsync log file for
more details
-1385
Synchronization failed. Check the
dbmlsync log file for more details
-1384
Unable to stop specified database: %1

-1383
The licensed maximum number of mir-
ror servers with type COPY has been
exceeded
-1382
Download failed due to an invalid or un-
supported row value

Sybase error code
SQL Anywhere SQLCODE
Message text
-1381
Database server name '%1' cannot be
the same as either the primary or mir-
ror server
-1380
Client redirected more than once
-1373
Synchronization failed with internal er-
ror: %1
-1372
The server is not able to establish
TCP/IP connections
-1374
Synchronization failed. Check the re-
sults of the call to sp_get_last_syn-
chronize_result( %1 ) for more informa-
tion
-1371
The materialized view cannot be
changed to immediate because the ON
conditions must refer to both sides of
the OUTER JOIN
-1375
Failed to start the dbmlsync server

-1376
Failed to connect to the dbmlsync
server
-1370
Text queries cannot contain more than
300 terms
-1369
Sequence generators are not supported
for this database
-1377
The SYNCHRONIZE statement timed
out
-1378
The database server failed to shut down
the dbmlsync server
-1367
User owns sequences in use
-1379
The dbmlsync server failed to shut
down in a timely manner
-1366
Sequence '%1' in use by another con-
nection
-1503
Operation not supported for ST_Geo-
mCollection with intersecting elements
(near "%1")
-1492
Could not create a text index without
external prefilter library on column "%1"

-1363
The 'currval' operator is not defined yet
for sequence '%1' for this connection


Sybase error code
SQL Anywhere SQLCODE
Message text
-1362
Cannot treat value '%1' as type %2. The
dynamic type is %3
-1361
TREAT AS can only be used with ex-
tended types. Cannot treat %1 as a %2

-1360
Cannot assign automatic mirror server
parent
-1357
Multiple settings of same option speci-
fied for sequence '%1'
-150
Invalid use of an aggregate function

-1356
Definition for sequence '%1' is invalid

-1355
No more values available in sequence
%1
-1352
Mirror server with type '%1' is already
defined
-1354
Sequence '%1' already exists
-1351
Mirror child server creation failed
-1353
Invalid operation '%2' on sequence '%1'

-1350
The parent of this mirror server is not
the primary server
-1358
Sequence name '%1' is ambiguous

-1349
The parent of this mirror server is not
currently connected
-1359
Sequence '%1' not found
-1348
Mirror server name '%1' does not
match current server name
-1493
Could not create a text index with ex-
ternal prefilter library on column "%1"

-1344
Rollback occurred due to blocking_oth-
ers_timeout
-1343
Feature '%1' is locked because synchro-
nization is in progress
-1342
Data modifications are not allowed in a
synchronization schema change
Sybase error code
SQL Anywhere SQLCODE
Message text
-1341
The instantiation '%1' does not match
an overload (near '%2'). Available over-
loads are '%3'
-1340
Type '%1' cannot be instantiated with
%2 arguments (near '%3')
-1339
Method '%1' cannot be called with %2
arguments (near '%3')
-1338
Type '%1' is not instantiable (near '%2')

-1337
Method invocation '%1' does not match
an overload (near '%2'). Available over-
loads are '%3'
-1336
Type '%1' has no method named '%2'
(near '%3')
-1335
Type '%1' does not support method
calls (near '%2')
-1334
Feature '%1' is locked by another con-
nection
-1333
Feature '%1' was not locked by this con-
nection
-1332
Feature '%1' is unknown or invalid
-1331
The function '%1' requires the use of
the '%2' clause
-1330
The function '%1' does not allow use of
the '%2' clause
-1329
This operation is only allowed within a
synchronization schema change
-1328
Table '%1' must synchronize to be in
publication '%2'
-1327
The materialized view cannot be
changed to immediate because its SE-
LECT list contains a SUM function over
a nullable expression and it doesn't
contain a COUNT function over the
same expression
-1326
Subscription '%1' not found
-1325
Column subset for table '%1' in publica-
tion '%2' does not match that specified
in publication '%3'
-1324
Connection is not allowed to have table
locks when executing this statement


Sybase error code
SQL Anywhere SQLCODE
Message text
-1323
Subscription to publication '%1' for '%2'
omitted from statement
-1322
A synchronization schema change is al-
ready in progress
-1321
Table or view '%1' is not valid for use
with this statement
-1319
Synchronization schema changes and
script versions are not supported for
this database
-1318
More articles are being dropped from
publication '%1' than are defined
-1315
Script file missing statement "go" de-
limiter on a separate line
-1314
Cannot force failover when current
server is marked as preferred
-1267
Event parameter '%1' not found
-1266
No notification within timeout on queue
'%1'
-1265
Event object named '%1' already exists

-1264
Event object name '%1' is not valid

-1263
Event notification queue '%1' not found

Event notification queue '%1' not found
warning
Event notifications lost on queue '%1'

-1269
Service statement definition is invalid
or unsupported
-1262
This edition of SQL Anywhere is not
available on this platform
-1261
This server is not licensed to support
'%1' connections
-1260
This server is not licensed to support
the '%1' feature
Two rows with the same primary key
have been downloaded for table '%1'

-1259
Hash error: %1

Sybase error code
SQL Anywhere SQLCODE
Message text
-1254
MERGE statement for table '%1' failed
because of a RAISERROR specification
in the statement
-1253
The text index %1 needs to be refreshed

-1151
The logging type ( '%1' ) specified is
invalid, not supported or incompatible

-1313
Maximum string length exceeded
-1312
Mirror server "%1" is not a valid parent
server
-1244
An attempt to decrypt database '%1'
failed
-1243
An attempt to encrypt database '%1'
failed
-1241
Value-sensitive cursor used after a
TRUNCATE
Mirror file requires higher check-
sum_level
Retrying read of corrupt page (page
'%1')
UltraLite database state was restored

-1240
The provided stoplist is too long
-1311
Principal mirror servers are already de-
fined
-1237
Too many columns in procedure result
set
-1236
Too many expressions in GROUP BY list

-1235
Too many columns in SELECT list
-1233
The materialized view %1 cannot be
changed to immediate because it does
not have a unique index on non-nullable
columns
-1232
Attempt to start a second snapshot in a
transaction
-1231
Statement timed out: '%1'
-1230
Too many open cursors

Sybase error code
SQL Anywhere SQLCODE
Message text
-1229
Reorganize table is already being run on
table "%1"
-1226
Foreign key columns do not match the
primary key or a uniqueness constraint
in "%1"
-1225
Synchronization profiles are not sup-
ported for this database
-1224
Synchronization profile '%1' has invalid
parameter '%2'
-1223
Synchronization profile '%1' already ex-
ists
-1221
Duplicate options not allowed in CRE-
ATE DATABASE
-1216
The arguments to this procedure must
be literal strings
-1219
Maintenance of dependent immediate
materialized view(s) failed
-1218
The materialized view cannot be
changed to immediate because it does
not have a unique index on non-aggre-
gate, non-nullable columns
-1220
User cannot be dropped because exter-
nal logins exist for this user
-1213
External environment does not support
result sets
-1217
Synchronization profile '%1' not found

-1212
Connection disallowed by login policy
for this user
-1211
MERGE statement ANSI cardinality vio-
lation on table '%1'
-1207
Invalid use of NEAR operator in text
query
-1206
External environments are not sup-
ported for this database
-1205
External environment '%1' could not be
found
-1204
INSERT...ON EXISTING UPDATE not al-
lowed: immediate materialized view %1
depends on %2
-1203
WRITETEXT not allowed: immediate
materialized view %1 depends on %2


Sybase error code
SQL Anywhere SQLCODE
Message text
-1202
Operation not allowed on a table
with dependent immediate materialized
views
-1201
Client library reported an error opening
object ('%1') during transfer
-1200
Client library reported a permissions
error accessing object ('%1') during
transfer
-1199
The materialized view cannot be
changed to immediate because
COUNT(*) must be part of the SELECT
list
-1198
User "%1" already exists
-1197
Login policy "%1" in use
-1196
Login policies are not supported for this
database
-1195
Login policy "%1" not found
-1194
Login policy "%1" already exists
-1193
TRUNCATE TABLE not allowed: initial-
ized immediate materialized view %1
depends on %2
-1192
Cannot update multiple tables immedi-
ate materialized view %1 depends on

-1191
LOAD TABLE not allowed: initialized im-
mediate materialized view %1 depends
on %2
-1190
LOAD TABLE is not allowed on a materi-
alized view %1
-1189
The UTF-16 endian specified does not
match the Byte Order Mark found in the
data
-1188
LOAD TABLE error: %1
-1187
Cannot append when using compres-
sion or encryption
-1186
Database page validation failed with
code: %1
-1185
Index validation failed for table %1, in-
dex %2 with code: %3
-1184
Cannot drop last unique index of an im-
mediate materialized view

Sybase error code
SQL Anywhere SQLCODE
Message text
-1183
Support for permissions on dbspaces
is not available for this database
-1182
Statement not allowed on IMMEDIATE
REFRESH text index
-1181
The materialized view cannot be
changed to immediate because its defi-
nition must not contain more than one
query block
-1180
Cannot set database option "%1" be-
cause it is on the options watch list

-1178
Transaction log mirroring cannot be
used with database mirroring
-1175
Unable to acquire table locks in speci-
fied time
-1174
Cannot create text configuration '%1'
because option '%2' has an inappropri-
ate setting
-1173
Client library reported an error access-
ing data during transfer ('%1')
-1172
Client application disallowed the trans-
fer of data ('%1')
-1171
Client application does not allow trans-
fer of data ('%1')
-1170
The materialized view %1 cannot be
changed to immediate because it has
already been initialized
-1169
Cannot access a table that is part of a
text index
-1168
Cannot alter or drop a text configura-
tion referenced by a text index
-1167
Cannot drop a user that owns text con-
figurations
-1166
Text indexes are not supported for this
database
-1165
Error creating text index "%1" on table
"%2"
-1164
Text query parser error: %1
-1163
Invalid collation: "%1"

Sybase error code
SQL Anywhere SQLCODE
Message text
-1162
Term length outside allowed range

-1161
Text configuration "%1" already exists

-1160
Text configuration "%1"."%2" not found

-1159
Non-constant or unknown text query
string
-1158
No matching text index
-1157
All column reference arguments must
refer to the same table
-1156
Argument "%1" must be a column refer-
ence
-1155
Unable to close the cursor on table
"%1". LOAD TABLE cannot be executed

-1154
Traced query (%1, %2) does not exist

-1153
Password has expired but cannot be
changed because the database is read-
only
-1152
Password has expired
-1150
The SQL scripts DLL cannot be loaded

-1148
Feature not supported by the client ver-
sion or the client interface
-1310
Mirror server "%1" is referenced by an-
other server
-1309
Mirror server "%1" already exists
-1146
LOAD TABLE not allowed on temporary
table which has foreign key references
from another table
-1145
Unable to connect: The server did not
accept the requested encryption type

-1144
'%1' cannot be used as the encoding
specification for '%2' data
Encryption has not been enabled
-1143
Encryption has not been enabled
Sybase error code
SQL Anywhere SQLCODE
Message text
-1142
Use of statement '%1', which requires
feature '%2', is not allowed
-1141
Unable to start database "%1": NCHAR
collation or tailoring not supported on
this platform
-1140
Unable to start database "%1": CHAR
collation or tailoring not supported on
this platform
-1139
The remote data access feature is not
supported on this platform
-1138
The mirror '%1' does not match data-
base '%2'
-1137
Escape character conflict '%1'
-1136
Invalid use of escape character '%1'

-1135
Invalid regular expression: %1 in '%2'

-1134
Triggers cannot be created on material-
ized view '%1'
-1133
Invalid trigger type for view '%1'
-1132
Maximum row size for table '%1' would
be exceeded
-1131
The attribute '%1' sets an option '%2'
that is incompatible with '%3'
-1130
The '%1' attribute is missing a comma
within '%2'
-1129
The '%1' attribute contains mismatched
parentheses within '%2'
-1128
Start date/time for non-recurring event
'%1' is in the past
-1127
Positioned update operation attempted
on a view with an INSTEAD OF trigger

-1126
Operation failed because table or view
'%1' has an INSTEAD OF trigger
-1125
Conflicting INSTEAD OF trigger and
WITH CHECK OPTION on view '%1'

-1124
The dbicu library and server versions do
not match

Sybase error code
SQL Anywhere SQLCODE
Message text
-1123
Invalid mime type '%1'
-1122
Exceeded maximum of '%1' allowable
parameters
-1121
Not enough free space on device
to grow dbspace '%1' by requested
amount
-1120
The dbspace '%1' cannot be dropped
because it contains tables or indexes

-1119
The '%1' property is no longer sup-
ported
-1118
Cannot change the MobiLink remote ID
when the status of the last upload is
unknown
-1117
A row cannot be stored because it ex-
ceeds the database page size
The ICU collation '%1' has defaulted to
another collation
-1116
Collation '%1' not supported on this
platform
-1115
Table '%1' contains an invalid reference
to the ROWID function
-1114
Invalid setting for SOAP header '%1'

-1113
Correlation name '%1' is not valid for
use with the ROWID function
-1112
Specified file system volume not found
for database '%1'
-1111
Information for synchronization was not
provided
-1110
UltraLite cannot synchronize because
a synchronization is already running

-1109
Unable to perform requested operation
since this database uses keyless en-
cryption
-1108
Unable to access the file system on the
device
-1107
Too many references to a BLOB
-1106
Too many publications specified for op-
eration

Sybase error code
SQL Anywhere SQLCODE
Message text
-1308
Mirror server "%1" not found
-1104
Too many users in database
-1103
No partial download was found
-1102
Unable to retry download because up-
load is not finished
-1101
Column '%1' not part of any indexes in
its containing table
-1100
The operation failed because column
'%1''s type does not support streaming

Option '%1' specified more than once

-1099
Transact-SQL outer joins are currently
disabled
-1098
A tracing connection is already active

Invalid floating point value detected in
internal point computation

#### 1.1.4 SQL Anywhere Error Messages Listed by Message Text

#### 1.1.4.1 %1

%1
Error constant
SQLE_OMNI_DEBUG
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The debug message for the console.
Severity
SQLCODE
-682
SQLSTATE
WO010
Sybase error code
Probable cause
This message is used for displaying component integration services debug messages in the messages window.

#### 1.1.4.2 %1 and %2 must not be the same

SQLE_SAME_SOURCE_TARGET
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The source file or directory name
Parameter 2
The target file or directory name
Severity
SQLCODE
-1662
SQLSTATE
08WC3
Sybase error code

Probable cause
You attempted to perform an operation using the same source and target file or directory.

#### 1.1.4.3 '%1' cannot be used as the encoding specification for '%2' data

Error constant
SQLE_INVALID_OPENSTRING_ENCODING
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The encoding that has been specified
Parameter 2
The data type for which the encoding has been specified
Severity
SQLCODE
-1144
SQLSTATE
WC017
Sybase error code
Probable cause
The specified encoding cannot be used for interpreting the given data. For CHAR data, the encoding must be
the database's CHAR character encoding and for NCHAR data, it must be the database's NCHAR character
encoding.

#### 1.1.4.4 '%1' cannot be used as the NCHAR collation: only UCA and UTF8BIN may be used

SQLE_INVALID_NCHAR_COLLATION
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The collation that cannot be used as the NCHAR collation.
Severity
SQLCODE
-1073
SQLSTATE
WC010
Sybase error code

Probable cause
The specified collation cannot be used as the NCHAR collation. NCHAR always uses UTF-8, so the collation
must be either UCA or UTF8BIN.

#### 1.1.4.5 %1 does not return a result set

Error constant
SQLE_NO_RESULT_SET
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the procedure.
Severity
SQLCODE
-872
SQLSTATE
WP014
Sybase error code
Probable cause
A procedure called in the FROM clause of a SELECT statement must return a result set.

#### 1.1.4.6 '%1' for CREATE INDEX statement not supported in BEGIN PARALLEL WORK...END PARALLEL WORK statement

PARALLEL_CREATEINDEX_TABLE_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specified table or materialized view name.
Severity
SQLCODE
-1943
SQLSTATE
0AW40
Sybase error code

Probable cause
The specified table or materialized view name for the CREATE INDEX statement is not supported when the
statement is in the BEGIN PARALLEL WORK..END PARALLEL WORK statement.

#### 1.1.4.7 '%1' is an invalid value for '%2'

Error constant
SQLE_INVALID_OPTION_VALUE
ODBC 2 state
ODBC 3 state
Parameter 1
The invalid value.
Parameter 2
Name of the option.
Severity
SQLCODE
-1053
SQLSTATE
42W85
Sybase error code
Probable cause
You supplied an invalid value for an option. Some options only allow numeric values and some options only
allow true or false. Also, many options do not permit the empty string as a value.

#### 1.1.4.8 '%1' is an unknown character set encoding label

Error constant
SQLE_UNKNOWN_CHARSET
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The character set encoding label that is not recognized.

Severity
SQLCODE
-868
SQLSTATE
WC001
Sybase error code
Probable cause
The specified character set label is not recognized, so conversion from/to that character set is not possible.

#### 1.1.4.9 '%1' is an unknown option

Error constant
SQLE_UNKNOWN_OPTION
ODBC 2 state
ODBC 3 state
Parameter 1
The option that is unknown to the server.
Severity
SQLCODE
SQLSTATE
01W17
Sybase error code
Probable cause
You attempted to set the value of an option that is not known to the server.

#### 1.1.4.10 '%1' is an unknown property

Error constant
SQLE_UNKNOWN_PROPERTY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The property name (or ID).
Severity
SQLCODE
-1498
SQLSTATE
WU001
Sybase error code
Probable cause
The specified property is unknown.

#### 1.1.4.11 '%1' is an unrecognized service type

SQLE_UNKNOWN_SERVICE_TYPE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The service type that is unrecognized.
Severity
SQLCODE
-916
SQLSTATE
42W94
Sybase error code
Probable cause
An unrecognized service type was specified.

#### 1.1.4.12 %1 is not a directory

Error constant
SQLE_NOT_A_DIRECTORY
ODBC 2 state
ODBC 3 state
Parameter 1
The path name that is not a directory
Severity
SQLCODE
-1661
SQLSTATE
08WC2
Sybase error code
Probable cause
Failed to perform an operation using directory name.

#### 1.1.4.13 '%1' is not a known file format for loading or unloading tables

unloading tables
Error constant
SQLE_UNSUPPORTED_LOAD_FORMAT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specified format.
Severity
SQLCODE
-601
SQLSTATE
WL001
Sybase error code
Probable cause
An unsupported file format was specified for LOAD TABLE or UNLOAD TABLE.

#### 1.1.4.14 '%1' is not a valid character set encoding for use with collation '%2'

collation '%2'
Error constant
SQLE_INVALID_ENCODING_FOR_COLLATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The character set encoding that is invalid.
Parameter 2
The collation for which the character set encoding is invalid.
Severity
SQLCODE
-1072
SQLSTATE
WC009
Sybase error code
Probable cause
The specified character set cannot be used with the specified collation.

#### 1.1.4.15 '%1' is not a valid class file

SQLE_BAD_CLASS_FILE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the invalid file.
Severity
SQLCODE
-92
SQLSTATE
WP002
Sybase error code
Probable cause
A file passed to the INSTALL JAVA statement was not a valid Java class file.

#### 1.1.4.16 %1 listener binding failure for the address parameter "%2"

"%2"
Error constant
SQLE_START_LISTENER_BIND_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The listener type
Parameter 2
The listener address parameter
Severity
SQLCODE
-1766
SQLSTATE
08WD2
Sybase error code
Probable cause
A binding error occurred on the listener provided.

#### 1.1.4.17 %1 listener for the address parameter "%2" is not found

found
SQLE_STOP_LISTENER_NOT_FOUND_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The listener type
Parameter 2
The listener address parameter
Severity
SQLCODE
-1767
SQLSTATE
08WD3
Sybase error code

Probable cause
You attempted to stop a listener that is not running.

#### 1.1.4.18 %1 listener start option includes an unsupported option: %2

option: %2
Error constant
SQLE_START_LISTENER_OPTION_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The listener type
Parameter 2
Error message
Severity
SQLCODE
-1776
SQLSTATE
08WD6
Sybase error code
Probable cause
You attempted to start a listener with an unsupported option. For example, the "PORT" option should not be
included in the options parameter to start a HTTP or HTTPS listener.

#### 1.1.4.19 %1 listener start option parse error: %2

SQLE_START_LISTENER_OPTION_PARSE_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The listener type
Parameter 2
Error message
Severity
SQLCODE
-1775
SQLSTATE
08WD5
Sybase error code

Probable cause
A parsing error occurred in the options for starting a listener.

#### 1.1.4.20 %1 returned a result set with a different schema than expected

than expected
Error constant
SQLE_BAD_RESULT_SET
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the procedure that returned the incorrect result set.
Severity
SQLCODE
-866
SQLSTATE
WP012
Sybase error code
Probable cause
When calling a procedure in the FROM clause of a SELECT statement, the expected schema of the result is
taken from the WITH clause. If no WITH clause is given, the expected schema is taken from the system catalog.
The result set returned from the call must match the expected schema or it must be possible to convert every
column so that it matches.

#### 1.1.4.21 %1 returned multiple result sets

SQLE_TOO_MANY_RESULT_SETS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the procedure.
Severity
SQLCODE
-873
SQLSTATE
WP013
Sybase error code

Probable cause
A procedure called in the FROM clause of a SELECT statement cannot return multiple result sets.

#### 1.1.4.22 '%1' statement is not allowed as a consumer

Error constant
STMT_NOT_ALLOWED_AS_CONSUMER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Statement that generates the error.
Severity
SQLCODE
-1978
SQLSTATE
HY000
Sybase error code
Probable cause
You attempted to execute a statement that is not allowed when being a consumer.

#### 1.1.4.23 '%1' statement is not allowed on a mirrored database

database
SQLE_STMT_NOT_ALLOWED_WITH_MIRRORING
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Statement that generates the error.
Severity
SQLCODE
-1288
SQLSTATE
WW120
Sybase error code

Probable cause
You attempted to execute a statement that is not allowed when using a mirrored database.

#### 1.1.4.24 %2 error occurred while trying to read file %1 during backup

backup
Error constant
SQLE_BACKUP_ERROR_READING_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the file on which read failed
Parameter 2
OS error thrown during the read operation
Severity
SQLCODE
-1835
SQLSTATE
WB018
Sybase error code
Probable cause
Read occurred error on transaction log file for a log backup cannot be opened

#### 1.1.4.25 (no message text)

SQLE_NOERROR
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
SQLSTATE
Sybase error code
Probable cause
This code indicates that there was no error or warning.

#### 1.1.4.26 A conflict with the dbmlsync download phase was detected

detected
Error constant
SQLE_RECORDING_CONFLICT_DETECTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-828
SQLSTATE
WW027
Sybase error code
Probable cause
Dbmlsync uses this error to detect download phase conflicts with rows modified by other connections.

#### 1.1.4.27 A CONTAINS query is not allowed on the view or derived table '%1'

derived table '%1'
Error constant
SQLE_TEXT_INVALID_VIEW_FOR_CONTAINS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the view or derived table that cannot be queried
with CONTAINS.
Severity
SQLCODE
-1283
SQLSTATE
WT020
Sybase error code
Probable cause
A query expression (a view or a derived table) can only be queried using CONTAINS predicates if it does not
use TOP, FIRST, LIMIT, or window aggregates in its nested query blocks. A query expression can only be queried
using CONTAINS in the FROM clause if it has one nested query block, and it does not use DISTINCT, GROUP
BY, TOP, FIRST, LIMIT, or window aggregates. In addition, the list of columns to search must all come from a
single query expression or base table in the FROM clause of each nested query block. If more than one text
index is used in the nested query blocks, they must have the same text configuration.

#### 1.1.4.28 A dbspace has reached its maximum file size

Error constant
SQLE_DBSPACE_FULL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-604
SQLSTATE
04W07
Sybase error code
Probable cause
A dbspace has grown to its maximum number of disk pages, which is usually limited by the maximum
operating system file size. This is a fatal error.

#### 1.1.4.29 A disk sandbox error occurred for database '%1' when determining the disk sandbox status for file '%2'

when determining the disk sandbox status for file
'%2'
Error constant
SQLE_DISKSANDBOX_UNABLE_TO_DETERMINE
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Parameter 1
The name of the database that could not determine the disk
sandbox status of the file.
Parameter 2
The name of the invalid file.
Severity
SQLCODE
-1672
SQLSTATE
57W07
Sybase error code
Probable cause
The file passed to the operation caused an error when determining the disk sandbox status.

#### 1.1.4.30 A disk sandbox error occurred for database '%1' when finding the full path for file '%1'

when finding the full path for file '%1'
SQLE_DISKSANDBOX_FULLPATH_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the database that could not find the full path of
the file.
Parameter 2
The name of the invalid file.
Severity
SQLCODE
-1673
SQLSTATE
57W08
Sybase error code
Probable cause
There was an error in finding the full path of the file that was passed to the operation.

#### 1.1.4.31 A fatal error has occurred in the profiler library

Error constant
PROFILER_FATAL_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2057
SQLSTATE
WI113
Sybase error code
Probable cause
A fatal error occurred in the profiler library.

#### 1.1.4.32 A geometry with SRID=%1 is not supported for method %2

method %2
SQLE_SLERR_ROUND_EARTH_UNSUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The SRID of the geometry.
Parameter 2
The name of the method that does not support this SRID.
Severity
SQLCODE
-1435
SQLSTATE
2FW28
Sybase error code

Probable cause
The named method does not support geometries in the specified spatial reference system. For example, the
method might not support round-Earth data.

#### 1.1.4.33 A geometry with SRID=%1 is not supported when computing distance between non-point geometries

computing distance between non-point geometries
Error constant
SQLE_SLERR_ROUND_EARTH_UNSUPPORTED_DIS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The SRID of the geometry.
Severity
SQLCODE
-1436
SQLSTATE
2FW29
Sybase error code
Probable cause
When operating with round-Earth data, distance between non-point geometries is not supported.

#### 1.1.4.34 A memory error occurred causing the profiler operation to fail

operation to fail
PROFILER_MEMORY_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2059
SQLSTATE
08W79
Sybase error code

Probable cause
A memory error occurred which caused the profiler operation to fail.

#### 1.1.4.35 A row cannot be stored because it exceeds the database page size

database page size
Error constant
SQLE_ROW_EXCEEDS_PAGE_SIZE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1117
SQLSTATE
WW083
Sybase error code
Probable cause
You attempted to insert or update a row which is too large to be stored on a database page. For UltraLite, with
the exception of BLOB columns, a row must fit entirely on a single database page. Larger page sizes may be
used to accommodate larger rows.

#### 1.1.4.36 A row was dropped because it could not be converted to the new schema format

converted to the new schema format
Error constant
SQLE_ROW_DROPPED_DURING_SCHEMA_UPGRADE
ODBC 2 state
OK
ODBC 3 state
OK
Severity

SQLCODE
SQLSTATE
01W21
Sybase error code
Probable cause
A row that was valid in the old schema is no longer valid. This could be because a column domain changed
and the old value cannot be cast to the new domain. Rows are also dropped if a uniqueness or foreign key
constraint cannot be satisfied.

#### 1.1.4.37 A schema upgrade is not currently allowed

SQLE_SCHEMA_UPGRADE_NOT_ALLOWED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-953
SQLSTATE
WW033
Sybase error code
Probable cause
A schema upgrade cannot proceed because of concurrent use of the database. For example, all cursors must
be closed before a schema upgrade can occur.

#### 1.1.4.38 A synchronization schema change is already in progress

progress
Error constant
SQLE_SYNC_SCHEMA_IN_PROGRESS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1322
SQLSTATE
WW140
Sybase error code
Probable cause
A START SYNCHRONIZATION SCHEMA CHANGE statement is already in progress.

#### 1.1.4.39 A thread used internally could not be started

SQLE_THREAD_START_FAILURE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-626
SQLSTATE
WW011
Sybase error code

Probable cause
This is a Windows 95 specific error. An operating system thread could not be started that is required to execute
external functions.

#### 1.1.4.40 A tracing connection is already active

Error constant
SQLE_TRACING_ALREADY_ATTACHED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1098
SQLSTATE
08W96
Sybase error code
Probable cause
This database is already participating in a tracing connection, either as the sender (the database being traced)
or as the receiver (the tracing database). A database can only send or receive one stream of tracing data at a
time.

#### 1.1.4.41 A user name must be specified if AUTHORIZATION is Off

Off
SQLE_SERVICE_REQUIRES_USER_NAME
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-918
SQLSTATE
42W96
Sybase error code

Probable cause
A valid user name must be specified if AUTHORIZATION is Off.

#### 1.1.4.42 A workload capture (%1) is already in progress

Error constant
SQLE_WORKLOAD_CAPTURE_ALREADY_EXISTS
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the workload capture that is already in prog-
ress.
Severity
SQLCODE
-942
SQLSTATE
WW029
Sybase error code
Probable cause
You have tried to initiate a workload capture when one is already in progress. You need to wait for the other
capture to complete.

#### 1.1.4.43 Address parameter "%1" is not supported to start a listener for the personal database server

listener for the personal database server
Error constant
SQLE_START_LISTENER_UNSUPPORTED_ADDRESS
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Parameter 1
The listener address parameter
Severity
SQLCODE
-1883
SQLSTATE
08WEG
Sybase error code
Probable cause
You attempted to start a listener with an unsupported IP address or port for the personal database server. The
personal database server only allows the loopback address 127.0.0.1 or (::1) when starting a listener.

#### 1.1.4.44 Aggregated expression '%1' contains multiple columns of which one or more are outer references

columns of which one or more are outer references
Error constant
SQLE_MULTIPLE_AGGREGATE_COLUMNS
ODBC 2 state
ODBC 3 state
Parameter 1
The aggregated expression in error.
Severity
SQLCODE
-861
SQLSTATE
42W68
Sybase error code
Probable cause
A subselect within the nested query contains an aggregate function whose parameters include an outer
reference. In such cases, the outer reference must be the only column referenced in the expression.

#### 1.1.4.45 Alias '%1' is not unique

Error constant
SQLE_ALIAS_NOT_UNIQUE
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Name of the alias.
Severity
SQLCODE
-830
SQLSTATE
42W60
Sybase error code
Probable cause
The same alias is used more than once in a SELECT list.

#### 1.1.4.46 All column reference arguments must refer to the same table

same table
SQLE_TEXT_TOO_MANY_TABLE_REFERENCES
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1157
SQLSTATE
WT002
Sybase error code

Probable cause
All column references in a CONTAINS query must refer to the same table.

#### 1.1.4.47 All threads are blocked

Error constant
SQLE_THREAD_DEADLOCK
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-307
SQLSTATE
40W06
Sybase error code
Probable cause
You attempted to read or write a row and it is locked by another user. Also, all other threads (see the -gn server
option) are blocked waiting for a lock to be released. This is a deadlock situation and your transaction has been
chosen as the one to rollback.

#### 1.1.4.48 ALTER clause conflict

Error constant
SQLE_ALTER_CLAUSE_CONFLICT
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Severity
SQLCODE
-125
SQLSTATE
53W01
Sybase error code
Probable cause
A primary key clause, foreign key clause, or a uniqueness clause must be the only clause of an ALTER TABLE
statement.

#### 1.1.4.49 An attempt to decrypt database '%1' failed

Error constant
SQLE_DECRYPT_DATABASE_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the database that could not be decrypted.
Severity
SQLCODE
-1244
SQLSTATE
WW119
Sybase error code
Probable cause
Your attempt to decrypt a database file failed.

#### 1.1.4.50 An attempt to delete database '%1' failed

Error constant
SQLE_DROP_DATABASE_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the database that could not be deleted.
Severity
SQLCODE
-651
SQLSTATE
WW017
Sybase error code
Probable cause
Your attempt to delete a database file failed. You may have attempted to delete a running database. Some parts
of the database may have been deleted before failure.

#### 1.1.4.51 An attempt to encrypt database '%1' failed

SQLE_ENCRYPT_DATABASE_FAILED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the database that could not be encrypted.
Severity
SQLCODE
-1243
SQLSTATE
WW118
Sybase error code

Probable cause
Your attempt to encrypt a database file failed.

#### 1.1.4.52 An expression of type %1 is not union-compatible with type %2

with type %2
Error constant
SQLE_SLERR_NOT_UNION_COMPAT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The type of expression 1.
Parameter 2
The type of expression 2.
Severity
SQLCODE
-1479
SQLSTATE
2FW72
Sybase error code
Probable cause
The two types cannot be combined, for example in a set operation such as UNION or in a SQL function such as
COALESCE.

#### 1.1.4.53 An incremental refresh is not possible when handles are exhausted

are exhausted
SQLE_TEXT_HANDLES_EXHAUSTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1390
SQLSTATE
WT024
Sybase error code

Probable cause
Incremental refresh of a MANUAL or AUTO REFRESH text index is not possible when handles are exhausted.
You need to rebuild the text index before you can use incremental refresh.

#### 1.1.4.54 An input string in '%1' format cannot be used here

Error constant
SQLE_SLERR_WRONG_FORMAT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid format.
Severity
SQLCODE
-1430
SQLSTATE
2FW23
Sybase error code
Probable cause
A string with the specified format cannot be used in this context.

#### 1.1.4.55 An internal error has occurred in the profiler library

PROFILER_INTERNAL_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2056
SQLSTATE
WI112

Sybase error code
Probable cause
You used a JWT provider name that does not exist.

#### 1.1.4.56 An internal error has occurred in the spatial library

Error constant
SQLE_SLERR_INTERNAL_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1480
SQLSTATE
2FW73
Sybase error code
Probable cause
An unexpected error occurred.

#### 1.1.4.57 An invalid authorization code was specified in the call to %1

call to %1
SQLE_SFC_INVALID_KEY
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Severity
SQLCODE
-1688
SQLSTATE
08S04
Sybase error code

Probable cause
An invalid secure feature key value was passed to the specified procedure.

#### 1.1.4.58 An invalid multi-byte input character was encountered when converting from %1 to %2

encountered when converting from %1 to %2
Error constant
SQLE_ILLEGAL_MULTIBYTE_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The character set of the input string.
Parameter 2
The character set of the output string.
Severity
SQLCODE
-879
SQLSTATE
WC003
Sybase error code
Probable cause
While the server was performing character set conversion on an input string, an invalid multi-byte character
was encountered. The operation was aborted.

#### 1.1.4.59 An invalid multi-byte input character was encountered when converting from %1 to %2

encountered when converting from %1 to %2
Error constant
SQLE_ILLEGAL_MULTIBYTE_WARNING
ODBC 2 state

ODBC 3 state
Parameter 1
The character set of the input string.
Parameter 2
The character set of the output string.
Severity
SQLCODE
SQLSTATE
01WC1
Sybase error code
Probable cause
While the server was performing character set conversion on an input string, an invalid multi-byte character
was encountered. The illegal character was directly copied without conversion. Data following the illegal
character may be misinterpreted. See on_charset_conversion_failure option.

#### 1.1.4.60 An invalid secure feature list '%2' was specified in the call to %1

the call to %1
SQLE_SFC_INVALID_FEAT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Parameter 2
The secure feature list.
Severity
SQLCODE
-1689
SQLSTATE
08S05
Sybase error code
Probable cause
An invalid list of secure features was passed to the specified procedure.

#### 1.1.4.61 An ST_CircularString cannot be constructed from %1 points (near '%2')

points (near '%2')
Error constant
SQLE_SLERR_CIRC_NUM_POINTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The incorrect number of points given.
Parameter 2
The value or method where the error was detected.
Severity
SQLCODE
-1410
SQLSTATE
2FF71
Sybase error code
Probable cause
A circularstring geometry should consist of three points followed optionally by an arbitrary number of pairs of
points.

#### 1.1.4.62 Another connection has already registered as '%1'

SQLE_NOT_UNIQUE_CONN_REG_LABEL
Error constant
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Registered connection label.
Severity
SQLCODE
-788
SQLSTATE
5RW27
Sybase error code

Probable cause
You attempted to register a connection with a label already in use for the same application.

#### 1.1.4.63 Another connection has the row in '%1' locked

Error constant
SQLE_ROW_LOCKED
ODBC 2 state
ODBC 3 state
Parameter 1
Table that generates the error.
Severity
SQLCODE
-1281
SQLSTATE
42W80
Sybase error code
Probable cause
You attempted modify or delete a row that is locked by another connection. The row will be unlocked once that
connection commits or rolls back.

#### 1.1.4.64 Argument "%1" must be a column reference

SQLE_TEXT_BAD_COLUMN_REFERENCE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The argument number.
Severity
SQLCODE
-1156
SQLSTATE
WT001
Sybase error code
Probable cause
The CONTAINS argument must be a column reference.

#### 1.1.4.65 Argument %1 of procedure '%2' cannot be NULL

Error constant
SQLE_ARGUMENT_CANNOT_BE_NULL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The argument number that cannot be NULL.
Parameter 2
The name of the procedure that cannot receive the NULL
parameter.
Severity
SQLCODE
-90
SQLSTATE
WP000
Sybase error code
Probable cause
You passed a NULL value to a procedure expecting a scalar argument. For example, a Java procedure that has
an 'int' argument cannot receive a NULL value.

#### 1.1.4.66 Argument to GROUPING aggregate must be a grouping column in the GROUP BY clause

grouping column in the GROUP BY clause
SQLE_INVALID_GROUPING_AGGREGATE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-962
SQLSTATE
42WA7
Sybase error code
Probable cause
Only a grouping column is permitted as an argument to the GROUPING aggregate function. An argument that
contains anything other than a single grouping column expression will not be accepted.

#### 1.1.4.67 Array contains too many elements

Error constant
SQLE_TOO_MANY_ARRAY_ELEMENTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1897
SQLSTATE
54W23
Sybase error code
Probable cause
The array contains too many elements. The number of elements in an array is limited to 65535.

#### 1.1.4.68 Array element error: array index '%1' is out of range

Error constant
SQLE_INVALID_ARRAY_INDEX
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Value of the array index expression
Severity
SQLCODE
-1598
SQLSTATE
2202E
Sybase error code
Probable cause
You tried to access an array element with an index outside the declared size of the array. For an array of size N,
valid array elements are numbered 1 through N.

#### 1.1.4.69 At least one of the specified dbspaces was not calibrated

calibrated
Error constant
SQLE_DBSPACE_NOT_CALIBRATED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-860
SQLSTATE
WW028
Sybase error code
Probable cause
You attempted to calibrate a dbspace that was not open or was too small.

#### 1.1.4.70 ATTACH TRACING could not connect to the tracing database

database
Error constant
SQLE_ATTACH_TRACING_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1097
SQLSTATE
08W95
Sybase error code
Probable cause
A connection to the tracing database could not be established. Check your connection string and verify
that other clients can connect. Note that if you are trying to attach tracing to another server, perhaps the
connection is being blocked by a firewall. You can also receive this error if the database server running either
the production database or the tracing database is not using the TCP/IP protocol.

#### 1.1.4.71 ATTACH TRACING TO LOCAL DATABASE cannot be used with a strongly encrypted database

used with a strongly encrypted database
Error constant
SQLE_NO_LOCAL_CONNECTIONS_TO_ENCRYPTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1088
SQLSTATE
WW069
Sybase error code
Probable cause
The local database is strongly encrypted, so you cannot use the LOCAL DATABASE clause of the ATTACH
TRACING statement. You must specify a connection string with the encryption key for the database.

#### 1.1.4.72 Attempt to allocate memory for LDAP server "%1" failed

failed
Error constant
SQLE_LDAPSERVER_ALLOC_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the LDAP Server.

Severity
SQLCODE
-1570
SQLSTATE
WW203
Sybase error code
Probable cause
An attempt to allocate memory for an LDAP Server class object failed.

#### 1.1.4.73 Attempt to alter unnamed column constraint when named constraints exist

named constraints exist
Error constant
SQLE_AMBIGUOUS_CONSTRAINT
ODBC 2 state
S0002
ODBC 3 state
42S24
Severity
SQLCODE
-930
SQLSTATE
42U05
Sybase error code
Probable cause
You have asked for an unnamed column constraint to be altered, but there is at least one named constraint.

#### 1.1.4.74 Attempt to start a second snapshot in a transaction

SQLE_SNAPSHOT_ALREADY_STARTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1232
SQLSTATE
42WC9

Sybase error code
Probable cause
A transaction tried to start a snapshot (for example, using the BEGIN SNAPSHOT statement) while another
snapshot was already active.

#### 1.1.4.75 Attempt to use snapshot isolation in a non-snapshot transaction

transaction
Error constant
SQLE_NON_SNAPSHOT_TRANSACTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1065
SQLSTATE
42WBB
Sybase error code
Probable cause
A transaction tried to use snapshot isolation but did not begin with snapshot isolation.

#### 1.1.4.76 Attempted two active database requests

SQLE_DOUBLE_REQUEST
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-298
SQLSTATE
42W22
Sybase error code

Probable cause
In Embedded SQL, you attempted to submit a database request while you have another request in progress.
You should either use a separate SQLCA and connection for each thread accessing the database, or use thread
synchronization calls to ensure that a SQLCA is only accessed by one thread at a time.

#### 1.1.4.77 Authentication failed

Error constant
SQLE_AUTHENTICATION_FAILED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-218
SQLSTATE
08W48
Sybase error code
Probable cause
You set the database_authentication or connection_authentication option incorrectly.

#### 1.1.4.78 Authentication violation

Error constant
SQLE_AUTHENTICATION_VIOLATION
ODBC 2 state
ODBC 3 state
Severity

SQLCODE
-98
SQLSTATE
08W21
Sybase error code
Probable cause
You attempted to connect to a server that has been authenticated for exclusive use with a specific application.

#### 1.1.4.79 Automatic database upgrade applied

Error constant
SQLE_DATABASE_UPGRADE_WARNING
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
WW234
Sybase error code
Probable cause
The database is from an older version of the software. An automatic database upgrade occurs during startup.
Subsequently the database can no longer be opened with the older version of the software.

#### 1.1.4.80 BACKINT configuration file error, %1

Error constant
SQLE_BACKUP_BKINT_HANA_CONF_FILE_ERR
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
error thrown during the read operation
Severity
SQLCODE
-1919
SQLSTATE
WB029
Sybase error code
Probable cause
Error opening IQ SAP HANA configuration file for BACKINT

#### 1.1.4.81 BACKUP clause '%1' conflicts with '%2'

Error constant
SQLE_INVALID_BACKUP_STATEMENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
First BACKUP clause.
Parameter 2
Second BACKUP clause.
Severity
SQLCODE
-1057
SQLSTATE
WB016
Sybase error code
Probable cause
Clauses specified in the BACKUP STATEMENT are mutually exclusive.

#### 1.1.4.82 Backup file '%1' already exists

Error constant
SQLE_BACKUP_FILE_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Parameter 1
Name of the file.
Severity
SQLCODE
-967
SQLSTATE
WB012
Sybase error code
Probable cause
A file that would normally be created by this BACKUP statement already exists.

#### 1.1.4.83 Backup file format is invalid

Error constant
SQLE_RESTORE_INVALID_FORMAT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-716
SQLSTATE
WB007
Sybase error code
Probable cause
The format of an archive file to be used during a RESTORE is invalid.

#### 1.1.4.84 Backup is unable to open database file '%1'

SQLE_BACKUP_UNABLE_TO_OPEN_FILE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the file.
Severity
SQLCODE
-1079

SQLSTATE
WB017
Sybase error code
Probable cause
The database file cannot be opened by the backup. It may have been erased or otherwise corrupted.

#### 1.1.4.85 Backward scrolling cursors are not supported for remote objects

remote objects
Error constant
SQLE_OMNI_BACKWARDS_CURSOR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-661
SQLSTATE
WO006
Sybase error code
Probable cause
Backward scrolling cursors are not supported for remote objects. Use forward scrolling cursors only.

#### 1.1.4.86 Bind to LDAP server %1 without a password is not allowed

allowed
SQLE_LDAPUA_UTP
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The LDAP server name or search URL specifying the search.
Severity
SQLCODE
-1622
SQLSTATE
WW219

Sybase error code
Probable cause
An LDAPUA search or validate failed returning LDAP_UNWILLING_TO_PERFORM due to invalid settings for the
target LDAP server. Check access account values for the named LDAP server or search URL.

#### 1.1.4.87 Call to %1 failed - the authorization code specified for the secure feature key named '%2' is incorrect

for the secure feature key named '%2' is incorrect
Error constant
SQLE_SFC_NOT_MATCH
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Parameter 2
The secure feature key name.
Severity
SQLCODE
-1695
SQLSTATE
08S11
Sybase error code
Probable cause
The provided authorization code did not match the value stored for the specified named key.

#### 1.1.4.88 Call to %1 failed - the key named '%2' is the last key with the MANAGE_FEATURES and MANAGE_KEYS features

with the MANAGE_FEATURES and MANAGE_KEYS
features
Error constant
SQLE_SFC_CANNOT_REMOVE_LAST
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Parameter 2
The secure feature key name.
Severity
SQLCODE
-1696
SQLSTATE
08S12
Sybase error code
Probable cause
The call attempted to remove the last secure feature key that would enable both MANAGE_FEATURES and
MANAGE_KEYS and this is not allowed.

#### 1.1.4.89 Call to %1 failed - the maximum number of secure feature keys has already been created

feature keys has already been created
SQLE_SFC_HIT_MAX_LIMIT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Severity
SQLCODE
-1692

SQLSTATE
08S08
Sybase error code
Probable cause
The limit on the number of secure feature keys has been reached.

#### 1.1.4.90 Call to %1 failed - the secure feature key named '%2' already exists

'%2' already exists
Error constant
SQLE_SFC_KEY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Parameter 2
The secure feature key name.
Severity
SQLCODE
-1693
SQLSTATE
08S09
Sybase error code
Probable cause
The user attempted to create a secure feature key with the name of a key that already exists.

#### 1.1.4.91 Call to %1 failed - the secure feature key named '%2' does not exist

does not exist
Error constant
SQLE_SFC_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Parameter 2
The secure feature key name.
Severity
SQLCODE
-1694
SQLSTATE
08S10
Sybase error code
Probable cause
The user attempted to reference a secure feature key that does not exist.

#### 1.1.4.92 Calling functions outside the database server is not supported

supported
Error constant
SQLE_EXTERNAL_CALLS_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-617
SQLSTATE
WW003
Sybase error code
Probable cause
You attempted to call a stored procedure that, in turn, calls a function in a dynamically loaded module. The
operating system on which this stored procedure was called does not support such an action.

#### 1.1.4.93 Can only describe a SELECT statement

Error constant
SQLE_DESCRIBE_NONSELECT
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
-160
SQLSTATE
Sybase error code
Probable cause
In the C language interface, you attempted to describe the SELECT list of a statement other than a SELECT
statement. In UltraLite this error can result from trying to retrieve the schema of any statement other than a
SELECT.

#### 1.1.4.94 Cannot access a table that is part of a text index

Error constant
SQLE_TEXT_CANNOT_USE_TEXT_INDEX

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1169
SQLSTATE
WT013
Sybase error code
Probable cause
It is not possible to directly manipulate tables created as part of a text index.

#### 1.1.4.95 Cannot access file '%1' -- %2

Error constant
SQLE_CANNOT_ACCESS_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name.
Parameter 2
The cause of the error.
Severity
SQLCODE
-602
SQLSTATE
WL002
Sybase error code
Probable cause
A file cannot be accessed. For example, a file referenced by LOAD TABLE does not exist or cannot be read. The
message will contain the reason for the error.

#### 1.1.4.96 Cannot access schema file '%1'

Error constant
SQLE_CANNOT_ACCESS_SCHEMA_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the file or indication that no name was given.
Severity
SQLCODE
-951
SQLSTATE
WW031
Sybase error code
Probable cause
UltraLite requires a schema file to perform the current operation. Either no schema file was specified or the
one specified was not accessible or was corrupt.

#### 1.1.4.97 Cannot add a comment to a table declared as LOCAL TEMPORARY

TEMPORARY
SQLE_COMMENT_NOT_ALLOWED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1042
SQLSTATE
WW065
Sybase error code
Probable cause
You attempted to add a comment to a table that has been declared as LOCAL TEMPORARY. This is not allowed.

#### 1.1.4.98 Cannot alter a column in an index

Error constant
SQLE_COLUMN_IN_INDEX
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-127
SQLSTATE
53W05
Sybase error code
Probable cause
You may have attempted to delete or modify the definition of a column that is part of a primary or foreign
key. You may have attempted to delete a column that has an index on it. In this case, DROP the index or key,
perform the ALTER statement, and then add the index or key again.

#### 1.1.4.99 Cannot ALTER LDAP SERVER '%1' while LDAP server is in active state

is in active state
SQLE_LDAPSERVER_IS_ACTIVE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The LDAP SERVER name.
Severity
SQLCODE
-1612
SQLSTATE
WW215
Sybase error code

Probable cause
When an LDAP server is active, an ALTER statement may not change the LDAP server options without also
specifying WITH SUSPEND clause to also put the server in suspended state. This is an invalid LDAP server
state change.

#### 1.1.4.100 Cannot alter or drop a text configuration referenced by a text index

referenced by a text index
Error constant
SQLE_TEXT_CANNOT_ALTER_CONFIG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1168
SQLSTATE
WT012
Sybase error code
Probable cause
It is not possible to alter or drop a text configuration referenced by a populated text index or currently
being used by a text procedure. Either copy the configuration and alter the copy, or close all cursors on text
procedures and truncate all indexes that use the configuration.

#### 1.1.4.101 Cannot append when using compression or encryption

encryption
SQLE_UNLOAD_CANNOT_APPEND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1187
SQLSTATE
WL012
Sybase error code

Probable cause
The UNLOAD statement cannot append to a file when using compression or encryption. Either the compressed
or encrypted keywords were specified, or the file being appended to is compressed or encrypted.

#### 1.1.4.102 Cannot assign automatic mirror server parent

Error constant
SQLE_CANNOT_ASSIGN_AUTO_PARENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1360
SQLSTATE
WW156
Sybase error code
Probable cause
A CREATE MIRROR SERVER or ALTER MIRROR SERVER statement requested that a mirror parent be
automatically assigned, but a parent server could not be found. The auto_add_server option may not be set, or
might be set to an invalid server name.

#### 1.1.4.103 Cannot change password because change_password_dual_control process is in progress

Error constant
SQLE_CHANGE_PWD_DUAL_CONTROL_INPROGRESS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1665
SQLSTATE
28W20
Sybase error code
Probable cause
You attempted to change password while changing password by change_password_dual_control option is in
progress.

#### 1.1.4.104 Cannot change synchronization user_name when status of the last upload is unknown

status of the last upload is unknown
Error constant
SQLE_CANNOT_CHANGE_USER_NAME
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-867
SQLSTATE
0AW13
Sybase error code
Probable cause
The MobiLink server uses the user_name to track synchronizations. If the status of the previous upload is
unknown then you must resolve this condition before changing the user.

#### 1.1.4.105 Cannot change the mirror server type from %1 to %2

%2
Error constant
SQLE_CANNOT_CHANGE_MIRROR_SERVER_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The original mirror server type
Parameter 2
The proposed new mirror server type
Severity
SQLCODE
-1683
SQLSTATE
42WF2
Sybase error code
Probable cause
You attempted to use the CREATE OR REPLACE MIRROR SERVER or ALTER MIRROR SERVER statement to
change the mirror server type, but the proposed change is not supported.

#### 1.1.4.106 Cannot change the MobiLink remote ID when the status of the last upload is unknown

status of the last upload is unknown
SQLE_CANNOT_CHANGE_ML_REMOTE_ID
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1118
SQLSTATE
0AW17

Sybase error code
Probable cause
The MobiLink server uses the remote ID to track synchronization progress. If the status of the previous upload
is unknown then you must resolve this condition before changing the remote ID.

#### 1.1.4.107 Cannot change the setting of the SingleCLRInstanceVersion server option after the CLR external environment has already been started

Error constant
SQLE_CANNOT_CHANGE_SETTING_OF_SINGLE_CLR_IN-
STANCE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1842
SQLSTATE
WJ033
Sybase error code
Probable cause
You attempted to change the setting of the SingleCLRInstanceVersion server option after starting a CLR
external environment. Restart the database server to change this server option.

#### 1.1.4.108 Cannot change the setting of the UseSingleJVMInstance server option after Java has already been started

Error constant
SQLE_CANNOT_CHANGE_SETTING_OF_SINGLE_JVM_IN-
STANCE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1825
SQLSTATE
WJ032
Sybase error code
Probable cause
You attempted to change the setting of the UseSingleJVMInstance server option after starting a Java VM.
Restart the database server to change this server option.

#### 1.1.4.109 Cannot close a remote JDBC connection that is not the current connection

the current connection
SQLE_CANNOT_CLOSE_JDBC_CONNECTION
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-998
SQLSTATE
WO026
Sybase error code
Probable cause
When attempting to close a remote JDBC connection, the specified connection must be the local connection.

#### 1.1.4.110 Cannot commit or rollback while enlisted in a transaction

transaction
Error constant
SQLE_CANNOT_COMMIT_OR_ROLLBACK_WHILE_EN-
LISTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-800
SQLSTATE
55W09
Sybase error code
Probable cause
You tried to explicitly commit or rollback on a connection that is enlisted in a transaction. You must use the
Commit/Abort protocol of the transaction instead.

#### 1.1.4.111 Cannot connect to mirror server. Use server name '%1' to find the primary server

'%1' to find the primary server
SQLE_CONNECTED_TO_MIRROR_SERVER
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The server name for the mirroring system.
Severity
SQLCODE
-1039
SQLSTATE
08W91
Sybase error code
Probable cause
You have attempted to connect to the mirror server in a mirroring system. You should change your connection
string or DSN to use the server name for the mirroring system.

#### 1.1.4.112 Cannot convert %1 to %2

Error constant
SQLE_CONVERSION_ERROR
ODBC 2 state
ODBC 3 state
Parameter 1
The value that could not be converted.
Parameter 2
The name of the type for the conversion.
Severity
SQLCODE
-157
SQLSTATE
Sybase error code
Probable cause
An error occurred while trying to convert a value to another data type.

#### 1.1.4.113 Cannot convert %1 to %2. The bad value was supplied for column '%3' on row %4 of the data file

supplied for column '%3' on row %4 of the data
file
SQLE_CONVERSION_ERROR_LOAD_TABLE
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Value that could not be converted.
Parameter 2
Destination data type.
Parameter 3
Name of the column where the value was to be inserted.
Parameter 4
Line number of the data file where the invalid data occurred.
Severity
SQLCODE
-162

SQLSTATE
Sybase error code
Probable cause
The data file supplied to LOAD TABLE contains a value that cannot be converted to the required data type.

#### 1.1.4.114 Cannot convert between requested character set '%1' and database character set '%2'

'%1' and database character set '%2'
Error constant
SQLE_FAILED_TO_START_CONVERTER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the requested character set encoding.
Parameter 2
The name of the database character set encoding.
Severity
SQLCODE
-870
SQLSTATE
WC002
Sybase error code
Probable cause
The server is unable to convert between the connection character set that was specified and the database
character set. This could happen when the dbicu and dbicudt DLLs are not installed.

#### 1.1.4.115 Cannot convert between requested character sets '%1' and '%2'

'%1' and '%2'
Error constant
SQLE_FAILED_TO_START_CONVERTER_2_CHARSETS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the first requested character set encoding.
Parameter 2
The name of the second requested character set encoding.
Severity
SQLCODE
-891
SQLSTATE
WC008
Sybase error code
Probable cause
The server is unable to convert between the two specified character sets. This could happen when the dbicu
and dbicudt DLLs are not installed.

#### 1.1.4.116 Cannot convert from %1 to %2 (near %3)

Error constant
SQLE_SLERR_ST_TO_XXX_FAILN
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The geometry type of the value.
Parameter 2
The geometry type of the target.
Parameter 3
The value or method where the error was detected.
Severity
SQLCODE
-1411
SQLSTATE
2FF16
Sybase error code
Probable cause
The value could not be converted to the specified target type.

#### 1.1.4.117 Cannot convert value to a timestamp

Error constant
SQLE_BAD_TIMESTAMP_FORMAT
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1769
SQLSTATE
42WF3
Sybase error code
Probable cause
Cannot convert the provided value to a timestamp. The timestamp format must match the date_order option.

#### 1.1.4.118 Cannot create a materialized view because option '%1' has an inappropriate setting

'%1' has an inappropriate setting
Error constant
SQLE_CANNOT_CREATE_MATVIEW
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Name of the option with the incorrect setting.
Severity
SQLCODE
-1051
SQLSTATE
42WB6
Sybase error code
Probable cause
You attempted to create a materialized view, but one of the database options is currently set to a value not
permitted while creating a materialized view.

#### 1.1.4.119 Cannot create a proxy table LIKE another table

Error constant
CANNOT_CREATE_PROXY_LIKE_TABLE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1979
SQLSTATE
0AW44
Sybase error code
Probable cause
You attempted to create a proxy table LIKE another table.

#### 1.1.4.120 Cannot create an index on Java class '%1'

Error constant
SQLE_CANNOT_INDEX_ON_JAVA_CLASS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the class.
Severity
SQLCODE
-704
SQLSTATE
WW022
Sybase error code
Probable cause
An operation requiring an index was attempted in which an attempt was made to create an index on a Java
class type.

#### 1.1.4.121 Cannot create base table '%1': A global temporary table with the same name exists

table with the same name exists
Error constant
SQLE_CREATE_TABLE_GLOBAL_TEMP_TO_BASE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the table.
Severity
SQLCODE
-1729
SQLSTATE
42U11
Sybase error code
Probable cause
The user attempted to replace a global temporary table with a base table and this is not allowed.

#### 1.1.4.122 Cannot create global temporary table '%1': A base table with the same name exists

table with the same name exists
SQLE_CREATE_TABLE_BASE_TO_GLOBAL_TEMP
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the table.
Severity
SQLCODE
-1730
SQLSTATE
42U10
Sybase error code
Probable cause
The user attempted to replace a base table with a global temporary table and this is not allowed.

#### 1.1.4.123 Cannot create item (%1) in the specified dbspace

Error constant
SQLE_INVALID_DBSPACE_FOR_CREATE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the item that could not be created.
Severity
SQLCODE
-648
SQLSTATE
08W36
Sybase error code
Probable cause
The specified dbspace is invalid. For example, an index must be created in a dbspace of the same type as the
underlying table.

#### 1.1.4.124 Cannot create mutex "%1" as a temporary mutex with this name already exists

with this name already exists
SQLE_TEMP_MUTEX_ALREADY_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the mutex.
Severity
SQLCODE
-1802
SQLSTATE
42U38
Sybase error code
Probable cause
A temporary mutex with the name specified for the permanent mutex already exists.

#### 1.1.4.125 Cannot create mutex "%1": %2 with this name already exists

already exists
Error constant
SQLE_MUTEX_ALREADY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the mutex.
Parameter 2
The type of the object.
Severity
SQLCODE
-1799
SQLSTATE
42U35
Sybase error code
Probable cause
Object names must be unique across mutexes and semaphores. Semaphore cannot be replaced with a mutex.

#### 1.1.4.126 Cannot create semaphore "%1" as a temporary semaphore with this name already exists

semaphore with this name already exists
SQLE_TEMP_SEM_ALREADY_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the semaphore.
Severity
SQLCODE
-1801
SQLSTATE
42U37
Sybase error code
Probable cause
A temporary semaphore with the name specified for the permanent semaphore already exists.

#### 1.1.4.127 Cannot create semaphore "%1": %2 with this name already exists

already exists
Error constant
SQLE_SEM_ALREADY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the semaphore.
Parameter 2
The type of the object.
Severity
SQLCODE
-1800
SQLSTATE
42U36
Sybase error code
Probable cause
Object names must be unique across mutexes and semaphores. Mutex cannot be replaced with a semaphore.

#### 1.1.4.128 Cannot create synchronization entry for table '%1' with BLOB primary key

with BLOB primary key
SQLE_BLOB_IN_SYNC_TABLE_PK
Error constant
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the table.
Severity
SQLCODE
-779
SQLSTATE
5RW18
Sybase error code
Probable cause
You attempted to create a synchronization entry on a table with a BLOB primary key.

#### 1.1.4.129 Cannot create table '%1': Name is used by a non-table object

table object
Error constant
SQLE_CREATE_TABLE_EXISTING_OBJECT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the table.
Severity
SQLCODE
-1738
SQLSTATE
42U12
Sybase error code
Probable cause
The user attempted to create a table, but the same name is used by another object that is not a table.

#### 1.1.4.130 Cannot create text configuration '%1' because option '%2' has an inappropriate setting

option '%2' has an inappropriate setting
Error constant
SQLE_TEXT_BAD_OPTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the configuration.
Parameter 2
Name of the option with the incorrect setting.
Severity
SQLCODE
-1174
SQLSTATE
WT014
Sybase error code
Probable cause
You attempted an operation that needs to create or alter the database options settings for a text configuration,
but one of the options is currently set to a value not permitted for a text configuration.

#### 1.1.4.131 Cannot delete or rename a column referenced in a trigger definition

trigger definition
Error constant
SQLE_COLUMN_IN_TRIGGER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-269
SQLSTATE
53W06
Sybase error code
Probable cause
You attempted to delete or rename a column referenced in a trigger definition. Drop the trigger before
performing the ALTER statement.

#### 1.1.4.132 Cannot delete PUBLIC option '%1' since user settings exist

settings exist
SQLE_UNSET_PUBLIC_ID
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the option.
Severity
SQLCODE
-896
SQLSTATE
42W82
Sybase error code
Probable cause
You tried to delete a PUBLIC option, but there are user settings for the same option. The user settings must be
deleted before the PUBLIC option is deleted.

#### 1.1.4.133 Cannot deregister '%1' since active registered connection exists

connection exists
Error constant
SQLE_DEREG_APP_IN_USE
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the application.
Severity
SQLCODE
-786
SQLSTATE
5RW25
Sybase error code
Probable cause
You attempted to deregister an application while there are still active connections registered to that
application.

#### 1.1.4.134 Cannot deregister application because of invalid cookie

cookie
SQLE_DEREG_APP_NOT_FOUND
Error constant
ODBC 2 state
ODBC 3 state
42S02
Severity
SQLCODE
-785
SQLSTATE
5RW24
Sybase error code
Probable cause
The application has not been registered successfully or it was previously deregistered.

#### 1.1.4.135 Cannot deserialize Java object

Error constant
SQLE_JAVA_DESERIALIZATION_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-663
SQLSTATE
WW018
Sybase error code
Probable cause
The persistent Java object cannot be read from the database column. Possibly, the class of the object has been
removed or modified.

#### 1.1.4.136 Cannot drop a role that owns events in runtime server

server
Error constant
SQLE_USER_OWNS_EVENTS
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1564
SQLSTATE
55W39
Sybase error code
Probable cause
You attempted to drop a role that owns events while using the runtime server. This operation would result in
dropping events. The runtime server cannot drop events.

#### 1.1.4.137 Cannot drop a role that owns external environment objects in runtime server

objects in runtime server
Error constant
SQLE_USER_OWNS_EXTERNENVOBJECTS
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1566
SQLSTATE
55W41
Sybase error code
Probable cause
You attempted to drop a role that owns external environment objects while using the runtime server. This
operation would result in dropping external environment objects. The runtime server cannot drop external
environment objects.

#### 1.1.4.138 Cannot drop a role that owns sequences in runtime server

server
SQLE_USER_OWNS_SEQUENCES
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1563
SQLSTATE
55W38
Sybase error code

Probable cause
You attempted to drop a role that owns sequences while using the runtime server. This operation would result
in dropping sequences. The runtime server cannot drop sequences.

#### 1.1.4.139 Cannot drop a role that owns web services in runtime server

runtime server
Error constant
SQLE_USER_OWNS_WEB_SERVICES
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1565
SQLSTATE
55W40
Sybase error code
Probable cause
You attempted to drop a role that owns web services while using the runtime server. This operation would
result in dropping web services. The runtime server cannot drop web services.

#### 1.1.4.140 Cannot drop a user that owns messages or data types

types
SQLE_USER_OWNS_MESSAGES_OR_DATATYPES
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-614
SQLSTATE
55W05
Sybase error code

Probable cause
You attempted to drop a user that is the creator of a message or user-defined data type. The message or
user-defined data type must be dropped first.

#### 1.1.4.141 Cannot drop a user that owns objects involved in replication

replication
Error constant
SQLE_USER_OWNS_REPLICATED_OBJECTS
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-731
SQLSTATE
55W06
Sybase error code
Probable cause
You attempted to drop a user that is the creator of a database object involved in replication. For example, the
user may own a table that is part of a publication.

#### 1.1.4.142 Cannot drop a user that owns procedures in runtime server

runtime server
SQLE_USER_OWNS_PROCEDURES
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-270
SQLSTATE
55W04
Sybase error code

Probable cause
You attempted to drop a user that owns procedures while using the runtime server. This operation would result
in dropping procedures. The runtime server cannot drop procedures. Use the full server.

#### 1.1.4.143 Cannot drop a user that owns tables in runtime system

system
Error constant
SQLE_USER_OWNS_TABLES
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-128
SQLSTATE
55W03
Sybase error code
Probable cause
You attempted to drop a user that owns tables while running the runtime server. This operation would result in
dropping tables. The runtime server cannot drop tables. Use the full server.

#### 1.1.4.144 Cannot drop a user that owns text configurations

SQLE_USER_OWNS_TEXT_CONFIG
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1167
SQLSTATE
55W12
Sybase error code

Probable cause
You attempted to drop a user that is the creator of a text configuration. The text configuration must be dropped
first.

#### 1.1.4.145 Cannot drop last unique index of an immediate materialized view

materialized view
Error constant
SQLE_DELETE_UPDATABLE_MATVIEW_INDEX_ERR
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-1184
SQLSTATE
55W21
Sybase error code
Probable cause
You attempted to drop the last unique index on non-nullable columns of an immediate materialized view.
Immediate materialized view needs at least one unique index on non-nullable columns to be valid.

#### 1.1.4.146 Cannot drop or modify object '%1' because at least one other object ( %2 '%3') depends upon it

one other object ( %2 '%3') depends upon it
SQLE_OBJECT_HAS_DEPENDENTS
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the object that could not be dropped or modi-
fied.
Parameter 2
The type of the object that depends on the object that could
not be dropped or modified.
Parameter 3
The name of the object that depends on the object that
could not be dropped or modified.
Severity
SQLCODE
-1037

SQLSTATE
55W16
Sybase error code
Probable cause
You attempted to drop or modify an object, such as a table or a column, that is used by another object, such
as a materialized view, that cannot be automatically invalidated. The dependent object must be disabled or
dropped before a drop or modification can be permitted.

#### 1.1.4.147 Cannot drop the database's current time zone

Error constant
SQLE_CANNOT_DROP_CURRENT_TIMEZONE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1797
SQLSTATE
55W52
Sybase error code
Probable cause
The database's time_zone option is set to the time zone you are attempting to drop.

#### 1.1.4.148 Cannot enlist in a transaction while already enlisted in a transaction

in a transaction
SQLE_CANNOT_ENLIST_WHILE_ALREADY_ENLISTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-801
SQLSTATE
55W10
Sybase error code

Probable cause
You tried to enlist a second transaction on a connection that is already enlisted in a transaction.

#### 1.1.4.149 Cannot enlist in a transaction with uncommitted data pending

data pending
Error constant
SQLE_CANNOT_ENLIST_WITH_UNCOMMITTED_DATA
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-802
SQLSTATE
55W11
Sybase error code
Probable cause
You tried to enlist a transaction on a connection that has pending uncommitted data.

#### 1.1.4.150 Cannot find index named '%1'

SQLE_INDEX_NOT_FOUND
Error constant
ODBC 2 state
S0012
ODBC 3 state
42S12
Parameter 1
Name of the index that cannot be found.
Severity
SQLCODE
-183
SQLSTATE
52W03
Sybase error code
Probable cause
You attempted to perform an operation using an index that does not exist. Check for spelling errors. Check
whether the index name must be qualified with a user ID.

#### 1.1.4.151 Cannot find synchronization subscription with the name '%1'

name '%1'
Error constant
SQLE_SYNCHRONIZATION_NOT_FOUND
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the subscription.
Severity
SQLCODE
-767
SQLSTATE
5RW12
Sybase error code
Probable cause
You misspelled the name of a synchronization subscription or you did not qualify it correctly with a user name.

#### 1.1.4.152 Cannot find synchronization user with the name '%1'

'%1'
SQLE_SYNC_SITE_NOT_FOUND
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the synchronization user.
Severity
SQLCODE
-843
SQLSTATE
5RW37
Sybase error code

Probable cause
You misspelled the name of a synchronization site or you did not qualify it correctly with a user name.

#### 1.1.4.153 Cannot force failover when current server is marked as preferred

as preferred
Error constant
SQLE_CANNOT_FORCE_FAILOVER_ON_PREFERRED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1314
SQLSTATE
WW136
Sybase error code
Probable cause
An attempt was made to execute ALTER DATABASE SET PARTNER FAILOVER but the current server is marked
as preferred. Attempting to force a failover in this situation is not allowed.

#### 1.1.4.154 Cannot handle expressions involving remote tables inside stored procedures

inside stored procedures
SQLE_OMNI_EXPRESSION_IN_PROC
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-823
SQLSTATE
WO023
Sybase error code

Probable cause
The server encountered an expression involving remote tables inside a stored procedure. The expression was
too complicated to process.

#### 1.1.4.155 Cannot insert or update computed column '%1'

Error constant
SQLE_COMPUTED_COLUMN_WRITE_ATTEMPTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the column.
Severity
SQLCODE
-703
SQLSTATE
WW023
Sybase error code
Probable cause
Computed column values cannot be modified explicitly. Their value is determined implicitly from the computed
expression value.

#### 1.1.4.156 Cannot load encryption DLL %1: version mismatch

SQLE_SACI_VERSION_MISMATCH
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the encryption DLL.
Severity
SQLCODE
-1740
SQLSTATE
08WD0
Sybase error code

Probable cause
The SACI version of the provided encryption DLL doesn't match the version of the software.

#### 1.1.4.157 Cannot map a login ID to the sys or public user ID

Error constant
SQLE_LOGON_SYSMAP
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-248
SQLSTATE
28W07
Sybase error code
Probable cause
You attempted to map a login ID to either SYS or PUBLIC.

#### 1.1.4.158 Cannot modify column '%1' in table '%2'

Error constant
SQLE_CANNOT_MODIFY
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the column that cannot be changed.
Parameter 2
Name of the table containing the column.
Severity
SQLCODE
-191
SQLSTATE
42W32
Sybase error code
Probable cause
You may have tried to modify a column that you do not have permission to modify. You may have tried to
modify a column defined as an expression (such as column1+column2) in a view.

#### 1.1.4.159 Cannot modify publication entry using ALTER SYNCHRONIZATION

SYNCHRONIZATION
Error constant
SQLE_CANNOT_MODIFY_PUB_AS_SYNC
ODBC 2 state
ODBC 3 state
42S02
Severity
SQLCODE
-770
SQLSTATE
5RW15
Sybase error code
Probable cause
You attempted to modify a publication entry using an ALTER SYNCHRONIZATION statement.

#### 1.1.4.160 Cannot modify synchronization entry using ALTER PUBLICATION

PUBLICATION
Error constant
SQLE_CANNOT_MODIFY_SYNC_AS_PUB
ODBC 2 state
ODBC 3 state
42S02
Severity
SQLCODE
-769
SQLSTATE
5RW14
Sybase error code
Probable cause
You attempted to modify a synchronization entry using an ALTER PUBLICATION statement.

#### 1.1.4.161 Cannot open transaction log file -- %1

Error constant
SQLE_CANNOT_OPEN_LOG
ODBC 2 state
ODBC 3 state
Parameter 1
Reason why the transaction log file cannot be opened.
Severity
SQLCODE
-106
SQLSTATE
08W05
Sybase error code
Probable cause
The database server was unable to open the named transaction log file. The transaction log file name may
include an invalid device or directory. If this is the case, you can use the Transaction Log utility (dblog) to find
out where the transaction log should be and perhaps change it.

#### 1.1.4.162 Cannot output the histogram for string column '%1'

SQLE_CANNOT_DUMP_STRING_HISTOGRAM
Error constant
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
Name of the column containing string data.
Severity
SQLCODE
SQLSTATE
01W23
Sybase error code

Probable cause
You tried to get the histogram for a column containing strings. Histograms on string information cannot be
output in a readable format; as a result, no information was retrieved. Consider using the ESTIMATE function to
get information on a specific value or range in the column.

#### 1.1.4.163 Cannot perform specified operation, number of administrators for role '%1' falls below min_role_admins option value

Error constant
SQLE_MIN_ROLE_ADMIN_VIOLATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the role that violates minimum number of adminis-
trators condition
Severity
SQLCODE
-1525
SQLSTATE
55W36
Sybase error code
Probable cause
Specified operation cannot be performed because it will make the number of administrators for the specified
role go below the threshold value set through database option min_role_admins.

#### 1.1.4.164 Cannot perform specified operation, set user condition violated

condition violated
Error constant
SQLE_SET_USER_VIOLATION

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1553
SQLSTATE
55W37
Sybase error code
Probable cause
Specified operation cannot be performed because it will invalidate the on going SET USER statements in the
database.

#### 1.1.4.165 Cannot proceed with online backup, log backup already in progress

already in progress
LOGBACKUP_ALREADY_IN_PROGRESS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1983
SQLSTATE
WB037
Sybase error code
Probable cause
Log backup already in progress, cannot proceed with online backup.

#### 1.1.4.166 Cannot proceed with online backup, SQLA log guid is ahead

is ahead
Error constant
SQLA_LOG_GUID_IS_AHEAD
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1984
SQLSTATE
WB038
Sybase error code
Probable cause
SQLA Log guid is ahead, cannot proceed with online backup.

#### 1.1.4.167 Cannot register '%1' since another exclusive instance is running

instance is running
Error constant
SQLE_SAME_EXCLUSIVE_APP_RUNNING
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the application.
Severity
SQLCODE
-782
SQLSTATE
5RW21
Sybase error code
Probable cause
You attempted to start an application, but another exclusive instance of the same application is already
registered.

#### 1.1.4.168 Cannot register '%1' since registration cookie exhausted

exhausted
Error constant
SQLE_APP_REG_COOKIE_EXHAUSTED
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the application.
Severity
SQLCODE
-789
SQLSTATE
5RW28
Sybase error code
Probable cause
Cannot register the application until one is unregistered.

#### 1.1.4.169 Cannot register another '%1' as an exclusive application

application
SQLE_SAME_APP_RUNNING
Error constant
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the application.
Severity
SQLCODE
-783
SQLSTATE
5RW22
Sybase error code
Probable cause
You attempted to register an exclusive application but another instance of the same application is already
registered.

#### 1.1.4.170 Cannot register connection because of invalid application cookie

application cookie
Error constant
SQLE_CANNOT_REG_CONN
ODBC 2 state
ODBC 3 state
42S02
Severity
SQLCODE
-784
SQLSTATE
5RW23
Sybase error code
Probable cause
Application registration cannot be found for the given cookie.

#### 1.1.4.171 Cannot register connection to '%1' since automatic label exhausted

label exhausted
Error constant
SQLE_CONN_REG_AUTO_LABEL_EXHAUSTED
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the application.
Severity
SQLCODE
-790
SQLSTATE
5RW29
Sybase error code
Probable cause
You may register using a specified label instead.

#### 1.1.4.172 Cannot remove class '%1': member of JAR

Error constant
SQLE_CLASS_MEMBER_OF_JAR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the class file that cannot be removed.
Severity
SQLCODE
-653
SQLSTATE
WP004
Sybase error code
Probable cause
You attempted to remove a class file that is still part of a JAR. It must be removed with the JAR.

#### 1.1.4.173 Cannot return NULL result as requested data type

Error constant
SQLE_VALUE_IS_NULL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1050
SQLSTATE
Sybase error code
Probable cause
You tried to retrieve a value from the database that was NULL and assign it to a variable that cannot be NULL.

#### 1.1.4.174 Cannot revoke these permissions while user '%1' is actively replicating transactions

actively replicating transactions
Error constant
SQLE_MUST_NOT_BE_REPLICATING
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the user.
Severity
SQLCODE
-1080
SQLSTATE
42WBE
Sybase error code
Probable cause
You attempted to revoke permissions from a user while there are transactions currently being replicated for
that user. This is not allowed.

#### 1.1.4.175 Cannot save SQL Anywhere Cockpit to existing file '%1'

'%1'
COCKPIT_FILE_ALREADY_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name of the file that already exists.
Severity
SQLCODE
-1955
SQLSTATE
WW258
Sybase error code
Probable cause
The request to create a file failed because the file already exists.

#### 1.1.4.176 Cannot serialize Java object with class '%1'

Error constant
SQLE_JAVA_SERIALIZATION_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The class of the value that cannot be serialized.
Severity
SQLCODE
-662
SQLSTATE
WI009
Sybase error code
Probable cause
The Java object cannot be serialized as a persistent database column.

#### 1.1.4.177 Cannot set a temporary option for user '%1'

Error constant
SQLE_TEMPORARY_NOT_ALLOWED
ODBC 2 state
ODBC 3 state
Parameter 1
User ID whose option was to be changed.
Severity
SQLCODE
-203
SQLSTATE
42W45
Sybase error code
Probable cause
TEMPORARY options are set on a connection basis, and only for specific options known to the database server.
To change an option for another user, do not specify TEMPORARY in the SET OPTION statement.

#### 1.1.4.178 Cannot set audit_log to the transaction log: The transaction log is not enabled for the database

transaction log is not enabled for the database
Error constant
SQLE_CANNOT_SET_AUDIT_LOG_TO_TRANSLOG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1731
SQLSTATE
WE040
Sybase error code
Probable cause
You are attempting to set the audit_log option to use the transaction log, but the transaction log is not
enabled. You can specify a file in the audit_log option, or enable the transaction log and then specify to use the
transaction log.

#### 1.1.4.179 Cannot set database option "%1" because it is on the options watch list

the options watch list
SQLE_OPTION_ON_WATCH_LIST
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the option.
Severity
SQLCODE
-1180
SQLSTATE
WW096
Sybase error code
Probable cause
An attempt was made to set a database option that is on the options watch list. The options watch list is used
to help find references to options that have been removed or deprecated.

#### 1.1.4.180 Cannot specify range that excludes next value for sequence %1

sequence %1
Error constant
SQLE_INVALID_ALTER_SEQUENCE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the sequence.
Severity
SQLCODE
-1510
SQLSTATE
52W54
Sybase error code
Probable cause
You attempted to modify either the MINVAL or MAXVAL boundary of a sequence to a value that would
make the next invocation of the nextval expression for the sequence invalid. If you want to change the range
boundaries to these values, you must also specify a RESTART WITH clause and supply a value within the new
range.

#### 1.1.4.181 Cannot specify read only in both the READ ONLY clause and the USING clause

clause and the USING clause
SQLE_DIR_ACCESS_READ_ONLY_IN_TWO_PLACES
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1832
SQLSTATE
0AW32
Sybase error code

Probable cause
You attempted to set the read only flag in both the READ ONLY clause and the USING clause.

#### 1.1.4.182 Cannot stop the database server

Error constant
SQLE_CANNOT_STOP_SERVER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-607
SQLSTATE
WW002
Sybase error code
Probable cause
The server has determined that it cannot be shut down at this time. Normally, this error should not occur.

#### 1.1.4.183 Cannot subscribe to '%1'

SQLE_CANNOT_SUBSCRIBE
Error constant
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the publication.
Severity
SQLCODE
-768
SQLSTATE
5RW13
Sybase error code
Probable cause
Some publications cannot be subscribed to, such as a synchronization publication.

#### 1.1.4.184 Cannot synchronize table '%1' since it does not have a primary key

have a primary key
Error constant
SQLE_CANNOT_SYNC_TABLE_WITHOUT_PK
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the table.
Severity
SQLCODE
-777
SQLSTATE
5RW16
Sybase error code
Probable cause
Tables being synchronized must contain a primary key.

#### 1.1.4.185 Cannot treat value '%1' as type %2. The dynamic type is %3

type is %3
Error constant
SQLE_TREAT_AS_DYNAMIC_MISMATCH
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value that could not be converted.
Parameter 2
The name of the type for the conversion.
Parameter 3
The type of the value that could not be converted.
Severity
SQLCODE
-1362
SQLSTATE
Sybase error code
Probable cause
An error occurred while trying to treat a value as another data type. The dynamic type of the value does not
match the destination type.

#### 1.1.4.186 Cannot turn on auditing: The audit settings currently require a transaction log file

currently require a transaction log file
Error constant
SQLE_AUDITING_WITHOUT_TRANSACTION_LOG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-913
SQLSTATE
42W91
Sybase error code
Probable cause
This database is running without a transaction log file; however, the audit_log option is set to require one. Either
use the Transaction Log utility (dblog) to create a transaction log file, or change the audit_log option to specify
a file before turning auditing on.

#### 1.1.4.187 Cannot uniquely identify rows in cursor

SQLE_CANNOT_UNIQUELY_IDENTIFY_ROWS
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-295
SQLSTATE
09W05
Sybase error code

Probable cause
You opened a UNIQUE cursor on a SELECT statement for which a set of columns uniquely identifying each row
cannot be generated. One of the tables may not be defined with a primary key or uniqueness constraint, or the
SELECT statement may involve a UNION, INTERSECT, EXCEPT, or GROUP BY.

#### 1.1.4.188 Cannot update an expression

Error constant
SQLE_NON_UPDATEABLE_COLUMN
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-190
SQLSTATE
53W02
Sybase error code
Probable cause
You tried to update a column in a query that is a database expression rather than a column in a table.

#### 1.1.4.189 Cannot update column '%1' since it appears in the ORDER BY clause

ORDER BY clause
Error constant
SQLE_CANNOT_UPDATE_ORDER_BY_COLUMN
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the column that appears in the ORDER BY clause.
Severity

SQLCODE
-814
SQLSTATE
42W37
Sybase error code
Probable cause
You attempted to update a column that appears in the ORDER BY clause. The ansi_update_constraints option
controls whether this update is allowed.

#### 1.1.4.190 Cannot update column '%1' since it does not appear in the SELECT clause

appear in the SELECT clause
Error constant
SQLE_UPDATE_NOT_IN_SELECT
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the column that does not appear in the SELECT
clause.
Severity
SQLCODE
-815
SQLSTATE
42W38
Sybase error code
Probable cause
You attempted to update a column that does not explicitly appear in the SELECT list. The
ansi_update_constraints option controls whether this update is allowed.

#### 1.1.4.191 Cannot update materialized view because option '%1' has an inappropriate setting

'%1' has an inappropriate setting
Error constant
SQLE_CANNOT_UPDATE_MATVIEW
ODBC 2 state
ODBC 3 state
ERROR

Parameter 1
Name of the option with the incorrect setting.
Severity
SQLCODE
-1052
SQLSTATE
42WB7
Sybase error code
Probable cause
You attempted to update/refresh a materialized view but one of the database options is currently set to a value
that is not permitted while updating a materialized view, or, the option's setting does not match the value when
the view was created.

#### 1.1.4.192 Cannot update multiple tables immediate materialized view %1 depends on

materialized view %1 depends on
Error constant
SQLE_CANNOT_UPDATE_TWO_TABLES_IMV
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the view that depends on two or more tables in
the update statement.
Severity
SQLCODE
-1192
SQLSTATE
55W29
Sybase error code
Probable cause
You attempted to simultaneously update two or more tables initialized immediate materialized view depends
on. No more than one base table an immediate materialized view depends on can be updated in a statement.

#### 1.1.4.193 Cannot update or delete an all-NULL row from table '%1'

'%1'
Error constant
SQLE_CANNOT_UPDATE_NULL_ROW
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the table that cannot be modified.
Severity
SQLCODE
-734
SQLSTATE
09W08
Sybase error code
Probable cause
You attempted to modify or delete a row in the specified table, which is part of the NULL-supplying side of
an outer join. However, the cursor is currently positioned on a derived row that contains an all-NULL row for
this table, which is the result of the failure of one or more ON conditions to evaluate to TRUE. Verify that the
UPDATE or DELETE statement is correct.

#### 1.1.4.194 Cannot update primary key for table '%1' involved in a publication

in a publication
SQLE_ARTICLE_PK_CANNOT_BE_UPDATED
Error constant
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the table.
Severity
SQLCODE
-780
SQLSTATE
5RW19
Sybase error code
Probable cause
The primary key of a table involved in a publication cannot be updated. The prevent_article_pkey_update
database option can be set to Off to allow updates to the primary key of the table involved in the publication.

#### 1.1.4.195 Cannot update the audit_log option: one or more of the specified targets is invalid

the specified targets is invalid
Error constant
SQLE_CANNOT_UPDATE_AUDIT_LOG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1732
SQLSTATE
WE041
Sybase error code
Probable cause
An error occurred while updating the audit_log option:. Ensure that the target parameters are correct and that
you have sufficient permissions to access any file target.

#### 1.1.4.196 Cannot use both the OR REPLACE and IF NOT EXISTS clauses

EXISTS clauses
OR_REPLACE_IF_NOT_EXISTS
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1934
SQLSTATE
42U48
Sybase error code
Probable cause
You have specified both the OR REPLACE and IF NOT EXISTS clauses. These clauses cannot be used together.

#### 1.1.4.197 Cannot use CLEAR LOG clause with offline log backups

backups
Error constant
SQLE_RESTORE_CLEAR_LOG_ON_OFFLINE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1909
SQLSTATE
42X16
Sybase error code
Probable cause
Offline log is not backed up during a clear log restore

#### 1.1.4.198 Cannot use materialized view '%1' because it has not yet been initialized

not yet been initialized
Error constant
SQLE_CANNOT_USE_MATVIEW
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Name of the materialized view.
Severity
SQLCODE
-1077
SQLSTATE
42WBC
Sybase error code
Probable cause
You attempted to use a materialized view but it has not yet been initialized. In order for a materialized view
to become available for first use after being created or enabled, it must be initialized at least once using the
REFRESH MATERIALIZED VIEW statement.

#### 1.1.4.199 Cannot use view '%1' because it has been disabled

Error constant
SQLE_VIEW_DISABLED
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the view.
Severity
SQLCODE
-1038
SQLSTATE
55W17
Sybase error code
Probable cause
You attempted to reference a view that has been disabled. The view must be enabled before it can be used
again.

#### 1.1.4.200 Cannot use view '%1' because it is invalid

Error constant
SQLE_VIEW_INVALID
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the view.
Severity
SQLCODE
-1040
SQLSTATE
55W18
Sybase error code
Probable cause
You attempted to reference an invalid view. The view must be enabled before it can be used again.

#### 1.1.4.201 CATALOG ONLY and MULTIPLEX cannot be used together

together
Error constant
SQLE_CATALOG_ONLY_WITH_MPX_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1787
SQLSTATE
42WF1
Sybase error code
Probable cause
Since MULTIPLEX option is used to restore the DAS files, CATALOG ONLY option cannot be specified.

#### 1.1.4.202 CDATA has a name

Error constant
SQLE_FOR_XML_EXPLICIT_NAMED_CDATA
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-903
SQLSTATE
WX011
Sybase error code
Probable cause
A CDATA directive in a FOR XML EXPLICIT query must not be given a name.

#### 1.1.4.203 Certificate '%1' not found

Error constant
SQLE_CERTIFICATE_NOT_FOUND

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the certificate that could not be found
Severity
SQLCODE
-1589
SQLSTATE
55W44
Sybase error code
Probable cause
You misspelled the name of a certificate, or the certificate does not exist.

#### 1.1.4.204 change_password_dual_control is enabled for this user. Use ALTER USER to change password

user. Use ALTER USER to change password
Error constant
SQLE_CHANGE_PWD_DUAL_CONTROL_ENABLED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1698
SQLSTATE
28W21
Sybase error code
Probable cause
You attempted to change a password while the change_password_dual_control option is set for this user. When
this option is set, you must use the ALTER USER statement to change the dual password.

#### 1.1.4.205 CHAR configuration provided for NCHAR column for text index \"%1\" on table \"%2\"

for text index \"%1\" on table \"%2\"
Error constant
TEXT_INDEX_BAD_CONFIGURATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the text index.
Parameter 2
The name of the table.
Severity
SQLCODE
-1991
SQLSTATE
WT042
Sybase error code
Probable cause
A text configuration object provided in the create index statement cannot be used for the columns of the text
index.

#### 1.1.4.206 Character conversion error or warning report is not available when the single-byte converter is used

available when the single-byte converter is used
SQLE_CHARACTER_CONVERSION_REPORT_NOT_AVAILA-
Error constant
BLE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-883
SQLSTATE
WC007
Sybase error code
Probable cause
You attempted to set the on_charset_conversion_failure option to produce either a warning or error report.
This setting is not available when the single-byte to single-byte converter is used.

#### 1.1.4.207 Character set conversion to '%1' cannot be performed; '%2' is used instead

performed; '%2' is used instead
Error constant
SQLE_CANNOT_PERFORM_CHAR_TRANSLATION
ODBC 2 state
ODBC 3 state
Parameter 1
Name of character set the application requested.
Parameter 2
Name of character set the database will be using.
Severity
SQLCODE
SQLSTATE
01W12
Sybase error code
Probable cause
The server is unable to perform a character conversion from the character set the database is using to the
character set the application requested.

#### 1.1.4.208 Character substitution occurred when converting from %1 to %2

from %1 to %2
SQLE_SIMPLE_SUBSTITUTION_WARNING
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The character set of the input string.
Parameter 2
The character set of the output string.
Severity
SQLCODE
SQLSTATE
01WC3
Sybase error code

Probable cause
While the server was performing character set conversion on an input string, some characters
could not be represented in the database character set. Those characters were substituted. See
on_charset_conversion_failure option.

#### 1.1.4.209 Character substitution was required when converting from %1 to %2

converting from %1 to %2
Error constant
SQLE_SIMPLE_SUBSTITUTION_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The character set of the input string.
Parameter 2
The character set of the output string.
Severity
SQLCODE
-881
SQLSTATE
WC005
Sybase error code
Probable cause
While the server was performing character set conversion on an input string, some characters could not be
represented in the database character set. The operation was aborted. See on_charset_conversion_failure
option.

#### 1.1.4.210 CHECKPOINT statement requires a rollback log

Error constant
SQLE_CHECKPOINT_REQUIRES_UNDO
ODBC 2 state
ODBC 3 state

Severity
SQLCODE
-212
SQLSTATE
42W20
Sybase error code
Probable cause
You cannot use a CHECKPOINT statement when the database server is running in bulk mode without a rollback
log.

#### 1.1.4.211 Checksums are not enabled in this database

Error constant
SQLE_CHECKSUMS_NOT_ENABLED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-971
SQLSTATE
WW042
Sybase error code
Probable cause
An attempt was made to perform checksum validation but the database does not have checksums enabled.

#### 1.1.4.212 CircularString with 3 points has been converted to use 5 points

use 5 points
Error constant
SQLE_SLWARN_CIRCULARSTRING_3POINT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1491

SQLSTATE
01FW2
Sybase error code
Probable cause
A curve containing a CircularString with a 3-point circle has been converted to use a 5-point circle. This is a
notification only.

#### 1.1.4.213 Class '%1' has no public field '%2'

Error constant
SQLE_FIELD_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the class in which the named field could not be
found.
Parameter 2
The name of the field that could not be found.
Severity
SQLCODE
-93
SQLSTATE
WW013
Sybase error code
Probable cause
An expression referenced a field that either does not exist or is not public.

#### 1.1.4.214 Clause '%1' has invalid attribute '%2'

Error constant
SQLE_INVALID_PROCEDURE_ATTRIBUTE

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The attribute on the procedure.
Parameter 2
The attribute value or cause of failure.
Severity
SQLCODE
-991
SQLSTATE
WW060
Sybase error code
Probable cause
The attribute value specified on the procedure is not valid.

#### 1.1.4.215 Client application disallowed the transfer of data ('%1')

('%1')
Error constant
SQLE_CLIENT_TRANSFER_DISALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the object being transferred to/from the appli-
cation.
Severity
SQLCODE
-1172
SQLSTATE
WW093
Sybase error code
Probable cause
The client application rejected the transfer of server initiated data. To allow transfer of server initiated data, the
application registered a validation callback which rejected the transfer of requested data.

#### 1.1.4.216 Client application does not allow transfer of data ('%1')

('%1')
Error constant
SQLE_CLIENT_TRANSFER_NO_VALIDATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the object being transferred to/from the appli-
cation.
Severity
SQLCODE
-1171
SQLSTATE
WW092
Sybase error code
Probable cause
The client application does not allow the transfer of server initiated data. To allow transfer of server initiated
data, the application must register a validation callback mechanism with the client library.

#### 1.1.4.217 Client library reported a permissions error accessing object ('%1') during transfer

accessing object ('%1') during transfer
Error constant
SQLE_CLIENT_TRANSFER_PERMS_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the object being transferred to/from the appli-
cation.
Severity
SQLCODE
-1200
SQLSTATE
WW103
Sybase error code
Probable cause
The client application reported a permissions error while attempting to access the object for a data
transfer request from the server. The client application likely does not have the necessary operating system
authorization required to access the object.

#### 1.1.4.218 Client library reported an error accessing data during transfer ('%1')

during transfer ('%1')
Error constant
SQLE_CLIENT_TRANSFER_ACCESS_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the object being transferred to/from the appli-
cation.
Severity
SQLCODE
-1173
SQLSTATE
WW094
Sybase error code
Probable cause
The client application reported an error while attempting to access the data for a transfer request from the
server. Reasons could include the client application lacking permissions to the data object or other operating
system reported errors.

#### 1.1.4.219 Client library reported an error opening object ('%1') during transfer

('%1') during transfer
SQLE_CLIENT_TRANSFER_OPEN_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the object being transferred to/from the appli-
cation.
Severity
SQLCODE
-1201
SQLSTATE
WW102
Sybase error code
Probable cause
The client application reported an error while attempting to open the object for a data transfer request from
the server. Reasons could include an invalid name for the object or a missing object.

#### 1.1.4.220 Client out of memory

Error constant
SQLE_CLIENT_OUT_OF_MEMORY
ODBC 2 state
S1001
ODBC 3 state
HY001
Severity
SQLCODE
-876
SQLSTATE
08W65
Sybase error code
Probable cause
A failure occurred when the database client was trying to allocate memory.

#### 1.1.4.221 Client redirected more than once

Error constant
SQLE_TOO_MANY_REDIRECTS
ODBC 2 state
08S01
ODBC 3 state
08S01
Severity
SQLCODE
-1380
SQLSTATE
08WA4
Sybase error code
Probable cause
The connection was redirected by the primary server to another server, which also attempted to redirect the
connection.

#### 1.1.4.222 Client/database server version mismatch

Error constant
SQLE_DBLIB_ENGINE_MISMATCH
ODBC 2 state

ODBC 3 state
Severity
SQLCODE
-231
SQLSTATE
08W19
Sybase error code
Probable cause
Your executable uses a database interface library that does not match the version number of the database
server.

#### 1.1.4.223 Client/server communications protocol version mismatch

mismatch
SQLE_PROTOCOL_MISMATCH
Error constant
ODBC 2 state
08S01
ODBC 3 state
08S01
Severity
SQLCODE
-88
SQLSTATE
08W15
Sybase error code
Probable cause
The connection failed because the protocol versions of the client and the server do not match. Ensure the client
and server software are the same version.

#### 1.1.4.224 Collation '%1' not supported on this platform

Error constant
SQLE_COLLATION_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The collation that is not supported.
Severity
SQLCODE
-1116
SQLSTATE
WC013
Sybase error code
Probable cause
The specified collation is not supported on the current platform.

#### 1.1.4.225 Collection types not supported

Error constant
SQLE_COLLECTION_TYPES_NOT_SUPPORTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1702
SQLSTATE
0AW28
Sybase error code
Probable cause
The current database is an older database and does not have support for row or array types. To use this
feature, upgrade your database to the most recent version.

#### 1.1.4.226 Column '%1' found in more than one table or it is used more than once in the SELECT list -- it needs a correlation name

Error constant
SQLE_COLUMN_AMBIGUOUS
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the ambiguous column.
Severity
SQLCODE
-144
SQLSTATE
Sybase error code
Probable cause
You have not specified a correlation name on a column which is found in more than one of the tables referenced
in a query block or which appears more than once in the SELECT list of a query block. You need to add a
correlation name to the column.

#### 1.1.4.227 Column '%1' in foreign key has a different definition than primary key

than primary key
SQLE_INVALID_FOREIGN_KEY_DEF
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the problematic column.
Severity
SQLCODE
-113
SQLSTATE

Sybase error code
Probable cause
The data type of the column in the foreign key is not the same as the data type of the column in the primary
key. Change the definition of one of the columns using ALTER TABLE.

#### 1.1.4.228 Column '%1' in table '%2' cannot be NULL

Error constant
SQLE_COLUMN_CANNOT_BE_NULL
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the column that cannot be NULL.
Parameter 2
Name of the table containing the column.
Severity
SQLCODE
-195
SQLSTATE
Sybase error code
Probable cause
You have not supplied a value where a value is required. The column definition prohibits NULL values or the
column is part of a NOT NULL foreign key.

#### 1.1.4.229 Column '%1' in table '%2' cannot be NULL. The invalid data was supplied to LOAD TABLE in a data file on line %3

Error constant
SQLE_COLUMN_CANNOT_BE_NULL_LOAD_TABLE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the column that cannot be NULL.
Parameter 2
Name of the table containing the column.
Parameter 3
The line number of the data file containing the invalid data.
Severity
SQLCODE
-184
SQLSTATE
Sybase error code
Probable cause
You either have not supplied a value where a value is required or a data conversion was necessary that resulted
in a NULL value. The column definition prohibits NULL values or the column is part of a NOT NULL foreign key.

#### 1.1.4.230 Column '%1' not found

SQLE_COLUMN_NOT_FOUND
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S22
Parameter 1
Name of the column that could not be found.
Severity
SQLCODE
-143
SQLSTATE
Sybase error code
Probable cause
You misspelled the name of a column, or the column you are looking for is in a different table.

#### 1.1.4.231 Column '%1' not found in table '%2'

Error constant
SQLE_COLUMN_NOT_FOUND_IN_TABLE
ODBC 2 state
S0002
ODBC 3 state
42S22
Parameter 1
Name of the column that could not be found.
Parameter 2
Name of the table that was supposed to contain the column.
Severity
SQLCODE
-834
SQLSTATE
Sybase error code
Probable cause
You misspelled the name of a column, or the column you are looking for is in a different table.

#### 1.1.4.232 Column '%1' not found in variable '%2'

Error constant
SQLE_COLUMN_NOT_FOUND_IN_VARIABLE
ODBC 2 state
S0002
ODBC 3 state
42S22
Parameter 1
Name of the column that could not be found.
Parameter 2
Name of the row variable that was supposed to contain the
column.
Severity
SQLCODE
-1595
SQLSTATE
Sybase error code
Probable cause
You misspelled the name of a column or variable, or the variable has a different schema than you expect.

#### 1.1.4.233 Column '%1' not part of any indexes in its containing table

containing table
Error constant
SQLE_COLUMN_NOT_INDEXED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the column not found in any index.
Severity
SQLCODE
-1101
SQLSTATE
WW073
Sybase error code
Probable cause
The specified column is not part of any indexes belonging to the containing table.

#### 1.1.4.234 Column must be named: %1

Error constant
SQLE_NO_XML_IDENTIFIER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The number of the column that must be named.
Severity
SQLCODE
-874
SQLSTATE
WX001
Sybase error code
Probable cause
Unnamed columns cannot be used as XML element or attribute names. Unnamed JSON columns can only be
used within the top-level SELECT where the tag and parent are defined. In this context, the unnamed column is
a directive to generate a JSON value rather than a JSON object for the given column. Name unnamed columns
in the SELECT list by using AS.

#### 1.1.4.235 Column subset for table '%1' in publication '%2' does not match that specified in publication '%3'

does not match that specified in publication '%3'
Error constant
SQLE_COLUMN_SUBSET_MISMATCH
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of table
Parameter 2
Name of first publication
Parameter 3
Name of second publication
Severity
SQLCODE
-1325
SQLSTATE
WW138
Sybase error code
Probable cause
The columns included for a table must be identical for all subscribed publications which reference the table.

#### 1.1.4.236 Command '%1' received BACKINT_ERROR from HANA

HANA
COMMAND_RECEIVED_BACKINT_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
hdbnsutil command which returned the error
Severity
SQLCODE
-1967
SQLSTATE
WB036
Sybase error code

Probable cause
Error while trying to execute hdbnsutil command.

#### 1.1.4.237 COMMIT/ROLLBACK not allowed within atomic operation

operation
Error constant
SQLE_ATOMIC_OPERATION
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-267
SQLSTATE
42W28
Sybase error code
Probable cause
You attempted a COMMIT or ROLLBACK statement while executing within an atomic operation.

#### 1.1.4.238 COMMIT/ROLLBACK not allowed within trigger actions

actions
SQLE_INVALID_TRIGGER_STATEMENT
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-273
SQLSTATE
2D501
Sybase error code
Probable cause
You attempted to execute a statement that is not allowed while performing a trigger action. COMMIT and
ROLLBACK statements cannot be executed from a trigger.

#### 1.1.4.239 Communication error

Error constant
SQLE_COMMUNICATIONS_ERROR
ODBC 2 state
08S01
ODBC 3 state
08S01
Severity
SQLCODE
-85
SQLSTATE
08W12
Sybase error code
Probable cause
There is a communication problem between the application and the server.

#### 1.1.4.240 Composite ORDER BY not allowed with RANGE

SQLE_ILLEGAL_COMPOSITE_ORDERBY
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-966
SQLSTATE
42WAA
Sybase error code
Probable cause
Window functions that use the RANGE keyword may only ORDER BY a single column.

#### 1.1.4.241 Compression error: %1

Error constant
SQLE_COMPRESSION_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Error message.
Severity
SQLCODE
-959
SQLSTATE
WW037
Sybase error code
Probable cause
An error occurred during compression.

#### 1.1.4.242 Computed columns are not supported in this database

database
Error constant
SQLE_COMPUTED_COLUMNS_NOT_SUPPORTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-709
SQLSTATE
0AW06
Sybase error code
Probable cause
The current database is an older database and does not have catalog support for computed (materialized)
columns. To use this feature, upgrade your database to the most recent version.

#### 1.1.4.243 Configuration cannot not be modified while in use

Error constant
SQLE_CONFIG_IN_USE
ODBC 2 state
ERROR
ODBC 3 state
Severity
SQLCODE
-1276
SQLSTATE
55W34
Sybase error code
Probable cause
You attempted to modify a configuration object that is in use by an open connection.

#### 1.1.4.244 Conflicting INSTEAD OF trigger and WITH CHECK OPTION on view '%1'

OPTION on view '%1'
Error constant
SQLE_CHECK_TRIGGER_CONFLICT
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the view with an INSTEAD OF trigger
Severity
SQLCODE
-1125
SQLSTATE
42W39
Sybase error code
Probable cause
You attempted an operation that involves a WITH CHECK OPTION clause that conflicts with an INSTEAD OF
trigger. A view defined with the WITH CHECK OPTION clause cannot refer to a view (possibly nested) with an
INSTEAD OF trigger.

#### 1.1.4.245 Connection attempting BACKUP has uncommitted transactions

transactions
Error constant
SQLE_BACKUP_HAS_UNCOMMITTED_TRANS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1028
SQLSTATE
WB014
Sybase error code
Probable cause
A connection attempting to perform a BACKUP...WAIT BEFORE START or BACKUP...WAIT AFTER END has
uncommitted transactions. A COMMIT or ROLLBACK must be performed before executing the backup.

#### 1.1.4.246 Connection disallowed by login policy for this user

Error constant
SQLE_CONNECTION_DISALLOWED_BY_LOGIN_POLICY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1212
SQLSTATE
28W15
Sybase error code
Probable cause
A connection attempt was disallowed based on the login policy for the user. It may be necessary for a user with
DBA authority to reset this user via the ALTER USER statement.

#### 1.1.4.247 Connection error: %1

Error constant
SQLE_CONNECTION_ERROR
ODBC 2 state
ODBC 3 state
Parameter 1
Description of the connection error.
Severity
SQLCODE
-832
SQLSTATE
08W60
Sybase error code
Probable cause
An error occurred while attempting to establish a connection with the database server, but before attempting
to connect to a database. Failure to initialize a communication link during the connection attempt is an example
of this error. Creating a debug log file using the LogFile connection parameter may provide more information.

#### 1.1.4.248 Connection is not allowed to have table locks when executing this statement

executing this statement
SQLE_CONNECTION_HAS_LOCKS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1324
SQLSTATE
WW142
Sybase error code
Probable cause
An attempt was made to execute a statement by a connection that is holding table locks. Because the
statement could release all locks, including those held before the statement started, the locks must be released
before the statement can be executed.

#### 1.1.4.249 Connection not found

Error constant
SQLE_CONNECTION_NOT_FOUND
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-108
SQLSTATE
08W02
Sybase error code
Probable cause
The specified connection name on a DISCONNECT or SET CONNECTION statement is invalid.

#### 1.1.4.250 Connection timed out

SQLE_REMOTE_CONNECTION_TIMED_OUT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-982
SQLSTATE
WW051
Sybase error code
Probable cause
The connection to the remote host timed out due to inactivity.

#### 1.1.4.251 Connection was terminated

Error constant
SQLE_CONNECTION_TERMINATED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-308
SQLSTATE
40W07
Sybase error code
Probable cause
Your database connection has been terminated and your transaction has been rolled back. The connection
may have been terminated because a DBA executed a DROP CONNECTION statement, or because the
database server was shut down, or because your network connection to the database server was interrupted.

#### 1.1.4.252 Connections to database have been disabled

SQLE_CONNECTIONS_DISABLED
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-99
SQLSTATE
08W04
Sybase error code

Probable cause
Connections to the network database server have been disabled. You will receive this error until connections
have been enabled.

#### 1.1.4.253 Constant expressions must not appear in GROUP BY clause

BY clause
Error constant
SQLE_NO_CONSTANTS_IN_GROUP_BY
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-928
SQLSTATE
42W9D
Sybase error code
Probable cause
You used a constant in the GROUP BY clause. Constants must not appear in the GROUP BY clause for a query.
References to columns in a view that are constant are permitted in a GROUP BY clause. Also, expressions that
use a view column that is constant are permitted.

#### 1.1.4.254 Constraint '%1' not found

SQLE_CONSTRAINT_NOT_FOUND
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S23
Parameter 1
Name of the constraint that could not be found.
Severity
SQLCODE
-929
SQLSTATE
42U04
Sybase error code

Probable cause
You misspelled the name of a constraint, or the constraint you are looking for is on a different table.

#### 1.1.4.255 Constraint '%1' violated: Invalid value for column '%2' in table '%3'

'%2' in table '%3'
Error constant
SQLE_INVALID_COLUMN_VALUE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the constraint (if defined) that was violated by an
invalid value.
Parameter 2
Name of the column that was assigned an invalid value.
Parameter 3
Name of the table containing the column.
Severity
SQLCODE
-209
SQLSTATE
Sybase error code
Probable cause
You attempted an insert or update that violates a CHECK constraint. A CHECK constraint is violated if it
evaluates to FALSE; it is deemed to hold if the condition evaluates to TRUE or UNKNOWN.

#### 1.1.4.256 Constraint '%1' violated: Invalid value in table '%2'

Error constant
SQLE_TABLE_CONSTRAINT_VIOLATED
ODBC 2 state

ODBC 3 state
Parameter 1
Name of the constraint (if defined) that was violated by an
invalid value.
Parameter 2
Name of the table containing the column.
Severity
SQLCODE
-1091
SQLSTATE
Sybase error code
Probable cause
You attempted an insert or update that violates a CHECK constraint. A CHECK constraint is violated if it
evaluates to FALSE; it is deemed to hold if the condition evaluates to TRUE or UNKNOWN.

#### 1.1.4.257 Contents of backup files are inconsistent

Error constant
SQLE_RESTORE_INCONSISTENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-715
SQLSTATE
WB006
Sybase error code
Probable cause
During a RESTORE, the contents of a backup that was done to two or more disk devices were found to be
inconsistent.

#### 1.1.4.258 Control character in XML output

Error constant
SQLE_CONTROL_CHARACTER_IN_XML_OUTPUT
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Severity
SQLCODE
-911
SQLSTATE
WX015
Sybase error code
Probable cause
A non-space character less than hex 20 was encountered while generating XML content. Consider base64
encoding strings that contain control characters before using them as XML content. This can be accomplished
in a FOR XML query or SQLX function by casting the string to a type such as LONG BINARY.

#### 1.1.4.259 Coordinate bounds missing for coordinate %1

Error constant
SQLE_SLERR_DDL_SRS_MUSTBOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The coordinate name.
Severity
SQLCODE
-1467
SQLSTATE
2FW60
Sybase error code
Probable cause
No bounds were specified for the named coordinate.

#### 1.1.4.260 Correlation name '%1' is not valid for use with the ROWID function

ROWID function
Error constant
SQLE_INVALID_CORRELATION_FOR_ROWID
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Parameter 1
Name of the invalid correlation name.
Severity
SQLCODE
-1113
SQLSTATE
42WBF
Sybase error code
Probable cause
The correlation name used was not valid for the ROWID function. Only the correlation names of base tables,
temporary tables, global temporary tables or proxy tables may be used with the ROWID function. The
argument of a ROWID function should not refer to a view, derived table, common table expression, or a
procedure.

#### 1.1.4.261 Correlation name '%1' not found

Error constant
SQLE_CORRELATION_NAME_NOT_FOUND
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the invalid correlation name.
Severity
SQLCODE
-142
SQLSTATE
52W02
Sybase error code
Probable cause
You misspelled a correlation name, or you used a table name instead of the correlation name.

#### 1.1.4.262 Could not access column information for the table '%1'

'%1'
Error constant
SQLE_OMNI_RMT_COLUMNS_NOTFOUND
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The complete name of the remote table.
Severity
SQLCODE
-667
SQLSTATE
WO008
Sybase error code
Probable cause
Column information for the table could not be accessed. Check permissions for the table.

#### 1.1.4.263 Could not allocate resources to call external function

function
Error constant
SQLE_ERROR_CALLING_FUNCTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-622
SQLSTATE
WW008
Sybase error code
Probable cause
The external function could not be called due to a shortage of operating system resources. If the operating
system supports threads, the maximum thread count should be increased.

#### 1.1.4.264 Could not create a new text index for this table with the same settings as "%1"

the same settings as "%1"
Error constant
SQLE_TEXT_INDEX_SAME_SETTING_IDX
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The name of the other text index with the same settings.
Severity
SQLCODE
-1304
SQLSTATE
WT021
Sybase error code
Probable cause
Two text indexes with the same column list and configuration settings cannot be created for a table.

#### 1.1.4.265 Could not create a text index with external prefilter library on column "%1"

library on column "%1"
Error constant
SQLE_TEXT_INDEX_PREFILTER_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the column for which external prefilter library is
not allowed.
Severity
SQLCODE
-1493
SQLSTATE
WT031
Sybase error code
Probable cause
A text configuration object without external prefilter library is required if any column in the text index is not of a
binary or string data type.

#### 1.1.4.266 Could not create a text index without external prefilter library on column "%1"

prefilter library on column "%1"
Error constant
SQLE_TEXT_INDEX_NO_PREFILTER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the column for which external prefilter library is
required.
Severity
SQLCODE
-1492
SQLSTATE
WT030
Sybase error code
Probable cause
A text configuration object with a specified external prefilter library is required to build a text index on a binary
column.

#### 1.1.4.267 Could not decompress class '%1' from JAR

SQLE_CANNOT_DECOMPRESS_CLASS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the class file in the JAR.
Severity
SQLCODE
-652
SQLSTATE
WP003
Sybase error code

Probable cause
The Java runtime library must be installed to extract class files from ZIP or JAR files.

#### 1.1.4.268 Could not execute backup/restore DLL (%1) entry point

point
Error constant
SQLE_BACKUP_ENTRY_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the entry point that could not be found.
Severity
SQLCODE
-692
SQLSTATE
08W45
Sybase error code
Probable cause
An attempt to locate or execute the backup/restore DLL entry point failed.

#### 1.1.4.269 Could not execute store DLL (%1) entry point

SQLE_STORE_ENTRY_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the store DLL where the entry point failed.
Severity
SQLCODE
-647
SQLSTATE
08W35
Sybase error code
Probable cause
An attempt to locate or execute the store DLL entry point failed.

#### 1.1.4.270 Could not find '%1' in dynamic library '%2'

Error constant
SQLE_COULD_NOT_FIND_FUNCTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the function that could not be found.
Parameter 2
Name of the dynamic library in which the function could not
be found.
Severity
SQLCODE
-621
SQLSTATE
WW007
Sybase error code
Probable cause
The external function could not be found in the dynamic library.

#### 1.1.4.271 Could not initialize the encryption DLL: '%1'

SQLE_ENCRYPTION_INITIALIZATION_FAILED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Reason the initialization failed, if known.
Severity
SQLCODE
-984
SQLSTATE
WW053
Sybase error code

Probable cause
An attempt to initialize the encryption DLL failed.

#### 1.1.4.272 Could not load dynamic library '%1'

Error constant
SQLE_COULD_NOT_LOAD_LIBRARY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the dynamic library that could not be loaded.
Severity
SQLCODE
-620
SQLSTATE
WW006
Sybase error code
Probable cause
This error is usually caused by a failure to load a dynamic library named in an external function call.

#### 1.1.4.273 Could not load the backup/restore DLL "%1"

Error constant
SQLE_BACKUP_NOT_LOADED

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the DLL that could not be loaded.
Severity
SQLCODE
-691
SQLSTATE
08W44
Sybase error code
Probable cause
An attempt to load the backup/restore DLL failed.

#### 1.1.4.274 Could not load the encryption DLL "%1"

Error constant
SQLE_MISSING_ENCRYPTION_DLL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the encryption DLL that could not be loaded.
Severity
SQLCODE
-976
SQLSTATE
08W70
Sybase error code
Probable cause
An attempt to load the encryption DLL failed.

#### 1.1.4.275 Could not load the store DLL "%1"

Error constant
SQLE_STORE_NOT_LOADED
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Parameter 1
Name of the store DLL that could not be loaded.
Severity
SQLCODE
-646
SQLSTATE
08W34
Sybase error code
Probable cause
An attempt to load the store DLL failed.

#### 1.1.4.276 Could not refresh tracing: at least one enabled tracing level must be specified

tracing level must be specified
Error constant
SQLE_NO_TRACING_LEVELS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1081
SQLSTATE
55W24
Sybase error code
Probable cause
Table sa_diagnostic_tracing_level contains no rows (tracing levels) or no tracing levels are enabled.

#### 1.1.4.277 Could not refresh tracing: failed to find object %1 on row %2

on row %2
Error constant
SQLE_TRACING_OBJ_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specified name of the object.

Parameter 2
The primary key of the row on which the check failed.
Severity
SQLCODE
-1083
SQLSTATE
WW067
Sybase error code
Probable cause
You misspelled the object name, or you did not qualify the name with user (and, possibly, table) name. For
example, you might have referred to table_name instead of "owner"."table_name", or you might have referred
to table_name_trigger instead of "owner"."table_names"."table_name_trigger".

#### 1.1.4.278 Could not refresh tracing: invalid tracing specification on sa_diagnostic_tracing_level row %1

specification on sa_diagnostic_tracing_level row %1
Error constant
SQLE_INVALID_TRACING_SPEC
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The primary key of the row that is invalid.
Severity
SQLCODE
-1082
SQLSTATE
WW066
Sybase error code
Probable cause
You specified an invalid combination of values for the tracing level. Some invalid combinations are: specified
condition is not valid for the tracing type, or specified tracing type is not valid for the scope.

#### 1.1.4.279 Could not refresh tracing: volatile_statistics have to be collected in order for %1 specified on row %2 to be collected

Error constant
SQLE_NO_VOLATILE_LEVEL_SPEC
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The tracing level that caused the error.
Parameter 2
The primary key of the row on which the check failed.
Severity
SQLCODE
-1087
SQLSTATE
WW068
Sybase error code
Probable cause
Volatile statistics have to be collected in order for the non-volatile and connection statistics to be collected.

#### 1.1.4.280 Could not start a new profiling session because the previous session is still being processed.

previous session is still being processed.
PROFILER_PROCESSING_PREVIOUS_SESSION_START
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2071
SQLSTATE
WW270
Sybase error code
Probable cause
Could not start a new profiling session because the previous session is still being processed. Wait for the
processing to be finished or clear the profiler data to stop the processing.

#### 1.1.4.281 Could not write the profiler data because the previous session is still being processed.

previous session is still being processed.
Error constant
PROFILER_PROCESSING_PREVIOUS_SESSION_WRITE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2072
SQLSTATE
WW271
Sybase error code
Probable cause
Could not write the profiler data because the previous session is still being processed. Wait for the processing
to be finished.

#### 1.1.4.282 CREATE/DROP STATISTICS statement cannot refer to virtual tables

to virtual tables
Error constant
SQLE_HISTOGRAMS_NOT_SUPPORTED_ON_OBJECT
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-858
SQLSTATE
42W67
Sybase error code
Probable cause
You attempted to use CREATE/DROP STATISTICS to create/drop one or more histograms on a virtual database
object, such as a view or remote table. The CREATE STATISTICS and DROP STATISTICS statements can only
refer to base tables, local temporary tables, or global temporary tables in the SQL Anywhere database that you
are connected to.

#### 1.1.4.283 Creating remote tables with computed columns is not supported

not supported
Error constant
SQLE_OMNI_COMPUTED_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-732
SQLSTATE
WO021
Sybase error code
Probable cause
Computed columns are not supported in CREATE TABLE statements that specify a remote location.

#### 1.1.4.284 Current connection is already registered to '%1' as '%2'

'%2'
Error constant
SQLE_CONN_ALREADY_REGISTERED
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the application.
Parameter 2
Registered connection label.
Severity
SQLCODE
-787
SQLSTATE
5RW26
Sybase error code
Probable cause
You attempted to register this connection more than once.

#### 1.1.4.285 Cursor %1 cannot be used to declare a row variable using %ROWTYPE

using %ROWTYPE
Error constant
SQLE_CURSOR_NOT_SUPPORTED_IN_DE-
CLARE_ROW_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of cursor.
Severity
SQLCODE
-1735
SQLSTATE
WP026
Sybase error code
Probable cause
Use of %ROWTYPE is not supported for the cursor. You attempted to use a cursor that cannot be used for
declaring a row variable using cursor %ROWTYPE.

#### 1.1.4.286 Cursor already open

SQLE_CURSOR_ALREADY_OPEN
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-172
SQLSTATE
Sybase error code
Probable cause
You attempted to OPEN a cursor that is already open.

#### 1.1.4.287 Cursor has not been declared

Error constant
SQLE_CURSOR_NOT_DECLARED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-170
SQLSTATE
24W01
Sybase error code
Probable cause
You attempted to OPEN a cursor that has not been declared.

#### 1.1.4.288 Cursor is restricted to FETCH NEXT operations

SQLE_NO_SCROLL_CURSOR
Error constant
ODBC 2 state
S1106
ODBC 3 state
HY106
Severity
SQLCODE
-668
SQLSTATE
09W06

Sybase error code
Probable cause
An illegal FETCH operation has been detected for a NO SCROLL cursor. For a forward-only cursor the only
permitted FETCH operations are FETCH RELATIVE 0 and FETCH NEXT (FETCH RELATIVE 1).

#### 1.1.4.289 Cursor not in a valid state

Error constant
SQLE_CURSOR_INVALID_STATE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-853
SQLSTATE
Sybase error code
Probable cause
You attempted to use a cursor that is not in a valid state for the attempted operation. For example, the cursor
may have encountered an error. In UltraLite, this error occurs if you attempt to set parameters for a prepared
statement while a result set (cursor) is open for the statement.

#### 1.1.4.290 Cursor not open

Error constant
SQLE_CURSOR_NOT_OPEN
ODBC 2 state

ODBC 3 state
Severity
SQLCODE
-180
SQLSTATE
Sybase error code
Probable cause
You attempted to use a cursor that has not been opened.

#### 1.1.4.291 Cursor option values changed

Error constant
SQLE_CURSOR_OPTIONS_CHANGED
ODBC 2 state
01S02
ODBC 3 state
01S02
Severity
SQLCODE
SQLSTATE
01S02
Sybase error code
Probable cause
The database server could not support the requested cursor option values for the associated query. Similar
option settings were substituted.

#### 1.1.4.292 Curve contains nearly antipodal points %1 and %2 (near '%3')

(near '%3')
Error constant
SQLE_SLERR_NEARLY_ANTIPODAL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The first point.
Parameter 2
The second point.
Parameter 3
The value or method where the error was detected.
Severity
SQLCODE
-1482
SQLSTATE
2FW77
Sybase error code
Probable cause
A curve contains two points that are nearly antipodal. These define an ambiguous segment in a round-Earth
spatial reference system.

#### 1.1.4.293 Cycle in common table expression references

SQLE_COMMON_TABLE_EXPRESSION_CYCLE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-914
SQLSTATE
42W93
Sybase error code

Probable cause
Cycles involving multiple common table expressions are not allowed.

#### 1.1.4.294 Cycle in computed column dependencies

Error constant
SQLE_COMPUTED_COLUMN_CYCLE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1078
SQLSTATE
42WBD
Sybase error code
Probable cause
The table has a cycle in the dependencies between its computed columns. Cycles are not allowed.

#### 1.1.4.295 Data definition statements not allowed in procedures or triggers

procedures or triggers
SQLE_DDL_NOT_ALLOWED_IN_PROCEDURES
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-623
SQLSTATE
52W21
Sybase error code
Probable cause
The procedure or trigger definition contains a data definition statement (such as CREATE, DROP, GRANT,
REVOKE, or ALTER). These statements are not allowed within procedures or triggers.

#### 1.1.4.296 Data modifications are not allowed in a synchronization schema change

synchronization schema change
Error constant
SQLE_SYNC_SCHEMA_CHANGE_DISALLOWS_DML
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1342
SQLSTATE
5RW42
Sybase error code
Probable cause
You attempted a data modification operation within a synchronization schema change.

#### 1.1.4.297 Database "%1" needs recovery

Error constant
SQLE_DATABASE_NEEDS_RECOVERY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name of the database that needs recovery.
Severity
SQLCODE
-665
SQLSTATE
08W41
Sybase error code
Probable cause
The database quit abnormally the last time it was used. Database recovery must be performed before
proceeding.

1.1.4.298  Database '%1' cannot be started
on this platform. See http://ianywhere.com/
developer/product_manuals/sqlanywhere/notes/
en/endian_cant_change_platform.html
Error constant
SQLE_DATABASE_ENDIAN_FAILURE
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the database.
Severity
SQLCODE
-1149
SQLSTATE
08W99
Sybase error code
Probable cause
It was determined that the database cannot be started on the current platform because doing
so could possibly cause an endian related database file corruption. It will continue to start
without problems on a platform with the opposite endian. More information and instructions on
how to proceed are available at: http://ianywhere.com/developer/product_manuals/sqlanywhere/notes/en/
endian_cant_change_platform.html
1.1.4.299  Database '%1' cannot be started
on this platform. See http://ianywhere.com/
developer/product_manuals/sqlanywhere/notes/
en/endian_corruption_warning.html
SQLE_POSSIBLE_DATABASE_CORRUPTION
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the database.
Severity
SQLCODE
-1147
SQLSTATE
08W98
Sybase error code

Probable cause
It was determined that the database may be corrupt. More information and instructions on
how to proceed are available at: http://ianywhere.com/developer/product_manuals/sqlanywhere/notes/en/
endian_corruption_warning.html

#### 1.1.4.300 Database alter failed: %1

Error constant
SQLE_DATABASE_NOT_ALTERED
ODBC 2 state
ODBC 3 state
Parameter 1
Reason that the database was not altered.
Severity
SQLCODE
-1639
SQLSTATE
08WB8
Sybase error code
Probable cause
Your attempt to alter a database failed.

#### 1.1.4.301 Database backup not started

SQLE_BACKUP_NOT_STARTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-241
SQLSTATE
WB002
Sybase error code

Probable cause
A database backup could not be started. Either a backup is already running, or you do not
have the required system privileges or authority (SYS_AUTH_BACKUP_ROLE, SYS_AUTH_DBA_ROLE, or
SYS_RUN_REPLICATION_ROLE).

#### 1.1.4.302 Database cannot be started -- %1

Error constant
SQLE_UNABLE_TO_CONNECT
ODBC 2 state
ODBC 3 state
Parameter 1
Reason that database cannot be started.
Severity
SQLCODE
-105
SQLSTATE
Sybase error code
Probable cause
The specified database cannot be started. Either it does not exist, it is not a database, it is corrupt, or it is an
older, unsupported format.

#### 1.1.4.303 Database connection limit exceeded

SQLE_TOO_MANY_DB_CONNECTIONS
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1777
SQLSTATE
08W77
Sybase error code

Probable cause
You exceeded the number of connections allowed for this database. This limit is specified by the
max_connections database option.

#### 1.1.4.304 Database contains no tables to synchronize

Error constant
SQLE_NO_TABLES_TO_SYNCHRONIZE
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
01W28
Sybase error code
Probable cause
The database has no tables to synchronize. No attempt was made to contact the MobiLink server.

#### 1.1.4.305 Database contains users with 'SYS_' prefix and '_ROLE' suffix

'_ROLE' suffix
SQLE_INVALID_USER_NAME
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1596
SQLSTATE
08WB3

Sybase error code
Probable cause
The database to be upgraded contains users with 'SYS_' prefix and '_ROLE' suffix. Drop or migrate these users
before upgrading the database.

#### 1.1.4.306 Database creation failed: %1

Error constant
SQLE_DATABASE_NOT_CREATED
ODBC 2 state
ODBC 3 state
Parameter 1
Reason that the database was not created.
Severity
SQLCODE
-645
SQLSTATE
08W33
Sybase error code
Probable cause
Your attempt to initialize a file for a database failed.

#### 1.1.4.307 Database is active

Error constant
SQLE_DATABASE_ACTIVE
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Severity
SQLCODE
-664
SQLSTATE
08W40
Sybase error code
Probable cause
The attempted operation (CREATE ENCRYPTED, CREATE DECRYPTED, ALTER DATABASE) cannot be
performed while the database is running. Stop the database to perform the operation.

#### 1.1.4.308 Database mirroring options are not supported for this database

this database
Error constant
SQLE_MIRRORING_OPTIONS_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1307
SQLSTATE
WW130
Sybase error code
Probable cause
The current database does not have catalog support for database mirroring servers and options. To use this
feature, upgrade your database to the most recent version.

#### 1.1.4.309 Database name must be specified when connecting to a cloud database server

to a cloud database server
Error constant
SQLE_NO_DEFAULT_DATABASE
ODBC 2 state

ODBC 3 state
Severity
SQLCODE
-1581
SQLSTATE
08WA7
Sybase error code
Probable cause
When connecting to a cloud database server, a database name must be specified by the connection string.
Cloud database servers do not have a default database.

#### 1.1.4.310 Database name not unique

Error constant
SQLE_ALIAS_CLASH
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-77
SQLSTATE
08W27
Sybase error code
Probable cause
The database cannot be started as its name conflicts with a previously started database.

#### 1.1.4.311 Database name required to start server

Error constant
SQLE_DATABASE_NAME_REQUIRED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-87

SQLSTATE
08W14
Sybase error code
Probable cause
You did not supply a database name. A database name is required to start a database server.

#### 1.1.4.312 Database needs to be upgraded to support the use of external libraries with text indexes

of external libraries with text indexes
Error constant
SQLE_TEXT_EXT_UPGRADE_REQUIRED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1522
SQLSTATE
WT035
Sybase error code
Probable cause
The current database does not have catalog support for prefilter and term breaker external libraries. To use this
feature, upgrade your database to the most recent version.

#### 1.1.4.313 Database option '%1' for user '%2' has an invalid setting

setting
Error constant
SQLE_INVALID_OPTION_ON_CONNECT
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the database option that has the invalid value.
Parameter 2
Name of the user attempting to connect.
Severity
SQLCODE
SQLSTATE
01W11
Sybase error code
Probable cause
Upon processing a connection request for a specific user, the server processed a database option that has an
invalid setting. The server will use the default option value.

#### 1.1.4.314 Database page size too big: %1

Error constant
SQLE_PAGE_SIZE_TOO_BIG
ODBC 2 state
ODBC 3 state
Parameter 1
Database name.
Severity
SQLCODE
-97
SQLSTATE
08W22
Sybase error code
Probable cause
You attempted to start a database with a page size that exceeds the maximum page size of the running server.
Either restart the server and include this database name on the command line, or restart the server with the
required page size.

#### 1.1.4.315 Database page size too small: %1

Error constant
SQLE_PAGE_SIZE_TOO_SMALL
ODBC 2 state
ODBC 3 state
Parameter 1
Database name.
Severity
SQLCODE
-972
SQLSTATE
54W03
Sybase error code
Probable cause
You attempted to load statistics that were too large for the current database page size. Rebuilding this
database with a larger page size could prevent this error.

#### 1.1.4.316 Database page validation failed with code: %1

Error constant
SQLE_CORRUPT_ULTRALITE_DATABASE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specific kind of corruption that was found.
Severity
SQLCODE
-1186
SQLSTATE
WI003
Sybase error code
Probable cause
UltraLite database validation failed while validating the database pages. The code provides more specific
information on the validation failure.

#### 1.1.4.317 Database server already running

Error constant
SQLE_ENGINE_ALREADY_RUNNING
ODBC 2 state
S1000
ODBC 3 state
HY000
Severity
SQLCODE
-96
SQLSTATE
08W23
Sybase error code
Probable cause
The database server was not able to start because a server with the same name was already running.

#### 1.1.4.318 Database server cannot convert data from/to character set '%1'

character set '%1'
SQLE_UNSUPPORTED_CHARACTER_SET_ERROR
Error constant
ODBC 2 state
08S01
ODBC 3 state
08S01
Parameter 1
Name of the requested character set.
Severity
SQLCODE
-869

SQLSTATE
08W64
Sybase error code
Probable cause
The database server cannot convert character data from/to the character set requested by the application
because the character set is not supported. The connection fails.

#### 1.1.4.319 Database server cannot convert data from/to character set '%1', conversion may not be correct

character set '%1', conversion may not be correct
Error constant
SQLE_UNSUPPORTED_CHARACTER_SET_WARNING
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the requested character set.
Severity
SQLCODE
SQLSTATE
01W13
Sybase error code
Probable cause
The database server cannot convert character data from/to the character set requested by the application
because the character set is not supported. The connection succeeds, but character conversion may not be
correct for all characters.

#### 1.1.4.320 Database server connection limit exceeded

Error constant
SQLE_TOO_MANY_CONNECTIONS
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-102
SQLSTATE
08W03
Sybase error code
Probable cause
You exceeded the number of computers allowed to connect to the server. If you are running the network
database server, the limit is specified in your license agreement. The server may be running low on cache, and
as a result it cannot accept any more database connections. The personal database server is restricted to 10
connections.

#### 1.1.4.321 Database server name '%1' cannot be the same as either the primary or mirror server

either the primary or mirror server
SQLE_MIRROR_SERVER_NAME_CONFLICT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The server name
Severity
SQLCODE
-1381
SQLSTATE
WW159
Sybase error code

Probable cause
The mirror servers defined with type PRIMARY or MIRROR cannot have names that match actual server
names.

#### 1.1.4.322 Database server not found

Error constant
SQLE_ENGINE_NOT_RUNNING
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-100
SQLSTATE
08W01
Sybase error code
Probable cause
The database server is not running, or is in the process of starting up or shutting down, or the interface library
is unable to find it.

#### 1.1.4.323 Database server not running in multi-user mode

Error constant
SQLE_ENGINE_NOT_MULTIUSER
ODBC 2 state

ODBC 3 state
Severity
SQLCODE
-89
SQLSTATE
08W16
Sybase error code
Probable cause
The database server was started for bulk loading (the -b option) and cannot be used as a network server. Stop
the database server, and start again without -b.

#### 1.1.4.324 Database upgrade failed

Error constant
SQLE_DATABASE_UPGRADE_FAILED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-672
SQLSTATE
08W42
Sybase error code
Probable cause
Your attempt to upgrade a database failed. This could be caused by a failure to locate one of the SQL script files
used to define the system table changes.

#### 1.1.4.325 Database upgrade not possible

Error constant
SQLE_DATABASE_UPGRADE_NOT_POSSIBLE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-673
SQLSTATE
08W43
Sybase error code
Probable cause
An attempt to upgrade a database failed. The database is too old to be upgraded.

#### 1.1.4.326 Database upgrade not possible; database has auditing enabled

auditing enabled
Error constant
UPGRADE_DATABASE_WITH_AUDITING
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1987
SQLSTATE
08WC4
Sybase error code
Probable cause
An attempt to upgrade a database failed. The specified database has auditing enabled. You must disable
auditing before upgrading the database.

#### 1.1.4.327 Database upgrade not possible; RowGenerator table not owned by user dbo

table not owned by user dbo
Error constant
SQLE_DBO_DOES_NOT_OWN_ROWGENERATOR
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-826
SQLSTATE
08W57
Sybase error code
Probable cause
An attempt to upgrade a database failed. The RowGenerator table is not owned by user dbo.

#### 1.1.4.328 Database upgrade not possible; user tables have table IDs in system table range

table IDs in system table range
Error constant
SQLE_USER_TABLES_IN_SYSTEM_RANGE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-827
SQLSTATE
08W58
Sybase error code
Probable cause
An attempt to upgrade a database failed. User table IDs should not be in system table ID range.

1.1.4.329  Database upgrade not possible; user-defined
database option "%1" conflicts with the system-
defined database option with the same name
Error constant
SQLE_UPGRADE_CONFLICTING_OPTION
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the conflicting option.
Severity
SQLCODE
-1778
SQLSTATE
08W78
Sybase error code
Probable cause
An attempt to upgrade a database failed. Remove the conflicting database option before upgrading.

#### 1.1.4.330 db_init has not been called or the call to db_init failed

failed
SQLE_DB_INIT_NOT_CALLED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-739
SQLSTATE
55W07
Sybase error code
Probable cause
The SQLCA passed to a dblib entry point has not been initialized by a call to db_init or the call to db_init failed.

#### 1.1.4.331 DBA password must be specified in the CREATE DATABASE statement

DATABASE statement
Error constant
SQLE_NO_DBA_PASSWORD_CREATE_DB_OPTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1742
SQLSTATE
42U21
Sybase error code
Probable cause
You have not specified DBA PASSWORD option when executing the CREATE DATABASE statement.

#### 1.1.4.332 DBA user ID must be specified in the CREATE DATABASE statement

DATABASE statement
SQLE_NO_DBA_USER_CREATE_DB_OPTION
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1741
SQLSTATE
42U20
Sybase error code
Probable cause
You have not specified DBA USER option when executing the CREATE DATABASE statement.

#### 1.1.4.333 DBF parameter cannot be used when the SQL Anywhere Cockpit is being prepared to save.

Anywhere Cockpit is being prepared to save.
Error constant
COCKPITDB_CANNOT_USE_DBF_PARM_WHEN_PRE-
PARE_SAVE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1958
SQLSTATE
08WJ1
Sybase error code
Probable cause
The DBF parameter cannot be used when the SQL Anywhere Cockpit is preparing to save.

#### 1.1.4.334 DBF parameter cannot be used when the SQL Anywhere Cockpit is not stopped. The SQL Anywhere Cockpit is active

SQLE_COCKPITDB_CAN-
Error constant
NOT_USE_DBF_PARM_WHEN_DB_ACTIVE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1869
SQLSTATE
08WH4
Sybase error code
Probable cause
The DBF parameter cannot be used when the SQL Anywhere Cockpit is not stopped. The SQL Anywhere
Cockpit is currently active.

#### 1.1.4.335 DBF parameter cannot be used when the SQL Anywhere Cockpit is not stopped. The SQL Anywhere Cockpit is being started

Error constant
SQLE_COCKPITDB_CAN-
NOT_USE_DBF_PARM_WHEN_DB_BEING_STARTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1867
SQLSTATE
08WH2
Sybase error code
Probable cause
The DBF parameter cannot be used when the SQL Anywhere Cockpit is not stopped. The SQL Anywhere
Cockpit is being started.

#### 1.1.4.336 DBF parameter cannot be used when the SQL Anywhere Cockpit is not stopped. The SQL Anywhere Cockpit is starting

SQLE_COCKPITDB_CAN-
Error constant
NOT_USE_DBF_PARM_WHEN_DB_STARTING
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1868
SQLSTATE
08WH3
Sybase error code
Probable cause
The DBF parameter cannot be used when the SQL Anywhere Cockpit is not stopped. The SQL Anywhere
Cockpit is starting.

#### 1.1.4.337 DBF parameter cannot be used when the SQL Anywhere Cockpit is not stopped. The SQL Anywhere Cockpit is stopping

Error constant
SQLE_COCKPITDB_CAN-
NOT_USE_DBF_PARM_WHEN_DB_STOPPING
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1870
SQLSTATE
08WH5
Sybase error code
Probable cause
The DBF parameter cannot be used when the SQL Anywhere Cockpit is not stopped. The SQL Anywhere
Cockpit is stopping.

#### 1.1.4.338 dbicu libraries are required but not installed

SQLE_ICU_NOT_AVAILABLE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1076
SQLSTATE
WC012
Sybase error code
Probable cause
The server is unable to load ICU components that are required by this database. Ensure that the dbicu and
dbicudt DLLs are installed.

#### 1.1.4.339 Dbspace '%1' not found

Error constant
SQLE_DBSPACE_NOT_FOUND
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the dbspace that could not be found.
Severity
SQLCODE
-138
SQLSTATE
52W13
Sybase error code
Probable cause
You tried to access a dbspace that the database server could not find.

#### 1.1.4.340 Dbspace for table '%1' not found

Error constant
SQLE_DBSPACE_FOR_TABLE_UNAVAILABLE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the table whose dbspace could not be found.
Severity
SQLCODE
-821
SQLSTATE
52W19
Sybase error code
Probable cause
You tried to access a table in a dbspace that the database server could not find. You may need to change the file
name associated with the dbspace using the ALTER DBSPACE statement.

#### 1.1.4.341 Deadlock detected

Error constant
SQLE_DEADLOCK
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-306
SQLSTATE
Sybase error code
Probable cause
You attempted to read or write a row and it is locked by another user. Also, the other user is blocked directly
or indirectly on your own transaction. This is a deadlock situation and your transaction has been chosen as the
one to rollback.

#### 1.1.4.342 Deadlock involving a mutex detected

Error constant
SQLE_MUTEX_DEADLOCK
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1806
SQLSTATE
Sybase error code
Probable cause
You were waiting to lock a mutex and it is not available. Also, the other user is blocked directly or indirectly on
your transaction. This is a deadlock situation and your transaction has been chosen as the one to roll back.

#### 1.1.4.343 Debugger error: %1

Error constant
SQLE_DEBUGGER_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Description of the error that occurred.
Severity
SQLCODE
-1736
SQLSTATE
WW248
Sybase error code
Probable cause
An error occurred during a SQL Anywhere debugger operation.

#### 1.1.4.344 Decompression error: %1

Error constant
SQLE_DECOMPRESSION_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Error message.
Severity
SQLCODE
-960
SQLSTATE
WW038
Sybase error code
Probable cause
An error occurred during decompression.

#### 1.1.4.345 Decryption error: %1

Error constant
SQLE_DECRYPT_ERROR
ODBC 2 state
ODBC 3 state
Parameter 1
Description of the error that occurred.
Severity
SQLCODE
-851
SQLSTATE
08W63
Sybase error code
Probable cause
An error occurred during decryption.

#### 1.1.4.346 Default dbspace '%1' not found

Error constant
SQLE_DEFAULT_DBSPACE_NOT_FOUND
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the default dbspace that could not be found.
Severity
SQLCODE
-1068
SQLSTATE
52W43
Sybase error code
Probable cause
You tried to create a table with the default_dbspace option set to a dbspace that could not be found.

#### 1.1.4.347 Definition for alias '%1' must appear before its first reference

reference
Error constant
SQLE_ALIAS_NOT_YET_DEFINED
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Name of the alias.
Severity
SQLCODE
-831
SQLSTATE
42W61
Sybase error code
Probable cause
An expression contains a reference to an alias, but the alias is defined later in the SELECT list. The alias
definition must appear before its first reference.

#### 1.1.4.348 Definition for sequence '%1' is invalid

SQLE_INVALID_SEQUENCE_DEFINITION
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the sequence.
Severity
SQLCODE
-1356
SQLSTATE
52W49
Sybase error code

Probable cause
An invalid combination of modifiers has been used for the sequence. Make sure that the MAXVAL is greater
than the MINVAL and that START WITH is between MINVAL and MAXVAL.

#### 1.1.4.349 Derived table '%1' has no name for column %2

Error constant
SQLE_NO_COLUMN_NAME
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the derived table.
Parameter 2
Number of the column for which there is no name.
Severity
SQLCODE
-163
SQLSTATE
Sybase error code
Probable cause
The specified column of the derived table has no column name. Use a SELECT list alias in the query
specification or use a derived columns specifier.

#### 1.1.4.350 Dialect '%1' is not supported by this database

Error constant
DIALECT_NOT_SUPPORTED_BY_DATABASE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the invalid dialect

Severity
SQLCODE
-1949
SQLSTATE
08WF6
Sybase error code
Probable cause
The database you are trying to connect to does not support the specified SQL dialect.

#### 1.1.4.351 Directory for output file does not exist

Error constant
SQLE_DIRECTORY_INACCESSIBLE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-978
SQLSTATE
WW047
Sybase error code
Probable cause
The file cannot be written because the directory does not exist.

#### 1.1.4.352 Disallowed language extension detected in syntax near '%1' on line %2

near '%1' on line %2
SQLE_INVALID_SYNTAX_EXTENSION
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The word or symbol where the syntax has been detected.
Parameter 2
Line number.
Severity

SQLCODE
-627
SQLSTATE
0AW03
Sybase error code
Probable cause
The statement you are trying to execute contains syntax that is not allowed with the current setting of the
option sql_flagger_error_level. Modify the offending statement or set the sql_flagger_error_level option to a
different value.

#### 1.1.4.353 Disk full '%1' -- transaction rolled back

Error constant
SQLE_DEVICE_FULL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the file that could not be written to the disk.
Severity
SQLCODE
-304
SQLSTATE
40W03
Sybase error code
Probable cause
Your hard disk is out of space. A ROLLBACK statement has been automatically executed.

#### 1.1.4.354 Disk write failure '%1' -- transaction rolled back

SQLE_DISK_WRITE_FAILED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the file that could not be written.
Severity
SQLCODE
-303

SQLSTATE
40W05
Sybase error code
Probable cause
A disk write failed. A ROLLBACK statement has been automatically executed.

#### 1.1.4.355 Division by zero

Error constant
SQLE_DIV_ZERO_ERROR
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-628
SQLSTATE
Sybase error code
Probable cause
A division by zero operation was detected.

#### 1.1.4.356 Download failed because of conflicts with existing rows on table '%1' (row: %2)

rows on table '%1' (row: %2)
Error constant
SQLE_DOWNLOAD_CONFLICT
ODBC 2 state
ODBC 3 state

Parameter 1
Name of the table with the conflict.
Parameter 2
The value of the primary key of the row that conflicted.
Severity
SQLCODE
-839
SQLSTATE
0AW11
Sybase error code
Probable cause
During synchronization, there was a conflict between one or more rows in the download stream and rows
modified locally in the UltraLite database. The download has been rolled back. You can avoid this error
by coordinating local database modifications with synchronization, or synchronizing again when the local
modifications are complete.

#### 1.1.4.357 Download failed due to an invalid or unsupported row value

row value
SQLE_INVALID_DOWNLOAD_VALUE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1382
SQLSTATE
0AW26
Sybase error code

Probable cause
The synchronization download failed because a downloaded row contained a column value that was either
invalid or not supported.

#### 1.1.4.358 Dropping all columns from table '%1' is not allowed

Error constant
SQLE_TOO_MANY_COLUMNS_DELETED
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the table from which the columns could not be
dropped.
Severity
SQLCODE
-124
SQLSTATE
42W44
Sybase error code
Probable cause
The number of columns in a table can never fall below one. Your ALTER TABLE has more drop/delete column
clauses than the current number of columns in the table.

#### 1.1.4.359 Dropping or altering arbiter "%1" requires a connection to the partner

connection to the partner
Error constant
SQLE_MIRROR_DROP_ARBITER_REQUIRES_PART-
NER_CONN
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the arbiter server.

Severity
SQLCODE
-1632
SQLSTATE
WW242
Sybase error code
Probable cause
An attempt was made to drop or alter an arbiter that is not connected to the partner server.

#### 1.1.4.360 DTC transactions are not supported on this platform

platform
SQLE_DTC_TRANSACTIONS_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-799
SQLSTATE
0AW10
Sybase error code
Probable cause
You tried to enlist a DTC transaction on a platform that does not support this feature.

#### 1.1.4.361 Duplicate attribute '%1' in service

Error constant
SQLE_SERVICE_PARM_DUPLICATE_PROPERTY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the duplicate attribute.
Severity
SQLCODE
-1025
SQLSTATE
42WB0
Sybase error code
Probable cause
The service definition contains a duplicate attribute.

#### 1.1.4.362 Duplicate insert column

Error constant
SQLE_DUPLICATE_INSERT_COLUMN
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-637
SQLSTATE
42W41
Sybase error code
Probable cause
You supplied a duplicate column name in the list of insert columns.

#### 1.1.4.363 Duplicate key column (%1)

Error constant
SQLE_DUPLICATE_KEY_COLUMN

ODBC 2 state
ODBC 3 state
Parameter 1
The name of the duplicate column.
Severity
SQLCODE
-1085
SQLSTATE
42WC0
Sybase error code
Probable cause
You supplied a duplicate column name in the list of columns for the key of a primary key, foreign key, or unique
constraint, or an index.

#### 1.1.4.364 Duplicate options not allowed in %1!s!

Error constant
DUPLICATE_CLAUSE
ODBC 2 state
ODBC 3 state
Parameter 1
A string indicating the statement used.
Severity
SQLCODE
-1933
SQLSTATE
42U47
Sybase error code
Probable cause
You have specified an option more than once when executing the given SQL statement.

#### 1.1.4.365 Duplicate options not allowed in CREATE DATABASE

DATABASE
Error constant
SQLE_DUPLICATE_CREATE_DB_OPTION

ODBC 2 state
S0002
ODBC 3 state
ERROR
Severity
SQLCODE
-1221
SQLSTATE
42U08
Sybase error code
Probable cause
You have specified one of the options more than once when executing CREATE DATABASE.

#### 1.1.4.366 Duplicate referencing column

Error constant
SQLE_DUPLICATE_REFERENCING_COLUMN
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-636
SQLSTATE
42W40
Sybase error code
Probable cause
You supplied a duplicate column name in the list of referencing columns.

#### 1.1.4.367 Dynamic memory exhausted during %1

Error constant
SQLE_DYNAMIC_MEMORY_EXHAUSTED
ODBC 2 state
S1001
ODBC 3 state
HY001
Parameter 1
Description of what the server was doing when the error
occurred

Severity
SQLCODE
-78
SQLSTATE
08W26
Sybase error code
Probable cause
A failure occurred when the database server was trying to allocate dynamic memory.

#### 1.1.4.368 Element is an empty set (near '%1')

Error constant
SQLE_SLERR_ELEMENT_IS_EMPTY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value or method where the empty geometry has been
detected.
Severity
SQLCODE
-1401
SQLSTATE
2FF06
Sybase error code
Probable cause
An element of a geometry is the empty set. Empty geometries cannot be used as the points in linestrings or
circularstrings; empty curves cannot be used as elements of compoundcurves; empty curves cannot be used
as rings of polygons.

#### 1.1.4.369 Ellipsoid parameters missing for geographic spatial reference system

reference system
Error constant
SQLE_SLERR_DDL_SRS_NOELLIPSOID
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1465
SQLSTATE
2FW58
Sybase error code
Probable cause
When creating a geographic spatial reference system, the ellipsoid parameters must be specified, either in the
DEFINITION clause or explicitly. These parameters are used to calculate the distance between points.

#### 1.1.4.370 Ellipsoid parameters specified for non-geographic spatial reference system

spatial reference system
SQLE_SLERR_DDL_SRS_ELLIPSOID
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1466
SQLSTATE
2FW59
Sybase error code
Probable cause
The ELLIPSOID parameters can only be specified for geographic spatial reference systems.

#### 1.1.4.371 Encryption error: %1

Error constant
SQLE_ENCRYPT_ERROR
ODBC 2 state
ODBC 3 state
Parameter 1
Description of the error that occurred.
Severity
SQLCODE
-895
SQLSTATE
08W66
Sybase error code
Probable cause
An error occurred during encryption.

#### 1.1.4.372 Encryption failed for the SQL Anywhere Cockpit setting file. Error message '%1'

setting file. Error message '%1'
Error constant
SQLE_COCKPITDB_SETTING_FILE_CIPHER_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The error message reported by block encrypter.
Severity
SQLCODE
-1877
SQLSTATE
WW255
Sybase error code
Probable cause
Run-time block encrypter initialization failed.

#### 1.1.4.373 Encryption has not been enabled

Error constant
SQLE_ENCRYPTION_NOT_ENABLED_WARNING
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
Sybase error code
Probable cause
An encryption key was provided, but encryption has not been enabled, nor is the database encrypted.

#### 1.1.4.374 Encryption has not been enabled

SQLE_ENCRYPTION_NOT_ENABLED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1143
SQLSTATE
55W27
Sybase error code
Probable cause
You attempted to use encryption without first enabling it. Call ULEnableAesDBEncryption or
ULEnableAesFipsDBEncryption to enable encryption.

#### 1.1.4.375 Error at offset '%1': expected JSON name/value pair

pair
Error constant
SQLE_PARSE_JSON_EXPECTED_PAIR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The offset where the error occurred.
Severity
SQLCODE
-1678
SQLSTATE
WX022
Sybase error code
Probable cause
A name/value pair was expected within the JSON object.

#### 1.1.4.376 Error at offset '%1': expected token '%2'

SQLE_PARSE_JSON_EXPECTED_TOKEN
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The offset where the error occurred.
Parameter 2
The token that was expected.
Severity

SQLCODE
-1677
SQLSTATE
WX021
Sybase error code
Probable cause
The expected token was missing in the JSON data.

#### 1.1.4.377 Error at offset '%1': invalid data

Error constant
SQLE_PARSE_JSON_INVALID_DATA
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The offset where the error occurred.
Severity
SQLCODE
-1676
SQLSTATE
WX020
Sybase error code
Probable cause
A JSON object or array contains invalid data.

#### 1.1.4.378 Error at offset '%1': mismatched object or array terminator

terminator
Error constant
SQLE_PARSE_JSON_MISMATCH_TERMINATOR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The offset where the error occurred.
Severity
SQLCODE
-1679
SQLSTATE
WX023
Sybase error code
Probable cause
Encountered a mismatched terminator for a JSON object or array.

#### 1.1.4.379 Error at offset '%1': unexpected token '%2'

SQLE_PARSE_JSON_UNEXPECTED_TOKEN
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The offset where the error occurred.
Parameter 2
The unexpected token.
Severity
SQLCODE
-1674
SQLSTATE
WX018
Sybase error code

Probable cause
An unexpected token such as a comma, bracket, or brace was encountered.

#### 1.1.4.380 Error at offset '%1': unexpected trailing text

Error constant
SQLE_PARSE_JSON_UNEXPECTED_TEXT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The offset where the error occurred.
Severity
SQLCODE
-1675
SQLSTATE
WX019
Sybase error code
Probable cause
Trailing text was encountered after parsing the JSON data.

#### 1.1.4.381 Error backing up existing log area. Found '%1' logs in '%2' directory

in '%2' directory
Error constant
RESTORE_NO_OFFLINE_TRANSLOG_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
The number of valid transaction log files found.
Parameter 1
The directory where the logs were searched.
Parameter 2
Severity
SQLCODE
-1928
SQLSTATE
WB034
Sybase error code
Probable cause
No transaction log was found during the backup of the existing log area.

#### 1.1.4.382 Error creating text index "%1" on table "%2"

SQLE_TEXT_INDEX_CREATION_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the text index.
Parameter 2
The name of the table.
Severity
SQLCODE
-1165
SQLSTATE
WT010
Sybase error code
Probable cause
There was an internal error creating a text index.

#### 1.1.4.383 Error during backup/restore: %1

Error constant
SQLE_BACKUP_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
A message describing the error that occurred.
Severity
SQLCODE
-697
SQLSTATE
08W46
Sybase error code
Probable cause
An error occurred during a BACKUP or RESTORE statement.

#### 1.1.4.384 Error executing BEGIN PARALLEL WORK...END PARALLEL WORK statement

PARALLEL WORK statement
Error constant
PARALLEL_STMT_EXECUTE_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1944
SQLSTATE
WI012
Sybase error code
Probable cause
The database server was unable to execute BEGIN PARALLEL WORK...END PARALLEL WORK statement. This
is a SQL Anywhere internal error. If this error can be reproduced, report it to SAP.

#### 1.1.4.385 Error from external library: -%1: %2

Error constant
SQLE_TEXT_USER_SPECIFIED_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Error number specified by the external library
Parameter 2
Error message specified by the external library
Severity
SQLCODE
-1504
SQLSTATE
WT032
Sybase error code
Probable cause
The external library used by the text index has reported the specified error.

#### 1.1.4.386 Error in assignment

SQLE_ERROR_IN_ASSIGNMENT
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-641
SQLSTATE
Sybase error code

Probable cause
In a GET DESCRIPTOR statement, the data type of the host variable must correspond to the data type of the
descriptor item.

#### 1.1.4.387 Error in parsing BACKINT configuration file

Error constant
SQLE_BACKUP_BKINT_CONF_FILE_PARSE_ERR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1922
SQLSTATE
WB032
Sybase error code
Probable cause
Error in parsing pipeInfoFile

#### 1.1.4.388 Error initializing external prefilter

SQLE_ERROR_INITIALIZING_EXT_PREFILTER
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1396
SQLSTATE
WT027
Sybase error code

Probable cause
The external prefilter could not be initialized because of an internal error.

#### 1.1.4.389 Error initializing external term breaker

Error constant
SQLE_ERROR_INITIALIZING_EXT_TERMBREAKER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1393
SQLSTATE
WT028
Sybase error code
Probable cause
The external term breaker could not be initialized because of an internal error.

#### 1.1.4.390 Error modifying refresh type for text index "%1" on materialized view "%2"

materialized view "%2"
SQLE_TEXT_INDEX_MV_ALTER_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the text index.
Parameter 2
The name of the materialized view.
Severity
SQLCODE
-1586
SQLSTATE
WT039
Sybase error code

Probable cause
Internal error encountered while changing the refresh type of the text index dependent on the materialized
view.

#### 1.1.4.391 Error number %1 for RAISERROR must not be less than 17000

than 17000
Error constant
SQLE_ERROR_NUMBER_OUT_OF_RANGE
ODBC 2 state
ODBC 3 state
Parameter 1
Error number.
Severity
SQLCODE
-296
SQLSTATE
53W07
Sybase error code
Probable cause
You supplied an invalid error number in a RAISERROR statement. The number must be greater than or equal to
17000.

#### 1.1.4.392 Error opening cursor

SQLE_OPEN_CURSOR_ERROR
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-171
SQLSTATE
Sybase error code

Probable cause
You attempted to open a cursor on a statement that is not SELECT, CALL or EXEC.

#### 1.1.4.393 Error parsing connection parameter string

Error constant
SQLE_GEN_PARSE_ERROR
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-655
SQLSTATE
08W38
Sybase error code
Probable cause
The connection string could not be parsed. The string or connection parameter file contains a syntax error.

#### 1.1.4.394 Error parsing definition string '%1'

SQLE_SLERR_DDL_SRS_BADWKT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Coordinate system name
Severity
SQLCODE
-1463
SQLSTATE
2FW56
Sybase error code
Probable cause
The provided definition string is not a valid well known text of the coordinate system.

#### 1.1.4.395 Error parsing geometry internal serialization at offset %1

offset %1
Error constant
SQLE_SLERR_SERIAL_PARSE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The byte offset within the internal serialization.
Severity
SQLCODE
-1415
SQLSTATE
2FW06
Sybase error code
Probable cause
There was an error parsing the internal serialization string.

#### 1.1.4.396 Error parsing shapefile attributes

Error constant
SQLE_SLERR_SHAPE_PARSE_ATTRIBUTES
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1423
SQLSTATE
2FW14
Sybase error code
Probable cause
The shapefile contains invalid attributes.

#### 1.1.4.397 Error parsing shapefile record

Error constant
SQLE_SLERR_SHAPE_PARSE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1422
SQLSTATE
2FW13
Sybase error code
Probable cause
The shapefile contains an invalid record.

#### 1.1.4.398 Error parsing well-known-binary (WKB) at offset %1

Error constant
SQLE_SLERR_WKB_PARSE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The byte offset within the binary string where the error was
detected.
Severity
SQLCODE
-1407
SQLSTATE
2FF23
Sybase error code
Probable cause
An error was detected while parsing the well-known binary of a geometry.

#### 1.1.4.399 Error parsing well-known-binary (WKB): inconsistent dimensions at offset %1

inconsistent dimensions at offset %1
Error constant
SQLE_SLERR_WKB_PARSE_INCONSISTENT_ZM
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The byte offset within the binary string where the error was
detected.
Severity
SQLCODE
-1420
SQLSTATE
2FW11
Sybase error code
Probable cause
The well-known binary string contains geometries with different numbers of coordinate dimensions. For
example, it could contain a point with a Z value and another without a Z value.

#### 1.1.4.400 Error parsing well-known-binary (WKB): invalid byte order mark %1 at offset %2

byte order mark %1 at offset %2
Error constant
SQLE_SLERR_WKB_PARSE_INVALID_BOM
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value of the byte-order mark.
Parameter 2
The byte offset within the binary string where the error was
detected.
Severity
SQLCODE
-1421
SQLSTATE
2FW12
Sybase error code
Probable cause
The well-known binary string has an invalid byte order mark. This could happen if a binary string that is not in
the well-known binary format is used.

#### 1.1.4.401 Error parsing well-known-binary (WKB): type code %1 at offset %2 is invalid

%1 at offset %2 is invalid
Error constant
SQLE_SLERR_WKB_PARSE_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The unsupported type code value.
Parameter 2
The byte offset within the binary string where the error was
detected.
Severity
SQLCODE
-1417
SQLSTATE
2FW08
Sybase error code
Probable cause
The well-known binary string contains a type code that is not supported.

#### 1.1.4.402 Error parsing well-known-binary (WKB): type code %1 at offset %2 is not a valid subtype of the parent

%1 at offset %2 is not a valid subtype of the parent
SQLE_SLERR_WKB_PARSE_TYPE_NOT_PERMITTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The unsupported type code value.
Parameter 2
The byte offset within the binary string where the error was
detected.
Severity
SQLCODE
-1418
SQLSTATE
2FW09
Sybase error code

Probable cause
The well-known binary string contains a child geometry within a parent geometry and the child is not one of the
types allowed by the parent.

#### 1.1.4.403 Error parsing well-known-binary (WKB): unexpected end of input

unexpected end of input
Error constant
SQLE_SLERR_WKB_PARSE_UNEXPECTED_EOF
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1419
SQLSTATE
2FW10
Sybase error code
Probable cause
A well-known binary string was shorter than expected.

#### 1.1.4.404 Error parsing well-known-text (WKT) scanning '%1' at offset %2

at offset %2
SQLE_SLERR_WKT_PARSE_NEAR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The text where the problem was detected.
Parameter 2
The offset within the input string where the problem was
detected.
Severity
SQLCODE
-1406
SQLSTATE
2FF22
Sybase error code

Probable cause
An error was detected while parsing the well-known text of a geometry.

#### 1.1.4.405 Error parsing well-known-text (WKT): inconsistent dimensions at offset %1

dimensions at offset %1
Error constant
SQLE_SLERR_WKT_PARSE_INCONSISTENT_ZM
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The offset within the well-known text string where the error
was detected.
Severity
SQLCODE
-1414
SQLSTATE
2FW05
Sybase error code
Probable cause
There was a mixture of coordinate dimensions detected at the specified offset. For example, one geometry in a
collection might have a Z value while another doesn't.

#### 1.1.4.406 Error processing SAP HANA strategy

SQLE_RESTORE_INCORRECT_STRATEGY
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1907
SQLSTATE
WB020
Sybase error code

Probable cause
Error in SAP HANA strategy file provided during restore.

#### 1.1.4.407 Error reading configuration file

Error constant
SQLE_SLERR_CONFIG_FILE_ERR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1438
SQLSTATE
2FW31
Sybase error code
Probable cause
An error occurred while reading a configuration file for spatial support. This error can occur if the
"st_geometry_config.tgz" file is not installed.

#### 1.1.4.408 Error writing to transaction log file

SQLE_ERROR_WRITING_LOG
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-107
SQLSTATE
08W17
Sybase error code
Probable cause
The database server got an I/O error writing the transaction log file. The disk may be full or the log file name
could be invalid.

#### 1.1.4.409 Escape character conflict '%1'

Error constant
SQLE_ESCAPE_CHARACTER_CONFLICT
ODBC 2 state
S1000
ODBC 3 state
2200B
Parameter 1
The escape character that is invalid.
Severity
SQLCODE
-1137
SQLSTATE
2200B
Sybase error code
Probable cause
The specified escape character cannot be used.

#### 1.1.4.410 Event '%1' already exists

Error constant
SQLE_EVENT_ALREADY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the event that already exists.
Severity
SQLCODE
-772
SQLSTATE
WE002
Sybase error code
Probable cause
You have attempted to create an event with a name that already exists in the database.

#### 1.1.4.411 Event '%1' in use

Error constant
SQLE_EVENT_IN_USE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the event that is in use.
Severity
SQLCODE
-835
SQLSTATE
WE009
Sybase error code
Probable cause
You have attempted to drop an event that is currently in use.

#### 1.1.4.412 Event '%1' not found

Error constant
SQLE_EVENT_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the event that could not be found.
Severity
SQLCODE
-771
SQLSTATE
WE001
Sybase error code
Probable cause
You have attempted to reference an event with a name that does not exist in the database.

#### 1.1.4.413 Event notification queue '%1' is full, notification discarded

discarded
Error constant
SQLE_EVENT_NOTIFICATION_QUEUE_FULL
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The name of the event notification queue.
Severity
SQLCODE
SQLSTATE
WE011
Sybase error code
Probable cause
The named queue is full and will not receive any event notifications until notifications are read from the queue.
The pending notification has been discarded.

#### 1.1.4.414 Event notification queue '%1' not found

SQLE_EVENT_NOTIFICATION_QUEUE_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the event notification queue
Severity
SQLCODE
-1263
SQLSTATE
WE014
Sybase error code

Probable cause
The named event notification queue was not found. The operation failed.

#### 1.1.4.415 Event notification queue '%1' not found warning

Error constant
SQLE_EVENT_NOTIFICATION_QUEUE_NOT_FOUND_WARN
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The name of the event notification queue.
Severity
SQLCODE
SQLSTATE
WE013
Sybase error code
Probable cause
The named event notification queue was not found. The operation will be skipped.

#### 1.1.4.416 Event notifications lost on queue '%1'

Error constant
SQLE_EVENT_NOTIFICATIONS_LOST
ODBC 2 state
OK
ODBC 3 state
OK

Parameter 1
The name of the event notification queue.
Severity
SQLCODE
SQLSTATE
WE012
Sybase error code
Probable cause
Event notifications have been lost on the named queue. This behavior occurs if there are pending notifications
when the queue is destroyed. The notifications are discarded.

#### 1.1.4.417 Event object name '%1' is not valid

Error constant
SQLE_INVALID_EVENT_OBJECT_NAME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the event object
Severity
SQLCODE
-1264
SQLSTATE
WE015
Sybase error code
Probable cause
The given name is not valid for an event object (notification queue or user event). Names are limited in length
to 32 characters (bytes), and cannot contain certain characters such as '*' or '@'.

#### 1.1.4.418 Event object named '%1' already exists

Error constant
SQLE_EVENT_OBJECT_ALREADY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the event object
Severity
SQLCODE
-1265
SQLSTATE
WE016
Sybase error code
Probable cause
An event object (notification queue or user event) with the given name already exists.

#### 1.1.4.419 Event parameter '%1' not found

SQLE_EVENT_PARAMETER_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the event parameter
Severity
SQLCODE
-1267
SQLSTATE
WE018
Sybase error code

Probable cause
The named event parameter was not found in the event notification.

#### 1.1.4.420 Exceeded maximum of '%1' allowable parameters

Error constant
SQLE_INVALID_MAXIMUM_PARAMETERS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The maximum number of allowable parameters
Severity
SQLCODE
-1122
SQLSTATE
WW084
Sybase error code
Probable cause
The maximum allowable parameters for the given web client procedure or function has been exceeded.

#### 1.1.4.421 Expression has unsupported data type

SQLE_DATATYPE_NOT_ALLOWED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-624
SQLSTATE
WW009
Sybase error code

Probable cause
Either an external function or Java method was declared with a parameter or result data type that is not
supported, or a Java field reference with an unsupported result type was attempted.

#### 1.1.4.422 Expression is not an array

Error constant
SQLE_NOT_AN_ARRAY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1666
SQLSTATE
42X07
Sybase error code
Probable cause
You either tried to apply an ARRAY dereference (using double square brackets) to an expression that does not
evaluate to an array, or else you tried to pass a non-ARRAY expression to UNNEST.

#### 1.1.4.423 Expression of type %1 is not allowed in this context (near: %2)

(near: %2)
Error constant
SQLE_EXPR_TYPE_NOT_ALLOWED_IN_THIS_CONTEXT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The disallowed expression type
Parameter 2
The context in which that type is disallowed
Severity
SQLCODE
-1795
SQLSTATE
42X12
Sybase error code
Probable cause
You tried to use an expression in a context that does not permit expressions of that type.

#### 1.1.4.424 External environment '%1' could not be found

SQLE_EXTERN_ENV_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the external environment.
Severity
SQLCODE
-1205
SQLSTATE
WJ030
Sybase error code
Probable cause
You attempted to define an object for an external environment that has not been added.

#### 1.1.4.425 External environment cannot be started during database startup

database startup
Error constant
SQLE_EXTENV_START_ON_STARTUP
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1557
SQLSTATE
WP018
Sybase error code
Probable cause
An external environment cannot be started while a database is starting up. Wait for the database startup to
complete before attempting to start an external environment.

#### 1.1.4.426 External environment cannot be started, external process terminated on start up

process terminated on start up
SQLE_EXTENV_PID_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1567
SQLSTATE
WP019
Sybase error code

Probable cause
The request to start an external environment could not be completed due to the fact that the external process
terminated on start up. This problem is usually due to a client configuration issue.

#### 1.1.4.427 External environment could not be started, '%1' could not be found

could not be found
Error constant
SQLE_EXTENV_NOT_STARTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The component (executable or file) that could not be found
and is needed to run the VM.
Severity
SQLCODE
-675
SQLSTATE
WP006
Sybase error code
Probable cause
A problem was encountered starting the External Environment. A component that is needed to run the
environment could not be found.

#### 1.1.4.428 External environment does not support result sets

Error constant
SQLE_EXTERN_ENV_NO_RESULT_SET_SUPPORT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1213
SQLSTATE
WJ031
Sybase error code
Probable cause
You attempted to define dynamic result sets for an external environment that does not support result sets.

#### 1.1.4.429 External environment failed to start and establish a connection within the %1 second timeout

connection within the %1 second timeout
Error constant
SQLE_EXTENV_START_TIMED_OUT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The amount of time in seconds the server will wait for the
external environment to start and establish a connection.
Severity
SQLCODE
-1556
SQLSTATE
WP017
Sybase error code
Probable cause
The External Environment took too long to start up and establish a connection with the server. The problem
may be due to the system being over stressed or incorrectly configured.

#### 1.1.4.430 External environments are not supported for this database

database
Error constant
SQLE_EXTERN_ENV_UPGRADE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1206
SQLSTATE
WW104
Sybase error code
Probable cause
The current database does not have catalog support for external environments. To use this feature, upgrade
your database to the most recent version.

#### 1.1.4.431 External library '%1' is in use

Error constant
SQLE_EXTERNAL_LIBRARY_IN_USE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The external library that is in use
Severity
SQLCODE
-1214
SQLSTATE
WW108
Sybase error code
Probable cause
The external library cannot be unloaded as it is currently in use.

#### 1.1.4.432 External library '%1' not loaded

Error constant
SQLE_EXTERNAL_LIBRARY_NOT_LOADED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The external library that is not loaded
Severity
SQLCODE
-1215
SQLSTATE
WW109
Sybase error code
Probable cause
The external library cannot be unloaded as it is not current loaded.

#### 1.1.4.433 External login for server '%1' could not be found

Error constant
SQLE_OMNI_EXTLOGIN_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the remote server.
Severity
SQLCODE
-712
SQLSTATE
WO013
Sybase error code
Probable cause
An external login for the server and user does not exist.

#### 1.1.4.434 External object '%1' not found

Error constant
SQLE_EXTENV_OBJECT_NOT_FOUND
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the Java class or external object.
Severity
SQLCODE
-810
SQLSTATE
42W57
Sybase error code
Probable cause
The Java class or external object with this name does not exist in the database.

#### 1.1.4.435 External procedures or functions are not allowed across server types

across server types
Error constant
SQLE_PROC_NOT_ALLOWED_ACROSS_SERVERS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1579
SQLSTATE
WO031
Sybase error code
Probable cause
External procedure or function calls are not allowed across server types if the query is not processed in
full-passthrough mode.

#### 1.1.4.436 Fail to compare %1 and %2

Error constant
SQLE_FILE_COMPARE_FAIL
ODBC 2 state
ODBC 3 state
Parameter 1
The source file or directory name that fails to compare
Parameter 2
The target file or directory name that fails to compare
Severity
SQLCODE
-1660
SQLSTATE
08WC1
Sybase error code
Probable cause
Failed to compare files or directories.

#### 1.1.4.437 Failed to access the SQL Anywhere Cockpit file '%1': %2

'%1': %2
Error constant
SQLE_COCKPITDB_FAILED_TO_ACCESS_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name of the file to be accessed
Parameter 2
Reason the file could not be accessed, if known.
Severity
SQLCODE
-1863
SQLSTATE
WW251
Sybase error code
Probable cause
The request to access the SQL Anywhere Cockpit file failed.

#### 1.1.4.438 Failed to close pipe %1 during BACKUP using BACKINT %2

BACKINT %2
Error constant
SQLE_BACKUP_BKINT_ERROR_CLOSING_PIPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the pipe on which close failed
Parameter 2
OS error thrown during the read operation
Severity
SQLCODE
-1913
SQLSTATE
WB023
Sybase error code
Probable cause
Error occurred while closing pipe during backup using BACKINT

#### 1.1.4.439 Failed to connect to the dbmlsync server

SQLE_SYNCCMD_CONNECT_SERVER_FAIL
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1376
SQLSTATE
5RW46
Sybase error code
Probable cause
The database server failed to make a connection to the dbmlsync server.

#### 1.1.4.440 Failed to connect to the dbmlsync server. Check the dbmlsync log file for more details

the dbmlsync log file for more details
Error constant
SQLE_MLA_SYNC_CONNECT_SERVER_FAIL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1386
SQLSTATE
WW162
Sybase error code
Probable cause
The MobiLink agent adapter failed to make a connection to the dbmlsync server. Check the dbmlsync log file
for more details.

#### 1.1.4.441 Failed to convert from character set '%1' to '%2'

Error constant
SQLE_FAILED_TO_CONVERT_CHARSET
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The character set of the input string.
Parameter 2
The character set of the output string.
Severity
SQLCODE
-1075
SQLSTATE
WC011
Sybase error code
Probable cause
The server failed to convert between the two specified character sets. This could happen when the dbicu and
dbicudt DLLs are not installed.

#### 1.1.4.442 Failed to copy the SQL Anywhere Cockpit template file '%1' to destination '%2'

file '%1' to destination '%2'
Error constant
SQLE_FAILED_TO_COPY_SQLACOCKPITDB_TEMPLATE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name of the SQL Anywhere Cockpit template
Parameter 2
The file name of the destination
Severity
SQLCODE
-1859
SQLSTATE
08WG1
Sybase error code
Probable cause
The SQL Anywhere Cockpit template file could not be copied to the requested destination.

#### 1.1.4.443 Failed to create pipe %1 during BACKUP using BACKINT %2

BACKINT %2
SQLE_BACKUP_BKINT_ERROR_CREATING_PIPE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the pipe on which create failed
Parameter 2
OS error thrown during the read operation
Severity
SQLCODE
-1911
SQLSTATE
WB021
Sybase error code
Probable cause
Error occurred while creating pipe during backup using BACKINT

#### 1.1.4.444 Failed to delete the SQL Anywhere Cockpit file '%1': %2

'%1': %2
Error constant
SQLE_COCKPITDB_FAILED_TO_DELETE_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name of the file to be deleted
Parameter 2
Reason the file could not be deleted, if known.
Severity
SQLCODE
-1861
SQLSTATE
WW250
Sybase error code
Probable cause
The request to delete the SQL Anywhere Cockpit file failed.

#### 1.1.4.445 Failed to get BACKUP id for file name %1

SQLE_BACKUP_BKINT_NO_EBID_FOR_FILENAME
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
error thrown during the read operation
Severity
SQLCODE
-1921
SQLSTATE
WB031
Sybase error code
Probable cause
EBID does not exist for the given file name.

#### 1.1.4.446 Failed to get file system statistics for the path '%1'

Error constant
SQLE_FAILED_TO_GET_FILE_SYSTEM_STATISTICS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The path that the file system statistics are requested.
Severity
SQLCODE
-1880
SQLSTATE
WW257
Sybase error code
Probable cause
The request to get the file system statistics failed.

#### 1.1.4.447 Failed to get status information on the path '%1': %2

%2
Error constant
SQLE_FAILED_TO_GET_FILE_STATUS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The path that the status information is requested.
Parameter 2
Reason the status information of the file could not be re-
turned, if known.
Severity
SQLCODE
-1879
SQLSTATE
WW256
Sybase error code
Probable cause
The request to get the file status failed.

#### 1.1.4.448 Failed to load %1 HANA library

Error constant
BACKUP_LIBRARY_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Library handle not available
Severity
SQLCODE
-1990
SQLSTATE
WB039
Sybase error code
Probable cause
Given library not found

#### 1.1.4.449 Failed to load the MobiLink client support libraries

Error constant
SQLE_COULD_NOT_LOAD_SYNC_LIBRARY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1580
SQLSTATE
WW207
Sybase error code
Probable cause
To use the SYNCHRONIZE command, a MobiLink client must be installed on the same computer where the
database server is running.

#### 1.1.4.450 Failed to open pipe %1 during BACKUP using BACKINT %2

BACKINT %2
Error constant
SQLE_BACKUP_BKINT_ERROR_OPENING_PIPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the pipe on which open failed
Parameter 2
OS error thrown during the read operation
Severity
SQLCODE
-1912
SQLSTATE
WB022
Sybase error code
Probable cause
Error occurred while opening pipe during backup using BACKINT

#### 1.1.4.451 Failed to read pipe %1 during BACKUP using BACKINT %2

BACKINT %2
SQLE_BACKUP_BKINT_ERROR_READING_PIPE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the pipe on which close failed
Parameter 2
OS error thrown during the read operation
Severity
SQLCODE
-1915
SQLSTATE
WB025
Sybase error code
Probable cause
Error occurred while reading pipe during backup using BACKINT

#### 1.1.4.452 Failed to read the SQL Anywhere Cockpit setting file '%1'

file '%1'
Error constant
SQLE_COCKPITDB_FAILED_TO_READ_SETTING_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name of the file to be read
Severity
SQLCODE
-1864
SQLSTATE
WW253
Sybase error code
Probable cause
The request to read the SQL Anywhere Cockpit setting file failed.

#### 1.1.4.453 Failed to rename the SQL Anywhere Cockpit file '%1' to '%2': %3

'%1' to '%2': %3
Error constant
SQLE_COCKPITDB_FAILED_TO_RENAME_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name of the file to be renamed
Parameter 2
New file name of the file
Parameter 3
Reason the file could not be renamed, if known.
Severity
SQLCODE
-1876
SQLSTATE
WW252
Sybase error code
Probable cause
The request to rename the SQL Anywhere Cockpit file failed.

#### 1.1.4.454 Failed to set up audit log session for database '%1'

Error constant
SQLE_AUDIT_SESSION_FAILED_TO_START
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the database.
Severity
SQLCODE
-1725
SQLSTATE
WE039
Sybase error code
Probable cause
The audit log session for the specified database cannot be created.

#### 1.1.4.455 Failed to shut down the dbmlsync server. Check the dbmlsync log file for more details

dbmlsync log file for more details
Error constant
SQLE_MLA_SYNC_SHUTDOWN_FAIL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1387
SQLSTATE
WW163
Sybase error code
Probable cause
The MobiLink agent adapter encountered an error while attempting to shut down the server. Check the
dbmlsync log file for more details.

#### 1.1.4.456 Failed to start the dbmlsync server

Error constant
SQLE_SYNCCMD_START_SERVER_FAIL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1375
SQLSTATE
5RW45
Sybase error code
Probable cause
The database server failed to start a new dbmlsync process or failed to connect to an existing dbmlsync server
running on the port number specified in the SYNCHRONIZE statement.

#### 1.1.4.457 Failed to start the dbmlsync server. Check the dbmlsync log file for more details

dbmlsync log file for more details
Error constant
SQLE_MLA_SYNC_START_SERVER_FAIL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1388
SQLSTATE
WW164
Sybase error code
Probable cause
The MobiLink agent adapter failed to start a new dbmlsync process or the server did not begin processing
requests before the timeout expired. Check the dbmlsync log file for more details.

#### 1.1.4.458 Failed to transform geometry (error %1)

Error constant
SQLE_SLERR_TRANSFORM_FAIL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The error code from the projection library.
Severity
SQLCODE
-1405
SQLSTATE
2FF15
Sybase error code
Probable cause
An error occurred when performing a transform from one spatial reference system to another. This error may
occur if a point in the first geometry is outside of the bounds for the transform definition. The error may also be
reported for particular transform definitions. The integer error code from the transform library may be used to
diagnose the transform definition.

#### 1.1.4.459 Failed to transform point %1 (error %2)

Error constant
SQLE_SLERR_TRANSFORM_POINT_FAIL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The point that could not be transformed.
Parameter 2
The error code from the projection library.
Severity
SQLCODE
-1532
SQLSTATE
2FF17
Sybase error code
Probable cause
An error occurred when performing a transform from one spatial reference system to another. This error may
occur if a point in the first geometry is outside of the bounds for the transform definition. The error may also be
reported for particular transform definitions. The integer error code from the transform library may be used to
diagnose the transform definition.

#### 1.1.4.460 Failed to write pipe %1 during BACKUP using BACKINT %2

BACKINT %2
Error constant
SQLE_BACKUP_BKINT_ERROR_WRITING_PIPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the pipe on which close failed
Parameter 2
OS error thrown during the read operation
Severity
SQLCODE
-1914
SQLSTATE
WB024
Sybase error code
Probable cause
Error occurred while writing pipe during backup using BACKINT

#### 1.1.4.461 Failed to write the SQL Anywhere Cockpit setting file '%1'

file '%1'
SQLE_COCKPITDB_FAILED_TO_WRITE_SETTING_FILE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name of the file to be written
Severity
SQLCODE
-1865
SQLSTATE
WW254
Sybase error code
Probable cause
The request to write the SQL Anywhere Cockpit setting file failed.

#### 1.1.4.462 Feature '%1' is locked because synchronization is in progress

progress
Error constant
SQLE_FEATURE_LOCKED_SYNC
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Feature name
Severity
SQLCODE
-1343
SQLSTATE
WW147
Sybase error code
Probable cause
You attempted to use a feature that was previously locked because a synchronization is in progress.

#### 1.1.4.463 Feature '%1' is locked by another connection

Error constant
SQLE_FEATURE_LOCKED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Feature name
Severity
SQLCODE
-1334
SQLSTATE
WW146
Sybase error code
Probable cause
You attempted to use a feature that was previously locked by another connection.

#### 1.1.4.464 Feature '%1' is not supported for this database

Error constant
SQLE_FEATURE_REQUIRES_UPGRADE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The feature that is not supported for this database.
Severity
SQLCODE
-1887
SQLSTATE
0AW0A
Sybase error code
Probable cause
You attempted to carry out an operation or use a feature that is not supported in the current database. To use
this feature, upgrade your database to the most recent version.

#### 1.1.4.465 Feature '%1' is unknown or invalid

Error constant
SQLE_FEATURE_UNKNOWN_OR_INVALID
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Feature name
Severity
SQLCODE
-1332
SQLSTATE
WW144
Sybase error code
Probable cause
You attempted to lock or unlock an unknown feature.

#### 1.1.4.466 Feature '%1' not implemented

Error constant
SQLE_NOT_IMPLEMENTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The unimplemented feature.
Severity
SQLCODE
-134
SQLSTATE
0A000
Sybase error code
Probable cause
You attempted to carry out an operation or use a feature that is not implemented in this version of SQL
Anywhere. In UltraLite, this error often occurs because you attempted to perform an unsupported operation
on a LONG VARCHAR or LONG BINARY column. For example, the SUBSTRING function cannot be used with a
LONG VARCHAR column. As well, an index cannot be created on a LONG column.

#### 1.1.4.467 Feature '%1' not supported

SQLE_FEATURE_NOT_SUPPORTED
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The unsupported feature.
Severity
SQLCODE
-1965
SQLSTATE
0AW04
Sybase error code
Probable cause
You attempted to use a feature that is not supported in the context in which it is used.

#### 1.1.4.468 Feature '%1' was not locked by this connection

Error constant
SQLE_FEATURE_NOT_LOCKED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Feature name
Severity
SQLCODE
-1333
SQLSTATE
WW145
Sybase error code
Probable cause
You attempted to unlock a feature that was not previously locked by this connection.

#### 1.1.4.469 Feature not available with UltraLite

Error constant
SQLE_NOT_SUPPORTED_IN_ULTRALITE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-749
SQLSTATE
0AW07
Sybase error code
Probable cause
You attempted to execute a statement or use a feature that is not supported in an UltraLite database.

#### 1.1.4.470 Feature not supported by the client version or the client interface

client interface
Error constant
SQLE_NOT_SUPPORTED_BY_CLIENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1148
SQLSTATE
0AW19
Sybase error code
Probable cause
You have attempted to use a feature which the server supports but the client does not. To use the feature,
you must upgrade the client library or use a different client interface. Some features are not supported by the
jConnect or Open Client client interfaces.

#### 1.1.4.471 Field '%1' of class '%2' cannot be NULL

Error constant
SQLE_FIELD_CANNOT_BE_NULL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the field that cannot be NULL.
Parameter 2
The name of the class that has the field.
Severity
SQLCODE
-649
SQLSTATE
WW015
Sybase error code
Probable cause
An attempt was made to store a SQL NULL value in a Java object field that has a Java type that cannot be
NULL. For example, the Java 'int' type cannot be NULL.

#### 1.1.4.472 File %1 already exists

Error constant
SQLE_FILE_ALREADY_EXISTS
ODBC 2 state
ODBC 3 state
Parameter 1
The file name of the file that already exists
Severity
SQLCODE
-1609
SQLSTATE
08WB5
Sybase error code
Probable cause
The request to create a file or directory failed because the file or directory already exists.

#### 1.1.4.473 File I/O failed for '%1'

Error constant
SQLE_DEVICE_IO_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name.
Severity
SQLCODE
-974
SQLSTATE
WW043
Sybase error code
Probable cause
An error occurred while trying to access the file. If the file is located on a removable media card, the card may
have been removed.

#### 1.1.4.474 File or directory %1 not found

Error constant
SQLE_FILE_NOT_FOUND
ODBC 2 state
ODBC 3 state
Parameter 1
The file or directory name that does not exist or fail to ac-
cess
Severity
SQLCODE
-1659
SQLSTATE
08WB9
Sybase error code
Probable cause
You attempted to perform an operation using a file or directory name that does not exist or fail to access.

#### 1.1.4.475 File system error: %1

Error constant
SQLE_OMNI_FILE_SYSTEM_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Error description.
Severity
SQLCODE
-1066
SQLSTATE
WO027
Sybase error code
Probable cause
This error results from an error in the underlying file system that was encountered while accessing a file
directory as a proxy table.

#### 1.1.4.476 FOR UPDATE has been incorrectly specified for a READ ONLY cursor

READ ONLY cursor
Error constant
SQLE_NON_UPDATEABLE_CURSOR
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-813
SQLSTATE
42W36
Sybase error code
Probable cause
You attempted to declare a cursor FOR UPDATE on a query that is not updatable. Queries that contain
DISTINCT, GROUP BY, HAVING, INTERSECT, EXCEPT, or UNION, or that contain aggregate functions are
read-only. If the ansi_update_constraints option is on, then queries that contain a join are read-only. If the
query references a view then the view may be non-updatable.

#### 1.1.4.477 FOR UPDATE or FOR READ ONLY clause must be specified on PREPARE (not on DECLARE CURSOR)

specified on PREPARE (not on DECLARE CURSOR)
SQLE_CURSOR_UPDATABILITY_CHANGED
Error constant
ODBC 2 state
S1009
ODBC 3 state
HY092
Severity
SQLCODE
-1290
SQLSTATE
42WD4
Sybase error code

Probable cause
You specified the FOR UPDATE or FOR READ ONLY clause on a DECLARE CURSOR statement. The FOR
UPDATE or FOR READ ONLY clause must be specified on the PREPARE statement and not the DECLARE
CURSOR statement.

#### 1.1.4.478 Foreign key '%1' for table '%2' duplicates an existing foreign key

existing foreign key
Error constant
SQLE_DUPLICATE_FOREIGN_KEY
ODBC 2 state
ODBC 3 state
Parameter 1
The role name of the new foreign key.
Parameter 2
The table containing the foreign key.
Severity
SQLCODE
-251
SQLSTATE
52W06
Sybase error code
Probable cause
You attempted to define a foreign key that already exists.

#### 1.1.4.479 Foreign key columns do not match the primary key or a uniqueness constraint in "%1"

or a uniqueness constraint in "%1"
Error constant
SQLE_NO_MATCHING_INDEX
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The name of the primary table.
Severity
SQLCODE
-1226
SQLSTATE
42R04
Sybase error code
Probable cause
An attempt was made to create a foreign key, but the columns specified do not match the primary key or a
uniqueness constraint for the referenced table.

#### 1.1.4.480 Foreign key name '%1' not found

Error constant
SQLE_FOREIGN_KEY_NAME_NOT_FOUND
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the non-existing foreign key.
Severity
SQLCODE
-145
SQLSTATE
52W07
Sybase error code
Probable cause
You misspelled the name of a foreign key, or the foreign key does not exist.

#### 1.1.4.481 Format '%1' is not supported in the UNLOAD statement

statement
Error constant
SQLE_UNSUPPORTED_UNLOAD_FORMAT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specified format.
Severity
SQLCODE
-1530
SQLSTATE
WL018
Sybase error code
Probable cause
An unsupported file format was specified for the UNLOAD statement.

#### 1.1.4.482 Format string argument number %1 is invalid

Error constant
SQLE_INVALID_FORMAT_STRING_ARG_NUM
ODBC 2 state
ODBC 3 state
Parameter 1
Argument number.
Severity
SQLCODE
-294
SQLSTATE
53W08
Sybase error code
Probable cause
You supplied an invalid argument number in the format string for a PRINT or RAISERROR statement. The
number must be between 1 and 20 and must not exceed the number of arguments provided.

#### 1.1.4.483 Format string contains invalid format specifiers: '%1'

'%1'
Error constant
INVALID_FORMAT_SPECIFIERS
ODBC 2 state
ODBC 3 state
Parameter 1
Format string
Severity
SQLCODE
-1970
SQLSTATE
53W10
Sybase error code
Probable cause
You supplied an format string for xp_sprintf or xp_scanf that contains invalid format specifiers. Only string
format specifiers are permitted.

#### 1.1.4.484 Format string contains more than %2 format specifiers: '%1

specifiers: '%1
Error constant
TOO_MANY_FORMAT_SPECIFIERS
ODBC 2 state
ODBC 3 state
Parameter 1
Format string
Parameter 2
Number of format specifiers
Severity
SQLCODE
-1971
SQLSTATE
53W11
Sybase error code
Probable cause
You supplied an format string for xp_sprintf or xp_scanf that contains invalid format specifiers. Only string
format specifiers are permitted.

#### 1.1.4.485 Found a file '%1' with relative path in delta dbspace during backup existing log area.

during backup existing log area.
Error constant
RESTORE_RELATIVE_DELTA_FILE_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The filename for file which had the error.
Severity
SQLCODE
-1929
SQLSTATE
WB035
Sybase error code
Probable cause
No delta files were found during the backup of the existing log area.

#### 1.1.4.486 Frame not allowed for window '%1'

Error constant
SQLE_FRAME_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the window.
Severity
SQLCODE
-950
SQLSTATE
42WA6
Sybase error code
Probable cause
Frames are not allowed on windows referenced from inline window specifications.

#### 1.1.4.487 Function '%1' has invalid parameter '%2' ('%3')

Error constant
SQLE_SLERR_INVALID_PARAMETER_W_PARM
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the function.
Parameter 2
The name of the parameter.
Parameter 3
Information about the parameter that caused the error.
Severity
SQLCODE
-1728
SQLSTATE
2FW93
Sybase error code
Probable cause
An error occurred while evaluating a parameter.

#### 1.1.4.488 Function '%1' has invalid parameter '%2' ('%3')

Error constant
SQLE_INVALID_PARAMETER_W_PARM
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the function.
Parameter 2
The name of the parameter.
Parameter 3
Information about the parameter that caused the error.
Severity
SQLCODE
-1090
SQLSTATE
08W94
Sybase error code
Probable cause
An error occurred while evaluating a parameter.

#### 1.1.4.489 Function-name clause for CREATE INDEX statement not supported in BEGIN PARALLEL WORK...END PARALLEL WORK statement

Error constant
PARALLEL_CREATEINDEX_FUNCTION_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1942
SQLSTATE
0AW39
Sybase error code
Probable cause
The function-name clause of the CREATE INDEX statement is not supported when the statement is in the
BEGIN PARALLEL WORK...END PARALLEL WORK statement.

#### 1.1.4.490 Function or column reference to '%1' in the ORDER BY clause is invalid

BY clause is invalid
Error constant
SQLE_INVALID_ORDERBY_COLUMN
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the column referenced directly, or in an expression,
in the ORDER BY clause.
Severity
SQLCODE
-854
SQLSTATE
42W65
Sybase error code
Probable cause
You specified a function or column reference in the ORDER BY clause that is semantically invalid. For example,
for DISTINCT queries the ORDER BY clause may only refer to items in the query's SELECT list.

#### 1.1.4.491 Function or column reference to '%1' must also appear in a GROUP BY

appear in a GROUP BY
Error constant
SQLE_INVALID_GROUP_SELECT
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the column referenced directly, or in an expression,
that must be in the GROUP BY clause.
Severity
SQLCODE
-149
SQLSTATE
Sybase error code
Probable cause
You used a non-aggregate function or column reference in the SELECT list or in a nested query block that does
not appear in the GROUP BY clause. In a query using GROUP BY, SELECT list items that are not aggregate
functions must also appear in the GROUP BY clause. If the SELECT list item is a column reference or an alias,
you may add the column name or alias to the GROUP BY clause. If the SELECT list item is a scalar function,
ensure that the function's arguments in the GROUP BY clause match exactly with those in the SELECT list. You
may be able to use the MAX function (or another aggregate function) on the column name instead of adding
the column to the GROUP BY clause.

#### 1.1.4.492 Geometries with CircularString are not supported in spatial reference system %1

in spatial reference system %1
Error constant
SQLE_SLERR_CIRCULAR_SRS
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Parameter 1
The SRID of the round-Earth spatial reference system.
Severity
SQLCODE
-1495
SQLSTATE
2FW85
Sybase error code
Probable cause
The method does not support geometries with CircularString elements.

#### 1.1.4.493 Geometries with CircularString not supported (near "%1")

(near "%1")
Error constant
SQLE_SLERR_CIRCULAR_METHOD
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The method or context where the CircularString was de-
tected.
Severity
SQLCODE
-1494
SQLSTATE
2FW84
Sybase error code
Probable cause
The method or operation does not support geometries with CircularString elements.

#### 1.1.4.494 Geometry expressions cannot be used in the ORDER BY specification (near '%1')

ORDER BY specification (near '%1')
Error constant
SQLE_SLERR_GEOM_ORDER_BY
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The geometry expression.
Severity
SQLCODE
-1531
SQLSTATE
2FW92
Sybase error code
Probable cause
Geometry expressions cannot be used in the ORDER BY clause. The ST_LinearHash() method may be used
in the ORDER BY specification to order geometry values using the same rules used for spatial indexes, or a
conversion method such as ST_AsText() may be used to order the rows by their string representation.

#### 1.1.4.495 GRANT of column permission on view not allowed

Error constant
SQLE_NO_COLUMN_PERMS_FOR_VIEWS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-635
SQLSTATE
52W22
Sybase error code
Probable cause
You cannot grant permissions on columns for views.

#### 1.1.4.496 Grouped query contains more than one distinct aggregate function

aggregate function
Error constant
SQLE_INVALID_DISTINCT_AGGREGATE
ODBC 2 state
ODBC 3 state

Severity
SQLCODE
-863
SQLSTATE
42W70
Sybase error code
Probable cause
Two or more DISTINCT aggregate functions were specified in the same grouped query. This is only permitted
if the Hash Group By operator is available. Any query block can only contain at most one DISTINCT aggregate
function if the Hash Group By operator is not available.

#### 1.1.4.497 Hash error: %1

SQLE_HASH_ERROR
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Description of the error that occurred.
Severity
SQLCODE
-1259
SQLSTATE
08W92
Sybase error code
Probable cause
An error occurred during hashing.

#### 1.1.4.498 Host variable reference in service definition must be named

be named
Error constant
SQLE_HOSTVAR_MUST_BE_NAMED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-926
SQLSTATE
42W9B
Sybase error code
Probable cause
You have attempted to create a service with an unnamed host variable reference.

#### 1.1.4.499 Host variables must not be used in this context

Error constant
SQLE_HOSTVARS_NOT_ALLOWED_IN_THIS_CONTEXT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1761
SQLSTATE
42X10
Sybase error code
Probable cause
You have attempted to use a host variable in a statement at a location that does not support host variables.

#### 1.1.4.500 Host variables must not be used within a batch

Error constant
SQLE_HOSTVARS_IN_BATCH

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-807
SQLSTATE
07W07
Sybase error code
Probable cause
You have attempted to execute a batch that contains host variable references. Host variables are not supported
within a batch.

#### 1.1.4.501 HTTP request failed. Status code '%1'

Error constant
SQLE_HTTP_REQUEST_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The HTTP status code.
Severity
SQLCODE
-983
SQLSTATE
WW052
Sybase error code
Probable cause
The HTTP request returned a status code that indicated failure.

#### 1.1.4.502 I/O error %1 -- transaction rolled back

Error constant
SQLE_DEVICE_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Parameter 1
A message describing the error that occurred.
Severity
SQLCODE
-305
SQLSTATE
40W04
Sybase error code
Probable cause
SQL Anywhere has detected a problem with your hard disk. A ROLLBACK statement has been automatically
executed.

#### 1.1.4.503 Identifier '%1' too long

Error constant
SQLE_IDENTIFIER_TOO_LONG
ODBC 2 state
ODBC 3 state
Parameter 1
The identifier that is too long.
Severity
SQLCODE
-250
SQLSTATE
Sybase error code
Probable cause
An identifier that was specified is longer than 128 bytes.

#### 1.1.4.504 Identity attribute mismatch for column '%1'

Error constant
SQLE_OMNI_IDENTITY_MISMATCH
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The name of the column.
Severity
SQLCODE
-725
SQLSTATE
WO019
Sybase error code
Probable cause
The identity attribute of the column specified in the CREATE EXISTING statement differs from the identity
attribute of the actual column.

#### 1.1.4.505 Illegal column definition: %1

Error constant
SQLE_ILLEGAL_COLUMN_DEFINITION
ODBC 2 state
ODBC 3 state
Parameter 1
A message describing the error that occurred.
Severity
SQLCODE
-1046
SQLSTATE
55W19
Sybase error code
Probable cause
You are attempting to define a column in a way that is not allowed.

#### 1.1.4.506 Illegal column name: '%1'

Error constant
SQLE_BAD_FOR_XML_EXPLICIT_COLUMN_NAME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The reason the column name was illegal.
Severity
SQLCODE
-899
SQLSTATE
WX007
Sybase error code
Probable cause
FOR XML EXPLICIT and FOR JSON EXPLICIT column names can consist of up to four fields separated by
exclamation marks. The first two columns must be named Tag and Parent.

#### 1.1.4.507 Illegal cursor operation attempt

SQLE_CURSOROP_NOT_ALLOWED
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-187
SQLSTATE
09W02
Sybase error code
Probable cause
You attempted an illegal cursor operation. For example, you may be attempting to OPEN a cursor for a
statement that is neither a SELECT nor a BATCH.

#### 1.1.4.508 Illegal flags value passed to OPENXML

Error constant
SQLE_BAD_OPENXML_FLAG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-893
SQLSTATE
WX004
Sybase error code
Probable cause
The flags value passed to OPENXML as the third argument must be either 1 (attribute-centric mapping), or 2
(element-centric mapping).

#### 1.1.4.509 Illegal ORDER BY in aggregate function

SQLE_INVALID_ORDERBY_IN_AGGREGATE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-904
SQLSTATE
42W90
Sybase error code
Probable cause
An ORDER BY can be used in an aggregate function only if there are no DISTINCT aggregates in the SELECT
list, or there is a single DISTINCT aggregate with the DISTINCT column equal to the first column of the ORDER

BY. Also, multiple ordered aggregates cannot be used in the same SELECT list unless they have the exact same
ORDER BY clause.

#### 1.1.4.510 Illegal reference to correlation name '%1'

Error constant
SQLE_INVALID_CORRELATION_NAME_REFERENCE
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
The correlation name that is incorrectly referenced.
Severity
SQLCODE
-824
SQLSTATE
42U01
Sybase error code
Probable cause
Your query contains a reference in a table expression to a correlation name that is not contained in that table
expression.

#### 1.1.4.511 Illegal tag value: '%1'

SQLE_BAD_FOR_XML_EXPLICIT_TAG
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The illegal tag value.
Severity
SQLCODE
-897
SQLSTATE
WX005
Sybase error code
Probable cause
FOR XML EXPLICIT and FOR JSON EXPLICIT tag values must be greater than 0 and less than 256. NULL values
are not allowed in the Tag column.

#### 1.1.4.512 Illegal user selectivity estimate specified

Error constant
SQLE_INVALID_USER_ESTIMATE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
SQLSTATE
01W16
Sybase error code
Probable cause
You specified a user selectivity estimate that is either not a literal constant or is outside the range 0.0 to 100.0
(estimates are specified as percentages). The estimate has been ignored.

#### 1.1.4.513 Immediate materialized view definition cannot contain a SUM function over a nullable expression

contain a SUM function over a nullable expression
SQLE_UPDATABLE_MATVIEW_SUM_NULL_EXPR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1286
SQLSTATE
42WCD
Sybase error code

Probable cause
You attempted to change the refresh type to immediate for a materialized view whose definition contains a
SUM function over a nullable expression.

#### 1.1.4.514 IN-list is too long

Error constant
SQLE_IN_LIST_TOO_LONG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1898
SQLSTATE
54W24
Sybase error code
Probable cause
The IN-list contains too many elements. Consider inserting the IN-list's values into a temporary table. Then
rewrite the query to join this temporary table to the other table(s) in the original statement. Rebuilding the
database with a larger page size could prevent this error.

#### 1.1.4.515 Incomplete transactions prevent transaction log renaming

renaming
SQLE_BACKUP_CANNOT_RENAME_LOG_YET
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-242
SQLSTATE
WB003
Sybase error code

Probable cause
The last page in the transaction log was read by a call to db_backup. One or more currently active connections
have partially completed transactions, preventing the transaction log file from being renamed. Reissue the
db_backup call.

#### 1.1.4.516 Incorrect database store DLL (%1) version

Error constant
SQLE_STORE_VERSION_MISMATCH
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the database store DLL.
Severity
SQLCODE
-711
SQLSTATE
08W47
Sybase error code
Probable cause
The database store DLL and server DLL versions do not match.

#### 1.1.4.517 Incorrect or missing encryption key

SQLE_BAD_ENCRYPTION_KEY
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-840
SQLSTATE
08W62
Sybase error code

Probable cause
The database is encrypted with a key. There was no key given to start the database, or the specified key was
incorrect.

#### 1.1.4.518 Incorrect volume ID for '%1'

Error constant
SQLE_INCORRECT_VOLUME_ID
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The file name.
Severity
SQLCODE
-975
SQLSTATE
WW044
Sybase error code
Probable cause
The file can be accessed, but the volume ID has changed. Insert the original removable media card.

#### 1.1.4.519 Index '%1' cannot be clustered

Error constant
SQLE_CLUSTERED_INDEX_NOT_ALLOWED
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the index that could not be made clustered.

Severity
SQLCODE
-878
SQLSTATE
42W74
Sybase error code
Probable cause
You attempted to create a clustered index (including key indexes) but the new index cannot be created, for
example, because the table already has a clustered index.

#### 1.1.4.520 Index '%1' for table '%2' would not be unique

Error constant
SQLE_INDEX_NOT_UNIQUE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the index that would not be unique.
Parameter 2
Name of the table that contains the index.
Severity
SQLCODE
-196
SQLSTATE
Sybase error code
Probable cause
You attempted to insert or update a row that has the same value as another row in some column, and there is a
constraint that does not allow two rows to have the same value in that column.

#### 1.1.4.521 Index '%1' has no columns

Error constant
SQLE_INDEX_HAS_NO_COLUMNS
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the index.
Severity
SQLCODE
-1274
SQLSTATE
0EW01
Sybase error code
Probable cause
You attempted to create an index without columns.

#### 1.1.4.522 Index name '%1' is ambiguous

Error constant
SQLE_AMBIGUOUS_INDEX_NAME
ODBC 2 state
S0011
ODBC 3 state
42S11
Parameter 1
Name of the ambiguous index.
Severity
SQLCODE
-678
SQLSTATE
52W40
Sybase error code
Probable cause
A statement has referred to an index name that is not unique. Preface the index name with the table and/or
owner name.

#### 1.1.4.523 Index name '%1' not unique

Error constant
SQLE_INDEX_NAME_NOT_UNIQUE
ODBC 2 state
S0011
ODBC 3 state
42S11
Parameter 1
Name of the invalid index.
Severity
SQLCODE
-111
SQLSTATE
52W04
Sybase error code
Probable cause
You attempted to create an index with the same name as an existing index.

#### 1.1.4.524 Index type specification of '%1' is invalid

SQLE_INVALID_INDEX_TYPE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The index type specification that is invalid.
Severity
SQLCODE
-650
SQLSTATE
WW016
Sybase error code

Probable cause
SAP IQ index types can be specified for SAP IQ indexes only. In UltraLite, you cannot specify indexes on LONG
column types.

#### 1.1.4.525 Index validation failed for table %1, index %2 with code: %3

code: %3
Error constant
SQLE_CORRUPT_ULTRALITE_INDEX
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the table.
Parameter 2
The name of the index.
Parameter 3
The specific kind of corruption that was found.
Severity
SQLCODE
-1185
SQLSTATE
WI002
Sybase error code
Probable cause
UltraLite database validation failed while validating the specified index. The code provides more specific
information on the validation failure.

#### 1.1.4.526 Indirect identifier `[%1]` yielded an invalid identifier name '%2'

identifier name '%2'
Error constant
SQLE_INDIRECT_IDENT_INVALID
ODBC 2 state
ODBC 3 state
Parameter 1
The variable name for the indirect identifier
Parameter 2
The value of that variable that is invalid as an identifier name
Severity
SQLCODE
-1819
SQLSTATE
42X13
Sybase error code
Probable cause
An indirect identifier must produce a name that would be accepted if it were specified without the use of
indirect identifiers.

#### 1.1.4.527 Indirect identifiers not supported

SQLE_INDIRECT_IDENTS_NOT_SUPPORTED
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1818
SQLSTATE
0AW31
Sybase error code
Probable cause
The current database is an older database and does not have support for indirect identifiers. To use this
feature, upgrade your database to the most recent version.

#### 1.1.4.528 Information for synchronization is incomplete or invalid, check '%1'

invalid, check '%1'
Error constant
SQLE_SYNC_INFO_INVALID
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the parameter not properly initialized.
Severity
SQLCODE
-956
SQLSTATE
WW036
Sybase error code
Probable cause
Information for synchronization is incomplete or invalid. Correct the indicated parameter before attempting to
synchronize again. If 'init_verify' is indicated, the InitSyncInfo function was not called.

#### 1.1.4.529 Information for synchronization was not provided

SQLE_SYNC_INFO_REQUIRED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1111
SQLSTATE
WW081
Sybase error code
Probable cause
You must supply information for synchronization in the synchronization call.

#### 1.1.4.530 Input parameter index out of range

Error constant
SQLE_BAD_PARAM_INDEX
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-689
SQLSTATE
WJ005
Sybase error code
Probable cause
The range for valid parameters is from 1 up to the number of host variables specified in the prepared/callable
statement.

#### 1.1.4.531 Input string is not base64-encoded

SQLE_BASE64_DECODING_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-961
SQLSTATE
WW039
Sybase error code
Probable cause
An error occurred during base64 decoding.

#### 1.1.4.532 INSERT...ON EXISTING UPDATE not allowed: immediate materialized view %1 depends on %2

immediate materialized view %1 depends on %2
Error constant
SQLE_UPDATE_ON_EXISTING_DEP_IMV
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of dependent immediate materialized view.
Parameter 2
The name of the base table into which the insert was per-
formed.
Severity
SQLCODE
-1204
SQLSTATE
55W33
Sybase error code
Probable cause
Insert statement with ON EXISTING clause is not permitted on a base table if the base table has dependent
initialized immediate materialized view.

#### 1.1.4.533 INSERT/DELETE on cursor can modify only one table

table
SQLE_ONLY_ONE_TABLE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-199
SQLSTATE
09W04
Sybase error code
Probable cause
You attempted to insert into a cursor and have specified values for more than one table, or you attempted to
delete from a cursor that involves a join. Insert into one table at a time. For DELETE, use the FROM clause to
specify the table you want to delete from.

#### 1.1.4.534 Insufficient cache to start Java VM

Error constant
SQLE_JAVA_VM_INSUFFICIENT_CACHE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-686
SQLSTATE
WP015
Sybase error code
Probable cause
Insufficient cache was available to start the Java VM. Restart the database server with a larger cache size.

#### 1.1.4.535 Insufficient memory for OPENXML query

SQLE_XQUERY_MEMORY_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-912
SQLSTATE
WX016
Sybase error code
Probable cause
The memory used by an OPENXML query may be proportional to the maximum distance between elements or
attributes returned by a single row. For example, a query where some row uses the value from both the first

and last element in the document may use memory proportional to the size of the document. One solution is
to increase the cache size. Another is to break a query that refers to distant elements into several queries that
refer to nearby elements and join the results.

#### 1.1.4.536 Integrated login failed

Error constant
SQLE_INTEGRATED_LOGON_FAILED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-245
SQLSTATE
28W04
Sybase error code
Probable cause
The integrated login failed. You may not have a system account on the server computer.

#### 1.1.4.537 Integrated logins are not permitted

SQLE_INVALID_STANDARD_LOGON
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-205
SQLSTATE
28W02
Sybase error code
Probable cause
The login_mode database option is set to Standard, and you attempted an integrated login. Change the option
setting or supply an explicit user ID.

#### 1.1.4.538 Integrated logins are not supported for this database

database
Error constant
SQLE_INTEGRATED_LOGON_UNSUPPORTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-246
SQLSTATE
28W05
Sybase error code
Probable cause
The current database is an older database and does not have the information to map integrated login IDs to
database user IDs. You must upgrade your database to use integrated logins.

#### 1.1.4.539 Integrated logins are required, standard logins are not permitted

not permitted
SQLE_INVALID_INTEGRATED_LOGON
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-206
SQLSTATE
28W03
Sybase error code
Probable cause
The login_mode database option is set to Integrated, and you attempted a standard login. Change the option
setting or use an integrated login.

#### 1.1.4.540 Internal database error %1 -- transaction rolled back

back
Error constant
SQLE_DATABASE_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Identification of the error.
Severity
SQLCODE
-301
SQLSTATE
40W01
Sybase error code
Probable cause
An internal database error occurred. If it can be reproduced, it should be reported to SAP. A ROLLBACK
statement has been automatically executed.

#### 1.1.4.541 Internal rollback log corrupted

SQLE_LOG_CORRUPTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-311
SQLSTATE
WI004
Sybase error code

Probable cause
While processing a COMMIT or ROLLBACK, corruption was found in the internal rollback log. This is a fatal
internal error.

#### 1.1.4.542 Invalid absolute or relative offset in FETCH

Error constant
SQLE_INVALID_FETCH_POSITION
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-263
SQLSTATE
42W25
Sybase error code
Probable cause
You specified an offset in a FETCH that was invalid or NULL.

#### 1.1.4.543 Invalid address parameter "%1" provided to start a listener

listener
SQLE_START_LISTENER_INVALID_ADDRESS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The listener address parameter
Severity
SQLCODE
-1783
SQLSTATE
08WE2
Sybase error code
Probable cause
You attempted to start a listener with an invalid IP address or port.

#### 1.1.4.544 Invalid address parameter "%1" provided to stop a listener

listener
Error constant
SQLE_STOP_LISTENER_INVALID_ADDRESS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The listener address parameter
Severity
SQLCODE
-1785
SQLSTATE
08WE3
Sybase error code
Probable cause
You attempted to stop a listener with an invalid IP address or port.

#### 1.1.4.545 Invalid backup operation

Error constant
SQLE_INVALID_BACKUP_OPERATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1021
SQLSTATE
WB013
Sybase error code
Probable cause
The specified backup operation is not valid because of previous backup operation(s).

#### 1.1.4.546 Invalid BACKUP operation or type specified: %1

Error constant
SQLE_BACKUP_BKINT_INVALID_PARAMS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of backup operation or type
Severity
SQLCODE
-1917
SQLSTATE
WB027
Sybase error code
Probable cause
Either backup operation or type is invalid

#### 1.1.4.547 Invalid backup parameter value

Error constant
SQLE_INVALID_BACKUP_PARM_VALUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1045
SQLSTATE
WB015
Sybase error code
Probable cause
One or more of the parameters supplied to the backup operation has an invalid value.

#### 1.1.4.548 Invalid bounds for coordinate %1 (near "BETWEEN %2 AND %3")

%2 AND %3")
Error constant
SQLE_SLERR_INVALID_BOUNDS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The coordinate with the invalid bounds.
Parameter 2
The first value of the invalid bounds.
Parameter 3
The second value of the invalid bounds.
Severity
SQLCODE
-1501
SQLSTATE
2FW88
Sybase error code
Probable cause
The specified coordinate bounds are not valid.

#### 1.1.4.549 Invalid class byte code

SQLE_BAD_CLASS_BYTE_CODE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-670
SQLSTATE
WP005
Sybase error code
Probable cause
A binary expression passed to the INSTALL JAVA statement was not a valid Java class.

#### 1.1.4.550 Invalid cockpit parameter

Error constant
SQLE_COCKPITDB_INVALID_PARAMETERS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1836
SQLSTATE
08WF1
Sybase error code
Probable cause
An error occurred while evaluating a parameter. The SQL Anywhere Cockpit does not support this parameter
or the parameter is specified with an invalid value.

#### 1.1.4.551 Invalid collation: "%1"

Error constant
SQLE_TEXT_BAD_COLLATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid collation string.
Severity
SQLCODE
-1163
SQLSTATE
WT008
Sybase error code
Probable cause
The collation was not found, or the tailoring options were invalid.

#### 1.1.4.552 Invalid column number

Error constant
SQLE_INVALID_COLUMN_NUMBER

ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-159
SQLSTATE
42W13
Sybase error code
Probable cause
You gave an invalid column number, or the column you are looking for is in a different table.

#### 1.1.4.553 Invalid commit action for shared temporary table

Error constant
SQLE_INVALID_SHARED_COMMIT_ACTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1089
SQLSTATE
52W26
Sybase error code
Probable cause
A global shared temporary table must be declared as ON COMMIT PRESERVE ROWS or NOT
TRANSACTIONAL.

#### 1.1.4.554 Invalid comparison

Error constant
SQLE_INVALID_COMPARISON
ODBC 2 state
ODBC 3 state
Severity

SQLCODE
-710
SQLSTATE
52W25
Sybase error code
Probable cause
An attempt was made to compare two arguments that do not support comparison. For example, it is not valid
to compare a Java object with another Java object, unless the class of the object supports a valid compareTo
method.

#### 1.1.4.555 Invalid configuration name %1

Error constant
SQLE_SLERR_CONFIG_NO_SUBFILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid configuration name.
Severity
SQLCODE
-1439
SQLSTATE
2FW32
Sybase error code
Probable cause
The named configuration is not supported.

#### 1.1.4.556 Invalid data conversion

SQLE_CANNOT_CONVERT
Error constant
ODBC 2 state
01S01
ODBC 3 state
01S01
Severity
SQLCODE
SQLSTATE
01W03

Sybase error code
Probable cause
The database could not convert a value to the required type. The value being converted was either supplied to
the database on an insert, update, or as a host bind variable, or was a value retrieved from the database into a
host variable or SQLDA.

#### 1.1.4.557 Invalid data conversion: NULL was inserted for column '%1' on row %2

column '%1' on row %2
Error constant
SQLE_CANNOT_CONVERT_LOAD_TABLE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the column where NULL was inserted.
Parameter 2
Row number in the data file where the invalid data conver-
sion took place.
Severity
SQLCODE
SQLSTATE
01W01
Sybase error code
Probable cause
The database could not convert a value to the required type. The value being converted was supplied to the
database in a data file and inserted using LOAD TABLE. A NULL value has been inserted into the column.

#### 1.1.4.558 Invalid data type for column in WRITETEXT or READTEXT

READTEXT
Error constant
SQLE_INVALID_TEXT_IMAGE_DATATYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-609
SQLSTATE
53W09
Sybase error code
Probable cause
You referenced a column in a WRITETEXT or READTEXT statement that is not defined for storing text or image
data.

#### 1.1.4.559 Invalid database page size

Error constant
SQLE_PAGE_SIZE_INVALID
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-644
SQLSTATE
08W32
Sybase error code
Probable cause
You attempted to create a database with an invalid page size. The page size for a SQL Anywhere database must
be either 2048, 4096, 8192, 16384, or 32768 bytes. The page size for an UltraLite database must be either
1024, 2048, 4096, 8192, or 16384 bytes.

#### 1.1.4.560 Invalid database server command line

Error constant
SQLE_INVALID_COMMAND_LINE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-81
SQLSTATE
08W08
Sybase error code
Probable cause
It was not possible to start the database server because the command line was invalid.

#### 1.1.4.561 Invalid day of week or month '%1' for event '%2'

SQLE_INVALID_EVENT_DAY
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Day-of-week name or day-of-month number.
Parameter 2
Name of the event being scheduled.
Severity
SQLCODE
-791
SQLSTATE
WE005
Sybase error code

Probable cause
You have attempted to create a schedule with an invalid day-of-week name or day-of-month number.

#### 1.1.4.562 Invalid DEFAULT value near '%1' on line %2

Error constant
SQLE_INVALID_DEFAULT_VALUE
ODBC 2 state
ODBC 3 state
Parameter 1
The word or symbol where the invalid DEFAULT value has
been detected.
Parameter 2
Line number.
Severity
SQLCODE
-1709
SQLSTATE
42W10
Sybase error code
Probable cause
An invalid DEFAULT value was specified when creating or altering a table column.

#### 1.1.4.563 Invalid descriptor index

SQLE_INVALID_DESCRIPTOR_INDEX
Error constant
ODBC 2 state
S1002
ODBC 3 state
Severity
SQLCODE
-640
SQLSTATE
Sybase error code
Probable cause
The index number used with respect to a descriptor area is out of range.

#### 1.1.4.564 Invalid domain '%1'

Error constant
SQLE_INVALID_DOMAIN
ODBC 2 state
ERROR
ODBC 3 state
Parameter 1
The invalid domain specification.
Severity
SQLCODE
-1275
SQLSTATE
54W52
Sybase error code
Probable cause
You attempted to create an invalid domain. The size/scale/precision is invalid.

#### 1.1.4.565 Invalid empty string specified as 'ESCAPE CHARACTER' option of LOAD or UNLOAD TABLE

CHARACTER' option of LOAD or UNLOAD TABLE
SQLE_INVALID_LOAD_ESCAPE_CHAR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1874
SQLSTATE
WL019
Sybase error code
Probable cause
The ESCAPE CHARACTER option does not support empty string as an input for LOAD TABLE and UNLOAD
TABLE statements.

#### 1.1.4.566 Invalid escape character '%1'

Error constant
SQLE_INVALID_ESCAPE_CHAR
ODBC 2 state
S1000
ODBC 3 state
Parameter 1
The escape character that is invalid.
Severity
SQLCODE
-629
SQLSTATE
Sybase error code
Probable cause
The escape character string length must be exactly one.

#### 1.1.4.567 Invalid escape sequence '%1'

Error constant
SQLE_INVALID_ESCAPE_SEQ
ODBC 2 state
S1000
ODBC 3 state
Parameter 1
The escaped character.
Severity
SQLCODE
-630
SQLSTATE
Sybase error code
Probable cause
A LIKE pattern contains an invalid use of the escape character. The escape character may only precede the
special characters '%', '_', '[', and the escape character itself.

#### 1.1.4.568 Invalid event parameter for event '%1'

Error constant
SQLE_INVALID_EVENT_PARAMETER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the event being scheduled.
Severity
SQLCODE
-1853
SQLSTATE
WE043
Sybase error code
Probable cause
You have specified an event parameter that is invalid.

#### 1.1.4.569 Invalid expression in WHERE clause of Transact-SQL outer join

SQL outer join
Error constant
SQLE_INVALID_TSQL_OJ_EXPRESSION
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-680
SQLSTATE
52W23
Sybase error code
Probable cause
An expression in the WHERE clause of a query that uses Transact-SQL syntax contains a comparison of
a column from the NULL-supplying table with a subquery or an expression that references a column from
another table.

#### 1.1.4.570 Invalid expression near '%1'

Error constant
SQLE_EXPRESSION_ERROR
ODBC 2 state
ODBC 3 state
Parameter 1
The invalid expression.
Severity
SQLCODE
-156
SQLSTATE
42W08
Sybase error code
Probable cause
You supplied an expression that the database server cannot understand. For example, you may have tried to
add two dates.

#### 1.1.4.571 Invalid external prefilter name specified

SQLE_INVALID_EXT_PREFILTER_NAME
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1394
SQLSTATE
WT029
Sybase error code
Probable cause
External prefilter name specified in the text configuration is invalid.

#### 1.1.4.572 Invalid external term breaker name specified

Error constant
SQLE_INVALID_EXT_TERMBREAKER_NAME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1395
SQLSTATE
WT026
Sybase error code
Probable cause
External term breaker name specified in the text configuration is invalid.

#### 1.1.4.573 Invalid floating point value detected in internal point computation

point computation
Error constant
SLWARN_NAN_INVALID_POINT
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE

SQLSTATE
01FW3
Sybase error code
Probable cause
A NaN floating point value was detected during internal computations when checking the validity of a point.
This is a notification only.

#### 1.1.4.574 Invalid generated identifier '%1'

Error constant
SQLE_INVALID_GENERATED_IDENTIFIER
ODBC 2 state
ODBC 3 state
Parameter 1
The identifier that is generated.
Severity
SQLCODE
-1816
SQLSTATE
Sybase error code
Probable cause
An invalid identifier has been generated. The generated identifier is too long or contains characters that are not
permitted in identifiers. Please provide valid alias names.

#### 1.1.4.575 Invalid grid size %1

SQLE_SLERR_INVALID_GRID_SIZE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The grid size that is not valid.
Severity
SQLCODE
-1499
SQLSTATE
2FW86

Sybase error code
Probable cause
The specified grid size cannot be used with the spatial reference system. The grid size must be selected based
on the bounds of space.

#### 1.1.4.576 Invalid hint specified for table '%1'

Error constant
SQLE_INVALID_HINT
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the table for which the hint was specified.
Severity
SQLCODE
-970
SQLSTATE
42U07
Sybase error code
Probable cause
A hint was specified for the current statement is not valid in this context. In a single statement, all references to
a table must specify the same hint or none at all.

#### 1.1.4.577 Invalid host variable

Error constant
SQLE_VARIABLE_INVALID
ODBC 2 state
ODBC 3 state

Severity
SQLCODE
-155
SQLSTATE
42W07
Sybase error code
Probable cause
You supplied an invalid host variable to the database using the C language interface. You may have supplied the
variable as a host variable or through a SQLDA.

#### 1.1.4.578 Invalid increment value for semaphore "%1": %2

Error constant
SQLE_INVALID_INCREMENT_VALUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the semaphore.
Parameter 2
The value specified.
Severity
SQLCODE
-1810
SQLSTATE
Sybase error code
Probable cause
The increment value for a semaphore must be a non-negative integer.

#### 1.1.4.579 Invalid intersection matrix '%1'

Error constant
SQLE_SLERR_INVALID_RELATE_MATRIX
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The intersection matrix string.
Severity
SQLCODE
-1399
SQLSTATE
2FF04
Sybase error code
Probable cause
The provided value is not a valid intersection matrix string. A valid string contains nine characters, each is one
of T, F, *, 0, 1, or 2.

#### 1.1.4.580 Invalid JAR file

Error constant
SQLE_BAD_JAR_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-730
SQLSTATE
WP010
Sybase error code
Probable cause
A file passed to the INSTALL JAVA statement was not a valid JAR file.

#### 1.1.4.581 Invalid join type used with Transact-SQL outer join

Error constant
SQLE_INVALID_TSQL_JOIN_TYPE

ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-681
SQLSTATE
52W24
Sybase error code
Probable cause
An invalid join type was used with a query that contains Transact-SQL outer join comparison operators.

#### 1.1.4.582 Invalid local database option

Error constant
SQLE_INVALID_LOCAL_OPTION
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-79
SQLSTATE
08W25
Sybase error code
Probable cause
An invalid database option was found in the DBS (DatabaseSwitches) connection parameter.

#### 1.1.4.583 Invalid mime type '%1'

Error constant
SQLE_INVALID_MIMETYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the mime type
Severity
SQLCODE
-1123
SQLSTATE
WW085
Sybase error code
Probable cause
The mime type specifier is invalid.

#### 1.1.4.584 Invalid operation '%2' on sequence '%1'

Error constant
SQLE_INVALID_SEQUENCE_OPERATION
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the operation attempted.
Parameter 2
Name of the sequence.
Severity
SQLCODE
-1353
SQLSTATE
52W46
Sybase error code
Probable cause
An invalid operation has been attempted on a sequence object. The only valid operations on a sequence are
currval and nextval.

#### 1.1.4.585 Invalid operation on a closed object

Error constant
SQLE_ULTRALITE_OBJ_CLOSED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-908
SQLSTATE
55W14
Sybase error code
Probable cause
An illegal attempt was made to access a closed UltraLite object.

#### 1.1.4.586 Invalid option '%1' -- no PUBLIC setting exists

Error constant
SQLE_INVALID_OPTION
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the invalid option.
Severity
SQLCODE
-200
SQLSTATE
42W16
Sybase error code
Probable cause
You may have misspelled the name of an option in the SET OPTION statement. You can only define an option
for a user if the database administrator has supplied a PUBLIC value for that option.

#### 1.1.4.587 Invalid options for UPGRADE: SCRIPT FILE can only be specified with RESTART

be specified with RESTART
Error constant
SQLE_UPGRADE_SCRIPT_EXTRA_CLAUSE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1715
SQLSTATE
08X01
Sybase error code
Probable cause
ALTER DATABASE UPGRADE statement with SCRIPT FILE clause cannot be combined with any other clause
except for RESTART ON/OFF.

#### 1.1.4.588 Invalid ORDER BY specification

SQLE_INVALID_ORDER
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-152
SQLSTATE
Sybase error code

Probable cause
Either you used an integer in an ORDER BY list and the integer is larger than the number of columns in the
SELECT list, or you specified an ORDER BY expression that is semantically invalid. For example, for UNION,
EXCEPT, and INTERSECT queries you can only use integers or column names of the first SELECT query block
to specify an ordering of the result.

#### 1.1.4.589 Invalid parameter

Error constant
SQLE_INVALID_PARAMETER
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-735
SQLSTATE
08W24
Sybase error code
Probable cause
An error occurred while evaluating a parameter.

#### 1.1.4.590 Invalid parameter was used in the call to %1

SQLE_SFC_INVALID_PARM
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Severity
SQLCODE
-1686

SQLSTATE
08S02
Sybase error code
Probable cause
An invalid parameter value was passed to the specified procedure.

#### 1.1.4.591 Invalid password: %1

Error constant
SQLE_INVALID_NEW_PASSWORD
ODBC 2 state
ODBC 3 state
Parameter 1
Reason the password is invalid, or the reason attempting to
call the function to verify the password failed.
Severity
SQLCODE
-1044
SQLSTATE
28W11
Sybase error code
Probable cause
The attempt to create a new user ID or change a password failed. The function specified by the
verify_password_function option disallowed the password.

#### 1.1.4.592 Invalid polygon format '%1'

Error constant
SQLE_SLERR_INVALID_POLY_ORD
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid polygon format.
Severity
SQLCODE
-1448
SQLSTATE
2FW41
Sybase error code
Probable cause
The specified polygon format is not a valid format.

#### 1.1.4.593 Invalid polygon nesting

Error constant
SQLE_SLERR_INVALID_POLY_NESTING
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1450
SQLSTATE
2FW43
Sybase error code
Probable cause
The provided rings cannot be interpreted as a valid polygons.

#### 1.1.4.594 Invalid polygon: curve is not a ring

Error constant
SQLE_SLERR_INVALID_POLY_NON_RING

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1487
SQLSTATE
2FW82
Sybase error code
Probable cause
One of the curves is not a ring and cannot be used to form a polygon.

#### 1.1.4.595 Invalid polygon: multiple exterior rings

SQLE_SLERR_INVALID_POLY_MULT_EXT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1451
SQLSTATE
2FW44
Sybase error code
Probable cause
There are multiple exterior rings that do not form a single valid polygon.

#### 1.1.4.596 Invalid polygon: no exterior ring

Error constant
SQLE_SLERR_INVALID_POLY_NO_EXT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1449
SQLSTATE
2FW42
Sybase error code
Probable cause
The provided polygon is invalid as it does not have an exterior ring.

#### 1.1.4.597 Invalid polygon: ring has zero area (near '%1')

Error constant
SQLE_SLERR_INVALID_POLY_EMPTY_RING
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value or method where the error was detected.
Severity
SQLCODE
-1486
SQLSTATE
2FW81
Sybase error code
Probable cause
One of the provided rings has zero area and cannot be a valid polygon ring.

#### 1.1.4.598 Invalid polygon: ring is larger than allowed for SRID=%1 (near '%2')

SRID=%1 (near '%2')
Error constant
SQLE_SLERR_INVALID_POLY_RE_SIZE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The spatial reference system identifier.
Parameter 2
The value or method where the error was detected.
Severity
SQLCODE
-1488
SQLSTATE
2FW83
Sybase error code
Probable cause
One of the rings is larger than the specified spatial reference system supports.

#### 1.1.4.599 Invalid polygon: ring is not closed (near '%1')

SQLE_SLERR_INVALID_POLY_RING_CLOSE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value or method where the error was detected.
Severity
SQLCODE
-1485
SQLSTATE
2FW80
Sybase error code

Probable cause
One of the provided curves is not a closed ring.

#### 1.1.4.600 Invalid preceding or following size in OLAP function

Error constant
SQLE_INVALID_FRAME_BOUNDARY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-957
SQLSTATE
22X13
Sybase error code
Probable cause
The expression for the preceding or following size evaluated to NULL or a negative value.

#### 1.1.4.601 Invalid prepared statement type

SQLE_INVALID_STATEMENT_TYPE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-133
SQLSTATE
07W03
Sybase error code

Probable cause
This is an internal error. If it can be reproduced, it should be reported to SAP.

#### 1.1.4.602 Invalid procedure subtype '%1' for type '%2'

Error constant
SQLE_INVALID_PROCEDURE_SUBTYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The procedure subtype.
Parameter 2
The procedure type.
Severity
SQLCODE
-987
SQLSTATE
WW056
Sybase error code
Probable cause
A procedure or function was specified with an invalid subtype for the given procedure type.

#### 1.1.4.603 Invalid procedure type '%1'

SQLE_INVALID_PROCEDURE_TYPE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The procedure type.
Severity
SQLCODE
-986
SQLSTATE
WW055
Sybase error code
Probable cause
A procedure or function was specified with an invalid type.

#### 1.1.4.604 Invalid recursive query

Error constant
SQLE_INVALID_RECURSION
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-921
SQLSTATE
42W99
Sybase error code
Probable cause
A recursive query must consist of the UNION ALL of an initial query and an iteration query. The only set
operation allowed in the iteration query is UNION ALL. A recursive reference to the name of the common table
expression can only appear in the iteration query, and must not be in a SELECT that uses DISTINCT, ORDER BY,
or an aggregate function. A recursive reference also cannot appear on the NULL-supplying side of an outer join,
or in a subquery.

#### 1.1.4.605 Invalid reference to or operation on constraint '%1'

SQLE_INVALID_CONSTRAINT_REF
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S23
Parameter 1
Name of the constraint that cannot be used for the specified
purpose.
Severity
SQLCODE
-937
SQLSTATE
42U06
Sybase error code
Probable cause
You specified an invalid operation on a constraint. For example, you tried to alter a primary key constraint.

#### 1.1.4.606 Invalid REFERENCES clause in trigger definition

Error constant
SQLE_INVALID_TRIGGER_COL_REFS
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-272
SQLSTATE
52W12
Sybase error code
Probable cause
You supplied an invalid REFERENCES clause in a trigger definition. You may have specified an OLD correlation
name in a BEFORE INSERT trigger, or a NEW correlation name in an AFTER DELETE trigger. In both cases, the
values do not exist and cannot be referenced.

#### 1.1.4.607 Invalid regular expression: %1 in '%2'

SQLE_INVALID_REGULAR_EXPRESSION
Error constant
ODBC 2 state
S1000
ODBC 3 state
2201B
Parameter 1
The reason the regular expression is invalid.
Parameter 2
The invalid regular expression.
Severity
SQLCODE
-1135
SQLSTATE
2201B
Sybase error code

Probable cause
The specified regular expression is invalid.

#### 1.1.4.608 Invalid repeat interval for event '%1'

Error constant
SQLE_INVALID_EVENT_INTERVAL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the event being scheduled.
Severity
SQLCODE
-1852
SQLSTATE
WE042
Sybase error code
Probable cause
You have specified an event period that is invalid.

#### 1.1.4.609 Invalid request log format on line %1

SQLE_INVALID_REQUEST_LOG_FORMAT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The line number in the log file.
Severity
SQLCODE
-999
SQLSTATE
WW020
Sybase error code
Probable cause
The request log file format is invalid. The request log may have been created with an older version of the
software.

#### 1.1.4.610 Invalid response from the HTTP server

Error constant
SQLE_INVALID_HTTP_RESPONSE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-988
SQLSTATE
WW057
Sybase error code
Probable cause
The response from the remote HTTP server was invalid. It may have been empty, malformed, missing header
information, and so on.

#### 1.1.4.611 Invalid ROW or ARRAY domain

Error constant
SQLE_INVALID_COLLECTION_DOMAIN
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1820
SQLSTATE
WW249
Sybase error code
Probable cause
Row and array domains cannot contain DEFAULT values or CHECK constraints.

#### 1.1.4.612 Invalid scroll position '%1'

Error constant
SQLE_INVALID_POSITION
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The scroll position that is invalid.
Severity
SQLCODE
-820
SQLSTATE
Sybase error code
Probable cause
You attempted to scroll to a position that is not supported. Scroll positions must be between -2147483647 and
2147483646.

#### 1.1.4.613 Invalid service name '%1'

Error constant
SQLE_INVALID_SERVICE_NAME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the service.
Severity
SQLCODE
-925
SQLSTATE
42W95
Sybase error code
Probable cause
You have attempted to create a service with an invalid name. The name may contain characters that are not
allowed, or it may conflict with the URL PATH setting specified for the service.

#### 1.1.4.614 Invalid setting '%1' specified for option '%2' for target type '%3'

target type '%3'
Error constant
SQLE_INVALID_SETTING_FOR_TARGET_TYPE_OPTION
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The option value.
Parameter 2
The option name.
Parameter 3
The trace event target type.
Severity
SQLCODE
-1902
SQLSTATE
WE044
Sybase error code
Probable cause
The specified option value is invalid for the target type.

#### 1.1.4.615 Invalid setting for HTTP header '%1'

Error constant
SQLE_INVALID_HTTP_HEADER_SETTING
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the invalid HTTP header.
Severity
SQLCODE
-940
SQLSTATE
42W84
Sybase error code
Probable cause
You supplied an invalid value for an HTTP header.

#### 1.1.4.616 Invalid setting for HTTP option '%1'

Error constant
SQLE_INVALID_HTTP_OPTION_SETTING
ODBC 2 state

ODBC 3 state
Parameter 1
Name of the invalid HTTP option.
Severity
SQLCODE
-939
SQLSTATE
42W83
Sybase error code
Probable cause
You supplied an invalid value for an HTTP option. Some options allow only numeric values, while other options
allow only the values On and Off.

#### 1.1.4.617 Invalid setting for option '%1'

Error constant
SQLE_INVALID_OPTION_SETTING
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the invalid option.
Severity
SQLCODE
-201
SQLSTATE
42W17
Sybase error code
Probable cause
You supplied an invalid value for an option in the SET statement. Some options allow only numeric values, while
other options allow only the values On and Off.

#### 1.1.4.618 Invalid setting for SOAP header '%1'

Error constant
SQLE_INVALID_SOAP_HEADER_SETTING
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the invalid SOAP header.
Severity
SQLCODE
-1114
SQLSTATE
42W86
Sybase error code
Probable cause
You supplied an invalid value for a SOAP header.

#### 1.1.4.619 Invalid shapefile filename

Error constant
SQLE_SLERR_SHAPE_INVALID_FILENAME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1424
SQLSTATE
2FW15
Sybase error code
Probable cause
The specified shapefile filename is not valid.

#### 1.1.4.620 Invalid spatial reference system well-known-text (WKT)

(WKT)
Error constant
SQLE_SLERR_SRS_PARSE_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1441
SQLSTATE
2FW34
Sybase error code
Probable cause
The provided string does not represent a valid spatial reference system definition in well-known text format.

#### 1.1.4.621 Invalid SQL descriptor name

Error constant
SQLE_INVALID_DESCRIPTOR_NAME
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-642
SQLSTATE
Sybase error code
Probable cause
You attempted to deallocate a descriptor that has not been allocated.

#### 1.1.4.622 Invalid SQL identifier

Error constant
SQLE_INVALID_SQL_IDENTIFIER
ODBC 2 state
ODBC 3 state
07W06
Severity
SQLCODE
-760
SQLSTATE
07W06
Sybase error code
Probable cause
An invalid identifier was supplied through the C language interface. For example, you may have supplied a
NULL string for a cursor name.

#### 1.1.4.623 Invalid sqllen field in SQLDA

SQLE_INVALID_SQLLEN
Error constant
ODBC 2 state
HY090
ODBC 3 state
HY090
Severity
SQLCODE
-856
SQLSTATE
07W08
Sybase error code
Probable cause
An invalid length was specified in a SQLDA sqllen field. All variable length types must have a non-negative
length. The DT_BINARY and DT_VARCHAR types must have length greater than one.

#### 1.1.4.624 Invalid start date/time for event '%1'

Error constant
SQLE_INVALID_EVENT_START
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the event being scheduled.
Severity
SQLCODE
-793
SQLSTATE
WE007
Sybase error code
Probable cause
You have specified an event starting date that is invalid.

#### 1.1.4.625 Invalid start value for semaphore "%1": %2

Error constant
SQLE_INVALID_START_VALUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the semaphore.
Parameter 2
The value specified.
Severity
SQLCODE
-1803
SQLSTATE
Sybase error code
Probable cause
The start value for a semaphore must be a non-negative integer.

#### 1.1.4.626 Invalid statement

Error constant
SQLE_INVALID_STATEMENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-130
SQLSTATE
07W02
Sybase error code
Probable cause
The prepared statement is invalid. In Embedded SQL, an OPEN or EXECUTE failed.

#### 1.1.4.627 Invalid stoplist value

SQLE_TEXT_INVALID_STOPLIST_VALUE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1391
SQLSTATE
WT025
Sybase error code
Probable cause
The value specified for the stoplist is not valid.

#### 1.1.4.628 Invalid storage format '%1'

Error constant
SQLE_SLERR_DDL_SRS_STGFORMAT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid storage format string.
Severity
SQLCODE
-1470
SQLSTATE
2FW63
Sybase error code
Probable cause
The specified storage format string is not valid.

#### 1.1.4.629 Invalid text index type for the materialized view

Error constant
SQLE_TEXT_MV_INVALID_COMBO
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1552
SQLSTATE
WT037
Sybase error code
Probable cause
Text index with the specified refresh type cannot be created on the materialized view. Only IMMEDIATE
REFRESH text indexes are allowed on materialized views.

#### 1.1.4.630 Invalid TEXTPTR value used with WRITETEXT or READTEXT

READTEXT
Error constant
SQLE_INVALID_TEXTPTR_VALUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-608
SQLSTATE
22W03
Sybase error code
Probable cause
You supplied an invalid value as the TEXTPTR for a WRITETEXT or READTEXT statement.

#### 1.1.4.631 Invalid time '%1' for event '%2'

Error constant
SQLE_INVALID_EVENT_TIME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Time value.
Parameter 2
Name of the event being scheduled.
Severity
SQLCODE
-792
SQLSTATE
WE006
Sybase error code
Probable cause
You have attempted to create a schedule with an invalid start or stop time.

#### 1.1.4.632 Invalid timeout value %1

Error constant
SQLE_INVALID_TIMEOUT_VALUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The timeout value specified.
Severity
SQLCODE
-1811
SQLSTATE
Sybase error code
Probable cause
The timeout specified in the statement must be a positive integer.

#### 1.1.4.633 Invalid tolerance %1

Error constant
SQLE_SLERR_INVALID_TOLERANCE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid tolerance.
Severity
SQLCODE
-1500
SQLSTATE
2FW87
Sybase error code
Probable cause
The specified tolerance cannot be used with the spatial reference system. The tolerance must be selected
based on the bounds of space.

#### 1.1.4.634 Invalid tool name or admin user for generating security token

security token
Error constant
SQLE_INVALID_TOOL_NAME_OR_ADMIN_USER
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1585
SQLSTATE
08WB1
Sybase error code
Probable cause
The tool name or admin user supplied is invalid for generating a security token.

#### 1.1.4.635 Invalid transform definition '%1'

Error constant
SQLE_SLERR_INVALID_TRANSFORM_DEF
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid transform definition string.
Severity
SQLCODE
-1442
SQLSTATE
2FW35
Sybase error code
Probable cause
The provided string does not represent a valid transform definition.

#### 1.1.4.636 Invalid trigger type for view '%1'

Error constant
SQLE_INVALID_TRIGGER_VIEW
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Name of the view
Severity
SQLCODE
-1133
SQLSTATE
42W3C
Sybase error code
Probable cause
You attempted to create a trigger on a view, but the type of trigger is supported on base tables only. Only
INSTEAD OF triggers can be created on views.

#### 1.1.4.637 Invalid type for field reference

Error constant
SQLE_INVALID_FIELD_REFERENCE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-94
SQLSTATE
WW014
Sybase error code
Probable cause
An expression attempted to reference a field or a method of a non-Java value. Field references via . and >> are
only valid when applied to Java objects.

#### 1.1.4.638 Invalid type on DESCRIBE statement

Error constant
SQLE_INVALID_DESCRIBE_TYPE
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
-161
SQLSTATE
07W01
Sybase error code
Probable cause
A Java type specified on a DESCRIBE statement has no corresponding SQL type.

#### 1.1.4.639 Invalid use of an aggregate function

Error constant
SQLE_AGGREGATES_NOT_ALLOWED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-150
SQLSTATE
42W06
Sybase error code
Probable cause
You attempted to use an aggregate function inappropriately. For example, a SELECT statement cannot contain
an aggregate function within a predicate in the WHERE clause unless the aggregate function constitutes an
outer reference. Other invalid uses include specifying an aggregate function in the SET clause of an UPDATE
statement, or using an aggregate function in a CHECK constraint.

#### 1.1.4.640 Invalid use of BEFORE operator in text query

Error constant
SQLE_TEXT_INVALID_BEFORE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1591
SQLSTATE
WT040
Sybase error code
Probable cause
Only terms and prefixes are allowed as arguments to a BEFORE operator.

#### 1.1.4.641 Invalid use of collection type

SQLE_INVALID_USE_OF_COLLECTION
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1599
SQLSTATE
WW210
Sybase error code
Probable cause
You tried to use an ARRAY or ROW type in an unsupported context. You cannot store these values in tables
or read them directly from client interfaces such as ODBC, ESQL, and JDBC. You must extract the individual
values you are interested in.

#### 1.1.4.642 Invalid use of escape character '%1'

Error constant
SQLE_INVALID_USE_OF_ESCAPE_CHARACTER
ODBC 2 state
S1000
ODBC 3 state
2200C
Parameter 1
The escape character that is invalid.
Severity
SQLCODE
-1136
SQLSTATE
2200C
Sybase error code
Probable cause
The specified escape character cannot be used.

#### 1.1.4.643 Invalid use of NEAR operator in text query

Error constant
SQLE_TEXT_INVALID_NEAR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1207
SQLSTATE
WT016
Sybase error code
Probable cause
Only terms and prefixes are allowed as arguments to a NEAR operator.

#### 1.1.4.644 Invalid use of table reference type

Error constant
SQLE_INVALID_USE_OF_TABLEREF

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1792
SQLSTATE
WW223
Sybase error code
Probable cause
You tried to use a table reference type in an unsupported context. You cannot store these values in tables or
read them directly from client interfaces such as ODBC, ESQL, and JDBC.

#### 1.1.4.645 Invalid user ID or password

Error constant
SQLE_INVALID_LOGON
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-103
SQLSTATE
Sybase error code
Probable cause
You supplied an invalid user ID or an incorrect password.

#### 1.1.4.646 Invalid user ID or password on preprocessed module

module
Error constant
SQLE_INVALID_MODULE_LOGON
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-104
SQLSTATE
28W01
Sybase error code
Probable cause
You specified an invalid user ID or password when a module was preprocessed.

#### 1.1.4.647 Invalid user ID or role name '%1' specified

Error constant
SQLE_INVALID_USER_ROLE_NAME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the invalid user or role that was specified.
Severity
SQLCODE
-1536
SQLSTATE
28W25
Sybase error code
Probable cause
You supplied an invalid name for a user or role.

#### 1.1.4.648 Invalid value for attribute '%1' in service

Error constant
SQLE_SERVICE_PARM_INVALID_VALUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the invalid attribute.
Severity
SQLCODE
-1022
SQLSTATE
42WAD
Sybase error code
Probable cause
The service definition contains a USING, FORMAT, or GROUP attribute with an invalid value.

#### 1.1.4.649 Invalid value for INSERT near '%1' on line %2

Error constant
SQLE_INVALID_INSERT_VALUE
ODBC 2 state
ODBC 3 state
Parameter 1
The word or symbol where the invalid value has been de-
tected.
Parameter 2
Line number.
Severity
SQLCODE
-1710
SQLSTATE
42W11
Sybase error code
Probable cause
An invalid value was specified for a value in an INSERT statements.

#### 1.1.4.650 Invalid value for login policy option "%1"

Error constant
SQLE_INVALID_LOGIN_POLICY_OPTION_VALUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of login policy option.
Severity
SQLCODE
-1655
SQLSTATE
WW243
Sybase error code
Probable cause
The value supplied for login policy option is not within valid bounds.

#### 1.1.4.651 Invalid variable or type

Error constant
SQLE_PARSE_JSON_INVALID_VARIABLE_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1680
SQLSTATE
WX024
Sybase error code
Probable cause
The named variable is invalid or of the wrong data type for the JSON result.

#### 1.1.4.652 Invalid XQuery constructor

Error constant
SQLE_INVALID_XQUERY_CONSTRUCTOR

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-905
SQLSTATE
WX012
Sybase error code
Probable cause
The XQuery constructor passed as the first argument to XMLGEN was not valid.

#### 1.1.4.653 Item '%1' already exists

Error constant
SQLE_NAME_NOT_UNIQUE
ODBC 2 state
S0001
ODBC 3 state
42S01
Parameter 1
Name of the item that already exists.
Severity
SQLCODE
-110
SQLSTATE
Sybase error code
Probable cause
You attempted to create a file, table, view, column, constraint, foreign key, publication, certificate, or OData
Producer with the same name as an existing one.

#### 1.1.4.654 JAR '%1' not found

Error constant
SQLE_JAR_NOT_FOUND
ODBC 2 state
ODBC 3 state

Parameter 1
Name of the JAR.
Severity
SQLCODE
-811
SQLSTATE
42W58
Sybase error code
Probable cause
The JAR with this name does not exist in the database.

#### 1.1.4.655 Java VM heap exhausted at internal function: %1

Error constant
SQLE_JAVA_VM_HEAP_EXHAUSTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The internal function is for debugging purposes.
Severity
SQLCODE
-165
SQLSTATE
WP008
Sybase error code
Probable cause
The amount of space allocated for the Java VM is insufficient to continue allocating new objects. Increase the
size by using: SET OPTION PUBLIC.java_heap_size = nnnnnnnn.

#### 1.1.4.656 jConnect does not support encryption

Error constant
SQLE_NO_ENCRYPTION_FOR_JCONNECT
ODBC 2 state
ODBC 3 state
Severity

SQLCODE
-941
SQLSTATE
08W69
Sybase error code
Probable cause
You supplied an encryption type for a connection using jConnect. jConnect does not support encryption.

#### 1.1.4.657 JSON array contains too many elements

Error constant
SQLE_PARSE_JSON_LIMIT_ARRAY_ELEMENTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1893
SQLSTATE
WX028
Sybase error code
Probable cause
The JSON text contains an array with too many elements. The number of elements in an array is limited to
65535.

#### 1.1.4.658 JSON nesting too deep

SQLE_PARSE_JSON_LIMIT_NESTING
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1900
SQLSTATE
WX026
Sybase error code

Probable cause
The JSON text contains objects that are nested too deeply. The nesting depth is limited to 60000 levels.

#### 1.1.4.659 JSON object contains too many properties

Error constant
SQLE_PARSE_JSON_LIMIT_OBJECT_PROPERTIES
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1892
SQLSTATE
WX027
Sybase error code
Probable cause
The JSON text contains an object with too many properties. The number of properties in an object is limited to
45000.

#### 1.1.4.660 JWT Provider '%1' does not exist

INVALID_JWT_PROVIDER_NAME
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the JWT provider name that could not be found.
Severity
SQLCODE
-2000
SQLSTATE
28W37
Sybase error code
Probable cause
You used a JWT provider name that does not exist.

#### 1.1.4.661 Kerberos login failed

Error constant
SQLE_KERBEROS_LOGON_FAILED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1069
SQLSTATE
28W12
Sybase error code
Probable cause
The Kerberos login failed due to a failure of the client to authenticate the user's principal with the KDC or a
failure of the server to authenticate the client. The most likely causes are the Kerberos principal may not be
signed in, the principal's ticket may have expired, or the client, server, or KDC's system time are not within
a few minutes of each other. The LogFile connection parameter or the server's -z option may provide more
information.

#### 1.1.4.662 Kerberos logins are not supported

Error constant
SQLE_KERBEROS_LOGONS_UNSUPPORTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1070
SQLSTATE
28W13
Sybase error code
Probable cause
The client and/or server does not support Kerberos logins. Kerberos may not be supported by the platform, the
Kerberos client software including the GSS-API runtime may not be installed or found on the client, or Kerberos
was not enabled on the server. The LogFile connection parameter or the server's -z option may provide more
information.

#### 1.1.4.663 Key constraint between temporary tables requires a primary key (not unique constraint)

a primary key (not unique constraint)
Error constant
SQLE_INVALID_FOREIGN_KEY_INDEX
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-865
SQLSTATE
42R03
Sybase error code
Probable cause
The key constraint between temporary tables requires a primary key (not a UNIQUE constraint) if the database
uses combined indexes. Change the definition of the primary table using ALTER TABLE or rebuild the database.

#### 1.1.4.664 Label '%1' not found

Error constant
SQLE_LABEL_NOT_FOUND
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the label that could not be found.
Severity
SQLCODE
-262
SQLSTATE
42W24
Sybase error code
Probable cause
You reference a label in a LEAVE statement, but the label could not be found.

#### 1.1.4.665 Language '%1' is not supported, '%2' will be used

Error constant
SQLE_UNSUPPORTED_LANGUAGE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the language that was requested by the client.
Parameter 2
Name of the language that the server will use to send mes-
sage strings.
Severity
SQLCODE
SQLSTATE
01W14
Sybase error code
Probable cause
The language that the application requested is not supported by the server to which the application is
connecting. Instead, the server will send message strings in the language stated.

#### 1.1.4.666 Language extension

SQLE_LANGUAGE_EXTENSION
Error constant
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-135
SQLSTATE
0AW01
Sybase error code
Probable cause
You used a SQL statement that may be valid in some versions of SQL, but not in SQL Anywhere.

#### 1.1.4.667 Language extension detected in syntax near '%1' on line %2

line %2
Error constant
SQLE_SYNTAX_EXTENSION_WARNING
ODBC 2 state
ODBC 3 state
Parameter 1
The word or symbol where the syntax has been detected.
Parameter 2
Line number.
Severity
SQLCODE
SQLSTATE
01W07
Sybase error code
Probable cause
The statement you are executing contains syntax that is not allowed with the current setting
of the option SQL_FLAGGER_WARNING_LEVEL. Modify the offending statement or set the
SQL_FLAGGER_WARNING_LEVEL option to a different value.

#### 1.1.4.668 LDAP Server "%1" already exists

SQLE_LDAPSERVER_ALREADY_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the LDAP Server.
Severity
SQLCODE
-1569
SQLSTATE
WW202
Sybase error code

Probable cause
An attempt was made to create an LDAP server that already exists in the database.

#### 1.1.4.669 LDAP server "%1" is in use by login policy "%2"

Error constant
SQLE_LDAPSERVER_IN_USE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the LDAP server.
Parameter 2
The name of the login policy.
Severity
SQLCODE
-1576
SQLSTATE
WW206
Sybase error code
Probable cause
The named login policy references the LDAP server. The login policy must be changed to avoid referencing
the LDAP server before the LDAP server can be dropped. Otherwise, use DROP LDAP SERVER <server name>
WITH DROP ALL REFERENCES to remove any references in login policies to the LDAP server.

#### 1.1.4.670 LDAP server %1 may not accept anonymous binds

SQLE_LDAPUA_ANONBINDERR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The LDAP server name or search URL specifying the search.
Severity
SQLCODE
-1621
SQLSTATE
WW218
Sybase error code

Probable cause
An LDAPUA search or validate failed returning LDAP_INAPPROPRIATE_AUTH due to invalid settings for the
target LDAP server. Check the access account values for the named LDAP server or search URL.

#### 1.1.4.671 LDAP server definition of "%1" is incomplete. A search URL, access distinguished name, password, and authentication URL are required

Error constant
SQLE_LDAPSERVER_INCOMPLETE_DEF
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the LDAP server.
Severity
SQLCODE
-1594
SQLSTATE
WW208
Sybase error code
Probable cause
The named LDAP server is missing one or more of the values required to search for a user's distinguished
name or authenticate a user. Use ALTER LDAP SERVER <server name> to specify any missing values.

#### 1.1.4.672 LDAP User Authentication feature is not supported in this database

in this database
SQLE_LDAPUA_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1572
SQLSTATE
WW205
Sybase error code

Probable cause
The current database is an older database and does not have catalog support for LDAP User Authentication
feature. To use this feature, upgrade your database to the most recent version.

#### 1.1.4.673 LineString must contain at least 2 points (near '%1')

'%1')
Error constant
SQLE_SLERR_LINESTRING_MIN_POINTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value or method where the error was detected.
Severity
SQLCODE
-1483
SQLSTATE
2FW78
Sybase error code
Probable cause
The linestring contains only a single point.

#### 1.1.4.674 Listener type "%1" failed to initialize when starting a listener

a listener
Error constant
SQLE_START_LISTENER_PORT_INIT_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The listener type
Severity

SQLCODE
-1782
SQLSTATE
08WE1
Sybase error code
Probable cause
An error occurred during starting a listener.

#### 1.1.4.675 Load-source for LOAD TABLE statement not supported in BEGIN PARALLEL WORK...END PARALLEL WORK statement

Error constant
PARALLEL_LOADTABLE_SOURCE_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1939
SQLSTATE
0AW36
Sybase error code
Probable cause
The load-source specified for the LOAD TABLE statement is not supported when the LOAD TABLE statement is
in the BEGIN PARALLEL WORK...END PARALLEL WORK statement. Only FROM and USING FILE are supported
load-sources in this context.

#### 1.1.4.676 LOAD TABLE ... WITH FILE NAME LOGGING not permitted on mirrored database

permitted on mirrored database
Error constant
SQLE_LOAD_TABLE_ON_MIRRORED_DB
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Severity
SQLCODE
-1035
SQLSTATE
WL008
Sybase error code
Probable cause
LOAD TABLE ... WITH FILE NAME LOGGING statements are not permitted when a database is being mirrored,
since the file being loaded might not be accessible by the other server.

#### 1.1.4.677 LOAD TABLE error: %1

Error constant
SQLE_LOAD_TABLE_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Description of the failure encountered
Severity
SQLCODE
-1188
SQLSTATE
WL013
Sybase error code
Probable cause
The LOAD TABLE statement failed. The message specifies the actual problem that occurred.

#### 1.1.4.678 LOAD TABLE error: Invalid content encountered on row %1 of the data file

row %1 of the data file
Error constant
SQLE_LOAD_TABLE_DATA_FILE_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Line number of the data file where the invalid content occur-
red.
Severity
SQLCODE
-1496
SQLSTATE
WL017
Sybase error code
Probable cause
The LOAD TABLE statement failed because a scanning error occurred on the indicated line of the data file
specified in the statement. This error can occur if a line is truncated or if delimiters are missing.

#### 1.1.4.679 LOAD TABLE is not allowed on a materialized view %1

%1
SQLE_LOAD_TABLE_ON_MATVIEW_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the materialized view on which load was attempted.
Severity
SQLCODE
-1190
SQLSTATE
WL014
Sybase error code

Probable cause
LOAD TABLE statement is not allowed on a materialized view.

#### 1.1.4.680 LOAD TABLE not allowed on temporary table which has foreign key references from another table

has foreign key references from another table
Error constant
SQLE_INVALID_LOAD_TABLE_WITH_FOREIGN_KEY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1146
SQLSTATE
WL009
Sybase error code
Probable cause
The LOAD TABLE statement removes all rows in a temporary table upon failure. If a temporary table being
loaded caused an error then the foreign rows would be orphaned.

#### 1.1.4.681 LOAD TABLE not allowed on temporary table with ON COMMIT DELETE ROWS

ON COMMIT DELETE ROWS
SQLE_INVALID_TEMP_TABLE_COMMIT_ACTION
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-993
SQLSTATE
WL007
Sybase error code

Probable cause
The LOAD TABLE statement automatically commits at completion. If a temporary table being loaded was
declared with ON COMMIT DELETE ROWS, the rows are discarded at completion.

#### 1.1.4.682 LOAD TABLE not allowed: initialized immediate materialized view %1 depends on %2

materialized view %1 depends on %2
Error constant
SQLE_LOAD_TABLE_WITH_IMV
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the dependent initialized immediate materialized
view.
Parameter 2
Name of the table on which load was performed.
Severity
SQLCODE
-1191
SQLSTATE
WL015
Sybase error code
Probable cause
LOAD TABLE is not permitted on any table that has dependent initialized immediate materialized views.

#### 1.1.4.683 LOAD TABLE option '%1' not allowed with FORMAT %2

%2
SQLE_INVALID_LOAD_TABLE_OPTION
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the option.
Parameter 2
The load table format.
Severity
SQLCODE
-1289
SQLSTATE
WL016

Sybase error code
Probable cause
The specified LOAD TABLE option is not meaningful for the LOAD TABLE FORMAT.

#### 1.1.4.684 Local connection ID does not refer to the current database

database
Error constant
SQLE_LOCAL_CONNECTION_NOT_TO_CURRENT_DB
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-997
SQLSTATE
WO025
Sybase error code
Probable cause
The specified connection ID is for a connection to a database other than the current database.

#### 1.1.4.685 Logging type ( '%1' ) for LOAD TABLE statement not supported in BEGIN PARALLEL WORK...END PARALLEL WORK statement

PARALLEL_LOADTABLE_LOGGING_TYPE_NOT_SUP-
Error constant
PORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specified logging type.
Severity
SQLCODE
-1940

SQLSTATE
0AW37
Sybase error code
Probable cause
The specified logging type for the LOAD TABLE statement is not supported when the statement is in the BEGIN
PARALLEL WORK...END PARALLEL WORK statement.

#### 1.1.4.686 Login mode '%1' not permitted by login_mode setting

setting
Error constant
SQLE_LOGON_MODE_NOT_PERMITTED
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the login mode not included in the current
login_mode database option setting.
Severity
SQLCODE
-1074
SQLSTATE
28W14
Sybase error code
Probable cause
You attempted to connect using a login mode not included in the current login_mode database option setting.
Change the option setting or connect using a different login mode.

#### 1.1.4.687 Login policies are not supported for this database

Error constant
SQLE_LOGIN_POLICY_UPGRADE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1196

SQLSTATE
WW099
Sybase error code
Probable cause
The current database does not have catalog support for login policies. To use this feature, upgrade your
database to the most recent version.

#### 1.1.4.688 Login policy "%1" already exists

Error constant
SQLE_LOGIN_POLICY_ALREADY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the login policy.
Severity
SQLCODE
-1194
SQLSTATE
WW097
Sybase error code
Probable cause
An attempt was made to create a login policy that already exists in the database.

#### 1.1.4.689 Login policy "%1" in use

SQLE_LOGIN_POLICY_IN_USE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the login policy.
Severity
SQLCODE
-1197
SQLSTATE
WW100

Sybase error code
Probable cause
The named login policy is associated with a user in the database. Any users associated with the login policy
must be assigned a different login policy before the named login policy can be dropped.

#### 1.1.4.690 Login policy "%1" not found

Error constant
SQLE_LOGIN_POLICY_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the login policy.
Severity
SQLCODE
-1195
SQLSTATE
WW098
Sybase error code
Probable cause
The named login policy was not found in the database.

#### 1.1.4.691 Login redirection is required to complete the connection, but it is not supported by the client

connection, but it is not supported by the client
SQLE_LOGIN_REDIRECTION_REQUIRED
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1551
SQLSTATE
08WA6
Sybase error code

Probable cause
The connection needs to be redirected to another server, but the version of the client library does not support
login redirection. You must upgrade the client library to use login redirection. Alternatively, you can connect to
a different server or change the logical server configuration.

#### 1.1.4.692 Maintenance of dependent immediate materialized view(s) failed

view(s) failed
Error constant
SQLE_MAINTENANCE_OF_IMV_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1219
SQLSTATE
42WC8
Sybase error code
Probable cause
Maintenance of immediate materialized view(s) dependent on the base table failed.

#### 1.1.4.693 Materialized View '%1' not found

Error constant
SQLE_MATVIEW_NOT_FOUND
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the materialized view that could not be found.
Severity

SQLCODE
-1041
SQLSTATE
42WB5
Sybase error code
Probable cause
You misspelled the name of a materialized view, or you did not qualify a materialized view name with a user
name. For example, you might have referred to "mat_view" instead of "owner"."mat_view".

#### 1.1.4.694 Maximum row size for table '%1' would be exceeded

Error constant
SQLE_MAX_ROW_SIZE_EXCEEDED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Table name.
Severity
SQLCODE
-1132
SQLSTATE
WW089
Sybase error code
Probable cause
You tried to create or alter a table with a maximum row size greater than 64 KB. In UltraLite, tables must be
defined such that the maximum row size (the sum of the bytes required to store each column) is less than 64
KB.

#### 1.1.4.695 Maximum string length exceeded

Error constant
SQLE_MAX_STRING_LENGTH_EXCEEDED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1313
SQLSTATE
54W17
Sybase error code
Probable cause
A string operation attempted to create a string longer than the maximum allowed by the server. Strings must
not exceed 2147483647 bytes in length.

#### 1.1.4.696 Memory error -- transaction rolled back

Error constant
SQLE_MEMORY_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-309
SQLSTATE
40W08
Sybase error code
Probable cause
The UltraLite runtime has received an unexpected error from the system calls being used to store the UltraLite
database. For example, a write to persistent memory failed. This is an internal error and indicates faulty or
corrupt persistent storage on the device. A ROLLBACK statement has been automatically executed.

#### 1.1.4.697 MERGE statement ANSI cardinality violation on table '%1'

table '%1'
Error constant
SQLE_MERGE_CARDINALITY_VIOLATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the table being updated
Severity
SQLCODE
-1211
SQLSTATE
Sybase error code
Probable cause
You have attempted to execute the MERGE statement and the same row is the target of a WHEN MATCHED
clause more than once.

#### 1.1.4.698 MERGE statement for table '%1' failed because of a RAISERROR specification in the statement

RAISERROR specification in the statement
SQLE_MERGE_USER_SPECIFIED_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the table being merged into
Severity
SQLCODE
-1254
SQLSTATE
Sybase error code
Probable cause
You have attempted to execute a MERGE statement that contains the RAISERROR clause in one or more merge
operation branches and one of the input rows satisfies the conditions for one of these branches.

#### 1.1.4.699 Method '%1' cannot be called at this time

Error constant
SQLE_METHOD_CANNOT_BE_CALLED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the method.
Severity
SQLCODE
-669
SQLSTATE
WJ001
Sybase error code
Probable cause
The method cannot be called at this time. Check that the method is not being called out of order.

#### 1.1.4.700 Method '%1' cannot be called with %2 arguments (near '%3')

(near '%3')
Error constant
SQLE_METHOD_NO_OVERLOAD_N_ARGS
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
The name of the method.
Parameter 2
The number of arguments supplied.
Parameter 3
The invalid expression.
Severity
SQLCODE
-1339
SQLSTATE
42X04
Sybase error code
Probable cause
No overload of the specified method can be called with the number of arguments provided.

#### 1.1.4.701 Method invocation '%1' does not match an overload (near '%2'). Available overloads are '%3'

(near '%2'). Available overloads are '%3'
Error constant
SQLE_METHOD_NO_OVERLOAD
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
The method name and data types used in the method invo-
cation.
Parameter 2
The invalid expression.
Parameter 3
The available method overloads.
Severity
SQLCODE
-1337
SQLSTATE
42X02
Sybase error code
Probable cause
When attempting to match a method invocation, none of the defined overloads was found to match the
provided argument types. You may need to use CAST to select the appropriate call.

#### 1.1.4.702 Mirror child server creation failed

SQLE_CHILD_SERVER_CREATION_FAILED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1351
SQLSTATE
WW154
Sybase error code
Probable cause
The creation of a child server on the primary server failed or was disallowed.

#### 1.1.4.703 Mirror file requires higher checksum_level

Error constant
SQLE_MIRROR_FILE_REQUIRES_CHECKSUMS
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
WW116
Sybase error code
Probable cause
To effectively protect against media failures, page checksums must be enabled when using the mirror file.
Specify the checksum_level database creation option.

#### 1.1.4.704 Mirror server "%1" already exists

SQLE_MIRROR_SERVER_ALREADY_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the mirror server.
Severity
SQLCODE
-1309
SQLSTATE
WW132
Sybase error code
Probable cause
An attempt was made to create a mirror server that already exists in the database.

#### 1.1.4.705 Mirror server "%1" defined with type COPY does not include a parent definition

not include a parent definition
Error constant
SQLE_COPY_SERVER_NEEDS_PARENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The mirror server name
Severity
SQLCODE
-1505
SQLSTATE
42WE6
Sybase error code
Probable cause
In a CREATE MIRROR SERVER statement for a server with type COPY, a parent server is not defined.

#### 1.1.4.706 Mirror server "%1" is not a valid parent server

SQLE_INVALID_MIRROR_PARENT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the mirror server.
Severity
SQLCODE
-1312
SQLSTATE
WW135
Sybase error code

Probable cause
An attempt was made to define a parent for a mirror server that would result in a cycle.

#### 1.1.4.707 Mirror server "%1" is referenced by another server

Error constant
SQLE_MIRROR_SERVER_IN_USE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the mirror server.
Severity
SQLCODE
-1310
SQLSTATE
WW133
Sybase error code
Probable cause
An attempt was made to drop a mirror server that is referenced by another mirror server in the database.

#### 1.1.4.708 Mirror server "%1" not found

SQLE_MIRROR_SERVER_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the mirror server.
Severity
SQLCODE
-1308
SQLSTATE
WW131
Sybase error code
Probable cause
The named mirror server was not found in the database.

#### 1.1.4.709 MIRROR server class is not supported for SAP IQ databases

databases
Error constant
SQLE_OMNI_NO_MIRROR_FOR_IQ
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1573
SQLSTATE
WO029
Sybase error code
Probable cause
You attempted to create a remote data access server of type MIRROR while connected to an SAP IQ database.
The MIRROR server class is not supported for SAP IQ databases.

#### 1.1.4.710 Mirror server name '%1' does not match current server name

server name
SQLE_INVALID_CHILD_SERVER_NAME
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The server name
Severity
SQLCODE
-1348
SQLSTATE
WW151
Sybase error code
Probable cause
The server name specified in a CREATE MIRROR SERVER statement must match the current server name
when the statement is executed on a child server.

#### 1.1.4.711 Mirror server with type '%1' is already defined

Error constant
SQLE_MIRROR_SERVER_TYPE_ALREADY_DEFINED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The server type
Severity
SQLCODE
-1352
SQLSTATE
WW155
Sybase error code
Probable cause
A CREATE MIRROR SERVER statement specified a server type that has already been defined.

#### 1.1.4.712 Missing value for attribute '%1' in service

Error constant
SQLE_SERVICE_PARM_MISSING_VALUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the invalid attribute.
Severity
SQLCODE
-1023
SQLSTATE
42WAE
Sybase error code
Probable cause
The service definition contains a USING, FORMAT, or GROUP attribute with a missing value.

#### 1.1.4.713 Mixed coordinate dimensions

Error constant
SQLE_SLERR_MIXED_DIM
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1408
SQLSTATE
2FF25
Sybase error code
Probable cause
The method contains geometries that have a mixture of coordinate dimensions (Z and M values).

#### 1.1.4.714 Mixed spatial reference systems %1 and %2 (near %3)

%3)
Error constant
SQLE_SLERR_MIXED_SRS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The SRID of the first spatial reference system.
Parameter 2
The SRID of the second spatial reference system.
Parameter 3
The value or method where the mixed spatial reference sys-
tems were detected.
Severity
SQLCODE
-1402
SQLSTATE
2FF10
Sybase error code
Probable cause
The method does not support working with geometries from different spatial reference systems.

#### 1.1.4.715 MobiLink communication error -- code: %1, parameter: %2, system code: %3

parameter: %2, system code: %3
Error constant
SQLE_MOBILINK_COMMUNICATIONS_ERROR
ODBC 2 state
ODBC 3 state
Parameter 1
The MobiLink communication error code.
Parameter 2
The parameter to the MobiLink communication error if one
exists.
Parameter 3
The system error code.
Severity
SQLCODE
-1305
SQLSTATE
0AWD5
Sybase error code
Probable cause
An error was encountered while communicating with a MobiLink server.

#### 1.1.4.716 Modifications not permitted for read-only database

SQLE_READ_ONLY_DATABASE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-757
SQLSTATE
55W08
Sybase error code

Probable cause
You attempted an update operation on a database that was declared as read-only.

#### 1.1.4.717 More articles are being dropped from publication '%1' than are defined

'%1' than are defined
Error constant
SQLE_TOO_MANY_ARTICLES_DELETED
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the publication from which the article could not be
dropped.
Severity
SQLCODE
-1318
SQLSTATE
42W89
Sybase error code
Probable cause
The number of articles in a publication can never fall below one. Your ALTER PUBLICATION has more drop/
delete article clauses than the current number of articles in the publication.

#### 1.1.4.718 More information required

SQLE_MORE_INFO
Error constant
ODBC 2 state
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
01W09
Sybase error code

Probable cause
More information is required to complete the request. This is used internally in the database interface library to
process a unified login. It should not be returned to an application.

#### 1.1.4.719 More than one table is identified as '%1'

Error constant
SQLE_CORRELATION_NAME_AMBIGUOUS
ODBC 2 state
ODBC 3 state
Parameter 1
Ambiguous correlation name.
Severity
SQLCODE
-139
SQLSTATE
Sybase error code
Probable cause
You identified two tables in the same FROM clause with the same correlation name.

#### 1.1.4.720 Multiple consolidated users cannot be defined

SQLE_CONSOLIDATED_USER_ALREADY_EXISTS
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S02
Severity
SQLCODE
-289
SQLSTATE
5RW10
Sybase error code
Probable cause
You attempted to grant consolidated permissions when your database already has a consolidated user, or
attempted to grant consolidated permissions to multiple users in a single statement.

#### 1.1.4.721 Multiple settings of same option specified for sequence '%1'

sequence '%1'
Error constant
SQLE_DUPLICATE_SEQUENCE_OPTION
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the sequence.
Severity
SQLCODE
-1357
SQLSTATE
52W50
Sybase error code
Probable cause
Multiple settings of the same sequence option have been specified in the sequence definition. Even if the
setting is the same, you can only specify each option once.

#### 1.1.4.722 Multiple table parameters are not supported

SQLE_ONLY_SINGLE_TABLE_PARM_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1606
SQLSTATE
WP021
Sybase error code
Probable cause
Table parameterized functions are limited to only having at most a single table parameter.

#### 1.1.4.723 Must include primary key for table '%1' in the synchronization

synchronization
Error constant
SQLE_PK_NOT_IN_SYNC_ARTICLE
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
Name of the table.
Severity
SQLCODE
-778
SQLSTATE
5RW17
Sybase error code
Probable cause
The primary key of the table must be included in the synchronization entry.

#### 1.1.4.724 Must own table '%1' to make an immediate view reference it

reference it
Error constant
SQLE_NO_PERMS_FOR_IMV
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the table
Severity
SQLCODE
-1270
SQLSTATE
42WD3
Sybase error code
Probable cause
You have attempted to change the refresh type of a materialized view to immediate and the view references a
table that is not owned by you. To perform this operation, you must either own all the tables referenced by the
materialized view or have DBA privileges.

#### 1.1.4.725 Mutex "%1" is locked by another connection

Error constant
SQLE_MUTEX_LOCKED_NO_REPLACE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Mutex name.
Severity
SQLCODE
-1831
SQLSTATE
WW150
Sybase error code
Probable cause
You attempted to replace a mutex that is locked by another connection. A mutex can only be replaced when not
held by a connection other than the current connection.

#### 1.1.4.726 Mutex "%1" not found

Error constant
SQLE_MUTEX_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of mutex that could not be found.
Severity
SQLCODE
-1807
SQLSTATE
55W53
Sybase error code
Probable cause
You misspelled the name of a mutex, or the mutex does not exist.

#### 1.1.4.727 Mutex "%1" was not locked by this connection

Error constant
SQLE_MUTEX_NOT_LOCKED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Mutex name.
Severity
SQLCODE
-1813
SQLSTATE
WW149
Sybase error code
Probable cause
You attempted to release a mutex that was not previously locked by this connection.

#### 1.1.4.728 Mutex "%1" with transaction scope cannot be released

released
Error constant
SQLE_NO_RELEASE_TRANSACTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Mutex name.
Severity
SQLCODE
-1812
SQLSTATE
55W55
Sybase error code
Probable cause
Mutexes created with a transaction scope cannot be explicitly released. Locked transaction scope mutexes are
released at commit or rollback time.

#### 1.1.4.729 Mutex was dropped

Error constant
SQLE_MUTEX_DROPPED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1804
SQLSTATE
WP027
Sybase error code
Probable cause
The mutex this connection was attempting to lock was dropped during the wait. The mutex is no longer
available. This could happen if the mutex was explicitly dropped, or if the connection owning the temporary
mutex has disconnected.

#### 1.1.4.730 NAMESPACE attribute is not valid with procedure type '%1'

type '%1'
Error constant
SQLE_INVALID_NAMESPACE_ATTRIBUTE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The NAMESPACE attribute on the procedure.
Severity
SQLCODE
-989
SQLSTATE
WW058
Sybase error code
Probable cause
The NAMESPACE attribute is only applicable to procedures of type SOAP.

#### 1.1.4.731 Namespace heap exhausted at internal function: %1

Error constant
SQLE_NAMESPACE_HEAP_EXHAUSTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The internal function is for debugging purposes.
Severity
SQLCODE
-164
SQLSTATE
WP007
Sybase error code
Probable cause
The amount of space allocated for the Java Namespace is insufficient to continue loading Java classes.
Increase the size by using: SET OPTION PUBLIC.java_namespace_size = nnnnnnnn.

#### 1.1.4.732 Need a dynamic library name

Error constant
SQLE_REQUIRE_DLL_NAME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-619
SQLSTATE
WW005
Sybase error code
Probable cause
You must provide a library name specifier in the name of the external function to call.

#### 1.1.4.733 Need a function entry point

Error constant
SQLE_REQUIRE_FUNCTION_NAME

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1739
SQLSTATE
WW021
Sybase error code
Probable cause
You must provide an entry point to an external function in a dynamically loaded module.

#### 1.1.4.734 No column list for recursive query

Error constant
SQLE_NO_RECURSIVE_COLUMN_LIST
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-922
SQLSTATE
42W9A
Sybase error code
Probable cause
A common table expression defining a recursive query must have a column list.

#### 1.1.4.735 No current row of cursor

Error constant
SQLE_NO_CURRENT_ROW
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-197

SQLSTATE
Sybase error code
Probable cause
You attempted to perform an operation on the current row of a cursor, but the cursor is not positioned on a row.
The cursor is before the first row of the cursor, after the last row, or is on a row that has since been deleted.

#### 1.1.4.736 No database file specified

Error constant
SQLE_NO_DATABASE_FILE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-72
SQLSTATE
08W39
Sybase error code
Probable cause
The database server was started but there was no specified database file. The server is stopped.

#### 1.1.4.737 No entry point specified for the current system configuration

configuration
Error constant
SQLE_EXTERNAL_PLATFORM_FAILURE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-618
SQLSTATE
WW004
Sybase error code
Probable cause
The call to an external entry point in a dynamically loaded module was not specified for the system
configuration on which the server is currently executing.

#### 1.1.4.738 No external backup identity found for archive file '%1' in HANA strategy document

'%1' in HANA strategy document
Error constant
RESTORE_STRATEGY_NO_EBID_FOR_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
File name of the archive file for which external backup iden-
tity was not found.
Severity
SQLCODE
-1927
SQLSTATE
WB033
Sybase error code
Probable cause
Could not find an external backup ID corresponding to an archive file while processing HANA backup strategy
document.

#### 1.1.4.739 No indicator variable provided for NULL result

Error constant
SQLE_NO_INDICATOR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-181
SQLSTATE
Sybase error code
Probable cause
You tried to retrieve a value from the database that was NULL, but you did not provide an indicator variable for
that value.

#### 1.1.4.740 No matching text index

SQLE_TEXT_NO_MATCHING_INDEX
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1158
SQLSTATE
WT003
Sybase error code
Probable cause
A single text index must exist on all columns referenced in a CONTAINS query.

#### 1.1.4.741 No more role grant permitted

Error constant
SQLE_ROLE_GRANT_ID_NOT_AVAILABLE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1528
SQLSTATE
28W19
Sybase error code
Probable cause
Maximum limit for role grants has been reached. No more role grants are permitted. Remove some role grants
and try again.

#### 1.1.4.742 No more values available in sequence %1

Error constant
SQLE_SEQUENCE_EXHAUSTED
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the sequence.
Severity
SQLCODE
-1355
SQLSTATE
52W48
Sybase error code
Probable cause
No more values can be supplied by the sequence; the next value to be supplied would be either larger than the
maximum value, or smaller than the minimum value, and this sequence has been specified with NO CYCLE.

#### 1.1.4.743 No name for argument

Error constant
SQLE_NO_SQLX_ARGUMENT_NAME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-907
SQLSTATE
WX014
Sybase error code
Probable cause
Unnamed arguments cannot be used as XML element or attribute names. Name unnamed items in the
argument list using AS.

#### 1.1.4.744 No notification within timeout on queue '%1'

Error constant
SQLE_EVENT_NOTIFICATION_QUEUE_TIMEOUT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the event notification queue
Severity
SQLCODE
-1266
SQLSTATE
WE017
Sybase error code
Probable cause
The pending get-notification operation has timed out. No notification arrived before the given timeout elapsed.

#### 1.1.4.745 No partial download was found

Error constant
SQLE_PARTIAL_DOWNLOAD_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1103
SQLSTATE
WW075
Sybase error code
Probable cause
A partial download was not found for the synchronizing user. This error could occur if trying to resume from a
non-existent partial download or trying to rollback a non-existent partial download.

#### 1.1.4.746 No primary key value for foreign key '%1' in table '%2'

'%2'
SQLE_INVALID_FOREIGN_KEY
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the foreign key.
Parameter 2
Name of the table with the foreign key.
Severity
SQLCODE
-194
SQLSTATE
Sybase error code

Probable cause
You attempted to insert or update a row that has a foreign key for another table. The value for the foreign key is
not NULL and there is not a corresponding value in the primary key.

#### 1.1.4.747 No running shared memory listener was found

Error constant
SQLE_STOP_SHM_LISTENER_NOT_FOUND_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1780
SQLSTATE
08WD8
Sybase error code
Probable cause
You attempted to stop the shared memory listener when it is not running.

#### 1.1.4.748 No stored cache pages

Error constant
SQLE_NO_STORED_CACHE_PAGES
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1889

SQLSTATE
55W56
Sybase error code
Probable cause
You executed ALTER DATABASE RESTORE CACHE but there were no stored cache pages. Use the ALTER
DATABASE SAVE CACHE to save the contents of the cache.

#### 1.1.4.749 No workload capture currently exists

Error constant
SQLE_WORKLOAD_CAPTURE_DOES_NOT_EXIST
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-943
SQLSTATE
WW030
Sybase error code
Probable cause
You have tried to stop, pause, resume, or get the status of a workload capture, but no workload captures exist.

#### 1.1.4.750 Non-constant or unknown text query string

SQLE_TEXT_QUERY_NOT_KNOWN
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1159
SQLSTATE
WT004
Sybase error code

Probable cause
The query string argument to a CONTAINS query must be a constant, or a non-null value in a variable.

#### 1.1.4.751 Non-contiguous curves near '%1'

Error constant
SQLE_SLERR_COMPOUNDCURVE_NOT_CONTIGUOUS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value or method where the non-contiguous curves were
detected.
Severity
SQLCODE
-1403
SQLSTATE
2FF11
Sybase error code
Probable cause
A compoundcurve geometry is composed of curves, and adjacent curves must be joined at their endpoints.

#### 1.1.4.752 Not allowed while '%1' is using the database

SQLE_MUST_BE_ONLY_CONNECTION
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the connection that is using the database.
Severity
SQLCODE
-211
SQLSTATE
42W19
Sybase error code
Probable cause
You attempted a data definition language operation that cannot be completed while another user is connected.

#### 1.1.4.753 Not connected to a database

Error constant
SQLE_NOT_CONNECTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-101
SQLSTATE
Sybase error code
Probable cause
You are not connected to a database, or you executed the DISCONNECT statement and have not connected to
a database again.

#### 1.1.4.754 Not enough fields allocated in SQLDA

Error constant
SQLE_SQLDA_TOO_SMALL
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-182
SQLSTATE
Sybase error code
Probable cause
There are not enough fields in the SQLDA to retrieve all of the values requested.

#### 1.1.4.755 Not enough free space on device to grow dbspace '%1' by requested amount

'%1' by requested amount
Error constant
SQLE_NO_ROOM_TO_GROW_DBSPACE

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the dbspace
Severity
SQLCODE
-1121
SQLSTATE
57W03
Sybase error code
Probable cause
You attempted to grow a dbspace using the ALTER DBSPACE statement, but there is not enough free space on
the device to grow by the amount specified.

#### 1.1.4.756 Not enough memory to start

Error constant
SQLE_NO_MEMORY
ODBC 2 state
S1001
ODBC 3 state
HY001
Severity
SQLCODE
-86
SQLSTATE
08W13
Sybase error code
Probable cause
The database server started, but stopped because there was not enough memory.

#### 1.1.4.757 Not enough values for host variables

Error constant
SQLE_NOT_ENOUGH_HOST_VARS
ODBC 2 state
ODBC 3 state

Severity
SQLCODE
-188
SQLSTATE
Sybase error code
Probable cause
You have not provided enough host variables for either the number of bind variables, or the statement, or the
number of SELECT list items.

#### 1.1.4.758 NULL attribute mismatch for column '%1'

Error constant
SQLE_OMNI_NULL_MISMATCH
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The name of the column.
Severity
SQLCODE
-724
SQLSTATE
WO018
Sybase error code
Probable cause
The NULL attribute of the column specified in the CREATE EXISTING statement differs from the NULL attribute
of the actual column.

#### 1.1.4.759 Null value eliminated in aggregate function

Error constant
SQLE_NULL_VALUE_ELIMINATED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE

SQLSTATE
Sybase error code
Probable cause
The expression argument of the aggregate function evaluated to NULL for one or more rows.

#### 1.1.4.760 Number of columns allowing NULLs exceeds limit

Error constant
SQLE_TOO_MANY_NULL_COLUMNS
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-733
SQLSTATE
Sybase error code
Probable cause
You attempted to create or modify a table definition such that the number of columns that allow NULLS is
now more than the limit on such columns. The limit is a function of database page size and is approximately
8*(page-size - 30).

#### 1.1.4.761 Number of columns defined for the table does not match SELECT statement

match SELECT statement
SQLE_TABLE_DEFINITION_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1737
SQLSTATE
21W02
Sybase error code

Probable cause
You attempted to create a table from a SELECT statement, but the column name list specified as part of the
CREATE TABLE statement does not correspond to the list of items in the AS SELECT statement.

#### 1.1.4.762 Number of columns defined for the view does not match SELECT statement

match SELECT statement
Error constant
SQLE_VIEW_DEFINITION_ERROR
ODBC 2 state
21S02
ODBC 3 state
21S02
Severity
SQLCODE
-114
SQLSTATE
Sybase error code
Probable cause
You attempted to create a view, but the column list specified as part of the CREATE VIEW statement does not
correspond to the list of items in the view's SELECT statement.

#### 1.1.4.763 OData Producer '%1' not found

SQLE_ODATA_PRODUCER_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the OData Producer that could not be found
Severity
SQLCODE
-1773
SQLSTATE
55W46
Sybase error code

Probable cause
You misspelled the name of an OData Producer, or the Producer does not exist.

#### 1.1.4.764 OData Producer option error: %1

Error constant
SQLE_ODATA_PRODUCER_OPTION_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Text of the option error
Severity
SQLCODE
-1774
SQLSTATE
55W47
Sybase error code
Probable cause
An option error was found when creating or altering an OData Producer.

#### 1.1.4.765 Offline reset password failed: %1

OFFLINE_RESET_PASSWORD_FAILED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The reason the password could not be reset, if known.
Severity
SQLCODE
-1992
SQLSTATE
28W40
Sybase error code
Probable cause
You attempted to reset a password for a user, but the reset failed or was denied.

#### 1.1.4.766 Offline reset password is not allowed for user ID '%1' that has no password

'%1' that has no password
Error constant
OFFLINE_RESET_PASSWORD_NOT_AL-
LOWED_NULL_PASSWORD_USER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the user whose password is being reset
Severity
SQLCODE
-1993
SQLSTATE
28W41
Sybase error code
Probable cause
You attempted to reset the password for a user ID that has no password.

#### 1.1.4.767 Offline reset password not supported

OFFLINE_RESET_PASSWORD_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1994
SQLSTATE
0AW48
Sybase error code
Probable cause
The current database is an older database and does not have support for offline reset password. To use this
feature, upgrade your database to the most recent version.

#### 1.1.4.768 One or more targets in the trace event session '%1' failed to start

failed to start
Error constant
SQLE_ONE_OR_MORE_TRACE_SESSION_TAR-
GETS_FAILED_TO_START
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Severity
SQLCODE
-1642
SQLSTATE
WE027
Sybase error code
Probable cause
The specified trace event session is already active.

#### 1.1.4.769 Only one IDENTIFIED BY value may be specified

SQLE_LDAPUA_TOO_MANY_IDENTBY
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1629
SQLSTATE
WW241
Sybase error code
Probable cause
The LDAP server is specified with more than one password or is specified with both IDENTIFIED BY and
IDENTIFIED BY ENCRYPTED. Set only one password.

#### 1.1.4.770 Only PUBLIC settings are allowed for option '%1'

Error constant
SQLE_NOT_PUBLIC_ID
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the option.
Severity
SQLCODE
-202
SQLSTATE
42W43
Sybase error code
Probable cause
The option specified in the SET OPTION statement is PUBLIC only. You cannot define this option for any other
user.

#### 1.1.4.771 Operation '%1' failed for reason: '%2'

Error constant
SQLE_ULTRALITEJ_OPERATION_FAILED
ODBC 2 state
ERROR
ODBC 3 state
Parameter 1
The name of the operation.
Parameter 2
The cause of the failure.
Severity
SQLCODE
-1279
SQLSTATE
WW231
Sybase error code
Probable cause
The requested operation failed.

#### 1.1.4.772 Operation cannot be performed while AUTOCOMMIT_DDL is 'OFF'

AUTOCOMMIT_DDL is 'OFF'
Error constant
NOT_PERMITTED_AUTOCOMMIT_DDL_OFF
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
-1977
SQLSTATE
0A008
Sybase error code
Probable cause
You tried to perform an operation that is not supported while AUTOCOMMIT_DDL is 'OFF'.

#### 1.1.4.773 Operation conflict with publication type

Error constant
SQLE_CONFLICTING_PUB_TYPE
ODBC 2 state
ODBC 3 state
42S02
Severity
SQLCODE
-1060
SQLSTATE
5RW38
Sybase error code
Probable cause
You attempted to perform an operation not applicable to the type of publication. For example, you applied
operations specific to a scripted upload publication to a logscan publication.

#### 1.1.4.774 Operation failed - could not complete checkpoint

Error constant
OPERATION_FAILED

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1969
SQLSTATE
40W10
Sybase error code
Probable cause
You attempted to perform an operation that requires a checkpoint. However, the checkpoint could not
complete due to another operation that was running concurrently. Retry the operation you requested.

#### 1.1.4.775 Operation failed because table or view '%1' has an INSTEAD OF trigger

INSTEAD OF trigger
Error constant
SQLE_INSTEAD_TRIGGER
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the view or table with an INSTEAD OF trigger
Severity
SQLCODE
-1126
SQLSTATE
42W3A
Sybase error code
Probable cause
You attempted an operation that cannot succeed because an INSTEAD OF trigger is defined on a target table or
view (possibly nested in another view).

#### 1.1.4.776 Operation is not allowed

Error constant
SQLE_ULTRALITEJ_OPERATION_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
Severity
SQLCODE
-1278
SQLSTATE
WW230
Sybase error code
Probable cause
The requested operation is not allowed while schema is being modified.

#### 1.1.4.777 Operation not allowed on a table with dependent immediate materialized views

immediate materialized views
Error constant
SQLE_INVALID_OPERATION_FOR_TBL_WITH_IMV
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1202
SQLSTATE
55W31
Sybase error code
Probable cause
Requested operation cannot be applied to a table with dependent immediate materialized views.

#### 1.1.4.778 Operation not supported for ST_GeomCollection with intersecting elements (near "%1")

with intersecting elements (near "%1")
Error constant
SQLE_SLERR_GEOM_COLL_INTERSECT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The method or context where the invalid ST_GeomCollection
was detected.
Severity
SQLCODE
-1503
SQLSTATE
2FW90
Sybase error code
Probable cause
The ST_GeomCollection contains elements that intersect in a way that is not valid for an ST_MultiSurface. The
operation is not supported for this kind of geometry.

#### 1.1.4.779 Operation would cause a group cycle

SQLE_GROUP_CYCLE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-122
SQLSTATE
42W02
Sybase error code

Probable cause
You attempted to add a member to group that would result in a member belonging to itself. The membership
may be direct or indirect.

#### 1.1.4.780 Operation would cause a role cycle

Error constant
SQLE_ROLE_CYCLE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1540
SQLSTATE
28W29
Sybase error code
Probable cause
You attempted to grant role to a grantee that would result in a grantee belonging to itself. Role membership
may be direct or indirect.

#### 1.1.4.781 Option '%1' cannot be used with HSQL COMPATIBLE

COMPATIBLE
ILLEGAL_OPTION_WITH_HSQL
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the invalid option
Severity
SQLCODE
-1950
SQLSTATE
08WFA
Sybase error code

Probable cause
You are trying to use an option that is unsupported on an HSQL-compatible database.

#### 1.1.4.782 Option '%1' specified more than once

Error constant
SQLE_DUPLICATE_OPTION
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The name of the duplicated option.
Severity
SQLCODE
SQLSTATE
01W26
Sybase error code
Probable cause
A particular option has been specified multiple times. Only the last instance of the option is used; the previous
ones are ignored.

#### 1.1.4.783 ORDER BY not allowed in window '%1'

Error constant
SQLE_ORDERBY_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the window.
Severity

SQLCODE
-949
SQLSTATE
42WA5
Sybase error code
Probable cause
When an existing window name is referenced from an inline window specification, either the inline window or
the referenced window may have an ORDER BY, but not both.

#### 1.1.4.784 Outer reference not permitted in DML derived table

Error constant
SQLE_SELECT_DML_OUTER_REFERENCE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1529
SQLSTATE
42U09
Sybase error code
Probable cause
Outer references are not permitted in derived tables based on INSERT, UPDATE, DELETE, or MERGE
statements. These derived tables may only appear in subqueries that are uncorrelated.

#### 1.1.4.785 Outer references are not allowed for TPF input tables

tables
SQLE_TPF_OUTER_REFERENCES_NOT_ALLOWED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1607
SQLSTATE
WP022

Sybase error code
Probable cause
Outer references in the select list for a TPF input table are not allowed.

#### 1.1.4.786 Output file cannot be written

Error constant
SQLE_CANNOT_WRITE_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-979
SQLSTATE
WW048
Sybase error code
Probable cause
Unable to create or write an output file. The file may be locked or read-only.

#### 1.1.4.787 Owner '%1' used in a qualified column reference does not match correlation name '%2'

does not match correlation name '%2'
SQLE_INVALID_COLUMN_QUALIFICATION
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
The owner name specified in the column reference.
Parameter 2
The correlation name that is incorrectly referenced.
Severity
SQLCODE
-845
SQLSTATE
42U02
Sybase error code

Probable cause
Your query contains a qualified column reference to a table name, but either a correlation name has been used
for that table, or the owner of the table does not match the owner name specified in the column reference.
Remove the owner qualification, and qualify column references only by correlation name.

#### 1.1.4.788 Parameter '%1' cannot be null

Error constant
SQLE_PARAMETER_CANNOT_BE_NULL
ODBC 2 state
ERROR
ODBC 3 state
Parameter 1
Name of the parameter.
Severity
SQLCODE
-1277
SQLSTATE
WW229
Sybase error code
Probable cause
The specified parameter cannot be null.

#### 1.1.4.789 Parameter '%1' in procedure or function '%2' does not have a default value

not have a default value
SQLE_NO_DEFAULT_FOR_PARM
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the parameter.
Parameter 2
The name of the procedure or function.
Severity
SQLCODE
-1001
SQLSTATE
08W71
Sybase error code

Probable cause
An attempt was made to use DEFAULT as a procedure or function argument, but the corresponding parameter
does not have a default value.

#### 1.1.4.790 Parameter '%1' not found in procedure '%2'

Error constant
SQLE_INVALID_PARAMETER_NAME
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the parameter that was not found.
Parameter 2
Name of the procedure where the parameter was not found.
Severity
SQLCODE
-615
SQLSTATE
42W47
Sybase error code
Probable cause
You supplied a procedure parameter name that does not match a parameter for this procedure. Check the
spelling of the parameter name.

#### 1.1.4.791 Parameter name missing in call to procedure '%1'

SQLE_PARAMETER_NAME_MISSING
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the procedure.
Severity
SQLCODE
-639
SQLSTATE
42W42
Sybase error code

Probable cause
Positional parameters were specified after named parameters in a call to this procedure.

#### 1.1.4.792 Parent not open: '%1'

Error constant
SQLE_EXPLICIT_TAG_NOT_OPEN
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The parent tag ID that is not among the open tags.
Severity
SQLCODE
-900
SQLSTATE
WX008
Sybase error code
Probable cause
FOR XML EXPLICIT and FOR JSON EXPLICIT require the parent tag for a row to be opened when that row is
read. Check the order of the rows returned by the query with the FOR XML EXPLICIT or FOR JSON EXPLICIT
clause removed.

#### 1.1.4.793 Parse error: %1

Error constant
SQLE_INVALID_PARSE_PARAMETER
ODBC 2 state
ODBC 3 state
Parameter 1
Description of the parsing error.
Severity

SQLCODE
-95
SQLSTATE
08W49
Sybase error code
Probable cause
An error occurred while parsing a connection string.

#### 1.1.4.794 Parse error: %1

Error constant
SQLE_INVALID_DSN_NAME
ODBC 2 state
ODBC 3 state
Parameter 1
The invalid data source name.
Severity
SQLCODE
-754
SQLSTATE
08W54
Sybase error code
Probable cause
An invalid data source name was used in the connection string.

#### 1.1.4.795 PARTITION BY not allowed in reference to window '%1'

'%1'
Error constant
SQLE_PARTITIONBY_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the window.
Severity
SQLCODE
-948
SQLSTATE
42WA4
Sybase error code
Probable cause
When an existing window name is referenced from an inline window specification, the inline specification must
not have a PARTITION BY clause.

#### 1.1.4.796 Passthrough statement inconsistent with current passthrough

passthrough
SQLE_PASSTHROUGH_INCONSISTENT
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S02
Severity
SQLCODE
-287
SQLSTATE
5RW08
Sybase error code
Probable cause
Passthrough is additive, in that subsequent PASSTHROUGH statements add to the list of users receiving
passthrough. The PASSTHROUGH statements must all be PASSTHROUGH ONLY or none should be
PASSTHROUGH ONLY.

#### 1.1.4.797 Password cannot be longer than %1 characters

Error constant
SQLE_PASSWORD_TOO_LONG
ODBC 2 state
ODBC 3 state
Parameter 1
Maximum length of password.
Severity
SQLCODE
-958
SQLSTATE
54W08
Sybase error code
Probable cause
The password is longer than that allowed by the server.

#### 1.1.4.798 Password contains an illegal character

Error constant
SQLE_ILLEGAL_PASSWORD
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-963
SQLSTATE
Sybase error code
Probable cause
The specified password contains an illegal character.

#### 1.1.4.799 Password encryption failed. Error message '%1'

Error constant
SQLE_PWD_CIPHER_ERROR

ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The error message reported by block encrypter.
Severity
SQLCODE
-1601
SQLSTATE
WW212
Sybase error code
Probable cause
Run-time block encrypter initialization failed.

#### 1.1.4.800 Password has expired

Error constant
SQLE_PASSWORD_EXPIRED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1152
SQLSTATE
08WA0
Sybase error code
Probable cause
You attempted to connect using a valid user ID, but with an expired password. You can change your password
by supplying the NewPassword connection parameter along with the current expired password.

#### 1.1.4.801 Password has expired but cannot be changed because the database is read-only

because the database is read-only
Error constant
SQLE_PASSWORD_EXPIRED_READONLY_DB
ODBC 2 state

ODBC 3 state
Severity
SQLCODE
-1153
SQLSTATE
08WA1
Sybase error code
Probable cause
You attempted to connect to a read-only database using a valid user ID, but with an expired password. The
password cannot be changed unless the database is started without the -r option on the database server
command line. Removing -r will permit modifications to the database.

#### 1.1.4.802 Password must be at least %1 characters

Error constant
SQLE_PASSWORD_TOO_SHORT
ODBC 2 state
ODBC 3 state
Parameter 1
Minimum length of password.
Severity
SQLCODE
-738
SQLSTATE
54W07
Sybase error code
Probable cause
The password is shorter than that allowed by the current min_password_length option setting.

#### 1.1.4.803 PBKDF2 error: %1!s!

Error constant
PBKDF2_ERROR
ODBC 2 state
ODBC 3 state
Parameter 1
A string indicating the error.
Severity
SQLCODE
-1931
SQLSTATE
42WF7
Sybase error code
Probable cause
An error related to PBKDF2 key derivation occurred.

#### 1.1.4.804 Permission denied: %1

Error constant
SQLE_PERMISSION_DENIED
ODBC 2 state
ODBC 3 state
Parameter 1
Description of the type of permission required.
Severity
SQLCODE
-121
SQLSTATE
Sybase error code
Probable cause
You do not have the required permission to perform the specified action. The message specifies the actual
permission required and the object being acted upon.

#### 1.1.4.805 PIVOT error: An IN clause item does not contain the same number of items as the FOR clause

same number of items as the FOR clause
Error constant
SQLE_PIVOT_INVALID_IN_CLAUSE_ITEM
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1798
SQLSTATE
Sybase error code
Probable cause
You specified a PIVOT, but the number of items in the FOR clause does not match the number of items in one IN
clause item.

#### 1.1.4.806 PIVOT error: only one aggregate function can be specified without an alias

specified without an alias
SQLE_PIVOT_AGGR_AMBIGUOUS
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1826
SQLSTATE
Sybase error code
Probable cause
You specified a PIVOT that has more than one aggregate function without an alias. Please provide valid aliases
for the aggregate functions.

#### 1.1.4.807 PIVOT error: PIVOT XML does not contain a valid subquery, ANY, or ALL in the IN clause

subquery, ANY, or ALL in the IN clause
Error constant
SQLE_PIVOT_INVALID_SUBQUERY
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1846
SQLSTATE
Sybase error code
Probable cause
You specified a PIVOT XML clause, but the IN clause does not contain a valid subquery, ANY or ALL.

#### 1.1.4.808 PIVOT error: Too many aggregate functions and IN clause items

clause items
Error constant
SQLE_PIVOT_TOO_MANY_EXPRESSIONS
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1845
SQLSTATE
Sybase error code
Probable cause
You specified a PIVOT, but the number of items in the IN clause times the number of aggregate functions
exceeds the number of expressions allowed in the SELECT list of the result set.

#### 1.1.4.809 Plan cannot be generated for this type of statement

statement
Error constant
SQLE_STMT_NOT_ALLOWED_IN_PLAN
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-894
SQLSTATE
0AW14
Sybase error code
Probable cause
You tried to get the execution plan for a statement type that is not supported.

#### 1.1.4.810 Plan may contain virtual indexes

Error constant
SQLE_USING_VIRTUAL_INDEXES
ODBC 2 state
01S01
ODBC 3 state
01S01
Severity
SQLCODE
SQLSTATE
01W20
Sybase error code
Probable cause
Virtual indexes are currently enabled in this connection. Any plans that are generated may contain virtual
indexes.

#### 1.1.4.811 Point is duplicated %1

Error constant
SQLE_SLERR_DUPLICATE_POINT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The duplicated point
Severity
SQLCODE
-1400
SQLSTATE
2FF05
Sybase error code
Probable cause
A linestring or circularstring geometry contains two adjacent points that are identical. This represents an
invalid geometry.

#### 1.1.4.812 Polygon ring order has been reoriented

Error constant
SQLE_SLWARN_POLYGON_RING_REORIENTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1490
SQLSTATE
01FW1
Sybase error code
Probable cause
The rings of a polygon were automatically reoriented on input. This is a notification only.

#### 1.1.4.813 Position %1 is invalid (should be between %2 and %3)

%3)
Error constant
SQLE_SLWARN_INVALID_POSITION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The provided position.
Parameter 2
The minimum supported position.
Parameter 3
The maximum supported position.
Severity
SQLCODE
-1489
SQLSTATE
01F01
Sybase error code
Probable cause
The provided position is not valid. It should be between the specified minimum and maximum.

#### 1.1.4.814 Positioned update operation attempted on a view with an INSTEAD OF trigger

with an INSTEAD OF trigger
SQLE_INSTEAD_TRIGGER_POSITIONED
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1127
SQLSTATE
42W3B
Sybase error code
Probable cause
You attempted a positioned update, positioned delete, put, or wide insert operation that would involve an
INSTEAD OF trigger on a view (possibly nested). These operations are not supported with INSTEAD OF triggers
on views.

#### 1.1.4.815 Possible database corruption found: %1

Error constant
SQLE_CORRUPT_PAGE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Description of the suspected database corruption
Severity
SQLCODE
-1925
SQLSTATE
08WI0
Sybase error code
Probable cause
The server has encountered possible database corruption. You will need to restore the database from a backup.

#### 1.1.4.816 Prevented removal of LDAP server "%1" because it is the only LDAP server and the value of login_mode is "LDAPUA"

Error constant
SQLE_ONLY_LDAP_SERVER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the LDAP server.
Severity
SQLCODE
-1664
SQLSTATE
WW246
Sybase error code
Probable cause
The setting for server-wide login_mode option is LDAPUA so to avoid locking out users from connecting,
prevent the removal of the only LDAP server. Change login_mode before proceeding to DROP LDAP SERVER
<server name>.

#### 1.1.4.817 Prevented removal of LDAP server because it is referenced by login policy "%1" which is the only login policy with an LDAP server and the value of login_mode is "LDAPUA"

Error constant
SQLE_ONLY_LDAP_POLICY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the login policy.
Severity
SQLCODE
-1663
SQLSTATE
WW245
Sybase error code
Probable cause
The setting for server-wide login_mode option is LDAPUA so to avoid locking out users from connecting,
prevent the only login policy supporting LDAPUA reference removal. Change login_mode before proceeding to
DROP LDAP SERVER <server name> WITH DROP ALL REFERENCES.

#### 1.1.4.818 Previous error lost before RESIGNAL

SQLE_PREVIOUS_ERROR_LOST
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-825
SQLSTATE
WP011
Sybase error code
Probable cause
A RESIGNAL statement in an exception handler of a stored procedure was executed but the context of the
previous error was unavailable. A possible cause of this error is a SELECT statement that returns a result set in
the exception handler.

#### 1.1.4.819 Primary key column '%1' already defined

Error constant
SQLE_PRIMARY_KEY_COLUMN_DEFINED
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the column that is already in the primary key.
Severity
SQLCODE
-119
SQLSTATE
Sybase error code
Probable cause
You listed the same column name twice in the definition of a primary key.

#### 1.1.4.820 Primary key for row in table '%1' is referenced by foreign key '%2' in table '%3'

foreign key '%2' in table '%3'
Error constant
SQLE_PRIMARY_KEY_VALUE_REF
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the table containing the row being modified.
Parameter 2
The name of the foreign index (or role) of the referencing
table.
Parameter 3
The name of the foreign table referencing the primary row.
Severity
SQLCODE
-198
SQLSTATE
23W05
Sybase error code
Probable cause
You attempted to delete or modify a row whose primary key value is referenced elsewhere in the database.

#### 1.1.4.821 Primary key for table '%1' is not unique: Primary key value ('%2')

key value ('%2')
Error constant
SQLE_PRIMARY_KEY_NOT_UNIQUE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the table where the problem was detected.
Parameter 2
Duplicate primary key values that caused the error.
Severity
SQLCODE
-193
SQLSTATE
23W01
Sybase error code
Probable cause
You attempted to add a new row to a table, but the new row has the same primary key as an existing row. The
database has not added the incorrect row to the database. For example, you might have added a student with
student number 86004 and there is already a row for a student with that number.

#### 1.1.4.822 Principal mirror servers are already defined

Error constant
SQLE_MIRROR_PARTNERS_ALREADY_DEFINED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1311
SQLSTATE
WW134
Sybase error code
Probable cause
An attempt was made to create a mirror server without a parent server, but two principal mirror servers are
already defined in the database.

#### 1.1.4.823 Procedure '%1' is no longer valid

Error constant
SQLE_PROCEDURE_NO_LONGER_VALID
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the procedure.
Severity
SQLCODE
-836
SQLSTATE
42W63
Sybase error code
Probable cause
A procedure definition cannot be loaded from the catalog. Check for tables or columns that have been
renamed or that may be reserved words. If this procedure is an internal procedure, you may have an older
version. Database upgrade may be needed to run it successfully.

#### 1.1.4.824 Procedure '%1' needs a RESULT clause for returned ROW or ARRAY

ROW or ARRAY
Error constant
SQLE_ROW_ARRAY_NEEDS_RESULT_CLAUSE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the procedure.
Severity
SQLCODE
-1881
SQLSTATE
42WF6
Sybase error code
Probable cause
A procedure definition failed to be loaded from the catalog. The procedure returns a result set that includes a
ROW or ARRAY type, but does not specify the RESULT clause. The RESULT clause is required if a procedure
has a ROW or ARRAY type in its result set. If this is a Transact-SQL procedure, it must be converted to Watcom
SQL.

#### 1.1.4.825 Procedure '%1' not found

SQLE_PROCEDURE_NOT_FOUND
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the procedure that could not be found.
Severity
SQLCODE
-265
SQLSTATE
52W09
Sybase error code
Probable cause
You misspelled the name of a procedure, or you did not qualify a procedure name with a user name.

#### 1.1.4.826 Procedure '%1' terminated with unhandled exception '%2'

exception '%2'
Error constant
SQLE_UNHANDLED_EXTENV_EXCEPTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure that returned the unhandled
exception.
Parameter 2
The fully qualified Java class name of the unhandled excep-
tion.
Severity
SQLCODE
-91
SQLSTATE
WP001
Sybase error code
Probable cause
A Java procedure terminated with an active exception, and this exception is reflected in SQL as an error status.

#### 1.1.4.827 Procedure has completed

SQLE_PROCEDURE_COMPLETE
Error constant
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
01W05
Sybase error code
Probable cause
There are no more result sets available for this procedure. An OPEN or a RESUME statement may have caused
the procedure to execute to completion.

#### 1.1.4.828 Procedure in use by '%1'

Error constant
SQLE_PROCEDURE_IN_USE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of user.
Severity
SQLCODE
-215
SQLSTATE
42W23
Sybase error code
Probable cause
You attempted to DROP a procedure that is being used by other active users of the database.

#### 1.1.4.829 Procedure is currently being altered or dropped

Error constant
SQLE_PROCEDURE_IN_USE_DDL
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1681
SQLSTATE
42WF0
Sybase error code
Probable cause
You have attempted to use a procedure that is currently being altered or dropped.

#### 1.1.4.830 Procedure or trigger calls have nested too deeply

Error constant
SQLE_NESTING_TOO_DEEP

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-274
SQLSTATE
42W29
Sybase error code
Probable cause
You may have defined a procedure or trigger that causes unlimited recursion.

#### 1.1.4.831 Publication '%1' not found

Error constant
SQLE_PUBLICATION_NOT_FOUND
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the publication that could not be found.
Severity
SQLCODE
-280
SQLSTATE
5RW01
Sybase error code
Probable cause
You misspelled the name of a publication, or you did not qualify a publication name with a user name.

#### 1.1.4.832 Publication predicates were not evaluated

Error constant
SQLE_PUBLICATION_PREDICATE_IGNORED
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
01W25
Sybase error code
Probable cause
Publication predicates were not evaluated because UltraLite was initialized without SQL support. The table will
be uploaded as if no publication predicate was specified for the table.

#### 1.1.4.833 RAISERROR executed: %1

Error constant
SQLE_RAISERROR_STMT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
RAISERROR message string.
Severity
SQLCODE
-631
SQLSTATE
WW012
Sybase error code
Probable cause
A RAISERROR statement has been executed. The string associated with the RAISERROR statement is included
in the text of the error message.

#### 1.1.4.834 Reading %1 database pages exceeds available cache of %2 pages

cache of %2 pages
Error constant
SQLE_READ_DB_PAGES_CACHE_TOO_SMALL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The number of database pages you tried to read.
Parameter 2
The maximum number of pages that can be read into the
cache.
Severity
SQLCODE
-1888
SQLSTATE
54W54
Sybase error code
Probable cause
You attempted to read pages into the cache using the ALTER DATABASE RESTORE CACHE statement or the
sp_read_db_pages system procedure, and the number of pages that would be read exceeded the maximum
cache size. Restart the server with a larger cache size.

#### 1.1.4.835 READTEXT or WRITETEXT statement cannot refer to a view

to a view
SQLE_TEXT_OPERATION_ON_VIEW
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-708
SQLSTATE
42W50
Sybase error code
Probable cause
A Transact-SQL READTEXT or WRITETEXT statement cannot refer to text columns in a view. Replace the view
reference with the name of a base table.

#### 1.1.4.836 RECOVER UNTIL and FOR REPLICATION cannot be used together

used together
Error constant
NETBU_WITH_PITR_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1962
SQLSTATE
42WE11
Sybase error code
Probable cause
Point in time recovery using NETWORK BACKUP for replication is not allowed.

#### 1.1.4.837 Recursion is not allowed without the RECURSIVE keyword

keyword
Error constant
SQLE_RECURSIVE_KEYWORD_REQUIRED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-938
SQLSTATE
42WA0
Sybase error code
Probable cause
The common table expressions for a recursive query must be defined using a WITH RECURSIVE clause.

#### 1.1.4.838 Recursive column %1: conversion from '%2' to '%3' loses precision

loses precision
Error constant
SQLE_BAD_RECURSIVE_COLUMN_CONVERSION
ODBC 2 state
ODBC 3 state
Parameter 1
Column number of the recursive subquery.
Parameter 2
Type converted from.
Parameter 3
Type converted to.
Severity
SQLCODE
-945
SQLSTATE
42WA2
Sybase error code
Probable cause
Every column in the recursive subquery must be convertible to the type of the corresponding column in the
initial subquery without loss of precision. Try casting the column in the initial subquery to an appropriate type.

#### 1.1.4.839 Referential integrity actions other than RESTRICT not allowed for temporary tables

not allowed for temporary tables
SQLE_INVALID_FOREIGN_KEY_ACTION
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-849
SQLSTATE
42R01
Sybase error code
Probable cause
You attempted to specify an unsupported referential integrity action for a temporary table.

#### 1.1.4.840 Remote column %1 has been specified with the wrong case

wrong case
Error constant
SQLE_OMNI_RMT_COLUMN_WRONG_CASE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The complete name of the remote column.
Severity
SQLCODE
-1704
SQLSTATE
WO035
Sybase error code
Probable cause
The remote server requires that columns be specified in the correct case.

#### 1.1.4.841 Remote message type '%1' not found

Error constant
SQLE_NOT_REMOTE_TYPE
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of remote message type.
Severity
SQLCODE
-286
SQLSTATE
5RW07
Sybase error code
Probable cause
You referred to a remote message type that is not defined in this database. Use CREATE REMOTE TYPE to
define remote message types.

#### 1.1.4.842 Remote server '%1' could not be found

Error constant
SQLE_OMNI_SERVER_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the remote server.
Severity
SQLCODE
-659
SQLSTATE
WO004
Sybase error code
Probable cause
You attempted to define an object on a server that has not been added. Use CREATE SERVER to add the
remote server definition.

#### 1.1.4.843 Remote server '%1' is currently configured as read-only

only
SQLE_OMNI_READONLY
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the remote server.
Severity
SQLCODE
-658
SQLSTATE
WO003
Sybase error code
Probable cause
You attempted to perform an update on an object located on a server that is configured as read-only. Use
ALTER SERVER to reconfigure the remote server to be updatable.

#### 1.1.4.844 Remote server does not have the ability to support this statement

this statement
Error constant
SQLE_OMNI_SERVER_NOT_CAPABLE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-706
SQLSTATE
WO012
Sybase error code
Probable cause
You attempted to execute a statement that requires a capability that is not supported by a remote server.

#### 1.1.4.845 Remote server is currently in use and cannot be dropped

dropped
Error constant
SQLE_OMNI_SERVER_IN_USE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1855
SQLSTATE
WO036
Sybase error code
Probable cause
You attempted to drop a remote server that was still in use by another connection.

#### 1.1.4.846 Remote statement failed

Error constant
SQLE_REMOTE_STATEMENT_FAILED
ODBC 2 state
S0002
ODBC 3 state
42S02
Severity
SQLCODE
-288
SQLSTATE
5RW09
Sybase error code
Probable cause
This SQLSTATE can be signaled within a trigger to prevent the SQL Remote Message Agent (dbremote) from
displaying an error message in the output. This exception will only occur when a trigger or procedure signals it.
This is useful for ignoring replication errors that are permitted by design.

#### 1.1.4.847 RENAME and FOR REPLICATION cannot be used together

together
NETBU_WITH_RENAME_NOT_ALLOWED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1963
SQLSTATE
42WE12
Sybase error code
Probable cause
Rename cannot be used during NETWORK BACKUP for replication.

#### 1.1.4.848 RENAME can not be used with SYSTEM dbspace

Error constant
INVALID_RENAME_WITH_SYSTEMDB
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2088
SQLSTATE
42R05
Sybase error code
Probable cause
RENAME can not be used with SYSTEM dbspace

#### 1.1.4.849 Reorganize table is already being run on table "%1"

Error constant
SQLE_REORG_ALREADY_IN_PROGRESS
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the table.
Severity
SQLCODE
-1229
SQLSTATE
54W51
Sybase error code
Probable cause
There is already a REORGANIZE TABLE statement being run on this table. Only one such statement can be
executing on a table at any time.

#### 1.1.4.850 REORGANIZE TABLE ran out of space

Error constant
SQLE_REORG_OUT_OF_SPACE

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1764
SQLSTATE
54W53
Sybase error code
Probable cause
REORGANIZE TABLE ran out of allocated space.

#### 1.1.4.851 Request denied -- no active databases

Error constant
SQLE_REQUEST_DENIED_NO_DATABASES
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-76
SQLSTATE
08W28
Sybase error code
Probable cause
The server has denied your request as there are currently no running databases.

#### 1.1.4.852 Request interrupted due to timeout

Error constant
SQLE_REQUEST_TIMEOUT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1043

SQLSTATE
57W01
Sybase error code
Probable cause
The current request was canceled during its execution since it ran for longer than the request_timeout
database option value. The database was able to stop the operation without doing a rollback. If the statement
is an INSERT, UPDATE, or DELETE, any changes made by the statement will be canceled. If the statement is a
data definition statement (for example CREATE TABLE), the statement will be canceled, but the COMMIT that
was done as a side effect will not be canceled.

#### 1.1.4.853 Request to start/stop database denied

Error constant
SQLE_START_STOP_DATABASE_DENIED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-75
SQLSTATE
08W29
Sybase error code
Probable cause
You do not have permission to start or stop a database. The required permission is determined on the server
command line.

#### 1.1.4.854 Required operators excluded

Error constant
SQLE_REQUIRED_OPERATORS_EXCLUDED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-969
SQLSTATE
WI011
Sybase error code
Probable cause
The database server was unable to construct a valid access plan for the given request because required data
flow operators were excluded by the exclude_operators option. Re-enable the required operators to execute the
statement.

#### 1.1.4.855 Resource governor for '%1' exceeded

Error constant
SQLE_RESOURCE_GOVERNOR_EXCEEDED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The resource whose limit has been exceeded.
Severity
SQLCODE
-685
SQLSTATE
WP009
Sybase error code
Probable cause
The resource governor for the stated resource has determined that the usage of the resource has exceeded its
limit.

#### 1.1.4.856 RESTORE statement missing a FROM clause

Error constant
SQLE_RESTORE_MISSING_FROM_CLAUSE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1908
SQLSTATE
42X15
Sybase error code
Probable cause
No FROM clause has been provided for the restore.

#### 1.1.4.857 RESTORE unable to find a log backup on the latest timeline

timeline
SQLE_RESTORE_UNABLE_TO_FIND_LOG_BACKUP
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1857
SQLSTATE
WB019
Sybase error code

Probable cause
RESTORE was unable to find a log backup on the latest timeline

#### 1.1.4.858 RESTORE unable to open file '%1'

Error constant
SQLE_RESTORE_UNABLE_TO_OPEN
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
File name of database file.
Severity
SQLCODE
-717
SQLSTATE
WB008
Sybase error code
Probable cause
RESTORE was unable to open one of the database files.

#### 1.1.4.859 RESTORE unable to start database '%1'

SQLE_RESTORE_UNABLE_TO_START
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
File name of database file.
Severity
SQLCODE
-719
SQLSTATE
WB010
Sybase error code
Probable cause
After a RESTORE, the resulting database could not be started.

#### 1.1.4.860 RESTORE unable to write to file '%1'

Error constant
SQLE_RESTORE_UNABLE_TO_WRITE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
File name of database file.
Severity
SQLCODE
-718
SQLSTATE
WB009
Sybase error code
Probable cause
RESTORE was unable to write to one of the database files.

#### 1.1.4.861 Restoring database from an upgrade image

Error constant
FILE_RESTORE_DATABASE_UPGRADE_IMAGE
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
-1975
SQLSTATE
WW259
Sybase error code
Probable cause
The server is replaying an ALTER DATABASE UPGRADE statement, which restores the database from an
upgrade image.

#### 1.1.4.862 Result set not allowed from within an atomic compound statement

compound statement
Error constant
SQLE_RESULT_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-222
SQLSTATE
3BW02
Sybase error code
Probable cause
You used a SELECT statement with no INTO clause or a RESULT CURSOR statement within an atomic
compound statement.

#### 1.1.4.863 Result set not permitted in '%1'

Error constant
SQLE_RESULT_SET_NOT_PERMITTED
ODBC 2 state
ODBC 3 state
Parameter 1
Name of object containing the invalid statement.
Severity
SQLCODE
-946
SQLSTATE
09W03
Sybase error code
Probable cause
You attempted to execute a SELECT statement in a context where a result set is not permitted.

#### 1.1.4.864 Retrying read of corrupt page (page '%1')

Error constant
SQLE_CORRUPT_PAGE_READ_RETRY
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The page ID.
Severity
SQLCODE
SQLSTATE
WW115
Sybase error code
Probable cause
UltraLite detected a corrupt database page and will attempt the read operation again. If a mirror file is enabled,
it is used for the retry. If the retry fails, an error will be signaled.

#### 1.1.4.865 Return type of void from procedure '%1' cannot be used in any expression

used in any expression
SQLE_PROCEDURE_RETURNS_VOID
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the procedure.
Severity
SQLCODE
-705
SQLSTATE
Sybase error code

Probable cause
The Java type void does not map onto any SQL type, hence a procedure returning void cannot be used in any
SQL expression.

#### 1.1.4.866 Right truncation of string data

Error constant
SQLE_STRING_RIGHT_TRUNCATION
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-638
SQLSTATE
Sybase error code
Probable cause
Non-space characters were truncated upon the assignment of string data.

#### 1.1.4.867 Role "%1" already exists

SQLE_ROLE_ALREADY_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the role.
Severity
SQLCODE
-1537
SQLSTATE
28W26

Sybase error code
Probable cause
An attempt was made to create a role that already exists in the database.

#### 1.1.4.868 Rollback occurred due to blocking_others_timeout

Error constant
SQLE_BLOCKING_OTHERS_ROLLBACK
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1344
SQLSTATE
WW148
Sybase error code
Probable cause
This connection has been rolled back because another connection was blocked on this connection for longer
than the blocking_others_timeout option setting. All requests on this connection will get this error until it is
disconnected.

#### 1.1.4.869 Rollback occurred due to deadlock during prefetch

Error constant
SQLE_ROLLBACK_ON_PREFETCH
ODBC 2 state
ODBC 3 state
Severity

SQLCODE
-684
SQLSTATE
WW019
Sybase error code
Probable cause
One of the cursors that was opened with prefetch enabled was performing fetch operations, and a deadlock
occurred during a prefetch. This is a deadlock situation and your transaction has been chosen as the one to
rollback. The request that received this error was not executed, unless the request was to close the cursor, in
which case the cursor was closed.

#### 1.1.4.870 ROLLBACK TO SAVEPOINT not allowed

Error constant
SQLE_ROLLBACK_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-221
SQLSTATE
3B002
Sybase error code
Probable cause
You attempted a ROLLBACK TO SAVEPOINT within an atomic operation to a savepoint established before the
atomic operation.

#### 1.1.4.871 Row has been updated since last time read

Error constant
SQLE_ROW_UPDATED_WARNING
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE

SQLSTATE
01W04
Sybase error code
Probable cause
You fetched a row from a SCROLL cursor. The row was previously fetched from the same cursor, and one or
more columns in the row has been updated since the previous fetch. The column(s) updated may or may not
be fetched by the cursor; this warning just indicates that the row from the table has been updated. If the cursor
involves more than one table, a row from one or more of the tables has been updated.

#### 1.1.4.872 Row has changed since last read -- operation canceled

canceled
Error constant
SQLE_ROW_UPDATED_SINCE_READ
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-208
SQLSTATE
22W02
Sybase error code
Probable cause
You attempted an UPDATE (positioned) or DELETE (positioned) operation on a cursor declared as a SCROLL
cursor, and the row you are changing has been updated since you read it. This error prevents the lost update
problem.

#### 1.1.4.873 Row in table '%1' was modified or deleted in BEFORE trigger

BEFORE trigger
Error constant
SQLE_ROW_REMODIFIED_OR_DELETED
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Name of the table.
Severity
SQLCODE
-833
SQLSTATE
42W62
Sybase error code
Probable cause
A BEFORE trigger has updated or deleted the row that caused the trigger to fire, preventing the original
operation from completing. The trigger must be re-written so that it does not attempt to change the row via
UPDATE or DELETE statements.

#### 1.1.4.874 Row not found

SQLE_NOTFOUND
Error constant
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
Sybase error code
Probable cause
You positioned a cursor beyond the beginning or past the end of the query. There is no row at that position.

#### 1.1.4.875 Row was dropped from table %1 to maintain referential integrity

referential integrity
Error constant
SQLE_ROW_DELETED_TO_MAINTAIN_REFERENTIAL_IN-
TEGRITY
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The name of the table.
Severity
SQLCODE
SQLSTATE
01W24
Sybase error code
Probable cause
A delete of a primary row during a download forced its foreign row(s) to also be deleted to maintain referential
integrity.

#### 1.1.4.876 Run time SQL error -- %1

Error constant
SQLE_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Identification of the error.

Severity
SQLCODE
-300
SQLSTATE
Sybase error code
Probable cause
An internal database error occurred. If it can be reproduced, it should be reported to SAP. You may be able to
work around this problem by modifying the associated query statement.

#### 1.1.4.877 SAP HANA environment error, unable to ping name server

server
Error constant
SQLE_BACKUP_BKINT_PING_NS_ERR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1920
SQLSTATE
WB030
Sybase error code
Probable cause
name server is not available

#### 1.1.4.878 SAP HANA environment error, unable to execute command on name server

command on name server
Error constant
SQLE_BACKUP_BKINT_NO_HANA_ENV
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1916
SQLSTATE
WB026
Sybase error code
Probable cause
hdbnsutil is not available.

#### 1.1.4.879 Savepoint '%1' not found

Error constant
SQLE_SAVEPOINT_NOTFOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of savepoint.
Severity
SQLCODE
-220
SQLSTATE
3B001
Sybase error code
Probable cause
You attempted to rollback to a savepoint that does not exist.

#### 1.1.4.880 Savepoints require a rollback log

SQLE_SAVEPOINTS_REQUIRE_UNDO
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-213
SQLSTATE
3BW01
Sybase error code

Probable cause
You cannot use savepoints when the database server is running in bulk mode without a rollback log.

#### 1.1.4.881 Scalar variable '%1' not found

Error constant
SQLE_SCALAR_VARIABLE_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the scalar variable that could not be found.
Severity
SQLCODE
-1886
SQLSTATE
42X14
Sybase error code
Probable cause
You attempted to use a variable that was not found, or did not have a scalar value. A non-scalar variable can be
a row, an array or a table reference.

#### 1.1.4.882 Schedule '%1' for event '%2' already exists

SQLE_SCHEDULE_ALREADY_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the schedule that already exists.
Parameter 2
Name of the event being scheduled.
Severity
SQLCODE
-774
SQLSTATE
WE004
Sybase error code

Probable cause
You have attempted to create a schedule with a name that already exists in the database for the named event.

#### 1.1.4.883 Schedule '%1' for event '%2' not found

Error constant
SQLE_SCHEDULE_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the schedule that could not be found.
Parameter 2
Name of the event being scheduled.
Severity
SQLCODE
-773
SQLSTATE
WE003
Sybase error code
Probable cause
You have attempted to reference a schedule with a name that does not exist in the database for the named
event.

#### 1.1.4.884 Script file missing statement "go" delimiter on a separate line

separate line
SQLE_SCRIPT_MISSING_DELIMITER
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1315
SQLSTATE
WW046
Sybase error code

Probable cause
For UltraLite, all non-comment SQL statements in a script file (including the final one) must be followed by "go"
on a line by itself. For strings, you can use "\ngo" to end a statement.

#### 1.1.4.885 Secure HTTP connections are not supported on this platform

this platform
Error constant
SQLE_SECURE_CONNECTION_UNAVAILABLE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1030
SQLSTATE
WW063
Sybase error code
Probable cause
A Secure HTTP connection was attempted, but is not supported on this platform.

#### 1.1.4.886 Select lists in UNION, INTERSECT, or EXCEPT do not match in length

not match in length
SQLE_INVALID_UNION
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-153
SQLSTATE

Sybase error code
Probable cause
You specified a UNION, INTERSECT, or EXCEPT, but the SELECT statements involved in the operation do not
have the same number of columns in the SELECT list.

#### 1.1.4.887 SELECT returns more than one row

Error constant
SQLE_TOO_MANY_RECORDS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-185
SQLSTATE
Sybase error code
Probable cause
You tried to use a SELECT statement without a cursor, but the statement cursor returns more than one row.
Only a single row SELECT statement can be used in this context.

#### 1.1.4.888 Semaphore "%1" not found

Error constant
SQLE_SEMAPHORE_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the semaphore that could not be found.
Severity
SQLCODE
-1808
SQLSTATE
55W54
Sybase error code
Probable cause
You misspelled the name of a semaphore, or the semaphore does not exist.

#### 1.1.4.889 Semaphore was dropped

Error constant
SQLE_SEMAPHORE_DROPPED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1805
SQLSTATE
WP028
Sybase error code
Probable cause
The semaphore this connection was waiting for was dropped during the wait. The semaphore is no longer
available. This could happen if the semaphore was explicitly dropped, or if the connection owning the
temporary semaphore has disconnected.

#### 1.1.4.890 Sequence '%1' already exists

Error constant
SQLE_SEQUENCE_ALREADY_EXISTS
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the sequence.
Severity
SQLCODE
-1354
SQLSTATE
52W47
Sybase error code
Probable cause
A sequence with the specified name already exists.

#### 1.1.4.891 Sequence '%1' in use by another connection

SQLE_SEQUENCE_IN_USE
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of user.
Severity
SQLCODE
-1366
SQLSTATE
42WE3
Sybase error code
Probable cause
You have attempted to drop a sequence that is currently being used by another connection.

#### 1.1.4.892 Sequence '%1' not found

Error constant
SQLE_SEQUENCE_NOT_FOUND
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the sequence.
Severity
SQLCODE
-1359
SQLSTATE
52W44
Sybase error code
Probable cause
The sequence with this name does not exist in the database.

#### 1.1.4.893 Sequence generators are not supported for this database

database
Error constant
SQLE_SEQUENCES_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1369
SQLSTATE
52W52
Sybase error code
Probable cause
The current database does not have catalog support for sequence generators. To use this feature, upgrade
your database to the most recent version.

#### 1.1.4.894 Sequence name '%1' is ambiguous

Error constant
SQLE_AMBIGUOUS_SEQUENCE_NAME
ODBC 2 state
S0013
ODBC 3 state
42S13
Parameter 1
Name of an ambiguous sequence.
Severity
SQLCODE
-1358
SQLSTATE
52W45
Sybase error code
Probable cause
A statement has referred to a sequence name that is not unique. Preface the sequence name by an owner
name.

#### 1.1.4.895 Server '%1': %2

SQLE_OMNI_REMOTE_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the remote server.
Parameter 2
The message from the remote server.
Severity
SQLCODE
-660
SQLSTATE
WO005
Sybase error code
Probable cause
A message was generated by a remote server. The message text is included.

#### 1.1.4.896 Server capability name '%1' could not be found in the database

the database
Error constant
SQLE_CAPABILITY_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of server capability.
Severity
SQLCODE
-761
SQLSTATE
WO014
Sybase error code
Probable cause
An ALTER SERVER statement was attempted on a capability that was not defined.

#### 1.1.4.897 Server name can only be specified when connecting to a cloud database server with NODETYPE=DIRECT

SQLE_SERVER_NAME_NOT_ALLOWED
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1582
SQLSTATE
08WA8
Sybase error code
Probable cause
When connecting to a cloud database server, specifying a server name on the connection string is only allowed
for NODETYPE=DIRECT. When using other NODETYPE values to connect to a cloud database server, specifying
the server name is not allowed. Typically, for connections to a cloud database server the HOST connection
parameter or HOST protocol option is used to specify the address of one or more cloud database servers.

#### 1.1.4.898 Server not found and unable to automatically start

Error constant
SQLE_UNABLE_TO_CONNECT_OR_START
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-764
SQLSTATE
08W55
Sybase error code
Probable cause
The client could not connect to a server, and was unable to automatically start a server. The automatic start
may have failed because no database file was specified.

#### 1.1.4.899 Service '%1' already exists

SQLE_SERVICE_ALREADY_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the service that already exists.
Severity
SQLCODE
-919
SQLSTATE
42W97
Sybase error code

Probable cause
You have attempted to create a service with a name that already exists in the database.

#### 1.1.4.900 Service '%1' in use

Error constant
SQLE_SERVICE_IN_USE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the service that is in use.
Severity
SQLCODE
-924
SQLSTATE
55W15
Sybase error code
Probable cause
You have attempted to drop a service that is currently in use.

#### 1.1.4.901 Service '%1' not found

SQLE_SERVICE_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the specified service that could not be found.
Severity
SQLCODE
-920
SQLSTATE
42W98
Sybase error code
Probable cause
You have attempted to reference a service with a name that does not exist in the database.

#### 1.1.4.902 Service definition requires a statement when authorization is off

authorization is off
Error constant
SQLE_SERVICE_AUTH_REQUIRED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-931
SQLSTATE
42W9E
Sybase error code
Probable cause
The service definition for the specified service type requires a statement to be specified when authorization is
set to Off.

#### 1.1.4.903 Service statement definition is inconsistent with service type

service type
SQLE_SERVICE_STATEMENT_MISMATCH
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-927
SQLSTATE
42W9C
Sybase error code
Probable cause
Either no statement was provided for a service whose type requires one, or a statement was provided when the
service type does not allow one to be defined.

#### 1.1.4.904 Service statement definition is invalid or unsupported

unsupported
Error constant
SQLE_SERVICE_STATEMENT_INVALID
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1269
SQLSTATE
42WCC
Sybase error code
Probable cause
Either the statement provided is invalid or it is unsupported within the context of a service.

#### 1.1.4.905 Service type does not allow '%1' attribute

Error constant
SQLE_SERVICE_ATTR_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the attribute that is not allowed.
Severity
SQLCODE
-1027
SQLSTATE
42WB2
Sybase error code
Probable cause
The service definition for the specified service type does not allow the given attribute to be specified.

#### 1.1.4.906 Service type required for CREATE SERVICE

Error constant
SQLE_SERVICE_TYPE_REQUIRED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-915
SQLSTATE
42W92
Sybase error code
Probable cause
The CREATE SERVICE statement requires a service type to be specified.

#### 1.1.4.907 SET clause for column '%1' used incorrectly

Error constant
SQLE_INVALID_SET_CLAUSE
ODBC 2 state
S0002
ODBC 3 state
42S03
Parameter 1
The SET clause that is invalid.
Severity
SQLCODE
-846
SQLSTATE
42U03
Sybase error code
Probable cause
Your UPDATE statement contains an invalid SET clause, for example, there are multiple SET clauses for the
same column.

#### 1.1.4.908 SETUSER not allowed in procedures, triggers, events, or batches

events, or batches
Error constant
SQLE_SETUSER_NOT_IN_PROCEDURES
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-877
SQLSTATE
42W09
Sybase error code
Probable cause
The SETUSER statement is not allowed in stored procedures, triggers, event handlers, or batches, and cannot
be called from an EXECUTE IMMEDIATE statement.

#### 1.1.4.909 Shared memory listener already started

Error constant
SQLE_START_SHM_LISTENER_CONFLICT_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1779
SQLSTATE
08WD7
Sybase error code
Probable cause
You attempted to start the shared memory listener that already is running.

#### 1.1.4.910 Signature '%1' does not match procedure parameters

parameters
Error constant
SQLE_SIGNATURE_MISMATCH
ODBC 2 state
ODBC 3 state
Parameter 1
The value of the signature.
Severity
SQLCODE
-737
SQLSTATE
42W54
Sybase error code
Probable cause
The number of types in the signature must match the number of procedure parameters. If a DYNAMIC RESULT
SETS clause was specified, the number of dynamic result sets must match the quantity found in the signature.

#### 1.1.4.911 Snapshot isolation disabled or pending

SQLE_SNAPSHOT_ISOLATION_DISABLED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1054
SQLSTATE
55W23
Sybase error code
Probable cause
Snapshot isolation is disabled or its activation is still pending. You must enable snapshot isolation before using
it.

#### 1.1.4.912 Spatial column '%1' cannot be included in a primary key or unique index

key or unique index
Error constant
SQLE_SLERR_CREATE_INDEX_UNIQUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the spatial column.
Severity
SQLCODE
-1453
SQLSTATE
2FW46
Sybase error code
Probable cause
A spatial column cannot be included in a primary key or unique index.

#### 1.1.4.913 Spatial column '%1' cannot be included in an index because it is not constrained to a single SRID

because it is not constrained to a single SRID
SQLE_SLERR_CREATE_INDEX_NOSRID
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the spatial column.
Severity
SQLCODE
-1454
SQLSTATE
2FW47

Sybase error code
Probable cause
The named spatial column cannot be included in a spatial index because the column is not constrained
to have values from a single spatial reference system. The column definition should be of the form "col
ST_Geometry(SRID=0)".

#### 1.1.4.914 Spatial feature %1 is not supported

Error constant
SQLE_SLERR_NYI
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the unsupported feature.
Severity
SQLCODE
-1413
SQLSTATE
2FW03
Sybase error code
Probable cause
The specified feature is not supported.

#### 1.1.4.915 Spatial reference system "%1" is reserved

SQLE_SLERR_DDL_SRS_RESERVED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the reserved spatial reference system.
Severity
SQLCODE
-1472
SQLSTATE
2FW65
Sybase error code

Probable cause
The named spatial reference system is reserved for system use.

#### 1.1.4.916 Spatial reference system %1 cannot be modified because it is in use

because it is in use
Error constant
SQLE_SLERR_DDL_SRS_INUSE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The coordinate system name
Severity
SQLCODE
-1471
SQLSTATE
2FW64
Sybase error code
Probable cause
The coordinate system is currently in use and cannot be dropped.

#### 1.1.4.917 Spatial reference system '%1' already exists

Error constant
SQLE_SLERR_DDL_SRS_EXISTS
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The name of the spatial reference system.
Severity
SQLCODE
-1461
SQLSTATE
2FW54
Sybase error code
Probable cause
The named spatial reference system already exists.

#### 1.1.4.918 Spatial reference system '%1' not found

Error constant
SQLE_SLERR_DDL_NO_SRS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the spatial reference system.
Severity
SQLCODE
-1459
SQLSTATE
2FW52
Sybase error code
Probable cause
The named spatial reference system is not defined.

#### 1.1.4.919 Spatial reference system must specify the SRID to use

use
Error constant
SQLE_SLERR_DDL_SRS_NOSRID
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Severity
SQLCODE
-1462
SQLSTATE
2FW55
Sybase error code
Probable cause
When creating a spatial reference system, the statement must specify IDENTIFIED BY to specify the SRID to
use.

#### 1.1.4.920 Spatial unit of measure "%1" is reserved

Error constant
SQLE_SLERR_DDL_UOM_RESERVED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the reserved unit of measure.
Severity
SQLCODE
-1473
SQLSTATE
2FW66
Sybase error code
Probable cause
The named unit of measure is reserved for system use.

#### 1.1.4.921 Specified database file already in use

Error constant
SQLE_FILE_IN_USE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-816
SQLSTATE
08W56
Sybase error code
Probable cause
The database server could not start the specified database because the file is already in use.

#### 1.1.4.922 Specified database is invalid

SQLE_INVALID_DATABASE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-84
SQLSTATE
08W11
Sybase error code
Probable cause
The database file you specified is invalid. The database server is stopped.

#### 1.1.4.923 Specified database not found

Error constant
SQLE_DATABASE_NOT_FOUND
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-83
SQLSTATE
08W10
Sybase error code
Probable cause
The database server was unable to find the specified database. The database server may be attempting to
start a database file that cannot be opened or that cannot be found on the network. You may be attempting to
connect to a database name that is not running.

#### 1.1.4.924 Specified file system volume not found for database '%1'

database '%1'
Error constant
SQLE_FILE_VOLUME_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the database.
Severity
SQLCODE
-1112
SQLSTATE
WW082
Sybase error code
Probable cause
The file system volume you specified in the database file name was not found. Check the volume name or
ordinal.

#### 1.1.4.925 Specified LDAP server '%1' is not found

Error constant
SQLE_UNKNOWN_LDAP_SERVER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the LDAP server.
Severity
SQLCODE
-1554
SQLSTATE
28W31
Sybase error code
Probable cause
The LDAP server specified does not exist in the database.

#### 1.1.4.926 Specified local connection ID not found

Error constant
SQLE_LOCAL_CONNECTION_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-996
SQLSTATE
WO024
Sybase error code
Probable cause
There is no connection with the specified connection ID.

#### 1.1.4.927 Specified role '%1' is a user extended as role

Error constant
SQLE_AN_EXTENDED_USER

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the role being dropped.
Severity
SQLCODE
-1560
SQLSTATE
28W34
Sybase error code
Probable cause
Specified role is a user extended as role but FROM USER clause is not specified in DROP ROLE command.

#### 1.1.4.928 Specified role '%1' is not a user extended as role

Error constant
SQLE_NOT_AN_EXTENDED_USER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the role being dropped.
Severity
SQLCODE
-1559
SQLSTATE
28W33
Sybase error code
Probable cause
The role name provided is not a user extended as role. Use of FROM USER clause is not allowed in such cases.

#### 1.1.4.929 Specified System Privilege '%1' is Invalid

Error constant
SQLE_INVALID_SYSTEM_PRIVILEGE
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Parameter 1
The name of the system privilege.
Severity
SQLCODE
-1541
SQLSTATE
28W30
Sybase error code
Probable cause
System Privilege specified does not exist in the database.

#### 1.1.4.930 Specified user '%1' is a role

Error constant
SQLE_CAN_NOT_DROP_ROLE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the user being dropped.
Severity
SQLCODE
-1558
SQLSTATE
28W32
Sybase error code
Probable cause
You attempted to drop a role. Use DROP ROLE statement.

#### 1.1.4.931 SQL statement error

Error constant
SQLE_STATEMENT_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-132

SQLSTATE
Sybase error code
Probable cause
The prepared statement identifier is invalid. In Embedded SQL, an OPEN or EXECUTE failed.

#### 1.1.4.932 SQL statements in BEGIN PARALLEL WORK...END PARALLEL WORK statement are not of the same type

PARALLEL WORK statement are not of the same
type
Error constant
PARALLEL_STMT_TYPE_DIFFERENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1936
SQLSTATE
0AW34
Sybase error code
Probable cause
You can only specify one type of SQL statement within a BEGIN PARALLEL WORK...END PARALLEL WORK
statement. For example, you cannot specify both a LOAD TABLE and an UNLOAD TABLE statement in the same
BEING PARALLEL WORK...END PARALLEL WORK statement.

#### 1.1.4.933 SQL statement not supported in BEGIN PARALLEL WORK...END PARALLEL WORK statement

WORK...END PARALLEL WORK statement
Error constant
PARALLEL_STMT_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1935
SQLSTATE
0AW33
Sybase error code
Probable cause
You specified a SQL statement that is not supported in the BEGIN PARALLEL WORK...END PARALLEL WORK
statement or the current database does not support.

#### 1.1.4.934 SQLDA data type invalid

Error constant
SQLE_SQLDA_INVALID_DATATYPE
ODBC 2 state
ODBC 3 state
07W05
Severity
SQLCODE
-759
SQLSTATE
07W05
Sybase error code
Probable cause
The data type specified for a SQLDA variable is invalid.

#### 1.1.4.935 SQLDA fields inconsistent for a multi-row SQLDA

SQLE_SQLDA_INCONSISTENT
Error constant
ODBC 2 state
ODBC 3 state
07W04
Severity
SQLCODE
-700
SQLSTATE
07W04
Sybase error code

Probable cause
Not all of the rows in a multi-row SQLDA have been defined identically for an array operation (insert, fetch, or
execute). A given column must be defined the same (type and length) in each row.

#### 1.1.4.936 sqlpp/dblib version mismatch

Error constant
SQLE_PP_DBLIB_MISMATCH
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-230
SQLSTATE
08W18
Sybase error code
Probable cause
Your executable has Embedded SQL source files that were preprocessed with a version of sqlpp that does not
match the database interface library.

#### 1.1.4.937 SRID %1 is referenced by column '%2' of table '%3'

SQLE_SLERR_SRS_INUSE_TAB
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The spatial reference system identifier.
Parameter 2
The name of the referencing column.
Parameter 3
The name of the referencing table.
Severity
SQLCODE
-1474
SQLSTATE
2FW67
Sybase error code

Probable cause
The specified spatial reference system is in use by the column of a table, and it cannot be modified.

#### 1.1.4.938 SRID %1 is referenced by domain "%3"."%2"

Error constant
SQLE_SLERR_SRS_INUSE_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The spatial reference system identifier.
Parameter 2
The owner of the domain.
Parameter 3
The name of the domain.
Severity
SQLCODE
-1476
SQLSTATE
2FW69
Sybase error code
Probable cause
The specified spatial reference system is in use by a user-defined domain, and it cannot be modified.

#### 1.1.4.939 SRID %1 is referenced by parameter '%2' of procedure '%3'

procedure '%3'
SQLE_SLERR_SRS_INUSE_PROC
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The spatial reference system identifier.
Parameter 2
The referencing parameter name.
Parameter 3
The referencing procedure name.
Severity
SQLCODE
-1475
SQLSTATE
2FW68

Sybase error code
Probable cause
The specified spatial reference system is in use by the parameter of a procedure, and it cannot be modified.

#### 1.1.4.940 ST_Geometry arguments not supported by SQL function %1

function %1
Error constant
SQLE_SLERR_SPATIAL_IN_BUILTIN
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the SQL function.
Severity
SQLCODE
-1478
SQLSTATE
2FW71
Sybase error code
Probable cause
The specified SQL function does not support geometry parameters.

#### 1.1.4.941 ST_MultiSurface contains elements with an invalid intersection (near "%1")

intersection (near "%1")
SQLE_SLERR_INVALID_MULTISURF_I
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The method or context where the invalid ST_MultiSurface
was detected.
Severity
SQLCODE
-1502

SQLSTATE
2FW89
Sybase error code
Probable cause
The interiors of any two ST_Surface values in an ST_MultiSurface shall not intersect. The boundaries of any
two elements in an ST_MultiSurface may intersect at a finite number of points (and not, for example, in a line
segment).

#### 1.1.4.942 Start date/time for non-recurring event '%1' is in the past

the past
Error constant
SQLE_EVENT_START_TIME_IN_PAST
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the event being scheduled.
Severity
SQLCODE
-1128
SQLSTATE
WE010
Sybase error code
Probable cause
You have specified an event starting date or time that has already passed, and the event is not recurring.

#### 1.1.4.943 Start listener error: %1

Error constant
SQLE_START_LISTENER_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Error text or internal error code
Severity
SQLCODE
-1821
SQLSTATE
08WE4
Sybase error code
Probable cause
An error occurred starting a listener.

#### 1.1.4.944 Statement %1 disallowed during upgrade from script

script
Error constant
SQLE_UPGRADE_DISALLOWED_STMT
ODBC 2 state
ODBC 3 state
Parameter 1
Disallowed statement.
Severity
SQLCODE
-1716
SQLSTATE
08X02
Sybase error code
Probable cause
Upgrade from script is not allowed to use the following statements: BACKUP, ALTER DATABASE UPGRADE.

#### 1.1.4.945 Statement cannot be executed

Error constant
SQLE_CANNOT_EXECUTE_STMT
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
01W08
Sybase error code
Probable cause
You specified a SQL statement for the PREPARE...WITH EXECUTE statement that cannot be executed. If you
specified an output SQLDA, it may contain a DESCRIBE of the prepared statement. It is normal for this warning
to appear in the request log during the successful execution of a statement.

#### 1.1.4.946 Statement contains an illegal usage of the non-deterministic function '%1'

deterministic function '%1'
SQLE_NONDETERMINISTIC_FUNCTION
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the non-deterministic user-defined function
used in error.
Severity
SQLCODE
-889
SQLSTATE
42W79

Sybase error code
Probable cause
Non-deterministic functions cannot appear in a CHECK constraint, or any other type of integrity constraint.
They may appear anywhere within a query, view, or derived table. However, if an aliased SELECT list expression
contains a non-deterministic function, that alias cannot be referred to elsewhere in the query.

#### 1.1.4.947 Statement contains an illegal usage of the NUMBER(*) function

NUMBER(*) function
Error constant
SQLE_INVALID_NUMBER
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-864
SQLSTATE
42W71
Sybase error code
Probable cause
The NUMBER and IDENTITY functions can only appear in the SELECT list of the outer-most SELECT block. It
cannot be used in any subquery or in a predicate.

#### 1.1.4.948 Statement interrupted by user

SQLE_INTERRUPTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-299
SQLSTATE
Sybase error code

Probable cause
You canceled a statement during its execution. The database was able to stop the operation without doing
a rollback. If the statement is an INSERT, UPDATE, or DELETE, any changes made by the statement will be
canceled. If the statement is a data definition statement (for example CREATE TABLE), the statement will be
canceled, but the COMMIT that was done as a side effect will not be canceled.

#### 1.1.4.949 Statement is not allowed in passthrough mode

Error constant
SQLE_STMT_NOT_ALLOWED_IN_PASSTHROUGH
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-707
SQLSTATE
0AW05
Sybase error code
Probable cause
You tried to execute a statement that cannot be executed while in passthrough mode. For example, you may
have executed a batch statement.

#### 1.1.4.950 Statement not allowed during snapshot

SQLE_STATEMENT_NOT_ALLOWED_IN_SNAPSHOT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1062
SQLSTATE
42WB9
Sybase error code

Probable cause
A connection with an outstanding snapshot attempted to use CREATE INDEX, DROP INDEX, ALTER INDEX or
ALTER TABLE. Make sure all cursors for the connection are closed.

#### 1.1.4.951 Statement not allowed on IMMEDIATE REFRESH text index

text index
Error constant
SQLE_TEXT_IMMEDIATE_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1182
SQLSTATE
WT015
Sybase error code
Probable cause
You cannot use REFRESH TEXT INDEX or TRUNCATE TEXT INDEX on an index that is created with immediate
refresh. You cannot alter a text index to use or stop using immediate refresh.

#### 1.1.4.952 Statement not allowed on text index for a materialized view

materialized view
SQLE_TEXT_MV_TIND_NOT_ALLOWED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1555
SQLSTATE
WT038
Sybase error code

Probable cause
You cannot use REFRESH TEXT INDEX or TRUNCATE TEXT INDEX on a text index that is created for a
materialized view. You cannot alter the text index to use a different refresh type.

#### 1.1.4.953 Statement requires too much memory during %1

Error constant
SQLE_DYNAMIC_MEMORY_LIMIT
ODBC 2 state
ODBC 3 state
Parameter 1
Description of what the server was doing when the error
occurred
Severity
SQLCODE
-1899
SQLSTATE
54W19
Sybase error code
Probable cause
The statement requires more dynamic memory than it is allowed to use. Increasing the maximum cache size
or reducing the multiprogramming level may resolve this error. Consider rewriting the query so that the internal
limit is not exceeded.

#### 1.1.4.954 Statement size or complexity exceeds server limits

SQLE_SYNTACTIC_LIMIT
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-890
SQLSTATE
54W01
Sybase error code

Probable cause
The statement contains one or more constructs whose size make it impossible to process. Increasing the
maximum cache size, page size, or stack size may resolve this error. Consider rewriting the query so that the
internal limit is not exceeded.

#### 1.1.4.955 Statement timed out: '%1'

Error constant
SQLE_STATEMENT_TIMEOUT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Statement type
Severity
SQLCODE
-1231
SQLSTATE
57W05
Sybase error code
Probable cause
The statement failed because it did not complete within the allotted or specified time.

#### 1.1.4.956 Statement's size limit is invalid

SQLE_INVALID_CURSOR_RANGE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-674
SQLSTATE
09W07
Sybase error code

Probable cause
FIRST or TOP n are used in a SELECT statement to limit the size of a result. The size limit must be an integer
greater than 0 and less than 9223372036854775807 (2 64 -1).

#### 1.1.4.957 Stop listener error: %1

Error constant
SQLE_STOP_LISTENER_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Error text or internal error code
Severity
SQLCODE
-1885
SQLSTATE
08WEI
Sybase error code
Probable cause
An error occurred stopping a listener.

#### 1.1.4.958 Storing certificates is not supported for this database

database
SQLE_CERTIFICATES_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1587
SQLSTATE
55W42
Sybase error code

Probable cause
The current database does not have catalog support for certificates. To use this feature, upgrade your database
to the most recent version.

#### 1.1.4.959 Storing OData Producers is not supported for this database

database
Error constant
SQLE_ODATA_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1772
SQLSTATE
55W45
Sybase error code
Probable cause
The current database does not have catalog support for OData Producers. To use this feature, upgrade your
database to the most recent version.

#### 1.1.4.960 Storing time zone information is not supported for this database

this database
SQLE_TIMEZONES_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1789
SQLSTATE
55W49
Sybase error code

Probable cause
The current database does not have catalog support for time zone information. To use this feature, upgrade
your database to the most recent version.

#### 1.1.4.961 String '%1' cannot be used as quote when QUOTE ALL is specified

ALL is specified
Error constant
UNSUPPORTED_QUOTE_CHARACTER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specified quote string.
Severity
SQLCODE
-1932
SQLSTATE
WL020
Sybase error code
Probable cause
The specified string cannot be used as a quote for the UNLOAD statement when the QUOTE ALL option is
specified.

#### 1.1.4.962 Subquery allowed only one SELECT list item

SQLE_SUBQUERY_SELECT_LIST
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-151
SQLSTATE
Sybase error code

Probable cause
You entered a subquery that has more than one column in the SELECT list. Change the SELECT list to have only
one column.

#### 1.1.4.963 Subquery cannot return more than one row

Error constant
SQLE_SUBQUERY_RESULT_NOT_UNIQUE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-186
SQLSTATE
21W01
Sybase error code
Probable cause
You used a subquery that returns more than one row, in a context where only a single row can be used. If the
subquery is in the WHERE clause, you might be able to use the IN keyword.

#### 1.1.4.964 Subscription '%1' not found

Error constant
SQLE_SUBSCRIPTION_NAME_NOT_FOUND

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of subscription
Severity
SQLCODE
-1326
SQLSTATE
5RW40
Sybase error code
Probable cause
You attempted to ALTER, DROP, or otherwise reference a subscription that does not exist.

#### 1.1.4.965 Subscription to '%1' for '%2' already exists

Error constant
SQLE_SUBSCRIPTION_NOT_UNIQUE
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the publication.
Parameter 2
Name of the user.
Severity
SQLCODE
-282
SQLSTATE
5RW03
Sybase error code
Probable cause
You attempted to create a subscription that already exists.

#### 1.1.4.966 Subscription to '%1' for '%2' not found

Error constant
SQLE_SUBSCRIPTION_NOT_FOUND
ODBC 2 state
S0002

ODBC 3 state
42S02
Parameter 1
Name of the publication.
Parameter 2
Name of the user.
Severity
SQLCODE
-283
SQLSTATE
5RW04
Sybase error code
Probable cause
You attempted to drop, start, or synchronize a subscription that does not exist.

#### 1.1.4.967 Subscription to publication '%1' for '%2' omitted from statement

from statement
Error constant
SQLE_SUBSCRIPTION_OMITTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of publication
Parameter 2
Name of MobiLink user
Severity
SQLCODE
-1323
SQLSTATE
WW141
Sybase error code
Probable cause
A START SYNCHRONIZATION SCHEMA CHANGE statement lists a table that will be modified, but a
subscription which refers to that table was omitted from the statement.

#### 1.1.4.968 Support for materialized views is not available for this database

this database
Error constant
SQLE_MAT_VIEWS_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1029
SQLSTATE
0AW15
Sybase error code
Probable cause
The statement being executed requires support for materialized views, but the database being used does not
have the materialized view capability.

#### 1.1.4.969 Support for permissions on dbspaces is not available for this database

available for this database
SQLE_DBSPACE_PERMS_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1183
SQLSTATE
0AW22
Sybase error code
Probable cause
The statement being executed requires support for permissions on dbspaces, but the database being used
does not have this capability. The database must be recreated or upgraded using a version of the server that
supports permissions on dbspaces.

#### 1.1.4.970 Support for spatial is not available for this CPU

Error constant
SQLE_SLERR_CPU_NEED_SSE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1515
SQLSTATE
2FW91
Sybase error code
Probable cause
Spatial data support for 32-bit Windows and 32-bit Linux requires a CPU that supports the SSE2 instructions.

#### 1.1.4.971 Support for spatial is not available for this database

SQLE_SLERR_NEED_UPGRADE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1412
SQLSTATE
2FW02
Sybase error code
Probable cause
Operations involving spatial support cannot be used with this database because it needs to be upgraded to use
spatial features.

#### 1.1.4.972 Synchronization download failed to complete

Error constant
SQLE_INCOMPLETE_SYNCHRONIZATION
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1271
SQLSTATE
0AW23
Sybase error code
Probable cause
You attempted to synchronize an UltraLite database. During the synchronization session, an incomplete
download stream was received from the consolidated database. The reason for the upload failure can be found
in the synchronization log file.

#### 1.1.4.973 Synchronization failed due to an error on the MobiLink server: %1

MobiLink server: %1
Error constant
SQLE_SERVER_SYNCHRONIZATION_ERROR
ODBC 2 state
ODBC 3 state
Parameter 1
The description of the error from the MobiLink server.
Severity
SQLCODE
-857
SQLSTATE
0AW12
Sybase error code
Probable cause
Synchronization failed at the MobiLink server. More details can be found in the MobiLink server log file.

#### 1.1.4.974 Synchronization failed with internal error: %1

Error constant
SQLE_SYNCCMD_INTERNAL_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The internal error number
Severity
SQLCODE
-1373
SQLSTATE
5RW43
Sybase error code
Probable cause
An internal error occurred during the execution of the SYNCHRONIZE statement.

#### 1.1.4.975 Synchronization failed. Check the dbmlsync log file for more details

for more details
Error constant
SQLE_MLA_SYNC_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1385
SQLSTATE
WW161
Sybase error code
Probable cause
The synchronization was not successful. Check the dbmlsync log file for more details.

#### 1.1.4.976 Synchronization failed. Check the results of the call to sp_get_last_synchronize_result( %1 ) for more information

to sp_get_last_synchronize_result( %1 ) for more
information
Error constant
SQLE_SYNCCMD_SYNCH_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The connection ID on which the failed synchronization took
place
Severity
SQLCODE
-1374
SQLSTATE
5RW44
Sybase error code
Probable cause
The synchronization completed, but the exit code from the synchronization indicates that the synchronization
was not successful. Check the results of the call to sp_get_last_synchronize_result() for more information.

#### 1.1.4.977 Synchronization is already in progress

SQLE_SYNCHRONIZATION_IN_PROGRESS
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1272
SQLSTATE
0AW24
Sybase error code
Probable cause
You attempted to synchronize an UltraLite database but this database is being synchronized on another
thread.

#### 1.1.4.978 Synchronization message type '%1' not found

Error constant
SQLE_NOT_SYNC_TYPE
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of synchronization message type.
Severity
SQLCODE
-765
SQLSTATE
5RW11
Sybase error code
Probable cause
You referred to a synchronization message type that is not defined in this database.

#### 1.1.4.979 Synchronization option '%1' contains semicolon, equal sign, curly brace, or is null

equal sign, curly brace, or is null
Error constant
SQLE_BAD_SYNC_OPTION_VALUE
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
The name of the synchronization option.
Severity
SQLCODE
-797
SQLSTATE
5RW32
Sybase error code
Probable cause
You attempted to set a synchronization option with an invalid value.

#### 1.1.4.980 Synchronization option '%1' not found

Error constant
SQLE_SYNC_OPTION_NOT_FOUND
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
The name of the synchronization option.
Severity
SQLCODE
-805
SQLSTATE
5RW33
Sybase error code
Probable cause
You attempted to delete an undefined synchronization option.

#### 1.1.4.981 Synchronization option is too long

Error constant
SQLE_SYNC_OPTION_TOO_LONG
ODBC 2 state
ODBC 3 state
42S02
Severity
SQLCODE
-809
SQLSTATE
5RW34
Sybase error code
Probable cause
Synchronization option list cannot be longer than the database page size.

#### 1.1.4.982 Synchronization profile '%1' already exists

Error constant
SQLE_SYNC_PROFILE_ALREADY_EXISTS

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the synchronization profile.
Severity
SQLCODE
-1223
SQLSTATE
42W76
Sybase error code
Probable cause
You tried to create a synchronization profile that already exists.

#### 1.1.4.983 Synchronization profile '%1' has invalid parameter '%2'

'%2'
SQLE_SYNC_PROFILE_INVALID
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the synchronization profile that is invalid.
Parameter 2
Name of the parameter in the profile that has the problem.
Severity
SQLCODE
-1224
SQLSTATE
42W77
Sybase error code

Probable cause
You tried to create or alter a synchronization profile using a string containing an invalid parameter setting.

#### 1.1.4.984 Synchronization profile '%1' not found

Error constant
SQLE_SYNC_PROFILE_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the synchronization profile.
Severity
SQLCODE
-1217
SQLSTATE
42W75
Sybase error code
Probable cause
You tried to access a synchronization profile that the database could not find.

#### 1.1.4.985 Synchronization profiles are not supported for this database

database
Error constant
SQLE_SYNC_PROFILE_UPGRADE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1225
SQLSTATE
42W78
Sybase error code
Probable cause
The current database does not have catalog support for synchronization profiles. To use this feature, upgrade
your database to the most recent version.

#### 1.1.4.986 Synchronization schema changes and script versions are not supported for this database

versions are not supported for this database
SQLE_SYNC_SCHEMA_UPGRADE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1319
SQLSTATE
WW137
Sybase error code
Probable cause
The current database does not have catalog support for synchronization schema changes and script versions.
To use this feature, upgrade your database to the most recent version.

#### 1.1.4.987 Synchronization server failed to commit the upload

Error constant
SQLE_UPLOAD_FAILED_AT_SERVER
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-794
SQLSTATE
0AW09
Sybase error code
Probable cause
You attempted to synchronize an UltraLite database. During the synchronization session, a complete upload
stream was sent that could not be committed to the consolidated database. The reason for the upload failure
can be found in the synchronization log file.

#### 1.1.4.988 Syntax error near '%1' %2 %3

SQLE_SYNTAX_ERROR
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The word or symbol where the syntax error has been de-
tected.
Parameter 2
Line number.
Parameter 3
SQL dialect.
Severity
SQLCODE
-131
SQLSTATE
42W04
Sybase error code

Probable cause
The database server cannot understand the statement you are trying to execute. If you used a keyword (such
as DATE) for a column name, try enclosing the keyword in quotation marks ("DATE") or brackets ([DATE]).

#### 1.1.4.989 Syntax error near '%1' -- Materialized view definition must not use the following construct: '%2'

Error constant
SQLE_MATVIEW_SYNTAX_ERROR
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Location of the feature used that is not permitted.
Parameter 2
The feature used that is not permitted.
Severity
SQLCODE
-1031
SQLSTATE
42WB3
Sybase error code
Probable cause
You attempted to create a materialized view whose definition violates one of the restrictions.

#### 1.1.4.990 Syntax error near '%1' -- The materialized view cannot be changed to immediate because its definition contains an illegal construct: '%2'

SQLE_UPDATABLE_MATVIEW_SYNTAX_ERROR
Error constant
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Location of the feature used that is not permitted.
Parameter 2
The feature used that is not permitted.
Severity
SQLCODE
-1032

SQLSTATE
42WB4
Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view whose definition violates one of
the restrictions.

#### 1.1.4.991 System command failed with return code %1

Error constant
SQLE_SYSTEM_COMMAND_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Return code value.
Severity
SQLCODE
-910
SQLSTATE
38W01
Sybase error code
Probable cause
A non-zero return code resulted when executing a system command.

#### 1.1.4.992 System event type '%1' not found

SQLE_EVENT_TYPE_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the system event type that could not be found.
Severity
SQLCODE
-806
SQLSTATE
WE008

Sybase error code
Probable cause
You have attempted to create an event with a system event type name that does not exist in the database.

#### 1.1.4.993 System Privileges and Roles feature is not supported in this database

supported in this database
Error constant
SQLE_ROLES_NOT_SUPPORTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1535
SQLSTATE
0AW27
Sybase error code
Probable cause
The current database is an older database and does not have catalog support for System Privileges and Roles
feature. To use this feature, upgrade your database to the most recent version.

#### 1.1.4.994 Table '%1' contains a spatial column '%2' and no primary key

primary key
SQLE_SLERR_UPDDEL_NO_PK
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The table name.
Parameter 2
The spatial column name.
Severity
SQLCODE
-1452

SQLSTATE
2FW45
Sybase error code
Probable cause
An update or delete statement cannot be performed for a table that contains a spatial column unless there is a
primary key defined for the table.

#### 1.1.4.995 Table '%1' contains an invalid reference to the ROWID function

ROWID function
Error constant
SQLE_INVALID_ROWID_PLACEMENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the table that contains the invalid reference.
Severity
SQLCODE
-1115
SQLSTATE
42WC1
Sybase error code
Probable cause
The ROWID function cannot be used in a computed column expression or in a CHECK constraint.

#### 1.1.4.996 Table '%1' for LOAD TABLE statement not supported in BEGIN PARALLEL WORK...END PARALLEL WORK statement

Error constant
PARALLEL_LOADTABLE_TABLE_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specified table name.

Severity
SQLCODE
-1946
SQLSTATE
0AW42
Sybase error code
Probable cause
The specified table for the LOAD TABLE statement is not supported when the statement is in the BEGIN
PARALLEL WORK...END PARALLEL WORK statement.

#### 1.1.4.997 Table '%1' has a foreign key with a referential action

action
Error constant
SQLE_TABLE_HAS_REFACTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the table with the referential action.
Severity
SQLCODE
-677
SQLSTATE
Sybase error code
Probable cause
The table could not be renamed as it has a foreign key with a referential action. To rename the table, first drop
the foreign key constraints.

#### 1.1.4.998 Table '%1' has no columns

Error constant
SQLE_TABLE_HAS_NO_COLUMNS
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the table.

Severity
SQLCODE
-1273
SQLSTATE
0EW00
Sybase error code
Probable cause
You attempted to create a table without columns.

#### 1.1.4.999 Table '%1' has no primary key

Error constant
SQLE_NO_PRIMARY_KEY
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the table that does not have a primary key.
Severity
SQLCODE
-118
SQLSTATE
Sybase error code
Probable cause
You attempted an operation that required the referenced table to have a primary key. Examples of these
operations include adding a foreign key, or using the ON EXISTING clause of an INSERT statement, while
referring to a table that does not have a primary key. You must add a primary key to the referenced table.

#### 1.1.4.1000 Table '%1' has publications

Error constant
SQLE_TABLE_HAS_PUBLICATIONS
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the table that has publications.
Severity
SQLCODE
-281
SQLSTATE
5RW02
Sybase error code
Probable cause
You attempted to drop a table that has publications defined.

#### 1.1.4.1001 Table '%1' is already included

SQLE_TABLE_ALREADY_INCLUDED
Error constant
ODBC 2 state
ODBC 3 state
42S02
Parameter 1
The name of the table.
Severity
SQLCODE
-822
SQLSTATE
5RW36
Sybase error code

Probable cause
You attempted to add or modify a publication or synchronization definition such that the same table is included
twice.

#### 1.1.4.1002 Table '%1' is in an outer join cycle

Error constant
SQLE_OUTER_JOIN_CYCLE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of a table in the cycle.
Severity
SQLCODE
-136
SQLSTATE
52W14
Sybase error code
Probable cause
You specified outer joins that create a cycle of tables.

#### 1.1.4.1003 Table '%1' is part of a synchronization subscription and can only be ALTERed within a synchronization schema change

Error constant
SQLE_SYNC_CONTAINS_TABLE
ODBC 2 state
ODBC 3 state
42S02

Parameter 1
The name of the table.
Severity
SQLCODE
-819
SQLSTATE
5RW35
Sybase error code
Probable cause
A table belonging to a synchronization subscription cannot be altered except within a synchronization schema
change or by using dbmlsync.

#### 1.1.4.1004 Table '%1' must synchronize to be in publication '%2'

'%2'
Error constant
SQLE_TABLE_MUST_SYNCHRONIZE_IN_PUB
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of table
Parameter 2
Name of publication
Severity
SQLCODE
-1328
SQLSTATE
WW143
Sybase error code
Probable cause
A publication cannot contain a table with a SYNCHRONIZE OFF constraint; all tables in a publication must
synchronize. You attempted to add a table with a SYNCHRONIZE OFF constraint to a publication, or to alter a
table to use SYNCHRONIZE OFF when the table is already in a publication.

#### 1.1.4.1005 Table '%1' not found

Error constant
SQLE_TABLE_NOT_FOUND
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the table that could not be found.
Severity
SQLCODE
-141
SQLSTATE
42W33
Sybase error code
Probable cause
You misspelled the name of a table, or you did not qualify a table name with the owner name. For example, you
might have referred to "table_name instead of "owner"."table_name".

#### 1.1.4.1006 Table '%1' requires a unique correlation name

SQLE_CORRELATION_NAME_NEEDED
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the table that needs a unique correlation name.
Severity
SQLCODE
-137
SQLSTATE
52W15
Sybase error code

Probable cause
You specified a join that joins a table to itself. You need to use unique correlation names to have multiple
instances of a table.

#### 1.1.4.1007 Table '%1' specified more than once in BEGIN PARALLEL WORK...END PARALLEL WORK statement

Error constant
PARALLEL_STMT_DUPLICATE_TABLE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1937
SQLSTATE
42WF8
Sybase error code
Probable cause
You specified the same table more than once in the BEGIN PARALLEL WORK...END PARALLEL WORK
statement. Remove the duplicated database table from the statement in the BEGIN PARALLEL WORK...END
PARALLEL WORK statement.

#### 1.1.4.1008 Table already has a primary key

SQLE_EXISTING_PRIMARY_KEY
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-112
SQLSTATE
Sybase error code

Probable cause
You attempted to add a primary key on a table that already has a primary key defined. You must delete the
current primary key before adding a new one.

#### 1.1.4.1009 Table cannot have two primary keys

Error constant
SQLE_PRIMARY_KEY_TWICE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-126
SQLSTATE
52W05
Sybase error code
Probable cause
You specified the primary key twice in a CREATE TABLE statement.

#### 1.1.4.1010 Table created or altered after start of snapshot

SQLE_SNAPSHOT_TABLE_CHANGED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1061
SQLSTATE
42WB8
Sybase error code

Probable cause
A snapshot transaction attempted to use a table that was created or altered after the transaction began.

#### 1.1.4.1011 Table in use

Error constant
SQLE_TABLE_IN_USE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-214
SQLSTATE
42W21
Sybase error code
Probable cause
You attempted to ALTER or DROP a table that is being used by other active users of the database.

#### 1.1.4.1012 Table must be empty

Error constant
SQLE_TABLE_MUST_BE_EMPTY
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Severity
SQLCODE
-116
SQLSTATE
55W02
Sybase error code
Probable cause
You attempted to modify a table, and the database server can only perform the change if there are no rows in
the table.

#### 1.1.4.1013 Table name '%1' is ambiguous

Error constant
SQLE_AMBIGUOUS_TABLE_NAME
ODBC 2 state
S0013
ODBC 3 state
42S13
Parameter 1
Name of an ambiguous table.
Severity
SQLCODE
-852
SQLSTATE
52W42
Sybase error code
Probable cause
A statement has referred to a table name that is not unique. Preface the table name by an owner name.

#### 1.1.4.1014 Table or view '%1' is not valid for use with this statement

statement
Error constant
SQLE_INVALID_TABLE_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of table

Severity
SQLCODE
-1321
SQLSTATE
WW139
Sybase error code
Probable cause
The named table or view cannot be used with this statement. For example, the statement may not allow
temporary tables or views.

#### 1.1.4.1015 Table Parameterized Functions and V4 TableUDFs are not supported for this database

are not supported for this database
Error constant
SQLE_TPF_UPGRADE_REQUIRED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1605
SQLSTATE
WP020
Sybase error code
Probable cause
The current database does not have catalog support for table parameterized functions. To use this feature,
upgrade your database to the most recent version.

#### 1.1.4.1016 Table parameterized functions are not allowed across server types

across server types
Error constant
SQLE_TPF_NOT_ALLOWED_ACROSS_SERVERS
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Severity
SQLCODE
-1578
SQLSTATE
WO009
Sybase error code
Probable cause
Table parameterized functions are not allowed across server types if a query is not processed in full-
passthrough mode.

#### 1.1.4.1017 Table reference '%1' has been invalidated

Error constant
SQLE_TABLEREF_INVALIDATED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the table reference variable
Severity
SQLCODE
-1794
SQLSTATE
42X11
Sybase error code
Probable cause
You tried to use a table reference whose referent has been dropped since the table reference was created.

#### 1.1.4.1018 Table reference types not supported

Error constant
SQLE_TABLEREF_TYPES_NOT_SUPPORTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1793

SQLSTATE
0AW30
Sybase error code
Probable cause
The current database is an older database and does not have support for table reference types. To use this
feature, upgrade your database to the most recent version.
1.1.4.1019  Tables related by key constraint must both
be permanent, or both be temporary and not
created with ON COMMIT DELETE ROWS. For global
temporary tables they must both be shared if one is
shared
Error constant
SQLE_INVALID_FOREIGN_KEY_TABLE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-850
SQLSTATE
42R02
Sybase error code
Probable cause
Tables involved in a key constraint relationship must both be permanent user tables or both be temporary
tables not created with ON COMMIT DELETE ROWS. Change the definition of one or both tables using ALTER
TABLE.

#### 1.1.4.1020 Tag ID: '%1' specifies a value not bounded by an array

array
Error constant
SQLE_FOR_JSON_EXPLICIT_NOT_IN_ARRAY
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The value of the tag ID which is not bounded by an array.
Severity
SQLCODE
-1613
SQLSTATE
WX017
Sybase error code
Probable cause
A union of multiple queries whose tags have the same parent may generate this error when the queries mix
object and value notation.

#### 1.1.4.1021 Task '%1' is not allowed

SQLE_SYSPRIV_CREATION_NOT_ALLLOWED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the internal task that was provided by the user.
Severity
SQLCODE
-1527
SQLSTATE
28W18
Sybase error code
Probable cause
Creation of system privilege is an internal task, allowed only during database creation or upgrade.

#### 1.1.4.1022 TDS login requests with RSA encrypted passwords must also use a nonce

must also use a nonce
Error constant
SQLE_RSA_EN-
CRYPTED_TDS_LOGIN_MUST_HAVE_NONCE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1701
SQLSTATE
28W23
Sybase error code
Probable cause
You attempted to perform a TDS login with a client that does not use a nonce with the RSA encrypted
password. The current TDS login setting does not allow RSA encrypted TDS login requests without a nonce.
Change the tdsl server option setting or connect using a TDS client that supports a nonce with the RSA
encrypted password.

#### 1.1.4.1023 TDS login requests with unencrypted passwords are not permitted

are not permitted
SQLE_UNENCRYPTED_TDS_LOGIN_REQUESTS_NOT_PER-
Error constant
MITTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1700
SQLSTATE
28W22
Sybase error code

Probable cause
You attempted to perform a TDS login without using RSA encryption for the password. The current TDS login
setting does not allow unencrypted TDS login requests. Change the tdsl server option setting or connect using
an RSA encrypted password.

#### 1.1.4.1024 Temporary mutex or semaphore can only be dropped by the connection that created it

dropped by the connection that created it
Error constant
SQLE_NOT_TEMP_OWNER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1809
SQLSTATE
28W24
Sybase error code
Probable cause
A temporary mutex or semaphore object can only be dropped by the connection that created it.

#### 1.1.4.1025 Temporary space limit exceeded

SQLE_TEMP_SPACE_LIMIT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1000
SQLSTATE
54W05

Sybase error code
Probable cause
The connection has exceeded its temporary-space usage limit. This limit is based in part on the amount of
free-space remaining on the drive containing the temporary file. Try deleting unused files from the drive, or
placing the temporary file on a drive with more space available. See the -dt server option to specify a directory
for temporary files.

#### 1.1.4.1026 Term length outside allowed range

Error constant
SQLE_TEXT_BAD_TERM_LENGTH
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1162
SQLSTATE
WT007
Sybase error code
Probable cause
The minimum and maximum term lengths must both be greater than 0 and less than or equal to 60
characters.

#### 1.1.4.1027 Terminated by user -- transaction rolled back

SQLE_TERMINATED_BY_USER
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-302
SQLSTATE
40W02
Sybase error code

Probable cause
You canceled a statement while the database was executing. A ROLLBACK statement has been automatically
executed.

#### 1.1.4.1028 Text configuration "%1" already exists

Error constant
SQLE_TEXT_CONFIG_ALREADY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The text configuration name.
Severity
SQLCODE
-1161
SQLSTATE
WT006
Sybase error code
Probable cause
The specified text configuration name already exists.

#### 1.1.4.1029 Text configuration "%1"."%2" not found

SQLE_TEXT_CONFIG_NOT_FOUND
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The text configuration creator.
Parameter 2
The text configuration name.
Severity
SQLCODE
-1160
SQLSTATE
WT005
Sybase error code

Probable cause
The specified text configuration does not exist.

#### 1.1.4.1030 Text index \"%1\" on table \"%2\" exists. Table with text index is not supported for LOAD TABLE statement in BEGIN PARALLEL WORK...END PARALLEL WORK statement

Error constant
PARALLEL_LOADTABLE_TEXTINDEX_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the text index.
Parameter 2
The name of the table.
Severity
SQLCODE
-1947
SQLSTATE
0AW43
Sybase error code
Probable cause
The specified table for the LOAD TABLE statement is not supported when it has a text index and the statement
is in the BEGIN PARALLEL WORK...END PARALLEL WORK statement.

#### 1.1.4.1031 Text index %1 cannot be used with text procedure %2

%2
SQLE_TEXT_INVALID_INDEX_FOR_PROC
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the text index.
Parameter 2
The name of the procedure for which the specified index is
invalid.
Severity

SQLCODE
-1526
SQLSTATE
WT036
Sybase error code
Probable cause
The specified text procedure cannot be used with the text index. The text procedure charset has to correspond
to the charset of the text index it is accessing.

#### 1.1.4.1032 Text index with external prefilter cannot contain both binary and string columns

both binary and string columns
Error constant
SQLE_TEXT_INDEX_MIXED_COLUMNS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1512
SQLSTATE
WT034
Sybase error code
Probable cause
One or more, but not all, of the columns specified for the text index is of type binary, and the text configuration
object has a prefilter library specified. Text indexes using a prefilter library can contain either binary columns or
string data type columns, but not both.

#### 1.1.4.1033 Text indexes are not allowed across server types

Error constant
SQLE_TEXT_NOT_ALLOWED_ACROSS_SERVERS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1511
SQLSTATE
WT033
Sybase error code
Probable cause
Text indexes are not allowed across server types if the query is processed in full-passthrough mode.

#### 1.1.4.1034 Text indexes are not supported for this database

SQLE_TEXT_UPGRADE_REQUIRED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1166
SQLSTATE
WT011
Sybase error code

Probable cause
The current database does not have catalog support for text indexes. To use this feature, upgrade your
database to the most recent version.

#### 1.1.4.1035 Text indexes on materialized views are not supported for this database

supported for this database
Error constant
SQLE_TEXT_MV_UPGRADE_REQUIRED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1592
SQLSTATE
WT041
Sybase error code
Probable cause
The current database does not have catalog support for text indexes on materialized views. To use this feature,
upgrade your database to the most recent version.

#### 1.1.4.1036 Text queries cannot contain more than 300 terms

SQLE_TEXT_QUERY_TOO_LONG
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1370
SQLSTATE
WT022
Sybase error code
Probable cause
A text query should contain 300 terms or less.

#### 1.1.4.1037 Text query parser error: %1

Error constant
SQLE_TEXT_PARSER_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The error message returned by the text query parser.
Severity
SQLCODE
-1164
SQLSTATE
WT009
Sybase error code
Probable cause
The text query could not be parsed.

#### 1.1.4.1038 The %1 algorithm is not available in FIPS mode

Error constant
SQLE_FIPS_NOT_AVAILABLE
ODBC 2 state
ERROR
ODBC 3 state
Parameter 1
Name of the algorithm.
Severity
SQLCODE
-1071
SQLSTATE
0AW16
Sybase error code
Probable cause
The specified algorithm is not available when the server is running in FIPS mode.

#### 1.1.4.1039 The %1 remote data access class is no longer supported, please use %2 instead

supported, please use %2 instead
Error constant
SQLE_OMNI_JDBC_NO_LONGER_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The JDBC based remote data access class.
Parameter 2
The preferred ODBC based remote data access class.
Severity
SQLCODE
-1617
SQLSTATE
WO033
Sybase error code
Probable cause
You attempted to use a JDBC based remote data access class which is no longer supported. Please use the
appropriate ODBC based class instead.

#### 1.1.4.1040 The '%1' attribute contains mismatched parentheses within '%2'

parentheses within '%2'
Error constant
SQLE_INVALID_ATTRIBUTE_MISMATCH_BRACES
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The attribute on the procedure.
Parameter 2
The value of the attribute.
Severity
SQLCODE
-1129
SQLSTATE
WW086
Sybase error code
Probable cause
The value of the attribute is not valid due to mismatched parenthesis (or possibly braces if specifying a port
option).

#### 1.1.4.1041 The '%1' attribute is missing a comma within '%2'

Error constant
SQLE_INVALID_ATTRIBUTE_MISSING_COMMA
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The attribute on the procedure.
Parameter 2
The value of the attribute.
Severity
SQLCODE
-1130
SQLSTATE
WW087
Sybase error code
Probable cause
The value of the attribute is not valid due to a missing comma.

#### 1.1.4.1042 The '%1' attribute is not valid with procedure type '%2'

'%2'
Error constant
SQLE_INVALID_ATTRIBUTE_WITH_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The attribute on the procedure.
Parameter 2
The procedure type.
Severity
SQLCODE
-1034
SQLSTATE
WW064
Sybase error code
Probable cause
This attribute is not applicable to the given procedure type.

#### 1.1.4.1043 The '%1' property is no longer supported

Error constant
SQLE_UNSUPPORTED_PROPERTY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the invalid property.
Severity
SQLCODE
-1119
SQLSTATE
42WC2
Sybase error code
Probable cause
The specified property is not supported in the current release.

#### 1.1.4.1044 The 'currval' operator is not defined yet for sequence '%1' for this connection

sequence '%1' for this connection
Error constant
SQLE_SEQUENCE_CURRVAL_NOT_DEFINED
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the sequence.
Severity
SQLCODE
-1363
SQLSTATE
52W51
Sybase error code
Probable cause
The currval operator of a sequence generator is only defined once nextval has been called for the sequence
within the current connection.

#### 1.1.4.1045 The address parameter "%1" conflicts with an existing %2 listener

existing %2 listener
Error constant
SQLE_START_LISTENER_CONFLICT_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The listener address parameter
Parameter 2
The listener type
Severity
SQLCODE
-1765
SQLSTATE
08WD1
Sybase error code
Probable cause
You attempted to start a listener that already is running. The specified address parameter conflicts with an
existing listener.

#### 1.1.4.1046 The address parameter "%1" provided to stop a listener has an invalid IP address or no port

listener has an invalid IP address or no port
SQLE_STOP_LISTENER_INVALID_ADDRESS_OR_NO_PORT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The listener address parameter
Severity
SQLCODE
-1884
SQLSTATE
08WEH
Sybase error code
Probable cause
You attempted to stop a listener with an invalid IP address or no port number. For example, a port number
should be specified when stopping a listener.

#### 1.1.4.1047 The aggregate expression '%1' must appear in either the SELECT list or a HAVING clause subquery

either the SELECT list or a HAVING clause subquery
Error constant
SQLE_INVALID_AGGREGATE_PLACEMENT
ODBC 2 state
ODBC 3 state
Parameter 1
The aggregated expression in error.
Severity
SQLCODE
-862
SQLSTATE
42W69
Sybase error code
Probable cause
An aggregated expression containing an outer reference must either appear in a SELECT list expression (a
subselect), or in a HAVING clause subquery in the query whose FROM clause contains the table with the
column being aggregated.

#### 1.1.4.1048 The arguments to this procedure must be literal strings

strings
SQLE_TEXT_NEED_CONSTANT_ARGUMENT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1216
SQLSTATE
WT017
Sybase error code
Probable cause
This procedure only accepts literal strings as arguments.

#### 1.1.4.1049 The attempt to drop LDAP server "%1" failed, suspend the server to drop it

suspend the server to drop it
Error constant
SQLE_INVALID_STATE_CHANGE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the LDAP Server.
Severity
SQLCODE
-1571
SQLSTATE
WW204
Sybase error code
Probable cause
An attempt to drop an LDAP Server failed because it was in the READY or ACTIVE state. Use WITH SUSPEND to
change state before dropping server.

#### 1.1.4.1050 The attribute '%1' sets an option '%2' that is incompatible with '%3'

incompatible with '%3'
Error constant
SQLE_INVALID_ATTRIBUTE_OPTIONS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The attribute on the procedure.
Parameter 2
The first option of the attribute.
Parameter 3
The second option of the attribute.
Severity
SQLCODE
-1131
SQLSTATE
WW088
Sybase error code
Probable cause
The options specified for this attribute are not compatible.

#### 1.1.4.1051 The bind to URL '%1' failed. The most recently reported LDAP API error is: '%2'

reported LDAP API error is: '%2'
Error constant
SQLE_LDAPUA_BINDFAIL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The LDAP URL used with bind().
Parameter 2
The LDAP API error message.
Severity
SQLCODE
-1600
SQLSTATE
WW211
Sybase error code
Probable cause
The message is reported from the LDAP API client with context from the LDAP User Authentication methods.
An LDAP administrator or SAP Tech Support may use these low level messages to direct the DBA how to
resolve a problem.

#### 1.1.4.1052 The column '%1' does not exist in the remote table

SQLE_OMNI_NOSUCH_COLUMN
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the column.
Severity
SQLCODE
-722
SQLSTATE
WO016
Sybase error code
Probable cause
The column specified in the CREATE EXISTING statement does not exist in the remote table.

#### 1.1.4.1053 The communications environment could not be created

created
Error constant
SQLE_FAILED_TO_CREATE_STREAMS_ENV
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-740
SQLSTATE
WW024
Sybase error code
Probable cause
The communications environment could not be created. Either there are insufficient resources to create the
environment or the language resource file cannot be found.

#### 1.1.4.1054 The comparison '%1' cannot be used with geometries

geometries
SQLE_SLERR_COMPARISON_PREDICATE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The type of comparison relation.
Severity
SQLCODE
-1440
SQLSTATE
2FW33
Sybase error code
Probable cause
Geometry values cannot be compared with operators such as < or >. Geometries can only be compared with =
and <>.

#### 1.1.4.1055 The connection parameters file could not be found

Error constant
SQLE_NO_PROFILE_FILE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-654
SQLSTATE
08W37
Sybase error code
Probable cause
An attempt was made to parse a connection string containing a connection profile but the connection
parameters file could not be found.

#### 1.1.4.1056 The CONVERT USING clause must be specified when creating a unit of measure

when creating a unit of measure
Error constant
SQLE_SLERR_DDL_UOM_NOFACT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1455
SQLSTATE
2FW48
Sybase error code
Probable cause
A CREATE SPATIAL UNIT OF MEASURE statement was used without including the CONVERT USING clause.

#### 1.1.4.1057 The cursor name '%1' already exists

Error constant
SQLE_DUPLICATE_CURSOR_NAME

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the cursor.
Severity
SQLCODE
-683
SQLSTATE
WJ004
Sybase error code
Probable cause
You attempted to declare a cursor with a name that already exists. Cursor names must be unique within a
connection.

#### 1.1.4.1058 The data is not in a recognized format

SQLE_SLERR_UNKOWNN_FORMAT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1434
SQLSTATE
2FW27
Sybase error code
Probable cause
The provided string is not in a recognized format to parse a geometry.

#### 1.1.4.1059 The data type of column or variable '%1' is not supported

supported
Error constant
SQLE_OMNI_UNSUPPORTED_DATATYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the column or variable.
Severity
SQLCODE
-736
SQLSTATE
WO022
Sybase error code
Probable cause
The column is defined with a data type that is not supported for remote tables or the variable is defined with a
datatype that is not supported for using and location clauses.

#### 1.1.4.1060 The data type specified for column '%1' is not compatible with the actual data type

compatible with the actual data type
SQLE_OMNI_DATATYPE_MISMATCH
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the column.
Severity
SQLCODE
-721
SQLSTATE
WO015
Sybase error code
Probable cause
The data type of the column specified in the CREATE EXISTING statement is not compatible with the actual
data type of the column in the remote table.

#### 1.1.4.1061 The database '%1' cannot be used for the SQL Anywhere Cockpit

Anywhere Cockpit
Error constant
SQLE_CANNOT_USE_NON_COCKPIT_DATABASE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the database file.
Severity
SQLCODE
-1840
SQLSTATE
08WF4
Sybase error code
Probable cause
The specified database file cannot be used for the SQL Anywhere Cockpit.

#### 1.1.4.1062 The database '%1' was not found

Error constant
SQLE_ULTRALITE_DATABASE_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the database specified or the default database
name.
Severity
SQLCODE
-954
SQLSTATE
WW034
Sybase error code
Probable cause
The named database was not found. Ensure your connection string properly names the desired database.

#### 1.1.4.1063 The database must be upgraded to use the KEY option on the SYNCHRONIZE command

option on the SYNCHRONIZE command
Error constant
SYNC_PROFILE_UPGRADE_KEY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1986
SQLSTATE
42W7B
Sybase error code
Probable cause
The current database does not allow the use of the KEY option on the SYNCHRONIZE command. To use this
feature, upgrade your database to the most recent version.

#### 1.1.4.1064 The database name 'utility_db' is reserved for the utility database

utility database
SQLE_DB_ALIAS_RESERVED_UTILDB
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-985
SQLSTATE
08W20
Sybase error code

Probable cause
You are attempting to start a database with the name "utility_db". This name is reserved for the utility
database.

#### 1.1.4.1065 The database name is reserved for SQL Anywhere Cockpit

Cockpit
Error constant
SQLE_DB_ALIAS_RESERVED_SQLACOCKPITDB
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1843
SQLSTATE
08WF7
Sybase error code
Probable cause
You are attempting to start a database with the reserved name. This name is reserved for the SQL Anywhere
Cockpit.

#### 1.1.4.1066 The database server failed to shut down the dbmlsync server

dbmlsync server
SQLE_SYNCCMD_SHUTDOWN_FAIL
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1378
SQLSTATE
5RW48
Sybase error code

Probable cause
The database server started a new dbmlsync server to process the SYNCHRONIZE statement, but
encountered an error while attempting to shut the process down.

#### 1.1.4.1067 The database was created

Error constant
SQLE_DATABASE_CREATED
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
WW061
Sybase error code
Probable cause
The specified UltraLite database was created using the specified schema when the connection was opened.

#### 1.1.4.1068 The dbicu library and server versions do not match

match
SQLE_ICU_DLL_VERSION_MISMATCH
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1124
SQLSTATE
WC014
Sybase error code
Probable cause
The server is unable to load ICU components that are required by this database. Ensure that the correct version
of the dbicu libraries are installed.

#### 1.1.4.1069 The dbmlsync server did not have sufficient database permissions

database permissions
Error constant
SQLE_SYNCCMD_CANT_ACCESS_RESULT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1714
SQLSTATE
5RW50
Sybase error code
Probable cause
The SYNCHRONIZE statement attempts to store the results of the synchronization in the synchronize_results
and synchronize_parameters tables. The user who executed the command, or the user specified in the USER
clause of the SYNCHRONIZE statement must have permission to insert rows into these tables.

#### 1.1.4.1070 The dbmlsync server failed to shut down in a timely manner

timely manner
SQLE_SYNCCMD_SHUTDOWN_SLOW
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1379
SQLSTATE
5RW49
Sybase error code

Probable cause
The database server started a new dbmlsync server to process the SYNCHRONIZE statement, was successful
in requesting that the process shut down, but the process did not shut down within the timeout value that was
specified.

#### 1.1.4.1071 The DBN/DBF parameters do not match the database for this alternate server name

database for this alternate server name
Error constant
SQLE_WRONG_DB_ON_ALT_SERVER_NAME
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1036
SQLSTATE
08W90
Sybase error code
Probable cause
The DBN or DBF parameters specified do not match the database using the specified alternate server name.

#### 1.1.4.1072 The dbspace '%1' cannot be dropped because it contains tables or indexes

contains tables or indexes
SQLE_DBSPACE_CONTAINS_TABLES
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the dbspace
Severity
SQLCODE
-1120
SQLSTATE
55W26
Sybase error code

Probable cause
You attempted to drop the named dbspace, but it contains tables or indexes. You must drop the tables and/or
indexes before dropping the dbspace.

#### 1.1.4.1073 The definition of temporary table '%1' has changed since last used

changed since last used
Error constant
SQLE_TEMP_TABLE_DEFINITION_CHANGED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The table name
Severity
SQLCODE
-1397
SQLSTATE
WW165
Sybase error code
Probable cause
The definition of a temporary table has changed since it was last used in a stored procedure or trigger. The
procedure must be recompiled.

#### 1.1.4.1074 The embedded SRID (%1) conflicts with the provided SRID (%2)

provided SRID (%2)
SQLE_SLERR_SRID_CONFLICT_EMBED_PARAM
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The SRID within the parsed string.
Parameter 2
The SRID provided as a parameter.
Severity
SQLCODE
-1426
SQLSTATE
2FW19
Sybase error code

Probable cause
A call to a spatial method had a string with an embedded SRID that differed from the SRID parameter to the
method.

#### 1.1.4.1075 The embedded SRID are inconsistent (%1 and %2)

Error constant
SQLE_SLERR_SRID_CONFLICT_EMBED_EMBED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The first SRID.
Parameter 2
The second SRID.
Severity
SQLCODE
-1427
SQLSTATE
2FW20
Sybase error code
Probable cause
A geometry in a string representation contains objects from different spatial reference systems.

#### 1.1.4.1076 The file '%1' is invalid when the disk sandbox feature is enabled for database '%2'

feature is enabled for database '%2'
SQLE_DISKSANDBOX_INVALID_PATH
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the invalid file.
Parameter 2
The name of the database that the disk sandbox feature is
enabled for.
Severity
SQLCODE
-1671
SQLSTATE
57W06
Sybase error code

Probable cause
The file passed to the operation is invalid when the sandbox feature is enabled.

#### 1.1.4.1077 The format specification option '%1' is not recognized

recognized
Error constant
SQLE_SLERR_INVALID_FORMAT_SPECIFICATION_OPTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid option.
Severity
SQLCODE
-1432
SQLSTATE
2FW25
Sybase error code
Probable cause
The named option is not supported for the format specification.

#### 1.1.4.1078 The format specification syntax is invalid

Error constant
SQLE_SLERR_INVALID_FORMAT_SPECIFICATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1431

SQLSTATE
2FW24
Sybase error code
Probable cause
The format specification is invalid.

#### 1.1.4.1079 The format type '%1' cannot be used here

Error constant
SQLE_SLERR_FMT_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid format type.
Severity
SQLCODE
-1429
SQLSTATE
2FW22
Sybase error code
Probable cause
The specified format type cannot be used in this context.

#### 1.1.4.1080 The format type '%1' is not recognized

SQLE_SLERR_FMT_UNKNOWN
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid format type.
Severity
SQLCODE
-1428
SQLSTATE
2FW21
Sybase error code

Probable cause
The specified format type is not recognized.

#### 1.1.4.1081 The function '%1' does not allow use of the '%2' clause

clause
Error constant
SQLE_FUNCTION_DOES_NOT_ALLOW
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the function.
Parameter 2
The SQL clause not allowed.
Severity
SQLCODE
-1330
SQLSTATE
42WE0
Sybase error code
Probable cause
You have attempted to use the specified SQL clause within the context of a function that does not permit such
use. Note that the function may have been used directly in the query or indirectly within a named window.

#### 1.1.4.1082 The function '%1' requires the use of the '%2' clause

clause
SQLE_FUNCTION_REQUIRES
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the function.
Parameter 2
The SQL clause required.
Severity
SQLCODE
-1331
SQLSTATE
42WE1
Sybase error code

Probable cause
You have attempted to invoke the specified function without the use of a mandatory SQL clause within the
context of the function. Note that the function may have been used directly in the query or indirectly within a
named window.

#### 1.1.4.1083 The HTTP header '%1' is reserved and cannot be modified

modified
Error constant
SQLE_HTTP_HEADER_ATTRIBUTE_RESERVED_XXX
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The header causing the failure.
Severity
SQLCODE
-1094
SQLSTATE
WW070
Sybase error code
Probable cause
The specified HTTP header is reserved and cannot be modified.

#### 1.1.4.1084 The ICU collation '%1' has defaulted to another collation

collation
SQLE_COLLATION_DEFAULT_WARNING
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The ICU collation specifier.
Severity
SQLCODE
SQLSTATE
01WC4
Sybase error code

Probable cause
The specified ICU collation is not available. Another collation was substituted, which may or may not produce
suitable results. Due to the structure of ICU, the collation that was used is not known, but was the best
alternative to the specified collation. If this database is used on another platform, a different collation may be
chosen and the operation may generate different results.

#### 1.1.4.1085 The instantiation '%1' does not match an overload (near '%2'). Available overloads are '%3'

(near '%2'). Available overloads are '%3'
Error constant
SQLE_METHOD_NO_CONSTRUCTOR_OVERLOAD
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
The type name and data types used in the new specification.
Parameter 2
The invalid expression.
Parameter 3
The available constructor overloads.
Severity
SQLCODE
-1341
SQLSTATE
42X06
Sybase error code
Probable cause
When attempting to match a new specification, none of the defined constructor overloads was found to match
the provided argument types. You may need to use CAST to select the appropriate call.

#### 1.1.4.1086 The integrated login ID guest can only be mapped to the guest database user ID

to the guest database user ID
Error constant
SQLE_INTEGRATED_LOGON_GUESTMAP

ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-247
SQLSTATE
28W06
Sybase error code
Probable cause
You attempted to map the guest login ID to something other than guest.

#### 1.1.4.1087 The intermediate point (%3) of the ST_CircularString segment between %1 and %2 is collinear with but not between the start and end points

Error constant
SQLE_SLERR_CIRC_COLLINEAR_MIDPOINT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The start point of the ST_CircularString segment
Parameter 2
The end point of the ST_CircularString segment
Parameter 3
The specified intermediate point of the ST_CircularString
segment
Severity
SQLCODE
-1516
SQLSTATE
2FF72
Sybase error code
Probable cause
When the intermediate point of a ST_CircularString segment is collinear with the start and end point the result
is interpreted as a straight line between the start and the end point. In this case, the intermediate point must be
located on the line segment between the start and end point.

#### 1.1.4.1088 The last HTTP or HTTPS listener cannot be stopped without using the force parameter

stopped without using the force parameter
Error constant
SQLE_STOP_HTTP_LISTENER_CANNOT_STOP_THE_LAST
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1781
SQLSTATE
08WD9
Sybase error code
Probable cause
You attempted to stop the last HTTP or HTTPS listener. You may want to use the force parameter to stop the
last listener.

#### 1.1.4.1089 The last shared memory or TCPIP listener cannot be stopped without using the force parameter

be stopped without using the force parameter
SQLE_STOP_LISTENER_CANNOT_STOP_THE_LAST
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1768
SQLSTATE
08WD4
Sybase error code
Probable cause
You attempted to stop the last shared memory or TCP/IP listener. You may want to use the force parameter to
stop the last listener.

#### 1.1.4.1090 The length of the value specified is too long, it exceeds the limit of %1 bytes

exceeds the limit of %1 bytes
Error constant
SQLE_LDAPUA_OPT_TOO_LONG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The maximum length of the value.
Severity
SQLCODE
-1624
SQLSTATE
WW216
Sybase error code
Probable cause
The specified value for an LDAP server option is too long. Specify a shorter string.

#### 1.1.4.1091 The length of the variable '%1' is too long in this context; it exceeds the limit of %2 bytes

context; it exceeds the limit of %2 bytes
Error constant
SQLE_VARIABLE_PARM_TOO_LONG_IN_THIS_CONTEXT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the variable that is longer than that allowed by
the server.
Parameter 2
The maximum length allowed by the server in this context.
Severity
SQLCODE
-1723
SQLSTATE
54W18
Sybase error code
Probable cause
The length of the variable is longer than allowed by the server in this context.

#### 1.1.4.1092 The length specified for column '%1' is different than the actual length

than the actual length
Error constant
SQLE_OMNI_LENGTH_MISMATCH
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
The name of the column.
Severity
SQLCODE
-723
SQLSTATE
WO017
Sybase error code
Probable cause
The length of the column specified in the CREATE EXISTING statement is different than the length of the
column in the remote table.

#### 1.1.4.1093 The licensed maximum number of mirror servers with type COPY has been exceeded

with type COPY has been exceeded
SQLE_MIRROR_COPY_SERVER_LIMIT_EXCEEDED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1383
SQLSTATE
WW160
Sybase error code
Probable cause
The maximum number of mirror servers with type COPY that may be defined is limited by the database server
license. An attempt was made to create a new mirror server with type COPY when the maximum allowed
number of such servers already existed.

#### 1.1.4.1094 The logging type ( '%1' ) specified is invalid, not supported or incompatible

supported or incompatible
Error constant
SQLE_INVALID_LOAD_LOGGING_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specified logging type.
Severity
SQLCODE
-1151
SQLSTATE
WL010
Sybase error code
Probable cause
The logging type specified for LOAD TABLE is not supported for the version of the database being used, is
incompatible with other specifications of the statement or is not supported for the specific table being loaded
into.

#### 1.1.4.1095 The login ID '%1' has not been mapped to any database user ID

database user ID
SQLE_LOGON_UNMAPPED
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the login ID that is not mapped.
Severity
SQLCODE
-313
SQLSTATE
28W09
Sybase error code
Probable cause
You attempted to connect using a login ID that is not mapped to a database user ID and there is no guest
database user ID, or you attempted to revoke a login ID that has not been mapped. This can also occur when
attempting to connect using an integrated login ID that is a member of more than one mapped group.

#### 1.1.4.1096 The login ID '%1' is already mapped to user ID '%2'

'%2'
Error constant
SQLE_LOGON_MAPPED
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the login ID that is already mapped.
Parameter 2
Name of the user that the login ID is already mapped to.
Severity
SQLCODE
-249
SQLSTATE
28W08
Sybase error code
Probable cause
You attempted to map a login ID twice.

#### 1.1.4.1097 The materialized view %1 cannot be changed to immediate because it does not have a unique index on non-nullable columns

SQLE_IMMEDIATE_MV_NO_UNIQUE_INDEX
Error constant
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Name of the materialized view.
Severity
SQLCODE
-1233
SQLSTATE
42WCA
Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view which does not have a unique
index on non-nullable columns. Create a unique index on the materialized view before changing the refresh
type.

#### 1.1.4.1098 The materialized view %1 cannot be changed to immediate because it has already been initialized

immediate because it has already been initialized
Error constant
SQLE_IMMEDIATE_MV_REFRESH_NOT_ALLOWED
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Name of the materialized view.
Severity
SQLCODE
-1170
SQLSTATE
42WC3
Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view which is already in an initialized
state. Truncate the view before changing the refresh type.

#### 1.1.4.1099 The materialized view cannot be changed to immediate because at least one non-nullable column from any null-supplying side of an OUTER JOIN must exist in the SELECT list

SQLE_UPDATABLE_MATVIEW_ISNOTNULL
Error constant
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-1508
SQLSTATE
42WE8
Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view whose SELECT list doesn't
contain at least one non-nullable column for any null-supplying side of an OUTER JOIN.

#### 1.1.4.1100 The materialized view cannot be changed to immediate because COUNT(*) must be part of the SELECT list

Error constant
SQLE_UPDATABLE_MATVIEW_MISSING_COUNT
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-1199
SQLSTATE
42WC6
Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view whose definition does not
include COUNT(*) in the SELECT list.

#### 1.1.4.1101 The materialized view cannot be changed to immediate because it does not have a unique index on non-aggregate, non-nullable columns

SQLE_UPDATABLE_MATVIEW_NON_AGGR_INDEX
Error constant
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-1218
SQLSTATE
42WC7
Sybase error code

Probable cause
You attempted to change the refresh type to immediate for a materialized view which does not have a unique
index on non-aggregate non-nullable columns. Create a unique index on the materialized view before changing
the refresh type.

#### 1.1.4.1102 The materialized view cannot be changed to immediate because its definition contains an illegal construct

Error constant
SQLE_UPDATABLE_MATVIEW_ERR
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-1268
SQLSTATE
42WCB
Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view whose definition contains an
illegal construct.

#### 1.1.4.1103 The materialized view cannot be changed to immediate because its definition must not contain more than one query block

SQLE_UPDATABLE_MATVIEW_MULTIBLE_BLOCK_ERR
Error constant
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-1181
SQLSTATE
42WC5
Sybase error code

Probable cause
You attempted to change the refresh type to immediate for a materialized view whose definition contains more
than one query block.
1.1.4.1104  The materialized view cannot be changed to
immediate because its SELECT list contains a
SUM function over a nullable expression and it
doesn't contain a COUNT function over the same
expression
Error constant
SQLE_UPDATABLE_MATVIEW_COUNT_NULL_EXPR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1327
SQLSTATE
42WCE
Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view whose definition contains a
SUM function over a nullable expression but it doesn't contain COUNT function over the same expression.

#### 1.1.4.1105 The materialized view cannot be changed to immediate because the ON conditions must refer to both sides of the OUTER JOIN

SQLE_UPDATABLE_MATVIEW_PSNS_ON_CONDITION
Error constant
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-1371
SQLSTATE
42WE4

Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view whose definition contains an
illegal ON condition.

#### 1.1.4.1106 The materialized view cannot be changed to immediate because the ON conditions refer to tables which are not in the null-supplying and preserved sides of the OUTER JOINs

Error constant
SQLE_UPDATABLE_MATVIEW_OUTERREFER-
ENCE_ON_CONDITION
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-1507
SQLSTATE
42WE7
Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view whose definition contains an
illegal ON condition.

#### 1.1.4.1107 The materialized view cannot be changed to immediate because the primary key columns of any table in the preserved side of an OUTER JOIN must exist in the SELECT list

Error constant
SQLE_UPDATABLE_MATVIEW_PK
ODBC 2 state
ODBC 3 state
ERROR
Severity
SQLCODE
-1509
SQLSTATE
42WE9
Sybase error code
Probable cause
You attempted to change the refresh type to immediate for a materialized view whose SELECT list doesn't
contain the primary key columns of any table in the preserved side of an OUTER JOIN.

#### 1.1.4.1108 The method you attempted to invoke was not enabled for your application

enabled for your application
SQLE_FEATURE_NOT_ENABLED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1092
SQLSTATE
0A001
Sybase error code

Probable cause
You attempted to call a method or use a feature that has not been enabled. In UltraLite, features are enabled
using ULEnable functions or by using ULInitDatabaseManager instead of ULInitDatabaseManagerNoSQL.

#### 1.1.4.1109 The minimum percentage '%1' is invalid. The minimum percentage must be between 0 and 100.

minimum percentage must be between 0 and 100.
Error constant
PROFILER_INVALID_MIN_PERCENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The specified minimum percentage.
Severity
SQLCODE
-2068
SQLSTATE
WW267
Sybase error code
Probable cause
The specified minimum percentage is invalid. The minimum percentage must be between 0 and 100.

#### 1.1.4.1110 The mirror '%1' does not match database '%2'

SQLE_MIRROR_FILE_MISMATCH
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the mirror file
Parameter 2
The name of the database file
Severity
SQLCODE
-1138
SQLSTATE
WW090
Sybase error code

Probable cause
The named mirror file does not correspond to the database file. This could happen if the database was not
shut down properly, or if the wrong mirror file was specified. The mirror file must be moved or discarded before
proceeding, or a different mirror specified.

#### 1.1.4.1111 The multi patch shapefile shape is not supported

Error constant
SQLE_SLERR_SHAPE_MULTIPATCH
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1425
SQLSTATE
2FW16
Sybase error code
Probable cause
The shapefile contains a multi patch object; this type is not supported.

#### 1.1.4.1112 The OData server returned an error: %1

SQLE_ODATA_SERVER_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Text of the error
Severity
SQLCODE
-1796
SQLSTATE
55W51
Sybase error code
Probable cause
An error was returned from the OData server when executing an OData statement.

#### 1.1.4.1113 The operation cannot be executed while the profiler is running

is running
Error constant
INVALID_WHILE_PROFILER_IS_RUNNING
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2061
SQLSTATE
55W61
Sybase error code
Probable cause
The operation cannot be executed while the profiler is running. Stop the profiler by calling the procedure
sp_stop_profiling and try again.

#### 1.1.4.1114 The operation failed because column '%1''s type does not support streaming

does not support streaming
SQLE_COLUMN_NOT_STREAMABLE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The number of the column whose type is invalid.
Severity
SQLCODE
-1100
SQLSTATE
WW045
Sybase error code
Probable cause
The only column types that support streaming are: BINARY, LONG BINARY, VARCHAR and LONG VARCHAR.
This error could also occur when allocating a stream object twice on the same column.

#### 1.1.4.1115 The optimizer was unable to construct a valid access plan

access plan
Error constant
SQLE_CANNOT_OPTIMIZE_QUERY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-727
SQLSTATE
WI010
Sybase error code
Probable cause
The database server was unable to construct a valid access plan for the given request. This is a SQL Anywhere
internal error. If it can be reproduced, it should be reported to SAP. You may be able to work around this
problem by modifying the query statement.

#### 1.1.4.1116 The option '%1' can only be set as a temporary option

option
SQLE_OPTION_IS_TEMP_ONLY
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the option that could not be set.
Severity
SQLCODE
-216
SQLSTATE
42W52
Sybase error code
Probable cause
The option specified in the SET OPTION statement can only be set as a temporary option.

#### 1.1.4.1117 The option '%1' cannot be set from within a procedure

procedure
Error constant
SQLE_OPTION_IN_PROCEDURE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the option that could not be set.
Severity
SQLCODE
-217
SQLSTATE
42W53
Sybase error code
Probable cause
The option specified in the SET OPTION statement cannot be set from within a procedure.

#### 1.1.4.1118 The option '%1' is not recognized

Error constant
SQLE_UNRECOGNIZED_OPTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the option.
Severity
SQLCODE
-1002
SQLSTATE
WW062
Sybase error code
Probable cause
The specified option was not recognized. The option may have been spelled incorrectly.

#### 1.1.4.1119 The option '%1' was not specified for target type '%2'

'%2'
Error constant
SQLE_OPTION_FOR_TARGET_TYPE_NOT_SPECIFIED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The option name.
Parameter 2
The trace event target type.
Severity
SQLCODE
-1648
SQLSTATE
WE033
Sybase error code
Probable cause
A required option for target type was not specified.

#### 1.1.4.1120 The output path '%1' is invalid

PROFILER_INVALID_OUTPUT_PATH
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2065
SQLSTATE
WW265
Sybase error code
Probable cause
The specified output path is invalid.

#### 1.1.4.1121 The PAM User Authentication (PAMUA) feature is not supported on this computer

not supported on this computer
Error constant
SQLE_PAMUA_FEATURE_NOT_SUPPORTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1749
SQLSTATE
0AW29
Sybase error code
Probable cause
You attempted to use the PAM User Authentication feature; however, PAM is not supported on this computer.

#### 1.1.4.1122 The parent of this mirror server is not currently connected

connected
Error constant
SQLE_PARENT_NOT_CONNECTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1349
SQLSTATE
WW152
Sybase error code
Probable cause
The statement being executed requires a connection from this mirror server to its parent, but the parent is not
currently connected.

#### 1.1.4.1123 The parent of this mirror server is not the primary server

server
Error constant
SQLE_PARENT_NOT_PRIMARY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1350
SQLSTATE
WW153
Sybase error code
Probable cause
The statement being executed requires a connection from this mirror server to the primary server, but the
parent is not the primary server. The connection string to this server's parent does not match the connection
string for the primary server.

#### 1.1.4.1124 The pattern is too long

Error constant
SQLE_PATTERN_TOO_LONG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-606
SQLSTATE
WW001
Sybase error code
Probable cause
The pattern for the LIKE operator is too long. All patterns of 126 characters or less are supported. Some
patterns as long as 254 characters are supported, depending on their contents. Patterns longer than 254
characters are not supported.

#### 1.1.4.1125 The profiler has not been initialized. Contact SAP support.

support.
Error constant
PROFILER_NOT_INITIALIZED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2064
SQLSTATE
WI114
Sybase error code
Probable cause
The profiler has nott been initialized. Contact SAP support.

#### 1.1.4.1126 The profiler is already running

Error constant
PROFILER_ALREADY_STARTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2063
SQLSTATE
55W63
Sybase error code
Probable cause
The profiler is already running.

#### 1.1.4.1127 The profiler is not running

Error constant
PROFILER_NOT_STARTED

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2062
SQLSTATE
55W62
Sybase error code
Probable cause
The profiler is not running.

#### 1.1.4.1128 The profiler is not supported

Error constant
PROFILER_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2058
SQLSTATE
0AW49
Sybase error code
Probable cause
The profiler is not supported.

#### 1.1.4.1129 The provided stoplist is too long

Error constant
SQLE_TEXT_STOPLIST_TOO_LONG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1240

SQLSTATE
WT018
Sybase error code
Probable cause
A text configuration stop list must be less than 8000 bytes.

#### 1.1.4.1130 The remote data access feature is not supported on this platform

on this platform
Error constant
SQLE_OMNI_FEATURE_NOT_SUPPORTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1139
SQLSTATE
0AW18
Sybase error code
Probable cause
You attempted to use a remote data access feature; however, remote data access is not supported on this
platform.

#### 1.1.4.1131 The remote server does not support an auto-incrementing data type

incrementing data type
SQLE_OMNI_AUTOINC_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-698
SQLSTATE
WO011

Sybase error code
Probable cause
Auto-incrementing data types can only be supported in a proxy table when the remote server supports this
feature.

#### 1.1.4.1132 The remote table '%1' could not be found

Error constant
SQLE_OMNI_RMT_TABLE_NOTFOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The complete name of the remote table.
Severity
SQLCODE
-666
SQLSTATE
WO007
Sybase error code
Probable cause
The table could not be found on the remote server. Check the remote table name and the user privileges on
that table.

#### 1.1.4.1133 The result returned is non-deterministic

SQLE_NONDETERMINISTIC_RESULT
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
SQLSTATE
01W18
Sybase error code

Probable cause
FIRST or TOP n are used in a SELECT statement to limit the size of a result. The statement must also have an
ORDER BY if the result is to be well-defined. If it does not have an ORDER BY, then the server is free to return
any subset of the result that has the requested number of rows.

#### 1.1.4.1134 The role '%1' was not dropped because it is granted to other users or roles. Use the 'WITH REVOKE' option to drop it

Error constant
SQLE_CONTAINS_PRIV_GRANTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the role being dropped.
Severity
SQLCODE
-1562
SQLSTATE
28W36
Sybase error code
Probable cause
The role being dropped has been granted to other users or roles with WITH NO ADMIN OPTION or with WITH
ADMIN OPTION. A role can be dropped when either all of its grants are with WITH ADMIN ONLY OPTION or
WITH REVOKE option is specified in DROP ROLE command. Either revoke all such grants or use WITH REVOKE
option for DROP ROLE.

#### 1.1.4.1135 The sample wait time cannot be changed once samples have been collected. Clear the sample data and then set the option.

Error constant
PROFILER_WAIT_TIME_CANNOT_CHANGE_ONCE_SAM-
PLES_COLLECTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2069
SQLSTATE
WW268
Sybase error code
Probable cause
The sample wait time cannot be changed once samples have been collected. Clear the sample data and then
set the option.

#### 1.1.4.1136 The search on LDAP server %1 completed with no matching results

matching results
SQLE_LDAPUA_NO_SEARCH_RESULTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The LDAP server name or search URL specifying the search.
Severity
SQLCODE
-1623
SQLSTATE
WW220
Sybase error code
Probable cause
An LDAPUA search or validate failed returning LDAP_NO_RESULTS_RETURNED. This error is expected when
the user does not exist in the LDAP server.

#### 1.1.4.1137 The search using '%1' failed due to one or more invalid values set

invalid values set
Error constant
SQLE_LDAPUA_SEARCHFAIL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The LDAP server name or search URL specifying the search.
Severity
SQLCODE
-1603
SQLSTATE
WW214
Sybase error code
Probable cause
An LDAPUA search or validate failed returning LDAP_INVALID_CREDENTIALS, LDAP_INSUFFICIENT_ACCESS,
LDAP_INVALID_DN_SYNTAX, LDAP_NO_SUCH_OBJECT, or LDAP_FILTER_ERROR due to the invalid settings.
Check the access account values for the named LDAP server or search URL.

#### 1.1.4.1138 The secure connection to the remote host failed: %1

%1
SQLE_SECURE_CONNECTION_FAILED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
A message describing the error that occurred.
Severity
SQLCODE
-990
SQLSTATE
WW059
Sybase error code
Probable cause
The server was unable to initiate a secure connection with the remote host.

#### 1.1.4.1139 The secure feature key name '%2' is not valid in the call to %1

the call to %1
Error constant
SQLE_SFC_INVALID_NAME
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Parameter 2
The secure feature key name.
Severity
SQLCODE
-1687
SQLSTATE
08S03
Sybase error code
Probable cause
An invalid secure feature key name was passed to the specified procedure.

#### 1.1.4.1140 The SELECT list for the derived table '%1' has no expression to match '%2'

expression to match '%2'
SQLE_NO_MATCHING_SELECT_ITEM
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the derived table.
Parameter 2
Name of the alias for which there is no matching expression.
Severity
SQLCODE
-812
SQLSTATE
42W59

Sybase error code
Probable cause
The specified alias from the derived table's AS clause has no matching expression from the SELECT statement
for that derived table. Ensure that each SELECT list item has a matching alias in the derived table's AS clause,
and vice-versa.

#### 1.1.4.1141 The selected database is currently inactive

Error constant
SQLE_DATABASE_NOT_ACTIVE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-74
SQLSTATE
08W30
Sybase error code
Probable cause
The selected database is in an inactive state. The database may be in the process of being started or shut
down.

#### 1.1.4.1142 The server attempted to access a page beyond the end of the maximum allowable dbspace file size

end of the maximum allowable dbspace file size
Error constant
SQLE_ACCESS_BEYOND_END_OF_MAX_DBSPACE

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-605
SQLSTATE
04W08
Sybase error code
Probable cause
The database attempted to access a page whose page number is beyond the maximum possible number of
disk pages. This is a fatal internal error.

#### 1.1.4.1143 The server is not able to establish TCP/IP connections

connections
Error constant
SQLE_TCP_CONNECTIONS_NOT_ENABLED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1372
SQLSTATE
08WA3
Sybase error code
Probable cause
This database server is not able to establish TCP/IP connections. The personal server (dbeng) does not permit
TCP/IP connections by default. This error may also occur if a network server (dbsrv) was started with the -xd
command line option. The ability to establish TCP/IP connections is required to use diagnostic tracing.

#### 1.1.4.1144 The size of the character column, variable, or value data type exceeds 32767

data type exceeds 32767
Error constant
SQLE_CHAR_FIELD_SIZE_EXCEEDED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1093
SQLSTATE
54W09
Sybase error code
Probable cause
The declaration or conversion has specified a character type with byte length greater than 32767.

#### 1.1.4.1145 The spatial reference system type is not supported ('%1')

('%1')
Error constant
SQLE_SLERR_DDL_SRS_BAD_SRS_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The unsupported spatial reference system type.
Severity
SQLCODE
-1464
SQLSTATE
2FW57
Sybase error code
Probable cause
The specified spatial reference system type is not supported.

#### 1.1.4.1146 The specified axis order is not supported for this type of spatial reference system

type of spatial reference system
Error constant
SQLE_SLERR_DDL_SRS_AXISORD
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1468
SQLSTATE
2FW61
Sybase error code
Probable cause
The specified axis order is not supported for this type of spatial reference system.

#### 1.1.4.1147 The specified certificate is not valid

Error constant
SQLE_INVALID_CERTIFICATE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1588
SQLSTATE
55W43
Sybase error code
Probable cause
The certificate value does not represent a valid certificate.

#### 1.1.4.1148 The specified distinguished name '%1' does not match the search result '%2'

match the search result '%2'
Error constant
SQLE_LDAPUA_DN_NOMAT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The expected distinguished name that was specified in com-
mand.
Parameter 2
The result distinguished name returned by LDAP search.
Severity
SQLCODE
-1602
SQLSTATE
WW213
Sybase error code
Probable cause
VALIDATE LDAP SERVER command did a successful search to find a user distinguished name, but the value
differs from the expected distinguished name specified in the command.

#### 1.1.4.1149 The specified foreign key (%1) cannot be enforced

SQLE_UNENFORCEABLE_FOREIGN_KEY
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the foreign key.
Severity
SQLCODE
-729
SQLSTATE
Sybase error code
Probable cause
You attempted to create a foreign key that cannot be enforced. To be enforceable, the primary and foreign table
for the specified key must exist on the same server. You can use the UNENFORCED keyword to create a foreign
key specification that is not to be enforced.

#### 1.1.4.1150 The specified HTTP header contains illegal or non-ASCII characters

ASCII characters
Error constant
SQLE_HTTP_HEADER_ATTRIBUTE_ASCII
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1095
SQLSTATE
WW071
Sybase error code
Probable cause
HTTP headers must contain printable ASCII characters.

#### 1.1.4.1151 The specified HTTP header is malformed

Error constant
SQLE_HTTP_HEADER_ATTRIBUTE_MALFORMED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1096
SQLSTATE
WW072
Sybase error code
Probable cause
The HTTP header is missing the colon delimiter or a folding construct is malformed.

#### 1.1.4.1152 The specified listener could not be registered

Error constant
SQLE_CANNOT_REGISTER_LISTENER

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-992
SQLSTATE
54W04
Sybase error code
Probable cause
The specified listener could not be registered because the maximum number of listeners has been reached, the
class name is already in use, or system resources are not available.

#### 1.1.4.1153 The specified polygon format '%1' is not supported for this type of spatial reference system

for this type of spatial reference system
Error constant
SQLE_SLERR_DDL_SRS_POLYFORMAT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The polygon format string.
Severity
SQLCODE
-1469
SQLSTATE
2FW62
Sybase error code
Probable cause
The specified polygon format is not supported for this type of spatial reference system.

#### 1.1.4.1154 The specified session name '%1' is not valid

Error constant
SQLE_INVALID_TRACE_EVENT_SESSION_NAME
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Severity
SQLCODE
-1634
SQLSTATE
WE020
Sybase error code
Probable cause
The specified trace event session name is not valid.

#### 1.1.4.1155 The specified target type '%1' is not valid

Error constant
SQLE_INVALID_TRACE_EVENT_TARGET_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event target type.
Severity
SQLCODE
-1646
SQLSTATE
WE031
Sybase error code
Probable cause
The specified trace event target type is not valid.

#### 1.1.4.1156 The specified transaction isolation is invalid

Error constant
SQLE_INVALID_TRANSACTION_ISOLATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-676
SQLSTATE
WJ003
Sybase error code
Probable cause
The specified transaction isolation is invalid.

#### 1.1.4.1157 The SQL Anywhere Cockpit '%1' cannot be used for the current operation

the current operation
Error constant
SQLE_CANNOT_USE_COCKPIT_DATABASE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the file.
Severity
SQLCODE
-1841
SQLSTATE
08WF5
Sybase error code
Probable cause
You cannot use this operation with the SQL Anywhere Cockpit.

#### 1.1.4.1158 The SQL Anywhere Cockpit template '%1' cannot be used for the current operation

be used for the current operation
Error constant
SQLE_COCKPITDB_TEMPLATE_USE_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the SQL Anywhere Cockpit template file.
Severity

SQLCODE
-1878
SQLSTATE
08WF9
Sybase error code
Probable cause
You cannot use this operation with the SQL Anywhere Cockpit template.

#### 1.1.4.1159 The SQL Anywhere Cockpit template file '%1' not found

found
Error constant
SQLE_SQLACOCKPITDB_TEMPLATE_FILE_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The SQL Anywhere Cockpit template file name that does not
exist or fail to access
Severity
SQLCODE
-1860
SQLSTATE
08WG2
Sybase error code
Probable cause
You attempted to perform an operation using the SQL Anywhere Cockpit template that does not exist or fail to
access.

#### 1.1.4.1160 The SQL scripts DLL cannot be loaded

Error constant
SQLE_INVALID_SCRIPT_DLL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1150

SQLSTATE
WW091
Sybase error code
Probable cause
The SQL scripts DLL cannot be loaded. The DLL might be missing or the version found might not match the
version of the database server being used.

#### 1.1.4.1161 The SRID %1 does not identify a geographic spatial reference system

reference system
Error constant
SQLE_SLERR_NOT_GEOGRAPHIC
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The spatial reference system identifier.
Severity
SQLCODE
-1477
SQLSTATE
2FW70
Sybase error code
Probable cause
The methods ST_Lat() and ST_Long() can only be used for geographic spatial reference systems.

#### 1.1.4.1162 The status of the last synchronization upload is unknown

unknown
Error constant
SQLE_SYNC_STATUS_UNKNOWN
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-952

SQLSTATE
WW032
Sybase error code
Probable cause
The status of the last synchronization upload is unknown. The current operation cannot proceed until a
successful upload is synchronized.

#### 1.1.4.1163 The string '%1' is not a valid axis order

Error constant
SQLE_SLERR_DDL_SRS_AXISORDER
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid axis order.
Severity
SQLCODE
-1456
SQLSTATE
2FW49
Sybase error code
Probable cause
The specified string is not a valid axis order.

#### 1.1.4.1164 The string '%1' is not a valid coordinate name

Error constant
SQLE_SLERR_DDL_SRS_COORDNAME
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The invalid coordinate name.
Severity
SQLCODE
-1457
SQLSTATE
2FW50
Sybase error code
Probable cause
The provided string is not the name of a coordinate. Coordinate names are X, Y, Z, M, Latitude and Longitude.

#### 1.1.4.1165 The string is too long (%1)

Error constant
SQLE_STRING_PARM_TOO_LONG
ODBC 2 state
ODBC 3 state
Parameter 1
The string that is longer than that allowed by the server.
Severity
SQLCODE
-973
SQLSTATE
54W06
Sybase error code
Probable cause
The string is longer than that allowed by the server.

#### 1.1.4.1166 The synchronization failed because MobiLink returned authentication status '%1' with value '%2'

returned authentication status '%1' with value '%2'
Error constant
SQLE_MOBILINK_AUTHENTICATION_FAILED
ODBC 2 state
ODBC 3 state

Parameter 1
The authentication status number.
Parameter 2
The authentication value number.
Severity
SQLCODE
-1497
SQLSTATE
28W17
Sybase error code
Probable cause
MobiLink returned an authentication status to the remote database indicating failure. The status and value
numbers indicate why the authentication failed. For example, the password was invalid, or a synchronization is
already in progress for this remote.

#### 1.1.4.1167 The SYNCHRONIZE statement timed out

SQLE_SYNCCMD_TIMEOUT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1377
SQLSTATE
5RW47
Sybase error code
Probable cause
The SYNCHRONIZE statement did not complete within the timeout value specified. Check the results of the
call to sp_get_last_synchronize_result() for more information.

#### 1.1.4.1168 The table specification '%1' identifies more than one remote table

one remote table
Error constant
SQLE_OMNI_RMT_TABLE_NOTUNIQUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The complete name of the remote table.
Severity
SQLCODE
-726
SQLSTATE
WO020
Sybase error code
Probable cause
More than one table was found on the remote server for the given table specification. Add a database or owner
name to the specification.

#### 1.1.4.1169 The text index %1 needs to be refreshed

SQLE_TEXT_MATCHING_INDEX_NOT_REFRESHED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the text index that needs to be refreshed.
Severity
SQLCODE
-1253
SQLSTATE
WT019
Sybase error code
Probable cause
There is a text index that matches the query, but it needs to be refreshed before it is used.

#### 1.1.4.1170 The transaction may not be committed because the primary server lost quorum

the primary server lost quorum
Error constant
SQLE_LOST_QUORUM_ON_COMMIT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1597
SQLSTATE
WW166
Sybase error code
Probable cause
You attempted to commit a transaction on a primary server that just lost quorum with the partner and arbiter
servers. The transaction may or may not have been committed. The partner servers will attempt to determine
which server will become the new primary server.

#### 1.1.4.1171 The UltraLite database deploy file is invalid (code: %1, file: %2)

%1, file: %2)
SQLE_ULTRALITE_DEPLOY_FILE_INVALID
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The diagnostic code.
Parameter 2
The associated filename, if applicable.
Severity
SQLCODE
-1625
SQLSTATE
WU002

Sybase error code
Probable cause
The UltraLite database deploy file is invalid. This can occur if the wrong file is deployed, or if the file is damaged.
Diagnostic code 1 indicates the file is not a deploy file or has subsequently been corrupted. Diagnostic code 2
indicates the file is not a valid size.

#### 1.1.4.1172 The URI '%1' is invalid

Error constant
SQLE_INVALID_URI
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid URI.
Severity
SQLCODE
-980
SQLSTATE
WW049
Sybase error code
Probable cause
The specified URI is not valid.

#### 1.1.4.1173 The user name specified must be the user name of the current connection

the current connection
SQLE_CREATE_SCHEMA_USER_DOES_NOT_MATCH
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1703
SQLSTATE
42WD5
Sybase error code

Probable cause
In the CREATE SCHEMA AUTHORIZATION clause, you specified a user name other than the user name of the
current connection.

#### 1.1.4.1174 The USING LOG PATH clause must be used in conjunction with the RECOVER UNTIL clause

conjunction with the RECOVER UNTIL clause
Error constant
SQLE_RESTORE_INVALID_LOG_PATH_CLAUSE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1770
SQLSTATE
42WF4
Sybase error code
Probable cause
The USING LOG PATH clause can only be used to specify the location of files required for point-in-time
recovery, and so either an offset or timestamp must be specified as a point to recover to using the RECOVER
UNTIL clause.

#### 1.1.4.1175 The UTF-16 endian specified does not match the Byte Order Mark found in the data

Byte Order Mark found in the data
Error constant
SQLE_UTF16_ENDIAN_MISMATCH
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1189
SQLSTATE
WC004
Sybase error code
Probable cause
The specified UTF-16 encoding explicitly specifies the expected endian of the data; however, the Byte Order
Mark found at the beginning of the data indicates that the data is encoded in the opposite endian.

#### 1.1.4.1176 The value '%2' is not a valid setting for the '%1' format specification option

format specification option
Error constant
SQLE_SLERR_INVALID_FORMAT_SPECIFICATION_OP-
TION_VALUE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The invalid value.
Parameter 2
The format specification option.
Severity
SQLCODE
-1433
SQLSTATE
2FW26
Sybase error code
Probable cause
The value is not accepted by the specification option.

#### 1.1.4.1177 The value for the stoplist cannot be NULL

Error constant
SQLE_TEXT_STOPLIST_NULL
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1389
SQLSTATE
WT023
Sybase error code
Probable cause
The value for a text configuration stoplist cannot be NULL. To remove a stoplist, use the ALTER TEXT
CONFIGURATION...DROP STOPLIST statement.

#### 1.1.4.1178 The value specified is not within the required range %1 to %2

%1 to %2
Error constant
SQLE_LDAPUA_OPT_OUT_OF_RANGE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The minimum value for this option.
Parameter 2
The maximum value for this option.
Severity
SQLCODE
-1620
SQLSTATE
WW217
Sybase error code
Probable cause
The specified value for an LDAP server option is too big or too small.

#### 1.1.4.1179 The variable '%1' must be %2 in this context

Error constant
SQLE_VARIABLE_MUST_BE_OF_DIFFERENT_DO-
MAIN_IN_THIS_CONTEXT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the variable.

Parameter 2
The type that the variable must be in this context.
Severity
SQLCODE
-1724
SQLSTATE
42X09
Sybase error code
Probable cause
The variable passed to the statement has the incorrect type.

#### 1.1.4.1180 The variable '%1' must not be NULL in this context

Error constant
SQLE_VARIABLE_MUST_NOT_BE_NULL_IN_THIS_CON-
TEXT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the variable that must not be NULL in this
context.
Severity
SQLCODE
-1722
SQLSTATE
42X08
Sybase error code
Probable cause
The variable passed to the statement must not be NULL in this context.

#### 1.1.4.1181 The variable in the INTO clause is not a row type

Error constant
SQLE_INTO_CLAUSE_NOT_A_ROW_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1814
SQLSTATE
WP029
Sybase error code
Probable cause
You attempted to assign more than one fetched value into a single variable, but it is not a row data type.

#### 1.1.4.1182 There is already a database variable named '%1'

Error constant
SQLE_DATABASE_VARIABLE_EXISTS
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the database variable that already exists.
Severity
SQLCODE
-1882
SQLSTATE
WP031
Sybase error code
Probable cause
You attempted to create a database variable with the name of another database variable that already exists.

#### 1.1.4.1183 There are still active database connections

SQLE_STILL_ACTIVE_CONNECTIONS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-109
SQLSTATE
08W06
Sybase error code

Probable cause
You attempted to shut down a database that still has active connections.

#### 1.1.4.1184 There is already a variable named '%1'

Error constant
SQLE_VARIABLE_EXISTS
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the variable that already exists.
Severity
SQLCODE
-261
SQLSTATE
42W15
Sybase error code
Probable cause
You attempted to create a variable with the name of another variable that already exists.

#### 1.1.4.1185 There is more than one way to join '%1' to '%2'

SQLE_AMBIGUOUS_JOIN
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of first table that cannot be joined.
Parameter 2
Name of second table that cannot be joined.
Severity
SQLCODE
-147
SQLSTATE
52W08
Sybase error code
Probable cause
You are attempting to KEY JOIN two tables, and there are two or more foreign keys relating the two tables.
There may be two foreign keys from the first table to the second table. It may be that each table has a foreign

key to the other table. You must use a correlation name for the primary key table that is the same as the role
name of the desired foreign key relationship.

#### 1.1.4.1186 There is no profiler data available

Error constant
NO_PROFILER_DATA
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-2060
SQLSTATE
55W60
Sybase error code
Probable cause
There is no profiler data available. To get profiling data a profiling session must be started and stopped using
the procedures sp_start_profiling and sp_stop_profiling.

#### 1.1.4.1187 There is no way to join '%1' to '%2'

Error constant
SQLE_CANNOT_JOIN
ODBC 2 state
ODBC 3 state
Parameter 1
Name of first table that cannot be joined.
Parameter 2
Name of second table that cannot be joined.
Severity
SQLCODE
-146
SQLSTATE
53W04
Sybase error code
Probable cause
You may have attempted a KEY JOIN between two tables and there is no foreign key on one of the tables that
references the primary key of the other table. You may have attempted a NATURAL JOIN between two tables
that have no common column names.

#### 1.1.4.1188 There is no way to join to '%1'

Error constant
SQLE_CANNOT_JOIN_TABEXPR
ODBC 2 state
ODBC 3 state
Parameter 1
Name of table or view that cannot be joined.
Severity
SQLCODE
-875
SQLSTATE
42W73
Sybase error code
Probable cause
The server cannot discover a valid join condition involving this table. If the join is an outer join, you may
be missing an ON clause. If the join is a KEY JOIN, the server cannot discover a foreign key-primary key
relationship with this table that can be used to generate the join condition. If the join is a NATURAL JOIN, the
table has no common column names with the table expression it is being joined to.

#### 1.1.4.1189 There was insufficient memory to complete the %1 operation

operation
SQLE_SFC_MEM_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure that detected the error.
Severity
SQLCODE
-1685
SQLSTATE
08S01
Sybase error code
Probable cause
A call to the specified procedure could not complete the operation due to insufficient memory.

#### 1.1.4.1190 This connection already exists

Error constant
SQLE_CONNECTION_ALREADY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-955
SQLSTATE
WW035
Sybase error code
Probable cause
A connection with the given SQLCA and name (or no name) already exists. Before connecting you must
disconnect the existing connection, or specify a different connection name.

#### 1.1.4.1191 This database does not support encrypted tables

SQLE_ENCRYPTED_TABLES_NOT_SUPPORTED
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1047
SQLSTATE
55W20
Sybase error code
Probable cause
You tried to create an encrypted table in a database that does not support them.

#### 1.1.4.1192 This edition of SQL Anywhere is not available on this platform

this platform
Error constant
SQLE_PLATFORM_NOT_LICENSED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1262
SQLSTATE
0A004
Sybase error code
Probable cause
This edition of SQL Anywhere is not available on this platform. You must use a different license key to use SQL
Anywhere on this platform.

#### 1.1.4.1193 This operation is only allowed within a synchronization schema change

synchronization schema change
SQLE_REQUIRES_SYNC_SCHEMA_CHANGE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1329
SQLSTATE
5RW41
Sybase error code
Probable cause
You attempted an operation that is only allowed within a synchronization schema change.

#### 1.1.4.1194 This server is not licensed to support '%1' connections

connections
Error constant
SQLE_CONNECTION_PROTOCOL_NOT_LICENSED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The unlicensed connection type.
Severity
SQLCODE
-1261
SQLSTATE
0A003
Sybase error code
Probable cause
You attempted to use a connection protocol or API that is not licensed in this edition of SQL Anywhere.

#### 1.1.4.1195 This server is not licensed to support the '%1' feature

feature
SQLE_FEATURE_NOT_LICENSED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The unlicensed feature.
Severity
SQLCODE
-1260
SQLSTATE
0A002
Sybase error code
Probable cause
You attempted to carry out an operation or use a feature that is not licensed in this edition of SQL Anywhere.

#### 1.1.4.1196 Time zone '%1' not found

Error constant
SQLE_TIMEZONE_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the time zone that could not be found
Severity
SQLCODE
-1788
SQLSTATE
55W48
Sybase error code
Probable cause
You misspelled the name of a time zone stored in the database, or the time zone does not exist.

#### 1.1.4.1197 Time zone option error: %1

Error constant
SQLE_TIMEZONE_OPTION_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Text of the option error
Severity
SQLCODE
-1790
SQLSTATE
55W50
Sybase error code
Probable cause
An option error was found when creating or altering a time zone.

#### 1.1.4.1198 TLS handshake failure

Error constant
SQLE_TLS_HANDSHAKE_FAILED
ODBC 2 state
08S01
ODBC 3 state
08S01
Severity
SQLCODE
-829
SQLSTATE
08W59
Sybase error code
Probable cause
The connection failed because of a failure in the TLS handshaking process.

#### 1.1.4.1199 TLS initialization on server failed

Error constant
SQLE_TLS_INIT_FAILED_ON_SRV
ODBC 2 state
08S01
ODBC 3 state
08S01
Severity
SQLCODE
-838
SQLSTATE
08W61
Sybase error code
Probable cause
The connection failed because the initialization of the TLS library on the server failed.

#### 1.1.4.1200 TLS ON cannot be used with URL %1

Error constant
SQLE_LDAPUA_TLS_WITH_LDAPS
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The LDAP URL that is using Secure LDAP.
Severity
SQLCODE
-1627
SQLSTATE
WW240
Sybase error code
Probable cause
The LDAP server is specified with TLS ON and the specified LDAP URL uses Secure LDAP, that is, 'ldaps'
instead of 'ldap', which is not a valid combination. Use either TLS ON or an 'ldaps' URL.

#### 1.1.4.1201 Too few columns

Error constant
SQLE_FOR_XML_EXPLICIT_TOO_FEW_COLUMNS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-902
SQLSTATE
WX010
Sybase error code
Probable cause
FOR XML EXPLICIT and FOR JSON EXPLICIT require at least three columns: the tag column, the parent
column, and one or more data columns.

#### 1.1.4.1202 Too many active trace event sessions

Error constant
SQLE_TOO_MANY_ACTIVE_TRACE_SESSIONS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1640
SQLSTATE
WE025
Sybase error code
Probable cause
Too many active trace sessions.

#### 1.1.4.1203 Too many arguments for function or procedure '%1'

'%1'
Error constant
SQLE_TOO_MANY_ARGUMENTS
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the function or procedure.
Severity
SQLCODE
-994
SQLSTATE
42WAC
Sybase error code
Probable cause
You supplied an argument list that the database server cannot handle. This can happen if the argument list of
the function or stored procedure is too long. Rebuilding the database with a larger page size could prevent this
error.

#### 1.1.4.1204 Too many arguments for trace event '%1'

Error constant
SQLE_TOO_MANY_PARAMETERS_FOR_TRACE_EVENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event name.
Severity
SQLCODE
-1638
SQLSTATE
WE024
Sybase error code
Probable cause
Too many arguments were provided for the trace event specified.

#### 1.1.4.1205 Too many columns

Error constant
SQLE_FOR_XML_EXPLICIT_TOO_MANY_COLUMNS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-909
SQLSTATE
WX025
Sybase error code
Probable cause
You executed a FOR XML EXPLICIT or FOR JSON EXPLICIT statement with too many expressions in the
SELECT list. Rebuilding the database with a larger page size could prevent this error.

#### 1.1.4.1206 Too many columns in procedure result set

Error constant
SQLE_TOO_MANY_COLUMNS_IN_PROC_RES

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1237
SQLSTATE
54W15
Sybase error code
Probable cause
You executed a CREATE PROCEDURE or ALTER PROCEDURE statement. The resulting number of columns in
the result set of the procedure would exceed the server's limit of 45000.

#### 1.1.4.1207 Too many columns in row type

Error constant
SQLE_TOO_MANY_COLUMNS_IN_ROWTYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1896
SQLSTATE
54W22
Sybase error code
Probable cause
You attempted to create a row type with too many columns. The number of columns in a row type is limited to
45000.

#### 1.1.4.1208 Too many columns in schema

Error constant
SQLE_TOO_MANY_COLUMNS_IN_OPENSTRING_SCHEMA
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1895
SQLSTATE
54W21
Sybase error code
Probable cause
You executed an OPENSTRING, OPENXML, or LOAD TABLE FORMAT XML statement with too many columns in
the schema. The number of columns is limited to 4000.

#### 1.1.4.1209 Too many columns in SELECT list

Error constant
SQLE_TOO_MANY_COLUMNS_IN_SELECT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1235
SQLSTATE
54W13
Sybase error code
Probable cause
You executed a statement with too many expressions in the SELECT list. The number of expressions within a
SELECT list is limited to 100000.

#### 1.1.4.1210 Too many columns in table

SQLE_TOO_MANY_COLUMNS_IN_TABLE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-616
SQLSTATE
52W20
Sybase error code

Probable cause
You executed a CREATE TABLE or ALTER TABLE statement that attempted to add a column to a table. The
resulting number of columns in the table would exceed the limit for the current database page size.

#### 1.1.4.1211 Too many constraints in database

Error constant
SQLE_TOO_MANY_CONSTRAINTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-936
SQLSTATE
54W02
Sybase error code
Probable cause
An attempt to create a new constraint failed because the corresponding system table is full. Reloading the
database will reclaim any unused space. No more than 4294967295 constraints may be used in a database.

#### 1.1.4.1212 Too many distinct group mappings for integrated user

user
SQLE_INTEGRATED_LOGON_TOO_MANY_MAPPINGS
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1003
SQLSTATE
28W10
Sybase error code

Probable cause
The integrated user does not have an explicit mapping in the database but does have group mappings. There
are too many distinct group mappings. You must either reduce the number of distinct group mappings or add
an explicit mapping for the user.

#### 1.1.4.1213 Too many expressions in GROUP BY list

Error constant
SQLE_TOO_MANY_COLUMNS_IN_GROUPBY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1236
SQLSTATE
54W14
Sybase error code
Probable cause
You executed a statement with too many expressions in the GROUP BY list. The number of expressions within a
GROUP BY list is limited to 100000.

#### 1.1.4.1214 Too many expressions in GROUP BY list for ROLLUP, CUBE, or GROUPING SETS operation

ROLLUP, CUBE, or GROUPING SETS operation
SQLE_TOO_MANY_GROUPING_EXPRESSIONS
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-944
SQLSTATE
42WA1
Sybase error code

Probable cause
You specified too many expressions in the GROUP BY list for the requested ROLLUP, CUBE, or GROUPING
SETS operation. The current environment where SQL Anywhere is executing cannot support this number of
expressions in the GROUP BY list for the requested operation.

#### 1.1.4.1215 Too many MESSAGE...FOR CONNECTION messages

Error constant
SQLE_CONNECTION_MESSAGE_QUEUE_FULL
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1303
SQLSTATE
54W16
Sybase error code
Probable cause
You executed a MESSAGE...FOR CONNECTION statement and the maximum number of messages for the
connection have already been queued. The maximum number of queued messages is 10.

#### 1.1.4.1216 Too many mutexes and semaphores created

SQLE_TOO_MANY_MUTEXES_SEM
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1850
SQLSTATE
WW168
Sybase error code
Probable cause
A CREATE MUTEX or CREATE SEMAPHORE statement attempted to create a mutex or semaphore, but the
resulting number of distinct mutex and semaphore IDs used for permanent objects would exceed the limit.

#### 1.1.4.1217 Too many open cursors

Error constant
SQLE_TOO_MANY_CURSORS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1230
SQLSTATE
54W12
Sybase error code
Probable cause
You exceeded the number of cursors that can be open on a single UltraLite database. Check to ensure you are
freeing statements when you are done with them.

#### 1.1.4.1218 Too many parameters to this external procedure call

call
SQLE_TOO_MANY_PARAMETERS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-625
SQLSTATE
WW010
Sybase error code
Probable cause
There is a maximum of 256 parameters to an external function call in 32-bit Windows.

#### 1.1.4.1219 Too many publications specified for operation

Error constant
SQLE_TOO_MANY_PUBLICATIONS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1106
SQLSTATE
WW077
Sybase error code
Probable cause
You have specified too many publications for the required operation. For example, when retrieving the last
download timestamp, you are only allowed to select one publication.

#### 1.1.4.1220 Too many recursive iterations

Error constant
SQLE_TOO_MANY_RECURSIVE_ITERATIONS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-923
SQLSTATE
Sybase error code
Probable cause
A recursive query ran for more iterations than allowed by the current max_recursive_iterations option setting.

#### 1.1.4.1221 Too many references to a BLOB

Error constant
SQLE_TOO_MANY_BLOB_REFS
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Severity
SQLCODE
-1107
SQLSTATE
54W11
Sybase error code
Probable cause
You have exceeded the maximum number of references to a particular BLOB. In UltraLite you may have at most
256 references to any one particular BLOB.

#### 1.1.4.1222 Too many tables in query

Error constant
SQLE_TOO_MANY_TABLES
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1894
SQLSTATE
54W20
Sybase error code
Probable cause
You executed a statement that references too many tables. Rebuilding the database with a larger page size
could prevent this error.

#### 1.1.4.1223 Too many temporary mutexes and semaphores created

created
Error constant
SQLE_TOO_MANY_TEMP_MUTEXES_SEM
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1849
SQLSTATE
WW167
Sybase error code
Probable cause
A CREATE TEMPORARY MUTEX or CREATE TEMPORARY SEMAPHORE statement attempted to create a
temporary mutex or semaphore, but the resulting number of distinct mutex and semaphore IDs used for
temporary objects would exceed the limit.

#### 1.1.4.1224 Too many temporary tables in connection

Error constant
SQLE_TOO_MANY_TEMP_TABLES
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-817
SQLSTATE
52W41
Sybase error code
Probable cause
A CREATE TABLE or DECLARE LOCAL TEMPORARY TABLE statement attempted to create a temporary table,
but the resulting number of distinct table IDs used for temporary tables in the current connection would exceed
the limit.

#### 1.1.4.1225 Too many users in database

Error constant
SQLE_TOO_MANY_USERS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1104
SQLSTATE
54W10
Sybase error code
Probable cause
You have exceeded the maximum number of users permitted to access the database. The maximum number of
users that are allowed granted access to a single UltraLite database is four.

#### 1.1.4.1226 Trace event '%1' already exists

Error constant
SQLE_TRACE_EVENT_ALREADY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event name.
Severity
SQLCODE
-1635
SQLSTATE
WE021
Sybase error code
Probable cause
The specified trace event name already exists.

#### 1.1.4.1227 Trace event '%1' is not valid

Error constant
SQLE_INVALID_TRACE_EVENT_NAME

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event name.
Severity
SQLCODE
-1633
SQLSTATE
WE019
Sybase error code
Probable cause
The specified trace event name is not valid.

#### 1.1.4.1228 Trace event '%1' is referenced by one or more sessions. Drop referencing sessions first

sessions. Drop referencing sessions first
Error constant
SQLE_TRACE_EVENT_IS_IN_USE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event name.
Severity
SQLCODE
-1636
SQLSTATE
WE022
Sybase error code
Probable cause
The specified trace event name is used and cannot be dropped before dropping referencing sessions.

#### 1.1.4.1229 Trace event session '%1' already active

Error constant
SQLE_TRACE_SESSION_ALREADY_ACTIVE
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Severity
SQLCODE
-1641
SQLSTATE
WE026
Sybase error code
Probable cause
The specified trace event session is already active.

#### 1.1.4.1230 Trace event session '%1' already exists

Error constant
SQLE_TRACE_SESSION_ALREADY_EXISTS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Severity
SQLCODE
-1652
SQLSTATE
WE037
Sybase error code
Probable cause
A trace event session with that name already exists.

#### 1.1.4.1231 Trace event session '%1' already has target type '%2'

'%2'
Error constant
SQLE_TRACE_SESSION_ALREADY_HAS_TARGET_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Parameter 1
The trace event session name.
Parameter 2
The trace event target type.
Severity
SQLCODE
-1649
SQLSTATE
WE034
Sybase error code
Probable cause
The specified trace event session already has the specified target type.

#### 1.1.4.1232 Trace event session '%1' already has trace event '%2'

'%2'
Error constant
SQLE_TRACE_SESSION_ALREADY_HAS_EVENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Parameter 2
The trace event name.
Severity
SQLCODE
-1645
SQLSTATE
WE030
Sybase error code
Probable cause
The specified trace event session already has the specified event.

#### 1.1.4.1233 Trace event session '%1' does not have target type '%2'

'%2'
Error constant
SQLE_TRACE_SESSION_DOES_NOT_HAVE_TARGET_TYPE

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Parameter 2
The trace event target type.
Severity
SQLCODE
-1651
SQLSTATE
WE036
Sybase error code
Probable cause
The trace event session does not have the specified trace target type.

#### 1.1.4.1234 Trace event session '%1' does not have trace event '%2'

'%2'
Error constant
SQLE_TRACE_SESSION_DOES_NOT_HAVE_TRACE_EVENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Parameter 2
The trace event name.
Severity
SQLCODE
-1650
SQLSTATE
WE035
Sybase error code
Probable cause
The trace event session does not have the specified trace event.

#### 1.1.4.1235 Trace event session '%1' failed to start

Error constant
SQLE_TRACE_SESSION_FAILED_TO_START
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Severity
SQLCODE
-1643
SQLSTATE
WE028
Sybase error code
Probable cause
The specified trace event session failed to start.

#### 1.1.4.1236 Trace event session '%1' is active. Stop active session before dropping the session

session before dropping the session
Error constant
SQLE_TRACE_EVENT_SESSION_IS_ACTIVE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Severity
SQLCODE
-1637
SQLSTATE
WE023
Sybase error code
Probable cause
The specified trace event session is active. The session must be not be active in order to be dropped.

#### 1.1.4.1237 Trace event session '%1' is already stopped

Error constant
SQLE_TRACE_SESSION_ALREADY_STOPPED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace event session name.
Severity
SQLCODE
-1644
SQLSTATE
WE029
Sybase error code
Probable cause
The specified trace event session is already stopped.

#### 1.1.4.1238 Trace target option '%1' conflicts with option '%2'

Error constant
SQLE_TARGET_OPTIONS_CONFLICT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The trace target option name.
Parameter 2
The trace target option name.
Severity
SQLCODE
-1684
SQLSTATE
WE038
Sybase error code
Probable cause
A trace target option conflict with another target option.

#### 1.1.4.1239 Traced query (%1, %2) does not exist

Error constant
SQLE_INVALID_TRACED_PLAN
ODBC 2 state
ODBC 3 state
Parameter 1
The specified logging session ID.
Parameter 2
The specified query ID.
Severity
SQLCODE
-1154
SQLSTATE
55W28
Sybase error code
Probable cause
You attempted to generate a graphical plan for a query saved by diagnostic tracing, identified by a
logging_session_id and query ID. However, no such query exists in this database. If it was traced, it was sent to
a different database.

#### 1.1.4.1240 Transact-SQL expression in a non-Transact-SQL statement near '%1' %2

statement near '%1' %2
SQLE_DIALECT_MIX_TSQL_IN_WATCOM
Error constant
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
The word or symbol where the incompatible syntax has been
detected.
Parameter 2
Location of the incompatible expression.
Severity
SQLCODE
-1753
SQLSTATE
42WD6
Sybase error code

Probable cause
You executed a statement written in the Watcom SQL dialect with an expression written in the Transact-SQL
dialect.

#### 1.1.4.1241 Transact-SQL feature not supported

Error constant
SQLE_TSQL_FEATURE_NOT_SUPPORTED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-611
SQLSTATE
0AW02
Sybase error code
Probable cause
You attempted to use a Transact-SQL feature that is not supported in SQL Anywhere.

#### 1.1.4.1242 Transact-SQL outer joins are currently disabled

SQLE_TSQL_OUTER_JOINS_DISABLED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1099
SQLSTATE
55W25
Sybase error code
Probable cause
The ability to specify a Transact-SQL outer join in a query is currently disabled by the setting of the
tsql_outer_joins connection option. Transact-SQL outer joins are deprecated in this release of SQL Anywhere.

#### 1.1.4.1243 Transaction log backup page only partially full

Error constant
SQLE_BACKUP_PAGE_INCOMPLETE
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
01W10
Sybase error code
Probable cause
A DB_LOG_BACKUP_READ_WAIT was issued against the transaction log and the page returned was not full.
The application should reissue the request for the same page.

#### 1.1.4.1244 Transaction log mirroring cannot be used with database mirroring

database mirroring
Error constant
SQLE_MIRROR_LOG_WITH_DB_MIRROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1178
SQLSTATE
WW095
Sybase error code
Probable cause
Transaction log mirroring cannot be used with database mirroring. Use the dblog utility to disable transaction
log mirroring.

#### 1.1.4.1245 Transaction log was truncated

Error constant
SQLE_LOG_TRUNCATED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-244
SQLSTATE
WB005
Sybase error code
Probable cause
While an operation was occurring on the transaction log, the transaction log was truncated by another
operation.

#### 1.1.4.1246 Transform definition is too long

Error constant
SQLE_SLERR_TRANSFORM_DEF_TOO_LONG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1443
SQLSTATE
2FW36
Sybase error code
Probable cause
The provided transform definition is too long.

#### 1.1.4.1247 Transform from SRID %1 not supported

Error constant
SQLE_SLERR_NO_SRC_XFORM_DEF
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Parameter 1
The SRID of the value.
Severity
SQLCODE
-1445
SQLSTATE
2FW38
Sybase error code
Probable cause
There is no way to transform from values of the specified spatial reference system.

#### 1.1.4.1248 Transform from SRID %1 to %2 not supported

Error constant
SQLE_SLERR_NO_XFORM_DEF
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The SRID of the value.
Parameter 2
The SRID of the destination.
Severity
SQLCODE
-1444
SQLSTATE
2FW37
Sybase error code
Probable cause
There is no way to transform from the value's spatial reference system to the specified target. This error can
occur when you attempt to call ST_Transform between two spatial reference systems and one or both do not
have a TRANSFORM DEFINITION in the SRS definition (specified using a PROJ.4 projection description using

the TRANSFORMATION DEFINITION clause of the ALTER SPATIAL REFERENCE SYSTEM statement). You can
also get this error while performing a CAST from one SRID to another. Add TRANSFORMATION DEFINITION to
the SRSs involved. Alternatively, if both SRIDs use the same coordinate system, then you can use the ST_SRID
method to change a value's SRID without changing the values.

#### 1.1.4.1249 TREAT AS can only be used with extended types. Cannot treat %1 as a %2

Cannot treat %1 as a %2
Error constant
SQLE_TREAT_AS_ONLY_EXTENDED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value that could not be converted.
Parameter 2
The name of the type for the conversion.
Severity
SQLCODE
-1361
SQLSTATE
Sybase error code
Probable cause
An error occurred while trying to treat a value as another data type.

#### 1.1.4.1250 Trigger '%1' not found

SQLE_TRIGGER_NOT_FOUND
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the trigger that could not be found.
Severity
SQLCODE
-268
SQLSTATE
52W10
Sybase error code

Probable cause
You misspelled the name of a trigger, or you did not qualify a trigger name with a user name.

#### 1.1.4.1251 Trigger definition conflicts with existing triggers

Error constant
SQLE_TRIGGER_DEFN_CONFLICT
ODBC 2 state
S0002
ODBC 3 state
42S01
Severity
SQLCODE
-271
SQLSTATE
52W11
Sybase error code
Probable cause
You attempted to create a trigger, but a trigger with the same name or type already exists. To allow multiple
triggers with the same event and time to be created, use the ORDER clause to the specify firing order.

#### 1.1.4.1252 Trigger name '%1' is ambiguous

SQLE_AMBIGUOUS_TRIGGER_NAME
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the ambiguous trigger.
Severity
SQLCODE
-855
SQLSTATE
42W66
Sybase error code
Probable cause
A statement has referred to a trigger name that is not unique. Qualify the trigger name with the table and/or
owner name.

#### 1.1.4.1253 Trigger or foreign key for table '%1' is no longer valid

valid
Error constant
SQLE_TRIGGER_NO_LONGER_VALID
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the table.
Severity
SQLCODE
-837
SQLSTATE
42W64
Sybase error code
Probable cause
A trigger definition cannot be loaded from the catalog. Check for tables or columns that have been renamed or
that may be reserved words. The trigger may be a system-generated trigger to enforce the referential actions of
a foreign key.

#### 1.1.4.1254 Triggers cannot be created on materialized view '%1'

'%1'
SQLE_INVALID_TRIGGER_MATVIEW
Error constant
ODBC 2 state
ODBC 3 state
ERROR
Parameter 1
Name of the materialized view
Severity
SQLCODE
-1134
SQLSTATE
42W3D
Sybase error code
Probable cause
You attempted to create a trigger on a materialized view. A materialized view is not a valid target for a trigger.

#### 1.1.4.1255 TRUNCATE TABLE not allowed: initialized immediate materialized view %1 depends on %2

immediate materialized view %1 depends on %2
Error constant
SQLE_TRUNCATE_TABLE_WITH_IMV
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the dependent initialized immediate materialized
view.
Parameter 2
Name of the table on which TRUNCATE TABLE was per-
formed.
Severity
SQLCODE
-1193
SQLSTATE
55W30
Sybase error code
Probable cause
TRUNCATE TABLE is not permitted on any table that has dependent initialized immediate materialized views.

#### 1.1.4.1256 TRUNCATE TABLE statement cannot be used on a view

view
SQLE_CANNOT_TRUNCATE_VIEW
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-702
SQLSTATE
42W49
Sybase error code
Probable cause
You attempted to use TRUNCATE TABLE on a view, which is not permitted.

#### 1.1.4.1257 Two rows with the same primary key have been downloaded for table '%1'

downloaded for table '%1'
Error constant
SQLE_DUPLICATE_ROW_FOUND_IN_DOWNLOAD
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the table being downloaded.
Severity
SQLCODE
SQLSTATE
01W27
Sybase error code
Probable cause
The synchronization scripts are producing duplicate rows with the same primary key in your download.
Generally this behavior indicates a problem with the synchronization scripts. No guarantees are made about
which of the downloaded rows will be applied to the database.

#### 1.1.4.1258 Type '%1' cannot be instantiated with %2 arguments (near '%3')

arguments (near '%3')
SQLE_METHOD_NO_CONSTRUCTOR_N_ARGS
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
The name of the type that cannot be instantiated.
Parameter 2
The number of arguments supplied.
Parameter 3
The invalid expression.
Severity
SQLCODE
-1340
SQLSTATE
42X05

Sybase error code
Probable cause
A NEW expression was used for a data type that does not define any constructor methods.

#### 1.1.4.1259 Type '%1' does not support method calls (near '%2')

'%2')
Error constant
SQLE_METHOD_ON_NON_EXT
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
The name of the data type.
Parameter 2
The invalid expression.
Severity
SQLCODE
-1335
SQLSTATE
42X00
Sybase error code
Probable cause
You attempted to invoke a method on a value of a data type that does not define any methods.

#### 1.1.4.1260 Type '%1' has no method named '%2' (near '%3')

SQLE_METHOD_NOT_FOUND
Error constant
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
The name of the type with the unmatched method.
Parameter 2
Name of the method that could not be matched.
Parameter 3
The invalid expression.
Severity

SQLCODE
-1336
SQLSTATE
42X01
Sybase error code
Probable cause
When attempting to match a method invocation, no method was found with the appropriate name. Check for
spelling errors.

#### 1.1.4.1261 Type '%1' is not instantiable (near '%2')

Error constant
SQLE_METHOD_NO_CONSTRUCTOR
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
The name of the type that is not instantiable.
Parameter 2
The invalid expression.
Severity
SQLCODE
-1338
SQLSTATE
42X03
Sybase error code
Probable cause
A NEW expression was used for a data type that does not define any constructor methods.

#### 1.1.4.1262 UltraLite cannot synchronize because a synchronization is already running

synchronization is already running
Error constant
SQLE_SYNC_NOT_REENTRANT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity

SQLCODE
-1110
SQLSTATE
WW080
Sybase error code
Probable cause
You attempted to synchronize an UltraLite database which is already synchronizing. You must wait until
the current synchronization completes before starting another. UltraLite allows most operations to run
concurrently with synchronization, but only a single synchronization can be active at a time. This is generally
caused by two different threads attempting a synchronize call or statement at the same time.

#### 1.1.4.1263 UltraLite connection was restored

Error constant
SQLE_CONNECTION_RESTORED
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
WW040
Sybase error code
Probable cause
The connection attempt completed successfully and the transaction was restored from a suspended state.

#### 1.1.4.1264 UltraLite cursor (or result set or table) was restored

restored
Error constant
SQLE_CURSOR_RESTORED
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE

SQLSTATE
WW041
Sybase error code
Probable cause
The cursor (or result set or table) was opened successfully and the cursor position was restored from the
suspended state.

#### 1.1.4.1265 UltraLite database state was restored

Error constant
SQLE_DATABASE_STATE_RESTORED
ODBC 2 state
OK
ODBC 3 state
OK
Severity
SQLCODE
SQLSTATE
WW114
Sybase error code
Probable cause
The database state was restored from the temporary file. This includes suspended connections, transactions,
and cursors.

#### 1.1.4.1266 UltraLite performed database recovery on startup

Error constant
SQLE_DATABASE_RECOVERED
ODBC 2 state
OK
ODBC 3 state
OK

Severity
SQLCODE
SQLSTATE
WW247
Sybase error code
Probable cause
The database file was not shut down cleanly. Any uncommitted rows have been rolled back. This indicates that
not all connections were closed when the application terminated.

#### 1.1.4.1267 Unable to access the file system on the device

Error constant
SQLE_CANNOT_ACCESS_FILESYSTEM
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1108
SQLSTATE
WW078
Sybase error code
Probable cause
On a Palm device, you have tried to utilize the VFS file system, but that feature has not been enabled on the
device.

#### 1.1.4.1268 Unable to acquire table locks in specified time

SQLE_LOCK_TIMEOUT
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1175
SQLSTATE
42WC4

Sybase error code
Probable cause
The LOCK TABLE statement could not acquire all the locks in specified time period.

#### 1.1.4.1269 Unable to clean directory %1

Error constant
UNABLE_TO_CLEAN_DIRECTORY
ODBC 2 state
ODBC 3 state
Parameter 1
The file name of the directory that could not be cleaned
Severity
SQLCODE
-1968
SQLSTATE
08WBA
Sybase error code
Probable cause
You attempted to perform an operation using a file or directory name that does not exist or fail to access.

#### 1.1.4.1270 Unable to close the cursor on table "%1". LOAD TABLE cannot be executed

TABLE cannot be executed
SQLE_CANNOT_LOAD_TEMP_WITH_CURSOR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the table.
Severity
SQLCODE
-1155
SQLSTATE
WL011
Sybase error code

Probable cause
You cannot perform LOAD TABLE on a temporary table that has an open cursor on it. An attempt to close the
cursor failed. A failed LOAD TABLE would cause all of the rows in the temporary table to be deleted thereby
invalidating the cursor.

#### 1.1.4.1271 Unable to connect to server '%1': %2

Error constant
SQLE_OMNI_CONNECT_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the server that could not be connected to.
Parameter 2
A more specific reason returned from the server class driver.
Severity
SQLCODE
-656
SQLSTATE
WO001
Sybase error code
Probable cause
You attempted to connect to a remote server. Check that the remote server is running.

#### 1.1.4.1272 Unable to connect to the remote host specified by '%1'

'%1'
SQLE_UNABLE_TO_CONNECT_TO_HOST
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The URI referencing the remote host.
Severity
SQLCODE
-981
SQLSTATE
WW050
Sybase error code

Probable cause
A connection could not be initiated to the remote server.

#### 1.1.4.1273 Unable to connect, server definition is circular

Error constant
SQLE_OMNI_CIRCULAR_CONNECT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-657
SQLSTATE
WO002
Sybase error code
Probable cause
You attempted to connect to a remote server that maps to the local database.

#### 1.1.4.1274 Unable to connect: The server did not accept the requested encryption type

requested encryption type
SQLE_ENCRYPTION_TYPE_NOT_ACCEPTED
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1145
SQLSTATE
08W97
Sybase error code
Probable cause
The server only accepts certain encryption types, and the connection's encryption type is not one of the
accepted types. The -ec server option is used to configure the encryption types that the server accepts.

#### 1.1.4.1275 Unable to copy file %1

Error constant
SQLE_UNABLE_TO_COPY_FILE
ODBC 2 state
ODBC 3 state
Parameter 1
The file name of the file to be copied
Severity
SQLCODE
-1611
SQLSTATE
08WB7
Sybase error code
Probable cause
The request to copy a file failed.

#### 1.1.4.1276 Unable to copy file %1 to destination %2

Error constant
SQLE_UNABLE_TO_COPY_DB_FILE_INTO_CLOUD
ODBC 2 state
ODBC 3 state
Parameter 1
The file name of the file on the client computer
Parameter 2
The file name of the destination within the cloud
Severity
SQLCODE
-1593
SQLSTATE
08WB2
Sybase error code
Probable cause
The client database file could not be copied to the requested cloud destination.

#### 1.1.4.1277 Unable to create directory %1

Error constant
SQLE_UNABLE_TO_CREATE_DIRECTORY
ODBC 2 state
ODBC 3 state
Parameter 1
The file name of the directory that could not be created
Severity
SQLCODE
-1610
SQLSTATE
08WB6
Sybase error code
Probable cause
The request to create a directory failed.

#### 1.1.4.1278 Unable to declare a row variable from the cursor using %ROWTYPE; invalid name for field %1

using %ROWTYPE; invalid name for field %1
Error constant
SQLE_INVALID_FIELD_NAME_IN_DECLARE_ROW_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Number of the field for which there is no name.
Severity
SQLCODE
-1733
SQLSTATE
WP024
Sybase error code
Probable cause
The field name used to declare a row type using cursor %ROWTYPE is not defined or is invalid. Use a SELECT
list alias in the query specification or specify the result set in the procedure definition.

#### 1.1.4.1279 Unable to declare a row variable from the cursor using %ROWTYPE; no fields were found in the cursor

using %ROWTYPE; no fields were found in the
cursor
Error constant
SQLE_NO_FIELD_IN_DECLARE_ROW_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1734
SQLSTATE
WP025
Sybase error code
Probable cause
No fields were found when attempting to declare the row type using cursor %ROWTYPE.

#### 1.1.4.1280 Unable to delete database file

Error constant
SQLE_BACKUP_UNABLE_TO_DELETE_FILE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-243
SQLSTATE
WB004
Sybase error code
Probable cause
You attempted to delete a database file, but it could not be deleted. The file name should not be the same as
any database file that is currently in use.

#### 1.1.4.1281 Unable to delete file %1

Error constant
SQLE_UNABLE_TO_DELETE_FILE
ODBC 2 state
ODBC 3 state
Parameter 1
The file name of the file to be deleted
Severity
SQLCODE
-1608
SQLSTATE
08WB4
Sybase error code
Probable cause
The request to delete a file failed.

#### 1.1.4.1282 Unable to enlist transaction; DTC may be down

Error constant
SQLE_FAILED_TO_ENLIST
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-803
SQLSTATE
WL005
Sybase error code
Probable cause
You tried to enlist a transaction but DTC does not seem to be available at this time.

#### 1.1.4.1283 Unable to find in index '%1' for table '%2'

Error constant
SQLE_NOT_FOUND_IN_INDEX

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of invalid index.
Parameter 2
Name of table containing the invalid index.
Severity
SQLCODE
-189
SQLSTATE
WI005
Sybase error code
Probable cause
This is an internal error. If it can be reproduced, it should be reported to SAP. You should be able to work around
the error by dropping and recreating the index.

#### 1.1.4.1284 Unable to find the cockpit parameters used to start or stop

start or stop
Error constant
SQLE_COCKPITDB_UNABLE_TO_FIND_PARAMETERS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1875
SQLSTATE
08WF2
Sybase error code
Probable cause
Unable to find the cockpit parameters that were used to start or stop the SQL Anywhere Cockpit. While
starting, stopping, or upgrading the SQL Anywhere Cockpit, either the database server failed to manage the
parameters properly or the memory that is used to store the cockpit parameters may be corrupted. This is a
fatal internal error.

#### 1.1.4.1285 Unable to finish upgrade the SQL Anywhere Cockpit when it is not active

Cockpit when it is not active
Error constant
SQLE_COCKPITDB_CANNOT_FINISH_UP-
GRADE_WHEN_DB_NOT_ACTIVE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1873
SQLSTATE
08WH8
Sybase error code
Probable cause
You are attempting to finish upgrading the SQL Anywhere Cockpit while it is not active.

#### 1.1.4.1286 Unable to load the dbrsakp shared object

Error constant
SQLE_RSA_LOAD_FAILED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1584
SQLSTATE
08WA9
Sybase error code
Probable cause
The server was unable to load the dbrsakp DLL on Microsoft Windows platforms or the libdbrsakp shared
object on UNIX/Linux platforms.

#### 1.1.4.1287 Unable to open backup log '%1'

Error constant
SQLE_UNABLE_TO_OPEN_BACKUP_LOG
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
Backup log file name.
Severity
SQLCODE
SQLSTATE
WB011
Sybase error code
Probable cause
The server was unable to open the backup log to record the execution of a BACKUP or RESTORE statement.
Check the settings of the environment variables used to locate the backup log file. The directory to contain the
log must already exist.

#### 1.1.4.1288 Unable to open the SQL Anywhere Cockpit template -- '%1'

template -- '%1'
SQLE_CANNOT_OPEN_SQLACOCKPITDB_TEMPLATE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Reason the SQL Anywhere Cockpit template could not be
opened, if known.
Severity
SQLCODE
-1858
SQLSTATE
08WG0
Sybase error code

Probable cause
The database server was unable to open the SQL Anywhere Cockpit template file. This could happen when the
SQL Anywhere Cockpit template is not installed properly.

#### 1.1.4.1289 Unable to perform requested operation since this database uses keyless encryption

database uses keyless encryption
Error constant
SQLE_KEYLESS_ENCRYPTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1109
SQLSTATE
WW079
Sybase error code
Probable cause
The operation you requested on the encryption key failed since the UltraLite database uses keyless encryption.
This can occur when you try to change the encryption key for a database that uses keyless encryption
(obfuscation for example).

#### 1.1.4.1290 Unable to prepare to save the SQL Anywhere Cockpit when it is not active.

Cockpit when it is not active.
COCKPIT_CANNOT_PREPARE_SAVE_WHEN_DB_NOT_AC-
Error constant
TIVE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1954
SQLSTATE
08WH9
Sybase error code

Probable cause
You are attempting to prepare to save the SQL Anywhere Cockpit while it is not active.

#### 1.1.4.1291 Unable to prepare to save the SQL Anywhere Cockpit when it is already being prepared.

Cockpit when it is already being prepared.
Error constant
COCKPIT_CANNOT_PREPARE_SAVE_WHEN_PRE-
PARE_SAVE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1959
SQLSTATE
08WJ3
Sybase error code
Probable cause
You are attempting to save and restart the SQL Anywhere Cockpit while it is already being prepared.

#### 1.1.4.1292 Unable to re-enlist transaction; DTC may be down

SQLE_FAILED_TO_REENLIST
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-804
SQLSTATE
WL006
Sybase error code
Probable cause
You tried to recover a transaction but DTC does not seem to be available at this time.

#### 1.1.4.1293 Unable to retry download because upload is not finished

finished
Error constant
SQLE_DOWNLOAD_RESTART_FAILED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1102
SQLSTATE
WW074
Sybase error code
Probable cause
The MobiLink server could not restart the download because the MobiLink server has not received the entire
upload stream.

#### 1.1.4.1294 Unable to save and restart the SQL Anywhere Cockpit when it is not prepared.

Cockpit when it is not prepared.
COCKPIT_CANNOT_SAVE_RE-
Error constant
START_WHEN_NOT_SAVE_PREPARED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1960
SQLSTATE
08WJ4
Sybase error code

Probable cause
You are attempting to save and restart the SQL Anywhere Cockpit while it is not prepared.

#### 1.1.4.1295 Unable to start database "%1": CHAR collation or tailoring not supported on this platform

tailoring not supported on this platform
Error constant
SQLE_CHAR_COLLATION_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The database name.
Severity
SQLCODE
-1140
SQLSTATE
WC015
Sybase error code
Probable cause
The specified CHAR collation is not supported on the current platform.

#### 1.1.4.1296 Unable to start database "%1": NCHAR collation or tailoring not supported on this platform

or tailoring not supported on this platform
SQLE_NCHAR_COLLATION_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The database name.
Severity
SQLCODE
-1141
SQLSTATE
WC016
Sybase error code

Probable cause
The specified NCHAR collation is not supported on the current platform.
1.1.4.1297  Unable to start database %1: Cannot use read-
only mode since auditing is currently logging to the
transaction log
Error constant
SQLE_AUDITING_DB_READ_ONLY
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the database.
Severity
SQLCODE
-1063
SQLSTATE
08W93
Sybase error code
Probable cause
The specified database has auditing enabled, and the current settings are preventing it from being started
read-only. The audit_log option is set to require the transaction log, so auditing must be turned off or the
audit_log option must be changed before the database will start in read-only mode.

#### 1.1.4.1298 Unable to start database server

SQLE_UNABLE_TO_START_ENGINE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-80
SQLSTATE
08W07
Sybase error code

Probable cause
It was not possible to start the database server. There may not be enough memory to run the database server.
It may also be that the executable cannot be found.

#### 1.1.4.1299 Unable to start database server: missing license file

file
Error constant
SQLE_UNABLE_TO_START_ENGINE_MISSING_LICENSE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1179
SQLSTATE
08WA2
Sybase error code
Probable cause
It was not possible to start the database server because the server license file was not found. The server
license file has the same name as the server executable with the extension ".lic". For example, if you have
a database server executable named myserver.exe, then the database server looks for a license file named
myserver.lic that is located in the same directory as the database server executable.

#### 1.1.4.1300 Unable to start database server: Server fatal error

Error constant
SQLE_UNABLE_TO_START_ENGINE_FATAL_ERROR
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1033
SQLSTATE
08W89
Sybase error code
Probable cause
The database server failed to start because a fatal error or assertion failure occurred. More information may be
available in the Microsoft Windows event log or UNIX/Linux system log or by manually starting the database
server.

#### 1.1.4.1301 Unable to start specified database: %1

Error constant
SQLE_UNABLE_TO_START_DATABASE
ODBC 2 state
ODBC 3 state
Parameter 1
Reason the database could not be started, if known.
Severity
SQLCODE
-82
SQLSTATE
08W09
Sybase error code
Probable cause
The database server was unable to start the specified database. Check the database server messages window
for more details. If the server was being started automatically, you can use the database server -o option to
view messages from the database server or start the server manually to try to obtain more information about
why the database cannot be started.

#### 1.1.4.1302 Unable to start specified database: '%1' is an invalid transaction log

invalid transaction log
Error constant
SQLE_CORRUPT_REDO
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the transaction log file.
Severity
SQLCODE
-1007
SQLSTATE
08W88
Sybase error code
Probable cause
The specified file is not a valid transaction log.

#### 1.1.4.1303 Unable to start specified database: '%1' is an invalid transaction log mirror

invalid transaction log mirror
SQLE_CORRUPT_REDO_MIRROR
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the transaction log mirror file.
Severity
SQLCODE
-1008
SQLSTATE
08W72
Sybase error code
Probable cause
The specified file is not a valid transaction log mirror.

#### 1.1.4.1304 Unable to start specified database: '%1' is not a database

database
Error constant
SQLE_FILE_NOT_DB
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the database file.
Severity
SQLCODE
-1004
SQLSTATE
08W85
Sybase error code
Probable cause
The specified file is not a valid database file.

#### 1.1.4.1305 Unable to start specified database: '%1' is not a valid database file

valid database file
SQLE_FILE_BAD_DB
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the database file.
Severity
SQLCODE
-1006
SQLSTATE
08W87
Sybase error code
Probable cause
The specified file is not a valid database.

#### 1.1.4.1306 Unable to start specified database: '%1' must be upgraded to start with this server (capability %2 missing)

upgraded to start with this server (capability %2
missing)
Error constant
SQLE_UPGRADE_DATABASE
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the database file.
Parameter 2
The capability that is missing from the database file.
Severity
SQLCODE
-1012
SQLSTATE
08W76
Sybase error code
Probable cause
The specified database must be upgraded to start with this server.

#### 1.1.4.1307 Unable to start specified database: '%1' not expecting any operations in transaction log

expecting any operations in transaction log
SQLE_EXPECTING_NO_REDO
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the transaction log file.
Severity
SQLCODE
-1010
SQLSTATE
08W74

Sybase error code
Probable cause
The transaction log contains operations, but the database server was not expecting any.

#### 1.1.4.1308 Unable to start specified database: '%1' was created by a different version of the software

created by a different version of the software
Error constant
SQLE_FILE_WRONG_VERSION
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the database file.
Severity
SQLCODE
-1005
SQLSTATE
08W86
Sybase error code
Probable cause
The specified database file was created by a different version of the software, and it cannot be read by this
version.

#### 1.1.4.1309 Unable to start specified database: '%1': transaction log file not found

transaction log file not found
SQLE_LOG_NOT_FOUND
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the transaction log file.
Severity
SQLCODE
-1017

SQLSTATE
08W81
Sybase error code
Probable cause
The transaction log file was not found.

#### 1.1.4.1310 Unable to start specified database: Cannot use log file '%1' since it has been used more recently than the database file

Error constant
SQLE_LOG_NEWER_THAN_DB
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the transaction log mirror file.
Severity
SQLCODE
-1016
SQLSTATE
08W80
Sybase error code
Probable cause
The transaction log file has been used more recently than the database file.

#### 1.1.4.1311 Unable to start specified database: Cannot use log file '%1' since it is shorter than expected

file '%1' since it is shorter than expected
Error constant
SQLE_LOG_TOO_SHORT
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the transaction log file.
Severity

SQLCODE
-1020
SQLSTATE
08W84
Sybase error code
Probable cause
The transaction log file is shorter than expected.

#### 1.1.4.1312 Unable to start specified database: Cannot use log file '%1' since the database file has been used more recently

Error constant
SQLE_LOG_OLDER_THAN_DB
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the transaction log file.
Severity
SQLCODE
-1019
SQLSTATE
08W83
Sybase error code
Probable cause
The database file has been used more recently than the transaction log file.

#### 1.1.4.1313 Unable to start specified database: Cannot use log file '%1' since the offsets do not match the offsets in the database file

Error constant
SQLE_LOG_OFFSETS_DONT_MATCH
ODBC 2 state
ODBC 3 state

Parameter 1
The name of the transaction log file.
Severity
SQLCODE
-1018
SQLSTATE
08W82
Sybase error code
Probable cause
The transaction log file has an offset that does not match the offset expected by the database file.

#### 1.1.4.1314 Unable to start specified database: Cannot use log file '%1' since the timeline does do not match the timeline of the database file

Error constant
SQLE_LOG_TIMELINES_DONT_MATCH
ODBC 2 state
ODBC 3 state
Parameter 1
The name of the transaction log file.
Severity
SQLCODE
-1834
SQLSTATE
08WEC
Sybase error code
Probable cause
The transaction log file has a timeline that does not match the timeline expected by the database file.

#### 1.1.4.1315 Unable to start specified database: Log file error

Error constant
SQLE_UNABLE_TO_START_DATABASE_LOG_ERROR
ODBC 2 state
ODBC 3 state

Severity
SQLCODE
-935
SQLSTATE
08W68
Sybase error code
Probable cause
The database server was unable to start the database since the log file is missing, for a different database, or
some other reason. Check the server messages window for more details.

#### 1.1.4.1316 Unable to start specified database: Server must be upgraded to start database %1

upgraded to start database %1
Error constant
SQLE_UNABLE_TO_START_DATABASE_VER_NEWER
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the database that could not be started, if known.
Severity
SQLCODE
-934
SQLSTATE
08W67
Sybase error code
Probable cause
The database server was unable to start the database since the database version is newer than the server
version. The server must be upgraded to at least the version of the database to be able to start the database.

#### 1.1.4.1317 Unable to start specified database: The transaction log '%1' or its mirror '%2' is invalid

log '%1' or its mirror '%2' is invalid
Error constant
SQLE_CORRUPT_REDO_OR_MIRROR
ODBC 2 state

ODBC 3 state
Parameter 1
The name of the transaction log file.
Parameter 2
The name of the transaction log mirror file.
Severity
SQLCODE
-1009
SQLSTATE
08W73
Sybase error code
Probable cause
The transaction log differs from the transaction log mirror. Either the transaction log or its mirror is invalid.

#### 1.1.4.1318 Unable to start specified database: Unknown encryption algorithm

encryption algorithm
Error constant
SQLE_UNKNOWN_ENCRYPTION_ALGORITHM
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1011
SQLSTATE
08W75
Sybase error code
Probable cause
The database is encrypted with an algorithm not supported by this server.

#### 1.1.4.1319 Unable to start the SQL Anywhere Cockpit when it is stopping

is stopping
Error constant
SQLE_COCKPITDB_CANNOT_START_WHEN_DB_STOP-
PING

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1866
SQLSTATE
08WH1
Sybase error code
Probable cause
You are attempting to start the SQL Anywhere Cockpit while it is stopping.

#### 1.1.4.1320 Unable to start the SQL Anywhere Cockpit: %1

Error constant
SQLE_UNABLE_TO_START_COCKPIT_DATABASE
ODBC 2 state
ODBC 3 state
Parameter 1
Reason the SQL Anywhere Cockpit could not be started, if
known.
Severity
SQLCODE
-1851
SQLSTATE
08WF8
Sybase error code
Probable cause
The database server was unable to start SQL Anywhere Cockpit.

#### 1.1.4.1321 Unable to start the SQL Anywhere Cockpit: Please restart the server with a minimum page size of 4096

restart the server with a minimum page size of
Error constant
SQLE_COCKPITDB_SERVER_PAGE_SIZE_TOO_SMALL

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1926
SQLSTATE
08WG3
Sybase error code
Probable cause
You attempted to start the SQL Anywhere Cockpit when the server is running with the page size less than
4096. Restart the server with a minimum page size of 4096.

#### 1.1.4.1322 Unable to stop specified database: %1

Error constant
SQLE_UNABLE_TO_STOP_DATABASE
ODBC 2 state
ODBC 3 state
Parameter 1
Reason the database could not be stopped, if known.
Severity
SQLCODE
-1384
SQLSTATE
08WA5
Sybase error code
Probable cause
The database server was unable to stop the specified database.

#### 1.1.4.1323 Unable to stop the SQL Anywhere Cockpit when it is being started

is being started
Error constant
SQLE_COCKPITDB_CANNOT_STOP_WHEN_DB_STARTING
ODBC 2 state
ERROR

ODBC 3 state
ERROR
Severity
SQLCODE
-1871
SQLSTATE
08WH6
Sybase error code
Probable cause
You are attempting to stop the SQL Anywhere Cockpit while it is being started.

#### 1.1.4.1324 Unable to stop the SQL Anywhere Cockpit when it is being prepared to save.

is being prepared to save.
Error constant
COCKPITDB_CANNOT_STOP_WHEN_PREPARE_SAVE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1957
SQLSTATE
08WJ0
Sybase error code
Probable cause
You are attempting to stop the SQL Anywhere Cockpit while it is preparing to save.

#### 1.1.4.1325 Unable to upgrade the SQL Anywhere Cockpit when it is not active

when it is not active
Error constant
SQLE_COCKPITDB_CANNOT_UP-
GRADE_WHEN_DB_NOT_ACTIVE
ODBC 2 state
ERROR
ODBC 3 state
ERROR

Severity
SQLCODE
-1872
SQLSTATE
08WH7
Sybase error code
Probable cause
You are attempting to upgrade the SQL Anywhere Cockpit while it is not active.

#### 1.1.4.1326 Undeclared tag ID: '%1'

Error constant
SQLE_UNDECLARED_FOR_XML_EXPLICIT_TAG
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value of the undeclared tag ID.
Severity
SQLCODE
-901
SQLSTATE
WX009
Sybase error code
Probable cause
Every value appearing in the Tag column of the table must be declared in the TagNumber field of at least one
column name.

#### 1.1.4.1327 Underflow when converting '%1'

Error constant
SQLE_UNDERFLOW
ODBC 2 state
ERROR
ODBC 3 state
Parameter 1
The type being converted.
Severity

SQLCODE
-1280
SQLSTATE
WW232
Sybase error code
Probable cause
An underflow occurred when converting the specified type. The source type may be too small (for example
zero length binary) or value may be too small to be represented by the destination type.

#### 1.1.4.1328 Unique indexes with the clause WITH NULLS NOT DISTINCT are not supported for this database

DISTINCT are not supported for this database
Error constant
SQLE_UNIQUE_INDEX_NULLS_NOT_DISTINCT_NOT_SUP-
PORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1392
SQLSTATE
52W53
Sybase error code
Probable cause
The current database does not have support for unique indexes with the clause WITH NULLS NOT DISTINCT.
To use this feature, upgrade your database to the most recent version.

#### 1.1.4.1329 Unit of measure "%1" is not a linear unit

Error constant
SQLE_SLERR_UOM_NOT_LINEAR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the invalid unit of measure.
Severity

SQLCODE
-1446
SQLSTATE
2FW39
Sybase error code
Probable cause
The specified unit of measure is not a linear unit of measure.

#### 1.1.4.1330 Unit of measure "%1" is not an angular unit

Error constant
SQLE_SLERR_UOM_NOT_ANGULAR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the invalid unit of measure.
Severity
SQLCODE
-1447
SQLSTATE
2FW40
Sybase error code
Probable cause
The specified unit of measure is not a linear unit of measure.

#### 1.1.4.1331 Unit of measure '%1' already exists

SQLE_SLERR_DDL_UOM_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the unit of measure.
Severity
SQLCODE
-1460
SQLSTATE
2FW53

Sybase error code
Probable cause
The named unit of measure is already defined.

#### 1.1.4.1332 Unit of measure '%1' not found

Error constant
SQLE_SLERR_DDL_NO_UOM
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The unit of measure name.
Severity
SQLCODE
-1458
SQLSTATE
2FW51
Sybase error code
Probable cause
The named unit of measure is not defined.

#### 1.1.4.1333 Unknown backup operation

SQLE_UNKNOWN_BACKUP_OPERATION
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-240
SQLSTATE
WB001
Sybase error code

Probable cause
You specified an invalid backup statement operation in a call to db_backup.

#### 1.1.4.1334 Unknown collation '%1'

Error constant
SQLE_UNKNOWN_COLLATION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name that is not a database collation.
Severity
SQLCODE
-1506
SQLSTATE
WC018
Sybase error code
Probable cause
The specified collation is unknown. Ensure the name is spelled correctly.

#### 1.1.4.1335 Unknown FOR XML EXPLICIT directive: '%1'

Error constant
SQLE_BAD_FOR_XML_EXPLICIT_DIRECTIVE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The unknown directive.
Severity

SQLCODE
-898
SQLSTATE
WX006
Sybase error code
Probable cause
Legal FOR XML EXPLICIT directives are: id, idref, idrefs, hide, element, xml, and cdata. Legal FOR JSON
EXPLICIT directives are: hide, and element.

#### 1.1.4.1336 Unknown function '%1'

Error constant
SQLE_UNKNOWN_FUNC
ODBC 2 state
ODBC 3 state
Parameter 1
Function name that is not a database function.
Severity
SQLCODE
-148
SQLSTATE
42W05
Sybase error code
Probable cause
You misspelled the name of a database function (such as MAXIMUM instead of MAX) in a query definition or in
a query column name.

#### 1.1.4.1337 Unknown option '%1' specified for target type '%2'

Error constant
SQLE_UNKNOWN_OPTION_FOR_TARGET_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The option name.
Parameter 2
The trace event target type.
Severity
SQLCODE
-1647
SQLSTATE
WE032
Sybase error code
Probable cause
An unknown option name was specified for given target type.

#### 1.1.4.1338 Unknown spatial reference system (%1)

SQLE_SLERR_SRID_UNKNOWN
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The spatial reference system identifier.
Severity
SQLCODE
-1409
SQLSTATE
2FF59
Sybase error code
Probable cause
The provided SRID does not match a defined spatial reference system.

#### 1.1.4.1339 Unknown unit of measure '%1'

Error constant
SQLE_SLERR_UNKNOWN_UOM
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the unit of measure.
Severity
SQLCODE
-1404
SQLSTATE
2FF14
Sybase error code
Probable cause
The name does not match a defined unit of measure.

#### 1.1.4.1340 UNLOAD TABLE cannot be used to unload a view

SQLE_CANNOT_UNLOAD_A_VIEW
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-643
SQLSTATE
WL004
Sybase error code
Probable cause
UNLOAD TABLE was specified with the name of a view. UNLOAD TABLE may only be used to unload tables.

#### 1.1.4.1341 UNPIVOT error: An IN clause item does not contain the same number of items as the FOR clause

the same number of items as the FOR clause
Error constant
SQLE_UNPIVOT_INVALID_IN_CLAUSE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1817
SQLSTATE
Sybase error code
Probable cause
You specified an UNPIVOT, but the number of items in the FOR clause does not match the number of items in
one IN clause item.

#### 1.1.4.1342 UNPIVOT error: Cannot create valid identifiers for IN clause items

IN clause items
SQLE_UNPIVOT_INVALID_IDENTIFIER
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1847
SQLSTATE
Sybase error code
Probable cause
You specified an UNPIVOT clause, but the IN clause contains items for which no valid identifiers can be created.
Provide valid aliases for the IN clause items.

#### 1.1.4.1343 Unsupported character set '%1' and unsupported language '%2'; language used is '%3' instead

language '%2'; language used is '%3' instead
Error constant
SQLE_UNSUPPORTED_CHARSET_AND_LANGUAGE
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the character set that could not be supported.
Parameter 2
Name of the language that could not be supported.
Parameter 3
Name of the language that the server will use to send lan-
guage strings.
Severity
SQLCODE
SQLSTATE
01W15
Sybase error code
Probable cause
The character set that the application requested is not supported by the server to which the application is
connecting. The language that the application requested is not supported either. Language strings will be sent
in the language specified.

#### 1.1.4.1344 Unsupported extended storage syntax

SQLE_RESTORE_UNSUPPORTED_HANA_SYNTAX
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1910
SQLSTATE
42X17
Sybase error code

Probable cause
Cannot use extended storage syntax when not in an SAP HANA environment.

#### 1.1.4.1345 Unsupported property '%1' in service USING attribute

attribute
Error constant
SQLE_SERVICE_PARM_UNSUPPORTED_PROPERTY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the unsupported property.
Severity
SQLCODE
-1024
SQLSTATE
42WAF
Sybase error code
Probable cause
The service definition contains a USING attribute with an unsupported property.

#### 1.1.4.1346 Unsupported use of ROW type in an INTO clause

SQLE_INTO_CLAUSE_UNSUP-
Error constant
PORTED_USE_OF_ROW_TYPE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1815
SQLSTATE
WP030
Sybase error code

Probable cause
You tried to use an a ROW type in an unsupported context. You attempted to assign more than one fetched
value into a row variable, but the row variable may contain another row or array types or unsupported types. It
must be in the form of the collection of simple variables.

#### 1.1.4.1347 Unterminated C string

Error constant
SQLE_UNTERMINATED_C_STR
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-634
SQLSTATE
Sybase error code
Probable cause
The last byte of a C string host variable must contain the null character.

#### 1.1.4.1348 Update conflict on snapshot transaction

SQLE_SNAPSHOT_UPDATE_CONFLICT
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1064
SQLSTATE
42WBA
Sybase error code
Probable cause
A snapshot transaction attempted to update or delete a row that was changed by another transaction after the
snapshot began.

#### 1.1.4.1349 Update operation attempted on a read-only cursor

Error constant
SQLE_READ_ONLY_CURSOR
ODBC 2 state
S1009
ODBC 3 state
HY092
Severity
SQLCODE
-633
SQLSTATE
42W30
Sybase error code
Probable cause
You attempted an update operation on a cursor that was explicitly declared as read-only.

#### 1.1.4.1350 Update operation attempted on non-updatable query

query
Error constant
SQLE_NON_UPDATEABLE_VIEW
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-192
SQLSTATE
42W31
Sybase error code
Probable cause
You attempted an insert, update, or delete operation on a query that is implicitly read-only. Queries that
contain DISTINCT, GROUP BY, HAVING, EXCEPT, INTERSECT or UNION, or that contain aggregate functions, or
that involve a join, are implicitly read-only. If the query references a view then the view may be non-updatable.

#### 1.1.4.1351 Update operation attempted on non-updatable remote query

remote query
Error constant
SQLE_NON_UPDATEABLE_EXT_TAB
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-728
SQLSTATE
42W35
Sybase error code
Probable cause
You attempted an update or delete operation on a remote table that is currently not supported. Examples of
such operations include positioned updates or deletes and updates or deletes that involve a join between local
and proxy tables. Updates or deletes that involve a join between proxy tables on different remote servers will
also give this error.

#### 1.1.4.1352 Use of %TYPE or %ROWTYPE is not allowed for variable or temporary objects

variable or temporary objects
SQLE_TEMPORARY_OR_VARIABLE_NOT_ALLOWED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1727
SQLSTATE
WP023
Sybase error code
Probable cause
You tried to use %TYPE or %ROWTYPE with a temporary object such as procedure parameters or a result set,
which is not allowed.

#### 1.1.4.1353 Use of feature '%1' is not allowed

Error constant
SQLE_SECURE_FEATURE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the SQL statement or feature.
Severity
SQLCODE
-1084
SQLSTATE
57W02
Sybase error code
Probable cause
You have attempted to use a feature that was disabled by the server administrator when the database server
was started.

#### 1.1.4.1354 Use of statement '%1', which requires feature '%2', is not allowed

'%2', is not allowed
Error constant
SQLE_SECURE_STATEMENT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the SQL statement.
Parameter 2
Name of the feature.
Severity
SQLCODE
-1142
SQLSTATE
57W04
Sybase error code
Probable cause
You have attempted to use a statement which requires a feature that was disabled by the server administrator
when the database server was started.

#### 1.1.4.1355 Use of table privilege '%1' is not supported on the current database

current database
Error constant
SQLE_TABPRIV_LOAD_TRUNCATE_UNSUPPORTED
ODBC 2 state
ODBC 3 state
Parameter 1
The table privilege, load or truncate.
Severity
SQLCODE
-1631
SQLSTATE
0A007
Sybase error code
Probable cause
The current database is an older database and does not have the capability to support table privileges load or
truncate. You must upgrade your database to use these table privileges.

#### 1.1.4.1356 Use of WITH DROP OBJECTS is not allowed with '%1'

'%1'
SQLE_WITH_DROP_OBJECTS_NOT_ALLOWED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the role being dropped.
Severity
SQLCODE
-1561
SQLSTATE
28W35
Sybase error code
Probable cause
Use of WITH DROP OBJECTS is not allowed with user extended as role.

#### 1.1.4.1357 Use of WITH NO SYSTEM PRIVILEGE INHERITANCE option is not allowed with %1

INHERITANCE option is not allowed with %1
Error constant
SQLE_INVALID_ROLE_GRANT_OPTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the role.
Severity
SQLCODE
-1539
SQLSTATE
28W28
Sybase error code
Probable cause
WITH NO SYSTEM PRIVILEGE INHERITANCE option can be specified only with user defined roles
corresponding to legacy non-inheritable authorities.

#### 1.1.4.1358 User "%1" already exists

SQLE_USER_ALREADY_EXISTS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the user.
Severity
SQLCODE
-1198
SQLSTATE
WW101
Sybase error code
Probable cause
An attempt was made to create a user that already exists in the database.

#### 1.1.4.1359 User '%1' already has EXECUTE permission

Error constant
SQLE_ALREADY_HAS_EXEC_PERMS
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the user that already has EXECUTE permission.
Severity
SQLCODE
-968
SQLSTATE
42WAB
Sybase error code
Probable cause
You attempted to give EXECUTE permission on a stored procedure to a user that already has EXECUTE
permission on that procedure.

#### 1.1.4.1360 User '%1' already has GRANT OPTION

SQLE_ALREADY_HAS_GRANT_PERMS
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the user that already has GRANT OPTION.
Severity
SQLCODE
-120
SQLSTATE
42W01
Sybase error code

Probable cause
You attempted to give GRANT OPTION to a user that already has it.

#### 1.1.4.1361 User '%1' already has membership in group '%2'

Error constant
SQLE_ALREADY_HAS_GROUP_MEMBERSHIP
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the user that already has membership.
Parameter 2
Name of the group.
Severity
SQLCODE
-312
SQLSTATE
42W34
Sybase error code
Probable cause
You attempted to give a membership in a group to a user that already has such membership.

#### 1.1.4.1362 User '%1' has the row in '%2' locked

SQLE_LOCKED
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of another user.
Parameter 2
Table that generates the error.
Severity
SQLCODE
-210
SQLSTATE
42W18
Sybase error code

Probable cause
The operation failed because another connection holds a lock on the same object you are attempting to
modify. With INSERT, UPDATE, DELETE, SELECT, or MERGE statements this error is typically caused by
attempting to read or write a row that is locked by another user, while the database option 'blocking' is set
to Off. With data definition statements, including CREATE, DROP, GRANT, REVOKE, REFRESH, or ALTER, this
error can be generated when the connection executing the DDL statement is unable to obtain an exclusive lock
on the object to be modified (table, view, materialized view, or index) so that the operation can proceed. During
some operations (for example, refreshing a materialized view), a connection can temporarily set blocking to
Off to complete the operation. The temporary setting only applies to the connection and is reset after the
operation completes if the initial setting was On. However, a SQLCODE -210 SQLSTATE 42W18 error can be
generated during the time that blocking is set to Off.

#### 1.1.4.1363 User '%1' is already the publisher for this database

Error constant
SQLE_ONLY_ONE_PUBLISHER
ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of the publisher.
Severity
SQLCODE
-284
SQLSTATE
5RW05
Sybase error code
Probable cause
You attempted to GRANT PUBLISH to a user ID, when a publisher already exists.

#### 1.1.4.1364 User '%1' is not a remote user for this database

Error constant
SQLE_NOT_REMOTE_USER

ODBC 2 state
S0002
ODBC 3 state
42S02
Parameter 1
Name of user.
Severity
SQLCODE
-285
SQLSTATE
5RW06
Sybase error code
Probable cause
You attempted to execute a CREATE SUBSCRIPTION or PASSTHROUGH for a user that is not a remote user of
this database. You must GRANT REMOTE or GRANT CONSOLIDATE for this user before proceeding with this
operation.

#### 1.1.4.1365 User '%1' is not a user group

Error constant
SQLE_NOT_A_GROUP
ODBC 2 state
ODBC 3 state
Parameter 1
Name of user you thought was a group.
Severity
SQLCODE
-123
SQLSTATE
42W03
Sybase error code
Probable cause
You attempted to add a member to group, but the user ID specified as a group has not been granted GROUP
permission.

#### 1.1.4.1366 User cannot be dropped because external logins exist for this user

exist for this user
Error constant
SQLE_USER_HAS_EXTERNLOGINS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1220
SQLSTATE
WO028
Sybase error code
Probable cause
The user cannot be dropped while an external login for the user still exists.

#### 1.1.4.1367 User ID '%1' does not exist

Error constant
SQLE_UNKNOWN_USERID
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the user that could not be found.
Severity
SQLCODE
-140
SQLSTATE
Sybase error code
Probable cause
You used a user ID that does not exist.

#### 1.1.4.1368 User message %1 already exists

Error constant
SQLE_MESSAGE_ALREADY_EXISTS
ODBC 2 state
ODBC 3 state
Parameter 1
Error number of the user message that exists in the data-
base.
Severity
SQLCODE
-610
SQLSTATE
52W16
Sybase error code
Probable cause
The message with this error number already exists in the database.

#### 1.1.4.1369 User message %1 not found

SQLE_MESSAGE_NOT_FOUND
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Message number.
Severity
SQLCODE
-612
SQLSTATE
52W17
Sybase error code
Probable cause
The message with this error number does not exist in the database.

#### 1.1.4.1370 User or Role ID '%1' does not exist

Error constant
SQLE_UNKNOWN_USER_ROLE_ID
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the user or role that could not be found.
Severity
SQLCODE
-1538
SQLSTATE
28W27
Sybase error code
Probable cause
You used a user or role ID that does not exist.

#### 1.1.4.1371 User owns locked mutexes

Error constant
SQLE_USER_OWNS_MUTEXES_IN_USE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1830
SQLSTATE
42WF5
Sybase error code
Probable cause
You attempted to drop a user that owns a (possibly deleted) mutex currently locked by other active users of the
database, or a mutex/semaphore that is being created or dropped.

#### 1.1.4.1372 User owns procedures in use

Error constant
SQLE_USER_OWNS_PROCEDURES_IN_USE

ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-750
SQLSTATE
42W55
Sybase error code
Probable cause
You attempted to drop a user that owns a procedure being used by other active users of the database.

#### 1.1.4.1373 User owns sequences in use

Error constant
SQLE_USER_OWNS_SEQUENCES_IN_USE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1367
SQLSTATE
42WE2
Sybase error code
Probable cause
You attempted to drop a user that owns a sequence being used by other active users of the database.

#### 1.1.4.1374 User owns tables in use

Error constant
SQLE_USER_OWNS_TABLES_IN_USE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-751

SQLSTATE
42W56
Sybase error code
Probable cause
You attempted to REVOKE CONNECT from a user that owns a table being used by other active users of the
database.

#### 1.1.4.1375 User-defined exception signaled

Error constant
SQLE_USER_DEFINED_EXCEPTION
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-297
SQLSTATE
Sybase error code
Probable cause
A stored procedure or trigger signaled a user-defined exception. This error state is reserved for use within
stored procedures or triggers that contain exception handlers, as a way of signaling an exception that can be
guaranteed to not have been caused by the database server. Valid SQLSTATE values range from 99000 to
99999 and are set by the user when executing the signal SQL statement.

#### 1.1.4.1376 User-defined type '%1' not found

SQLE_USER_TYPE_NOT_FOUND
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the user-defined type.
Severity
SQLCODE
-613

SQLSTATE
52W18
Sybase error code
Probable cause
The user-defined type with this name does not exist in the database.

#### 1.1.4.1377 USING attribute cannot coexist with FORMAT or GROUP attributes

GROUP attributes
Error constant
SQLE_SERVICE_ATTR_COEXIST
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1026
SQLSTATE
42WB1
Sybase error code
Probable cause
The service definition for the specified service type cannot specify a USING attribute along with a FORMAT or
GROUP attribute.

#### 1.1.4.1378 Using temporary table

SQLE_TEMPORARY_TABLE
Error constant
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
SQLSTATE
01W02
Sybase error code

Probable cause
A temporary table has been created to satisfy the query. This warning can only occur on an OPEN statement.

#### 1.1.4.1379 VALIDATE statement must refer to a base table

Error constant
SQLE_CANNOT_VALIDATE_OBJECT
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-720
SQLSTATE
42W51
Sybase error code
Probable cause
The VALIDATE statement must refer to a local base table; it cannot refer to a view, an SAP IQ table, or an object
on a remote server.

#### 1.1.4.1380 Value %1 out of range for coordinate %2 (SRS bounds [%3, %4] exceeded by more than 50%)

bounds [%3, %4] exceeded by more than 50%)
SQLE_SLERR_OBJECT_OUT_OF_SRS_BOUNDS
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The value is out of the defined bounds.
Parameter 2
The coordinate name that is out of range.
Parameter 3
The minimum value allowed by the spatial reference system.
Parameter 4
The maximum value allowed by the spatial reference system.

Severity
SQLCODE
-1484
SQLSTATE
2FW79
Sybase error code
Probable cause
The geometry contains a point outside of the bounds specified by the spatial reference system.

#### 1.1.4.1381 Value %1 out of range for destination

Error constant
SQLE_OVERFLOW_ERROR
ODBC 2 state
ODBC 3 state
Parameter 1
The value that caused the overflow.
Severity
SQLCODE
-158
SQLSTATE
Sybase error code
Probable cause
You supplied to or fetched from the database a value that is out of range for the destination column or host
variable. For example, the value 10 may have been supplied for a DECIMAL(3,2) field.

#### 1.1.4.1382 Value for column '%1' in table '%2' has changed

Error constant
SQLE_COLUMN_VALUE_CHANGED
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
Name of the column whose value has changed.
Parameter 2
Name of the table containing the column.
Severity
SQLCODE
SQLSTATE
01W06
Sybase error code
Probable cause
A replicated UPDATE has found a value in an updated column that does not match the value when the original
UPDATE was made.

#### 1.1.4.1383 Value truncated

Error constant
SQLE_TRUNCATED
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
SQLSTATE
Sybase error code
Probable cause
You may have fetched data into a host variable or SQLDA variable not large enough to receive the value.

#### 1.1.4.1384 Value-sensitive cursor used after a TRUNCATE

Error constant
SQLE_HOLD_CURSOR_AFTER_TRUNCATE
ODBC 2 state
ODBC 3 state
Severity
SQLCODE
-1241
SQLSTATE
Sybase error code
Probable cause
You attempted to use a value-sensitive cursor opened WITH HOLD after a TRUNCATE or after a COMMIT
removed all rows from a temporary table declared as ON COMMIT DELETE ROWS.

#### 1.1.4.1385 Variable '%1' not found

SQLE_VARIABLE_NOT_FOUND
Error constant
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the variable that could not be found.
Severity
SQLCODE
-260
SQLSTATE
42W14
Sybase error code
Probable cause
You attempted to DROP or SET the value of a SQL variable that was not created or was previously dropped.

#### 1.1.4.1386 VERIFY and FOR REPLICATION cannot be used together

together
Error constant
NETBU_WITH_VERIFY_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1961
SQLSTATE
42WE10
Sybase error code
Probable cause
VERIFY during NETWORK BACKUP for replication is not allowed.

#### 1.1.4.1387 VERIFY and RENAME cannot be used together

Error constant
SQLE_RENAME_WITH_VERIFY_NOT_ALLOWED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1398
SQLSTATE
42WE5
Sybase error code
Probable cause
Since VERIFY will never write to any dbspaces, renaming dbspaces cannot be done during restore verification.

#### 1.1.4.1388 Verify fails, bytes written to pipe %1 and bytes written to file %2

written to file %2
Error constant
SQLE_BACKUP_BKINT_ERROR_SIZE_MISMATCH
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The number of bytes written to pipe
Parameter 2
The number of bytes written to file
Severity
SQLCODE
-1918
SQLSTATE
WB028
Sybase error code
Probable cause
Backup size returned by SAP HANA does not match with bytes written into Pipe

#### 1.1.4.1389 Version 'V%1' interface used by external function call '%2' is not supported for execution in the current context

SQLE_INCOMPATIBLE_EXTERNAL_CALL
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
API version of the external function that is being called.
Parameter 2
Name of the external function that is being called.
Severity
SQLCODE
-818
SQLSTATE
WW026
Sybase error code
Probable cause
You attempted to call an external function. The attempt to load the associated library failed because of
incompatibility with the server. Incompatibility may arise because the dynamic library is using an external

function API that is either not supported by the server or is newer than the one supported by the server. It may
also arise if the external API is not compatible with the data in the current context.

#### 1.1.4.1390 View references '%1', which is a temporary object. Views can only refer to permanent objects

Views can only refer to permanent objects
Error constant
SQLE_VIEW_OVER_TEMP_OBJECT
ODBC 2 state
ODBC 3 state
Parameter 1
Temporary object name.
Severity
SQLCODE
-766
SQLSTATE
42U00
Sybase error code
Probable cause
Views must refer only to permanent objects, not to temporary objects such as local temporary tables.

#### 1.1.4.1391 VIRTUAL clause for CREATE INDEX statement not supported in BEGIN PARALLEL WORK...END PARALLEL WORK statement

PARALLEL_CREATEINDEX_VIRTUAL_NOT_SUPPORTED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1945
SQLSTATE
0AW41
Sybase error code

Probable cause
The VIRTUAL clause of the CREATE INDEX statement is not supported when the statement is in the BEGIN
PARALLEL WORK...END PARALLEL WORK statement.

#### 1.1.4.1392 Virtual index creation with more than %1 columns

Error constant
SQLE_TOO_MANY_VIRTUAL_INDEX_COLUMNS
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The maximum number of virtual index columns.
Severity
SQLCODE
-887
SQLSTATE
54W50
Sybase error code
Probable cause
You attempted to create a virtual index with more than the maximum number of columns.

#### 1.1.4.1393 Warning detected when optimizing SELECT INTO is treated as an error

is treated as an error
SQLE_SELECT_INTO_WARNING_TREATED_AS_ERROR
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-995
SQLSTATE
WP016
Sybase error code

Probable cause
The SELECT...INTO #TEMPTABLE statement cannot proceed if a warning is detected while optimizing the
query. To fix the problem, test the query by removing the INTO clause, and resolve the reported warning.

#### 1.1.4.1394 Warning: %1

Error constant
SQLE_WARNING
ODBC 2 state
OK
ODBC 3 state
OK
Parameter 1
Warning message.
Severity
SQLCODE
SQLSTATE
Sybase error code
Probable cause
A warning has occurred. The message indicates the condition that caused the warning.

#### 1.1.4.1395 When wait_for_commit database option is enabled, LOAD TABLE statement is not supported in BEGIN PARALLEL WORK...END PARALLEL WORK statement

PARALLEL_LOADTABLE_WAIT_FOR_COMMIT_NOT_SUP-
Error constant
PORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1938
SQLSTATE
0AW35
Sybase error code

Probable cause
When the wait_for_commit database option is set to on, the LOAD TABLE statement is not supported in the
BEGIN PARALLEL WORK...END PARALLEL WORK statement. Set the wait_for_commit database option to off,
or drop the foreign keys of the target tables and recreate them after loading the table.

#### 1.1.4.1396 Window '%1' not found

Error constant
SQLE_WINDOW_NOT_FOUND
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the window that could not be found.
Severity
SQLCODE
-947
SQLSTATE
42WA3
Sybase error code
Probable cause
You have attempted to reference a window name that is not defined in the window list of the SELECT
statement.

#### 1.1.4.1397 Window function requires ORDER BY

SQLE_OBSOLETE_ORDERBY_REQUIRED
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-965
SQLSTATE
42WA9
Sybase error code

Probable cause
Rank functions and window functions that use the RANGE keyword must specify an ORDER BY clause.

#### 1.1.4.1398 Window function used in predicate

Error constant
SQLE_ILLEGAL_WINDOW_PREDICATE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-964
SQLSTATE
42WA8
Sybase error code
Probable cause
A window function was used in the WHERE or HAVING clause of a SELECT statement. Consider making the
SELECT into a derived table, putting the window function in the SELECT list of the derived table, and changing
the predicate to reference the derived column.

#### 1.1.4.1399 WITH CHECK OPTION violated for insert/update on base table '%1'

on base table '%1'
SQLE_WITH_CHECK_OPTION_VIOLATION
Error constant
ODBC 2 state
S1000
ODBC 3 state
Parameter 1
Name of the base table being updated.
Severity
SQLCODE
-632
SQLSTATE
Sybase error code

Probable cause
You attempted an insert or update operation on the indicated base table through a view (possibly nested).
However, one or more values in the modified row(s) triggered a WITH CHECK OPTION violation. This violation
occurs when a modified value causes one or more rows to fall outside the range of the view by making the
view's WHERE clause evaluate to FALSE or UNKNOWN for that row.

#### 1.1.4.1400 WITH CHECKPOINT ON clause for LOAD TABLE statement not supported in BEGIN PARALLEL WORK...END PARALLEL WORK statement

Error constant
PARALLEL_LOADTABLE_WITH_CHECK-
POINT_ON_NOT_SUPPORTED
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1941
SQLSTATE
0AW38
Sybase error code
Probable cause
The WITH CHECKPOINT ON clause of the LOAD TABLE statement is not supported when the statement is in
the BEGIN PARALLEL WORK...END PARALLEL WORK statement.

#### 1.1.4.1401 WRITETEXT not allowed: immediate materialized view %1 depends on %2

view %1 depends on %2
SQLE_WRITETEXT_TABLE_WITH_IMV
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
Name of the dependent immediate materialized view.
Parameter 2
Name of the base table.
Severity
SQLCODE
-1203

SQLSTATE
55W32
Sybase error code
Probable cause
WRITETEXT is not allowed on base tables that have dependent initialized immediate materialized views.
No operation that does not fire triggers is allowed on base tables with dependent initialized immediate
materialized views.

#### 1.1.4.1402 Wrong number of parameters to function '%1'

Error constant
SQLE_WRONG_PARAMETER_COUNT
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the function.
Severity
SQLCODE
-154
SQLSTATE
Sybase error code
Probable cause
You supplied an incorrect number of parameters to a database function.

#### 1.1.4.1403 Wrong number of values for INSERT

Error constant
SQLE_WRONG_NUM_OF_INSERT_COLS

ODBC 2 state
21S01
ODBC 3 state
21S01
Severity
SQLCODE
-207
SQLSTATE
Sybase error code
Probable cause
The number of values you are trying to insert does not match the number of columns specified in the INSERT
statement, or the number of columns in the table if no columns are specified.

#### 1.1.4.1404 Wrong number of variables in FETCH

SQLE_WRONG_NUM_OF_FETCH_VARIABLES
Error constant
ODBC 2 state
S1002
ODBC 3 state
Severity
SQLCODE
-264
SQLSTATE
42W26
Sybase error code
Probable cause
You specified a number of variables in a FETCH statement that does not match the number of SELECT list
items.

#### 1.1.4.1405 XML parser error: %1

Error constant
SQLE_XML_PARSER_ERROR
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The error message returned by the XML parser.
Severity
SQLCODE
-888
SQLSTATE
WX002
Sybase error code
Probable cause
An XML instance will only parse correctly if it is well-formed as defined by the XML 1.0 specification.

#### 1.1.4.1406 XMLGEN evaluation failure

Error constant
SQLE_XMLGEN_EVALUATION_FAILURE
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-906
SQLSTATE
WX013
Sybase error code
Probable cause
One of the variables referenced in the XQuery constructor was not found in the list of arguments.

#### 1.1.4.1407 XPath parser error: %1

Error constant
SQLE_XQUERY_PARSER_ERROR

ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The error message returned by the XPath parser.
Severity
SQLCODE
-892
SQLSTATE
WX003
Sybase error code
Probable cause
The XPath expression is illegal or uses features that are not currently supported.

#### 1.1.4.1408 You are not authorized to assign the feature list '%2' to a secure feature key using %1

'%2' to a secure feature key using %1
Error constant
SQLE_SFC_NO_AUTH_FOR_FEAT
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Parameter 2
The secure feature list.
Severity
SQLCODE
-1690
SQLSTATE
08S06
Sybase error code
Probable cause
An attempt was made to define a secure feature key to use a secure feature that the user is not authorized to
use or assign.

#### 1.1.4.1409 You are not authorized to change the secure feature key named '%2' using %1

feature key named '%2' using %1
Error constant
SQLE_SFC_NO_AUTH_FOR_KEY
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Parameter 1
The name of the procedure.
Parameter 2
The secure feature key name.
Severity
SQLCODE
-1691
SQLSTATE
08S07
Sybase error code
Probable cause
The user is not authorized to change the named secure feature key.

#### 1.1.4.1410 You cannot synchronize or upgrade with uncommitted transactions

uncommitted transactions
Error constant
SQLE_UNCOMMITTED_TRANSACTIONS
ODBC 2 state
ODBC 3 state
Severity

SQLCODE
-755
SQLSTATE
0AW08
Sybase error code
Probable cause
You attempted to synchronize or upgrade the schema of an UltraLite database and there are changes in the
UltraLite database that have not been committed.

#### 1.1.4.1411 You cannot use a security token when making remote connections

remote connections
Error constant
SQLE_INVALID_USE_OF_SECURITY_TOKEN
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1590
SQLSTATE
WO032
Sybase error code
Probable cause
A security token cannot be used to make remote data access connections.

#### 1.1.4.1412 You do not have '%1' system privilege or authority to set the option '%2'

to set the option '%2'
Error constant
SQLE_OPTION_REQUIRES_DBA
ODBC 2 state
ODBC 3 state
Parameter 1
Name of the system privilege or authority required to set the
option.
Parameter 2
Name of the option that could not be set.
Severity
SQLCODE
-204
SQLSTATE
42W46
Sybase error code
Probable cause
The option specified in the SET OPTION statement can only be set by a user with DBA authority or by a user
with SET ANY SYSTEM OPTION / SET ANY SECURITY OPTION / SET ANY PUBLIC OPTION depending on the
option.

#### 1.1.4.1413 You must upgrade your database in order to use the MIRROR server class

the MIRROR server class
SQLE_OMNI_MIRROR_NEEDS_UPGRADE
Error constant
ODBC 2 state
ERROR
ODBC 3 state
ERROR
Severity
SQLCODE
-1574
SQLSTATE
WO030
Sybase error code
Probable cause
You attempted to create a remote data access server of type mirror while connected to a database that was
created with older software. You must upgrade your database in order to make use of the mirror server class.

### 1.2 SQL Preprocessor Error Messages

The SQL preprocessor generates messages depending on which command-line options are set. Each message
may be an error, a warning, or a non-conformance flag, which itself can be an error or a warning.

#### 1.2.1 SQL Preprocessor Error Messages Sorted by Error Code

Error code
Message text
Subscript value %1 too large
Combined pointer and arrays not supported for host types

Only one-dimensional arrays supported for CHAR type
VARCHAR type must have a length
Arrays of VARCHAR not supported
VARCHAR host variables cannot be pointers
Initializer not allowed on VARCHAR host variable
FIXCHAR type must have a length
Arrays of FIXCHAR not supported
Arrays of this type not supported
Precision must be specified for DECIMAL type
Arrays of DECIMAL not supported
Unknown host variable type
Invalid integer
'%1' host variable must be a C string type
'%1' symbol already defined

Error code
Message text

#### 1.2.2 SQL Preprocessor Error Messages Listed by Message Text

Text

#### 1.2.2.2 '%1' host variable must be an integer type

Error code
Probable cause
You used a host variable that is not of integer type in a statement where only an integer type host variable is
allowed.

#### 1.2.2.3 '%1' symbol already defined

Error code
Probable cause
You defined a host variable twice.

#### 1.2.2.4 A FOR UPDATE or FOR READ ONLY clause must be specified on PREPARE (not on DECLARE CURSOR)

Error code
Probable cause
You specified the FOR UPDATE or FOR READ ONLY clause in a DECLARE CURSOR statement. The FOR
UPDATE or FOR READ ONLY clause must be specified in the PREPARE statement, not the DECLARE CURSOR
statement. For compatibility with previous versions (but with reduced performance), the sqlpp -m HISTORICAL
option can be used to allow the FOR UPDATE or FOR READ ONLY clause in the DECLARE CURSOR statement.

#### 1.2.2.5 Arrays of DECIMAL not supported

Error code
Probable cause
You attempted to declare a host variable as a DECIMAL array. A DECIMAL array is not a supported host variable
type.

#### 1.2.2.6 Arrays of FIXCHAR not supported

Error code
Probable cause
You attempted to declare a host variable as an array of FIXCHAR arrays. This is not a supported host variable
type.

#### 1.2.2.7 Arrays of this type not supported

Error code
Probable cause
You attempted to declare a host variable array of a data type that is not supported.

#### 1.2.2.8 Arrays of VARCHAR not supported

Error code

Probable cause
You attempted to declare a host variable as a VARCHAR or BINARY array. This data type is not a supported
host variable type.

#### 1.2.2.9 Cannot describe static cursors

Error code
Probable cause
You have described a static cursor. When describing a cursor, the cursor name must be specified in a host
variable.

#### 1.2.2.10 Cannot find include file '%1'

Error code
Probable cause
The specified include file was not found. The preprocessor uses the INCLUDE environment variable to search
for include files.

#### 1.2.2.11 char, WCHAR, and TCHAR string parameters cannot be mixed

be mixed
Error code
Probable cause
You attempted to use parameters for a statement that are not all char strings, WCHAR strings or TCHAR
strings. String parameters (other than INTO and USING parameters) for one statement must all be the same
type of string. Literal strings are treated as char strings.

#### 1.2.2.12 Combined pointer and arrays not supported for host types

types
Error code
Probable cause
You used an array of pointers as a host variable. This is not supported.

#### 1.2.2.13 Cursor '%1' not previously declared

Error code
Probable cause
An Embedded SQL cursor name has been used (for example, in a FETCH, OPEN, or CLOSE statement) without
being declared.

#### 1.2.2.14 Data value must be a host variable

Error code
Probable cause
The variable used in the SET DESCRIPTOR statement has not been declared as a host variable.

#### 1.2.2.15 Error reading temporary file

Error code
Probable cause
An error occurred while reading from a temporary file.

#### 1.2.2.16 Error writing output file

Error code

Probable cause
An error occurred while writing to the output file.

#### 1.2.2.17 Field used more than once in SET DESCRIPTOR statement

statement
Error code
Probable cause
The same keyword has been used more than once inside a SET DESCRIPTOR statement.

#### 1.2.2.18 FIXCHAR type must have a length

Error code
Probable cause
You have used the DECL_FIXCHAR macro to declare a host variable of type FIXCHAR but have not specified a
length.

#### 1.2.2.19 Host variable '%1' has been redefined

Error code
Probable cause
You redefined the same host variable with a different host type. Host variables are global; two host variables
with different types cannot have the same name.

#### 1.2.2.20 Host variable '%1' has two different definitions

Error code
Probable cause
The same host variable name was defined with two different types within the same module. Host variable
names are global to a C module.

#### 1.2.2.21 Host variable '%1' is in use more than once with different indicators

different indicators
Error code

Probable cause
You have used the same host variable multiple times with different indicator variables in the same statement.
This is not supported.

#### 1.2.2.22 Host variable '%1' is unknown

Error code
Probable cause
You used a host variable in a statement, but it was not declared in a DECLARE SECTION.

#### 1.2.2.23 Host variables not supported for this cursor

Error code
Probable cause
The DECLARE statement does not support host variables for the specified cursor. If the cursor name is
provided through a host variable, then you should use full dynamic SQL and prepare the statement. A prepared
statement can have host variables in it.

#### 1.2.2.24 Host variables specified twice (on DECLARE and OPEN)

OPEN)
Error code
Probable cause
You specified host variables for a cursor in both the DECLARE and the OPEN statements. In the static
case, specify the host variables in the DECLARE statement. In the dynamic case, specify them in the OPEN
statement.

#### 1.2.2.25 Inconsistent host variable types for this cursor

Error code
Probable cause
You have used a host variable with a different type or length than the type or length previously used with the
cursor. Host variable types must be consistent for the cursor.

#### 1.2.2.26 Inconsistent indicator variables for this cursor

Error code
Probable cause
You have used an indicator variable when one was not previously used with the cursor, or you have not used an
indicator variable when one was previously used with the cursor. Indicator variable usage must be consistent
for the cursor.

#### 1.2.2.27 Inconsistent number of host variables for this cursor

Error code
Probable cause
You used a different number of host variables than the number previously used with the cursor. The number of
host variables must be consistent for the cursor.

#### 1.2.2.28 Incorrect Embedded SQL syntax

Error code
Probable cause
An Embedded SQL specific statement (such as OPEN, DECLARE, or FETCH) has a syntax error.

#### 1.2.2.29 Indicator variable '%1' is unknown

Error code
Probable cause
You used an indicator variable in a statement that was not declared in a DECLARE SECTION.

#### 1.2.2.30 Initializer not allowed on VARCHAR host variable

Error code
Probable cause
You cannot specify a C variable initializer for a host variable of type VARCHAR or BINARY. You must initialize
this variable in regular C executable code.

#### 1.2.2.31 Invalid array dimension

Error code
Probable cause
The array dimension of the variable is negative.

#### 1.2.2.32 Invalid descriptor index

Error code
Probable cause
You have allocated fewer than one variables with the ALLOCATE DESCRIPTOR statement.

#### 1.2.2.33 Invalid field for SET DESCRIPTOR

Error code

Probable cause
An invalid or unknown keyword is present in a SET DESCRIPTOR statement. The supported keywords are
TYPE, PRECISION, SCALE, LENGTH, INDICATOR, and DATA.

#### 1.2.2.34 Invalid host variable type on '%1'

Error code
Probable cause
You have used a host variable that is not a string type where the preprocessor was expecting a host variable of
a string type.

#### 1.2.2.35 Invalid integer

Error code
Probable cause
An integer was required in an Embedded SQL statement (for a fetch offset, or a host variable array index, and
so on) and the preprocessor was unable to convert the supplied value into an integer.

#### 1.2.2.36 Invalid type for indicator variable '%1'

Error code
Probable cause
Indicator variables must be of type a_sql_len. You used a variable of an unsupported type as an indicator
variable.

#### 1.2.2.37 Invalid type for SQL statement variable

Error code
Probable cause
A host variable used as a statement identifier should be of type a_sql_statement_number. You attempted to
use a host variable of an unsupported type as a statement identifier.

#### 1.2.2.38 Language extension detected in syntax

Error code
Probable cause
You have used a SQL Anywhere feature that is not supported by the current flagging level (set using the -w
option).

#### 1.2.2.39 LONG BINARY/LONG VARCHAR size limit is 65535 for UltraLite

for UltraLite
Error code
Probable cause
When using DECL_LONGBINARY or DECL_LONGVARCHAR with UltraLite, the maximum size for the array is 64
KB.

#### 1.2.2.40 Macros cannot be redefined

Error code

Probable cause
A preprocessor macro has been defined twice, possibly in a header file.

#### 1.2.2.41 Missing ending quote of string literal

Error code
Probable cause
You specified a string literal in an Embedded SQL statement that is missing an ending quote before the end of
line or end of file.

#### 1.2.2.42 Must specify a host list or USING clause on %1

Error code
Probable cause
The specified statement requires host variables to be specified either in a host variable list or from a SQLDA.

#### 1.2.2.43 Must specify a SQLDA for a DESCRIBE statement

Error code
Probable cause
You have a DESCRIBE statement that does not specify a SQLDA. A SQLDA is required.

#### 1.2.2.44 No DECLARE SECTION and no INCLUDE SQLCA statement

statement
Error code
Probable cause
The EXEC SQL INCLUDE SQLCA statement is missing from the source file.

#### 1.2.2.45 No FETCH or PUT for cursor '%1'

Error code

Probable cause
A cursor is declared and opened but is not used.

#### 1.2.2.46 No INTO clause for a SELECT statement

Error code
Probable cause
You specified an embedded static SELECT statement without specifying an INTO clause for the results.

#### 1.2.2.47 No OPEN for cursor '%1'

Error code
Probable cause
A cursor is declared, and possibly used, but is never opened.

#### 1.2.2.48 Only one-dimensional arrays supported for CHAR type

type
Error code
Probable cause
You attempted to declare a host variable as an array of character arrays. This is not a supported host variable
type.

#### 1.2.2.49 Precision must be specified for DECIMAL type

Error code
Probable cause
You must specify the precision when declaring a packed decimal host variable using the DECL_DECIMAL
macro. The scale is optional.

#### 1.2.2.50 SQL syntax is only supported by UltraLite

Error code
Probable cause
You attempted to use a statement that is only supported by UltraLite when you are not generating code for
UltraLite.

#### 1.2.2.51 Statement '%1' not previously prepared

Error code
Probable cause
An Embedded SQL statement name has been used in a statement (such as EXECUTE or DROP) without being
prepared.

#### 1.2.2.52 Static statement names do not work properly if used by two threads

by two threads
Error code

Probable cause
You have used a static statement name and preprocessed with the -r reentrancy option. Static statement
names generate static variables that are filled in by the database. If two threads use the same statement,
contention arises over the variable. Use a local host variable as the statement identifier instead of a static
name.

#### 1.2.2.53 Subscript value %1 too large

Error code
Probable cause
You attempted to index a host variable that has a value too large for the array.

#### 1.2.2.54 The INTO clause is not supported in DECLARE CURSOR statements - ignored

CURSOR statements - ignored
Error code
Probable cause
You used an INTO clause in a DECLARE cursor statement. The INTO clause is ignored.

#### 1.2.2.55 Token too long

Error code
Probable cause
The SQL preprocessor has a maximum token length of 2 KB. Any token longer than 2 KB produces this error.
For constant strings in Embedded SQL commands, use string concatenation to make a longer string.

#### 1.2.2.56 Two SQLDAs specified of the same type (INTO or USING)

USING)
Error code
Probable cause
You have specified two INTO DESCRIPTOR or two USING DESCRIPTOR clauses for this statement.

#### 1.2.2.57 Unable to open temporary file

Error code
Probable cause
An error occurred while attempting to open a temporary file.

#### 1.2.2.58 Unknown host variable type

Error code
Probable cause
You declared a host variable of a type that is unknown to the SQL preprocessor.

#### 1.2.2.59 Unknown SQL function '%1'

Error code
Probable cause
You have used a SQL function that is unknown to the preprocessor and may cause an error when the statement
is sent to the database server.

#### 1.2.2.60 Unknown statement '%1'

Error code
Probable cause
You attempted to drop an Embedded SQL statement that does not exist.

#### 1.2.2.61 Unrecognized SQL syntax

Error code
Probable cause
You have used a SQL statement that may cause a syntax error when the statement is sent to the database
server.

#### 1.2.2.62 Unsupported language extension detected in syntax

Error code
Probable cause
You have used a SQL Anywhere feature that is not supported by the current flagging level (set by using the
sqlpp -e option).

#### 1.2.2.63 VARCHAR host variables cannot be pointers

Error code
Probable cause
You have attempted to declare a host variable as a pointer to a VARCHAR or BINARY type. This type is not a
supported host variable type.

#### 1.2.2.64 VARCHAR type must have a length

Error code
Probable cause
You have attempted to declare a VARCHAR or BINARY host variable using the DECL_VARCHAR or
DECL_BINARY macro but have not specified a size for the array.

#### 1.2.2.65 WCHAR and TCHAR host variable types are not supported

supported
Error code

Probable cause
You have attempted to declare a host variable as a WCHAR or TCHAR string. These types are only supported by
UltraLite on Windows platforms.

#### 1.2.2.66 Wrong number of arguments for SQL function '%1'

Error code
Probable cause
You have used a SQL function with the wrong number of parameters. Specifying the wrong number of
parameters can cause an error when the statement is sent to the database server.

### 1.3 MobiLink Server Error Messages

Each MobiLink server error has a numeric error code: error codes are always negative, warning codes are
always positive, and zero means no error or warning.
Many of the error messages contain the characters %1, %2, and so on. These characters are replaced by the
parameters to the error message.

#### 1.3.1 MobiLink Server Error Messages Sorted by Error Code

Error code
Message text

#### 1.3.2.2 %1

%1
Error code
-10412
Parameter 1
Message string.
Probable cause
Messages sent to the console by the Java Virtual Machine are redirected to the synchronization server output
log.

#### 1.3.2.3 %1 is an unknown subclass of ScriptExecutionException

Error code
-10120
Parameter 1
Class name.
Probable cause
The given class name is an unknown subclass of ScriptExecutionException. Expected subclass names include
'SynchronizationException' and 'ServerException'.

#### 1.3.2.4 <OE>: '%1'

Error code
-10354
Parameter 1
The error.
Probable cause
The integrated outbound enabler had an error.

#### 1.3.2.5 '%1'

'%1'
Error code
-10206
Parameter 1
An error message.
Probable cause
Generic error message generated by the .Net CLR or by a method invoked during synchronization.

#### 1.3.2.6 '%1' is not a valid script language

Error code
-10428

Parameter 1
The language from the script_language column of the
ml_script table
Probable cause
A script has been defined with an invalid language. This can happen if the ml_script table has
been modified directly or you called ml_add_lang_table_script_chk or ml_add_lang_connection_script_chk.
Instead, add scripts only with ml_add_table_script, ml_add_connection_script, ml_add_java_table_script,
ml_add_java_connection_script, ml_add_dnet_table_script, or ml_add_dnet_connection_script

#### 1.3.2.7 .NET CLR Host encountered unexpected error

Error code
-10167
Probable cause
The synchronization server received an error while performing a routine .NET call. Please examine your .NET
installation.

#### 1.3.2.8 .NET Domain Configuration File is corrupt

-10176
Error code
Probable cause
Examine the contents of the .NET configuration file for errors.

#### 1.3.2.9 A corrupt or invalid subscription list was received from the client

Error code
-10291
Probable cause
The synchronization server has received corrupt data from the client. Please contact technical support.

#### 1.3.2.10 A critical component of the synchronization server failed to start correctly

failed to start correctly
Error code
-10359
Probable cause
Look for other errors during startup that may have caused a problem. If there were no other errors, this is an
internal error. Please contact technical support.

#### 1.3.2.11 A downloaded value for table '%1' (column #%2) contains a null SRID that is not allowed in the remote database

Error code
-10331
Parameter 1
Table name.
Parameter 2
Column index.

Probable cause
Both the SQL Anywhere and UltraLite remote databases do not accept spatial data with a null SRID. Please
always specify a valid SRID, when spatial data was entered in the consolidated database.

#### 1.3.2.12 A downloaded value for table '%1' (column #%2) contains an invalid date part

contains an invalid date part
Error code
-10433
Parameter 1
Table name.
Parameter 2
Column index.
Probable cause
The column in the consolidated database for the given table contains an invalid date part that should be in the
range of 0001 and 9999. Please make sure the date part can fit into that in the remote database.

#### 1.3.2.13 A downloaded value for table '%1' (column #%2) contains character data that cannot be converted

contains character data that cannot be converted
-10211
Error code
Parameter 1
Table name.
Parameter 2
Column index.
Probable cause
Character data originating from the consolidated database needs to be converted to the client character set
before being sent to the client. However the synchronization server was not able to convert the data.

#### 1.3.2.14 A downloaded value for table '%1' (column #%2) was an invalid unique identifier string

was an invalid unique identifier string
Error code
-10216
Parameter 1
Table name.
Parameter 2
Column index.
Probable cause
The synchronization server cannot convert the string to a unique identifier. Please use a CHAR or VARCHAR
data type in the non-SQL Anywhere consolidated database to map UNIQUEIDENTIFIER in the remote database
and make sure the string in the consolidated database is a valid unique identifier.

#### 1.3.2.15 A downloaded value for table '%1' (column #%2) was either too big or invalid for the remote schema type

either too big or invalid for the remote schema type
-10038
Error code
Parameter 1
Table name.
Parameter 2
Column index.
Probable cause
The column width for the given table may not be defined consistently in the consolidated and remote
databases. Please check the table definition.

#### 1.3.2.16 A downloaded value for table '%1' (column #%2) was not a valid date

was not a valid date
Error code
-10420
Parameter 1
Table name.
Parameter 2
Column index.
Probable cause
The column in the consolidated database for the given table contains an invalid date. Please make sure this
column is formated as 'yyyymmdd'.

#### 1.3.2.17 A downloaded value for table '%1' (column #%2) was not a valid time

not a valid time
-10419
Error code
Parameter 1
Table name.
Parameter 2
Column index.
Probable cause
The column in the consolidated database for the given table contains an invalid time. Please make sure this
column is formated as 'hhnnss'.

#### 1.3.2.18 A downloaded value for table '%1' (column #%2) was not a valid timestamp

was not a valid timestamp
Error code
-10418
Parameter 1
Table name.
Parameter 2
Column index.
Probable cause
The column in the consolidated database for the given table contains an invalid timestamp. Please make sure
this column is formated as 'yyyymmdd hhnnss.ssssss'.

#### 1.3.2.19 A downloaded value for table '%1' (column #%2) was not a valid timestamp with time zone

was not a valid timestamp with time zone
Error code
-10329
Parameter 1
Table name.
Parameter 2
Column index.
Probable cause
The column in the consolidated database for the given table contains invalid a timestamp with time zone.
Please make sure this column contains valid timestamps with time zone and the data is formated as 'yyyy-mm-
dd hh:nn:ss.Ssssss [+|-]hh:mm', if it is defined as VARCHAR or CHAR in the table definition.

#### 1.3.2.20 A network read failed. Unable to read data from the remote client

remote client
Error code
-10030
Probable cause
The synchronization server was unable to complete a network read. Please check the network.

#### 1.3.2.21 A notifier was unable to connect to the consolidated database

database
Error code
-10340
Probable cause
A notifier was unable to connect to the consolidated database.

#### 1.3.2.22 A value for column '%1' was truncated to '%2'

-10426
Error code
Parameter 1
The column name of the value being truncated
Parameter 2
The partial value that could be fetched
Probable cause
A value in the SAP system was too large to be downloaded.

#### 1.3.2.23 Aborting request that started during shutdown

Error code
-10374
Probable cause
The synchronization server aborted a request that started after it received a shutdown request.

#### 1.3.2.24 An error occurred when trying to store progress information in the consolidated database

information in the consolidated database
Error code
-10031
Probable cause
The synchronization server is unable to save the synchronization status into the consolidated database. Please
make sure that the database server is running and the network is okay.

#### 1.3.2.25 An error occurred while uploading a deleted row into table '%1'. The deleted column values are as follows:

Error code
-10062
Parameter 1
The script name.

Probable cause
A failure occurred when the synchronization server was uploading a deleted row into the given table in the
consolidated database.

#### 1.3.2.26 An error occurred while uploading an insert row into table '%1'. The inserted column values are as follows:

Error code
-10061
Parameter 1
The script name.
Probable cause
A failure occurred when the synchronization server was uploading an inserted row into the given table in the
consolidated database.

#### 1.3.2.27 An error occurred while uploading an updated row into table '%1'. The updated column values are as follows:

Error code
-10063
Parameter 1
The script name.

Probable cause
A failure occurred when the synchronization server was uploading an updated row into the given table in the
consolidated database.

#### 1.3.2.28 Assembly '%1' does not contain '%2'

Error code
-10172
Parameter 1
The assembly name.
Parameter 2
The missing method name.
Probable cause
If the method is implemented but the name is wrong, change it. If the method is missing, you must add it to the
assembly.

#### 1.3.2.29 Assembly '%1' was compiled against version '%2' of '%3'. Please recompile against version '%4'

'%3'. Please recompile against version '%4'
Error code
-10171
Parameter 1
The assembly name.
Parameter 2
The assembly version.
Parameter 3
The DLL name.
Parameter 4
The desired assembly version.

Probable cause
Please fix the version mismatch displayed and run again.

#### 1.3.2.30 Attempt to execute a SQL statement with bound parameters before MLDBCommand.Prepare() was called

parameters before MLDBCommand.Prepare() was
called
Error code
-10199
Probable cause
An attempt was made to bind a parameter to a statement that was not prepared. Please prepare the statement
before binding parameters.

#### 1.3.2.31 Attempt to execute null SQL statement. Set value of MLDBCommand.CommandText before calling a MLDBCommand.Execute method

Error code
-10196

Probable cause
A null SQL statement is being executed. Make sure the SQL statement is non-null before executing it.

#### 1.3.2.32 Attempt to execute SQL statement '%1' after MLDBCommand.Close() was called

MLDBCommand.Close() was called
Error code
-10197
Parameter 1
The SQL statement.
Probable cause
The SQL statement is being executed when the database connection is closed. Make sure the database
connection is open before executing a statement.

#### 1.3.2.33 Attempt to prepare null SQL statement. Set value of MLDBCommand.CommandText before calling MLDBCommand.Prepare()

-10195
Error code
Probable cause
A null SQL statement is being prepared. Make sure the SQL statement is non-null before preparing it.

#### 1.3.2.34 Attempt to prepare SQL statement '%1' after MLDBCommand.Close() was called

MLDBCommand.Close() was called
Error code
-10194
Parameter 1
The SQL statement.
Probable cause
The SQL statement is being prepared when the database connection is closed. Make sure the database
connection is open before preparing a statement.

#### 1.3.2.35 Attempt to set non-null column to null

Error code
-10029
Probable cause
The synchronization server attempted to download a null into a non-nullable column.

#### 1.3.2.36 Attempt to use a connection with an invalid handle

Error code
-10203

Probable cause
Make sure the connection handle is valid before using it.

#### 1.3.2.37 Bad stream specification: '%1'

Error code
-10105
Parameter 1
The stream name.
Probable cause
The stream name was specified incorrectly. Please consult the documentation for the -x and -xo switches.

#### 1.3.2.38 Bind to LDAP server '%1' without a password is not allowed

allowed
-10392
Error code
Parameter 1
The LDAP server name or search URL specifying the search.
Probable cause
An LDAPUA search or validate failed returning LDAP_UNWILLING_TO_PERFORM due to invalid settings for the
target LDAP server. Check access account values for the named LDAP server or search URL.

#### 1.3.2.39 Binding of parameter '%1' requires value to be of type '%2', but a '%3' was supplied

type '%2', but a '%3' was supplied
Error code
-10201
Parameter 1
The parameter number.
Parameter 2
The expected type.
Parameter 3
The supplied type.
Probable cause
The supplied parameter type is incorrect. Change the parameter to the proper type.

#### 1.3.2.40 Call aborted with ABAP message

Error code
-10421
Probable cause
Details of the message will follow.

#### 1.3.2.41 Call returned an exception

Error code
-10416
Probable cause
details follow

#### 1.3.2.42 Cannot convert '%1' to REAL

Error code
-10424
Parameter 1
The value to convert
Probable cause
The value store in the SAP system is too large to be downloaded into a REAL column.

#### 1.3.2.43 Cannot convert '%1' to Unicode

Error code
-10016
Parameter 1
String to be converted.
Probable cause
The synchronization server was not able to convert the given string to Unicode using Unilib.

#### 1.3.2.44 Cannot convert column '%1' to Unicode

-10425
Error code
Parameter 1
The column name of the value being converted
Probable cause
There was an error converting the column's value.

#### 1.3.2.45 Cannot load DLL or shared object: '%1' for Script Language: '%2'

Language: '%2'
Error code
-10086
Parameter 1
The DLL or shared object name.
Parameter 2
The script language name.
Probable cause
Please make sure that the script language is valid. Currently the script languages supported by the
synchronization server are SQL (sql), Java (java) and .NET (dnet).

#### 1.3.2.46 Caught Java exception with type: '%1'. Exception message: '%2'

message: '%2'
Error code
-10118
Parameter 1
Class name.
Parameter 2
Error message.
Probable cause
A Java script caused the given exception. Either correct the condition that caused the exception, or change the
code to avoid the exception.

#### 1.3.2.47 Column '%1' cannot be null

Error code
-10423
Parameter 1
The column with a null value
Probable cause
Null values may not be uploaded.

#### 1.3.2.48 Column names must be set in the ml_column table or uploaded from the remote client to use named row parameters

Error code
-10232
Probable cause
The remote column names to be used in scripts must be defined in the ml_column table or uploaded from
remote databases (via the SendColumnNames option) for the named parameter feature to be used.

#### 1.3.2.49 Column-level conflict detection is not available for table '%1', because it contains BLOBs

table '%1', because it contains BLOBs
Error code
-10224
Parameter 1
Table name.

Probable cause
The column-level conflict detection is not available for tables that contain BLOBs. Please use the row-level
conflict detection script, upload_fetch for any tables that contain BLOBs.

#### 1.3.2.50 Configuration problem detected when connecting to the arbiter server

the arbiter server
Error code
-10350
Probable cause
The synchronization server detected a configuration problem when it tried to connect to the arbiter server.
Please check your installation.

#### 1.3.2.51 Connection was dropped due to lack of network activity

activity
Error code
-10279

Probable cause
The synchronization server has dropped this connection because of lack of activity. The remote may have lost
network connectivity.

#### 1.3.2.52 Consolidated database server or ODBC error: '%1'

Error code
-10002
Parameter 1
The actual error message sent by the database server or
ODBC driver.
Probable cause
This may be a SQL error such as a syntax error.

#### 1.3.2.53 Could not add script version: '%1'

Error code
-10254
Parameter 1
Version string.
Probable cause
The server was unable to automatically add the given script version. This error usually happens when
connecting the Monitor, which uses the script version called for_ML_Monitor_only. Check database
permissions or add the script version directly.
  Note
Adobe will stop updating and distributing the Flash Player at the end of 2020. Because the SQL Anywhere
Monitor is based on Flash, you cannot use it once Flash support ends. In many cases, tasks that were
previously performed in the Monitor can be performed in the SQL Anywhere Cockpit.

#### 1.3.2.54 Could not associate socket with completion port (system error '%1')

(system error '%1')
Error code
-10263
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.55 Could not call method: '%1' with arguments of type '%2'

'%2'
Error code
-10157
Parameter 1
The method name.
Parameter 2
The type name.
Probable cause
Please refer to the synchronization server documentation to determine what argument types the
synchronization server expects for this call.

#### 1.3.2.56 Could not create domain '%1'

Error code
-10192
Parameter 1
The domain name.

Probable cause
The .NET CLR refused to create the indicated domain. Fix the domain configuration and try again.

#### 1.3.2.57 Could not find file transfer root directory: '%1'

Error code
-10249
Parameter 1
Root path specified by user.
Probable cause
The server could not find the specified path. Please check that the path given is correct.

#### 1.3.2.58 Could not find file upload root directory: '%1'

-10320
Error code
Parameter 1
Root path specified by user.
Probable cause
The server could not find the specified path. Please check that the path given is correct.

#### 1.3.2.59 Could not find requested file '%1' in the download root directory or the '%2' sub-directory

root directory or the '%2' sub-directory
Error code
-10251
Parameter 1
File name.
Parameter 2
Subdirectory of the root download directory.
Probable cause
The server could not find the file requested for transfer.

#### 1.3.2.60 Could not open file for transfer: '%1'

-10252
Error code
Parameter 1
File name.
Probable cause
The server found the file requested for transfer but was unable to open the file. Check file permissions.

#### 1.3.2.61 Could not read file for transfer: '%1'

Error code
-10253
Parameter 1
File name.
Probable cause
The server found the file requested for transfer but was unable to read the file. Check file permissions.

#### 1.3.2.62 Could not transfer requested file. The transfer root was not set

was not set
Error code
-10250
Probable cause
The server received a client file transfer request but the transfer root directory has not been set on the server.

#### 1.3.2.63 Could not upload the requested file. The upload root directory was not set

directory was not set
Error code
-10321
Probable cause
The server received a client file upload request but the root directory for uploads has not been set on the
server.

#### 1.3.2.64 Could not write file for transfer: '%1'

Error code
-10322
Parameter 1
File name.
Probable cause
The server found is unable to write a file uploaded from a client. Check file permissions.

#### 1.3.2.65 Domain '%1' was not specified in Domain configuration file

configuration file
Error code
-10178
Parameter 1
The domain name.
Probable cause
The event script domain name does not match any of the domains that have been configured.

#### 1.3.2.66 Download failed with client error '%1'

Error code
-10035
Parameter 1
An error number sent by the client.
Probable cause
The synchronization server aborts the synchronization when the client indicates there is a problem on the
remote site during download.

#### 1.3.2.67 ERP Communication error

Error code
-10413
Probable cause
Details follow.

#### 1.3.2.68 Error fetching connection script '%1'

Error code
-10018
Parameter 1
Connection script name.
Probable cause
The synchronization server was not able to refresh connection scripts. Please make sure that the database
server is running and the network is okay.

#### 1.3.2.69 Error fetching table script '%1'.%2

Error code
-10019
Parameter 1
Table name.
Parameter 2
Script name.

Probable cause
The synchronization server was not able to refresh table scripts. Please make sure that the database server is
running and the network is okay.

#### 1.3.2.70 Error in command line near '%1'

Error code
-10360
Parameter 1
Command line option.
Probable cause
The command line option is invalid. Please make sure all the synchronization server command line options and
settings are valid.

#### 1.3.2.71 Error in reading from notification pipe (system error '%1')

'%1')
Error code
-10277
Parameter 1
System error.

Probable cause
Please contact technical support.

#### 1.3.2.72 Error on notification pipe

Error code
-10278
Probable cause
Please contact technical support.

#### 1.3.2.73 Error while attaching thread to Java VM

Error code
-10126
Probable cause
This is an internal startup error. Please consult technical support.

#### 1.3.2.74 Exception thrown in constructor of class: '%1'. Error description: '%2'. Stack trace: '%3'

description: '%2'. Stack trace: '%3'
-10154
Error code
Parameter 1
The class name.
Parameter 2
The error text.
Parameter 3
The stack trace.
Probable cause
A user exception was thrown when invoking the constructor of a user class. Please examine the stack trace and
fix the error.

#### 1.3.2.75 Exception thrown in initializer of class: '%1'. Error description: '%2'. Stack trace: '%3'

description: '%2'. Stack trace: '%3'
Error code
-10149
Parameter 1
The class name.
Parameter 2
The error text.
Parameter 3
The stack trace.
Probable cause
The stack initializers in a user supplied class have thrown an exception. Please examine the Stack trace and fix
the problem.

#### 1.3.2.76 Exception thrown in method: '%1'. Error description: '%2'. Stack trace: '%3'

'%2'. Stack trace: '%3'
-10158
Error code
Parameter 1
The method name.
Parameter 2
The error text.
Parameter 3
The stack trace.
Probable cause
An error has occurred in user supplied code. Please examine the Exception information and fix the error.

#### 1.3.2.77 Expecting '%1' authentication parameter(s) from client, but received '%2' for script '%3'

client, but received '%2' for script '%3'
Error code
-10094
Parameter 1
The number of parameters expected.
Parameter 2
The number of parameters passed up from the client.
Parameter 3
The script that needs the parameters.
Probable cause
The number of authentication parameters received from the client does not match the number expected. The
number of client parameters should be two less than the number required by the authenticate_parameters
script.

#### 1.3.2.78 Expecting '%1' columns in cursor, but found '%2'

-10050
Error code
Parameter 1
The number of columns expected.
Parameter 2
The number of columns found.
Probable cause
The number of parameters found in the upload or download script does not match the number of columns or
the number of primary key columns for the given table. Please check the number of parameters for the given
script.

#### 1.3.2.79 Expecting '%1' parameters in script, but only found '%2': '%3'

'%2': '%3'
Error code
-10047
Parameter 1
The number of parameters expected.
Parameter 2
The number of parameters found.
Parameter 3
The script name.
Probable cause
There are too many parameters found in the given script. Please check the number of parameters for the given
script.

#### 1.3.2.80 Expecting at least '%1' parameters in script, but only found '%2': '%3'

only found '%2': '%3'
Error code
-10048
Parameter 1
The minimum number of parameters expected.
Parameter 2
The number of parameters found.
Parameter 3
The script name.

Probable cause
There are not enough parameters found in the given script. Please check the number of parameters for the
given script.

#### 1.3.2.81 Failed to authenticate the user '%1' against LDAP server

server
Error code
-10399
Parameter 1
The user name.
Probable cause
The synchronization server was not able to authenticate the user against the LDAP servers. Please verify the
user password and/or the LDAP server configurations for the current user.

#### 1.3.2.82 Failed to load .NET start class '%1'

-10187
Error code
Parameter 1
The class name.
Probable cause
The synchronization server was unable to load the given class on startup.

#### 1.3.2.83 Failed to load necessary Java class: '%1' from classpath: '%2'

classpath: '%2'
Error code
-10127
Parameter 1
Method name.
Parameter 2
Class name.
Probable cause
This is an internal startup error. Please consult technical support.

#### 1.3.2.84 Failed to load necessary method: '%1' for Java class: '%2'

'%2'
Error code
-10128
Parameter 1
Method name.
Parameter 2
Class name.
Probable cause
This is an internal startup error. Please consult technical support.

#### 1.3.2.85 Failure executing script '%1'

Error code
-10205
Parameter 1
The script.

Probable cause
The synchronization server was unable to invoke the given script. Check for previous errors in the
synchronization server log.

#### 1.3.2.86 User exception: '%1'

Error code
-10225
Parameter 1
User's error string
Probable cause
A failure occurred while attempting to execute user supplied code. Examine the server log and fix the user
supplied code.

#### 1.3.2.87 File download failed with client error '%1'

-10432
Error code
Parameter 1
An error number sent by the client.
Probable cause
If the nonblocking_file_transfer_ack script is defined, it will not be invoked.

#### 1.3.2.88 In table '%1', the column named '%2' in the ml_column table has an index greater than the number of remote columns

Error code
-10281
Parameter 1
Name of table.
Parameter 2
Name of column from the ml_column table.
Probable cause
A synchronization script has an invalid named parameter reference. Check the ml_column table for this script
version and table, to make sure the number and order of columns match the number and order coming up
from the remote. The most likely cause is either an invalid column named in the named parameter, or invalid
entries in the ml_column table before the valid column entry.

#### 1.3.2.89 INTERNAL ERROR: occurred while retrieving a BLOB -- read

-- read
-10041
Error code
Probable cause
The synchronization server cannot retrieve the upload data from memory or a temporary file. This is an internal
error. Please contact technical support.

#### 1.3.2.90 Internal error: '%1'

Error code
-10156
Parameter 1
The error text.

Probable cause
The synchronization server experienced a Java internal error. Please examine the error information printed and
try to fix the problem.

#### 1.3.2.91 Invalid -sl switch: '%1'

Error code
-10429
Parameter 1
The language specified
Probable cause
The only valid -sl switches are "-sl java" and "-sl dnet".

#### 1.3.2.92 Invalid connection parameters

-10422
Error code
Probable cause
The given connection parameters are invalid. Please supply the valid connection parameters Please supply
valid connection parameters.

#### 1.3.2.93 Invalid connection string '%1'

Error code
-10435
Parameter 1
Connection string.

Probable cause
The supplied connection string is invalid. Please verify the connection parameters.

#### 1.3.2.94 Invalid format used for script '%1'

Error code
-10182
Parameter 1
The script.
Probable cause
The script format is invalid. The proper format is either myDomain:myClass.myMethod or just
myClass.myMethod.

#### 1.3.2.95 Invalid line found in the JVM config file: '%1'. All lines must begin with either '#' or '-'

lines must begin with either '#' or '-'
-10136
Error code
Parameter 1
Config file name.
Probable cause
The synchronization server was unable to parse the jvm.cfg config file. Please check that the contents of this
file are valid.

#### 1.3.2.96 Invalid line found in the JVM config file: '%1'. Line is too long

too long
Error code
-10137
Parameter 1
Config file name.
Probable cause
The synchronization server was unable to parse the jvm.cfg config file. A line exceeded the maximum line
length. Please check that the contents of this file are valid.

#### 1.3.2.97 Invalid named parameter (too short or long) for script '%1'

script '%1'
-10226
Error code
Parameter 1
Name of script.
Probable cause
A named parameter was encountered where there was no name or the name length was too long.

#### 1.3.2.98 Invalid NW RFC handle

Error code
-10414
Probable cause
internal error

#### 1.3.2.99 Invalid parameter '%1'

Error code
-10215
Parameter 1
Name of the invalid parameter.
Probable cause
One or more invalid parameters were detected in the communication protocol. Please check the command line
options and make sure all the protocol options valid.

#### 1.3.2.100 Invalid password for user '%1'

Error code
-10057
Parameter 1
The user name.

Probable cause
The password sent up from the remote is invalid for the given user. Please note: passwords are case sensitive.

#### 1.3.2.101 Invalid port '%2' specified for '%1' stream

Error code
-10384
Parameter 1
Stream name.
Parameter 2
Host port.
Probable cause
The port specified is invalid. It must be a number between 1 and 65535.

#### 1.3.2.102 Invalid property name prefix '%1'

-10337
Error code
Parameter 1
notifier type.
Probable cause
The given property name prefix is invalid.

#### 1.3.2.103 Invalid qualifier found on spatial geometry parameter '%1'

parameter '%1'
Error code
-10332
Parameter 1
The column number of the parameter.
Probable cause
The parameter must be qualified with :srid or :data.

#### 1.3.2.104 Invalid qualifier found on spatial geometry parameter '%1'

parameter '%1'
Error code
-10333
Parameter 1
The column name of the parameter.
Probable cause
The parameter must be qualified with :srid or :data.

#### 1.3.2.105 Invalid return value (%2) from the '%1' script. Using the default action code (%3)

Using the default action code (%3)
Error code
-10214
Parameter 1
Name of the script returning the bad value.
Parameter 2
Action value return from script.
Parameter 3
Action value to be used.
Probable cause
The error handler script called returned a value outside of the allowable range. The default value will be used.

#### 1.3.2.106 Invalid sync key '%1' for remote ID '%2'

Error code
-10389
Parameter 1
Sync key.
Parameter 2
Remote ID.
Probable cause
The sync key in the consolidated database for the given remote ID is neither an integer nor a GUID. You can
reset it to '0'. Please make sure no instance of the current client is running before resetting its sync key.

#### 1.3.2.107 Invalid sync sequence ID for remote ID '%1'

Error code
-10400
Parameter 1
Remote ID.

Probable cause
The sync sequence ID in the consolidated database does not match the sequence ID sent by the client. Please
make sure the remote ID is unique. If you restored the database from a backup, please reset the sync state for
the remote ID by executing the ml_reset_sync_state stored procedure.

#### 1.3.2.108 Invalid system parameter '%1' for script '%2'

Error code
-10228
Parameter 1
Name of invalid system parameter.
Parameter 2
Name of script.
Probable cause
The named system parameter cannot be used with the given script.

#### 1.3.2.109 Java exception

-10148
Error code
Probable cause
Examine the synchronization server log error message adjacent to this error for more information.

#### 1.3.2.110 LANG: '%1' - Failed to allocate database connection

Error code
-10085
Parameter 1
The name of the script language.
Probable cause
A connection cannot be made to the database server.

#### 1.3.2.111 LANG: '%1' - Failed to attach thread

Error code
-10084
Parameter 1
The name of the script language.
Probable cause
A synchronization server thread could not attach itself to the DLL or shared object used to process the given
script language. Please make sure that the synchronization server installation contains all of the required DLLs
or shared objects.

#### 1.3.2.112 LDAP server '%1' may not accept anonymous binds

Error code
-10391

Parameter 1
The LDAP server name or search URL specifying the search.
Probable cause
An LDAPUA search or validate failed returning LDAP_INAPPROPRIATE_AUTH due to invalid settings for the
target LDAP server. Check the access account values for the named LDAP server or search URL.

#### 1.3.2.113 LDAP user authentication is not available on the current platform

current platform
Error code
-10407
Probable cause
The synchronization server does not support LDAP user authentication on the current platform.

#### 1.3.2.114 Linkage error while loading class: '%1' Error description: '%2'

description: '%2'
-10150
Error code
Parameter 1
The class name.
Parameter 2
The error text.
Probable cause
The Java VM was unable to load a class. Please examine the Error description printed and fix the problem.

#### 1.3.2.115 Lost the primary server lock

Error code
-10353
Probable cause
The synchronization server lost its primary server status. Please make sure the arbiter is running.

#### 1.3.2.116 Memory allocation failed

Error code
-10060
Probable cause
Your system is running out of memory. You may need to close some applications or add more memory to your
system.

#### 1.3.2.117 Memory allocation failed, attempted to allocate '%1' bytes

bytes
-10003
Error code
Parameter 1
The number of bytes it was trying to allocate.
Probable cause
Your system is running out of memory. You may need to close some applications or add more memory to your
system.

#### 1.3.2.118 Network address '%1' is not local

Error code
-10259
Parameter 1
Host name.
Probable cause
The network address provided does not resolve to a network adapter on this machine.

#### 1.3.2.119 No Assembly in domain '%1' contains type '%2'

Error code
-10179
Parameter 1
The domain name.
Parameter 2
The type name.
Probable cause
Make sure the type is defined in the given domain.

#### 1.3.2.120 No error

Error code
Probable cause
This code indicates there was no error.

#### 1.3.2.121 No overload matching '%1' was found in class '%2'

Error code
-10362
Parameter 1
The method signature searched for.
Parameter 2
The class.
Probable cause
There was no method matching the supplied parameters.

#### 1.3.2.122 No public methods found in script class: '%1'

-10151
Error code
Parameter 1
The class name.
Probable cause
A script class must have public methods so that the synchronization server can call its methods. Please supply
a fixed class.

#### 1.3.2.123 No suitable constructor found in class: '%1'

Error code
-10153
Parameter 1
The class name.
Probable cause
Please make sure that the user supplied class has a public constructor that the synchronization server can
invoke to create an instance.

#### 1.3.2.124 No valid constructor was found for class '%1'

-10161
Error code
Parameter 1
The class name.
Probable cause
The synchronization server was unable to find a valid constructor for the given class.

#### 1.3.2.125 Not enough arguments to execute script: '%1.%2'. '%3' arguments are needed but only '%4' are provided

'%3' arguments are needed but only '%4' are
provided
Error code
-10130
Parameter 1
Class name.
Parameter 2
Method name.
Parameter 3
Number of parameters expected.
Parameter 4
Number of parameters provided.
Probable cause
Consult the documentation for the event associated with this script.

#### 1.3.2.126 Only one domain can be used per script version. Domain '%1' was in use when script '%2' attempted to use domain '%3'

-10183
Error code
Parameter 1
The domain name.
Parameter 2
The script.
Parameter 3
The extra domain name.
Probable cause
The script is of the form myDomain:myClass.myMethod, and another script in the same script version used a
different domain name. Make sure all scripts for the same script version use the same domain.

#### 1.3.2.127 Only one file transfer request can be processed at a time

time
Error code
-10383
Probable cause
The client has requested concurrent file transfers.

#### 1.3.2.128 Only one of the upload_fetch and upload_fetch_column_conflict scripts may be defined for table '%1'

Error code
-10220
Parameter 1
Table name.
Probable cause
The synchronization server uses one of these scripts for conflict detection. Please only define one of these two
scripts.

#### 1.3.2.129 Option '%1' is invalid or was not specified correctly on synchronization server command line

on synchronization server command line
Error code
-10163
Parameter 1
The option name.
Probable cause
The given option is improperly specified.

#### 1.3.2.130 Option '%1' was previously defined on the synchronization server command line with value '%2'

-10162
Error code
Parameter 1
The option name.
Parameter 2
The extra option value.
Probable cause
The given option may not be specified more than once.

#### 1.3.2.131 Other ERP error

Error code
-10415
Probable cause
details follow.

#### 1.3.2.132 Parameter '%1' has been set to NULL

Error code
-10230
Parameter 1
Number of parameter
Probable cause
Parameter may be modified but not set to NULL.

#### 1.3.2.133 Protocol error: '%1'

-10001
Error code
Parameter 1
The error number.
Probable cause
The synchronization server does not understand the request sent by the client. This could happen if the client
is newer than the synchronization server. Please contact technical support

#### 1.3.2.134 Protocol version mismatch -- expecting '%1' but received '%2'

received '%2'
Error code
-10004
Parameter 1
The maximum version accepted.
Parameter 2
The version as sent from the client.
Probable cause
The synchronization server is communicating with the client using different protocol versions. If the client
sends a version that is not supported by the synchronization server, it will give this error. Please make sure
that you are not using a newer client (DBMLSync or an UltraLite application) to talk to an older version of the
synchronization server.

#### 1.3.2.135 QAnywhere is no longer supported

-10406
Error code
Probable cause
QAnywhere is no longer supported.

#### 1.3.2.136 Received unexpected end-to-end encrypted traffic on port '%1'

on port '%1'
Error code
-10378
Parameter 1
The listening port.
Probable cause
The synchronization server aborted a request because it received end-to-end encrypted traffic on a port that
was not expecting it. Ensure that the stream options used on the client match those on the server.

#### 1.3.2.137 Received unexpected HTTP traffic on port '%1'

Error code
-10376
Parameter 1
The listening port.
Probable cause
The synchronization server aborted a request because it received HTTP traffic on a port that was servicing
non-HTTP traffic. Ensure that the stream options used on the client match those on the server.

#### 1.3.2.138 Received unexpectedly encrypted traffic on port '%1'

'%1'
Error code
-10377
Parameter 1
The listening port.
Probable cause
The synchronization server aborted a request because it received traffic that was likely encrypted on a port
that was servicing non-encrypted traffic. Ensure that the stream options used on the client match those on the
server.

#### 1.3.2.139 Required ODBC function '%1' is not supported by the driver

the driver
-10075
Error code
Parameter 1
The ODBC function name.
Probable cause
The synchronization server was not able to find the function from the ODBC driver. Please start the
synchronization server with the recommended ODBC drivers.

#### 1.3.2.140 Requires both the -lsc and -ca options specified

Error code
-10357

Probable cause
The synchronization server requires both the -lsc and -ca settings in order to enable the primary-secondary
server logic required by the Notifier when the synchronization server is running in a server farm.

#### 1.3.2.141 RETURN structure contained an error

Error code
-10417
Probable cause
details follow

#### 1.3.2.142 RTNotifier does not recognize the property named '%1'

'%1'
-10335
Error code
Parameter 1
property name.
Probable cause
The RTNotifier does not recognize the given property.

#### 1.3.2.143 Script '%1' encountered an error

Error code
-10189
Parameter 1
The script.
Probable cause
When invoked, the script triggered a ScriptExecutionException.

#### 1.3.2.144 Script '%1' is a member of '%2', but only '%3' classes are permitted per script version

classes are permitted per script version
-10204
Error code
Parameter 1
The method name.
Parameter 2
The class name.
Parameter 3
The number of classes permitted.
Probable cause
A script version cannot explicitly reference more than the given number of classes. If you encounter this error,
create a wrapper class containing all of the methods used by different events.

#### 1.3.2.145 Script '%1' reported a fatal error

Error code
-10190
Parameter 1
The script.
Probable cause
When invoked, the script triggered a FatalException.

#### 1.3.2.146 Script '%1' reported a server error

-10188
Error code
Parameter 1
The script.
Probable cause
When invoked, the script triggered a ServerException.

#### 1.3.2.147 Script '%1' reported a synchronization error

Error code
-10186
Parameter 1
The script.
Probable cause
When invoked, the script triggered a SynchronizationException.

#### 1.3.2.148 Shared install directory is incorrect: '%1'

Error code
-10144
Parameter 1
SQL Anywhere shared directory.
Probable cause
Please fix the shared components environment variable so that it points to the correct location.

#### 1.3.2.149 Spatial library error: '%1'

Error code
-10330

Parameter 1
The actual error code or error message generated by the
spatial library.
Probable cause
Please look at the actual spatial library error message to find the cause of the error.

#### 1.3.2.150 Stream Error: '%1'

Error code
-10117
Parameter 1
Error message.
Probable cause
A generic stream error. The details of the error are in the message.

#### 1.3.2.151 Support for spatial is not available for this CPU

-10371
Error code
Probable cause
Spatial data support for 32-bit Windows and 32-bit Linux requires a CPU that supports SSE2 instructions.

#### 1.3.2.152 System exception thrown in constructor of class: '%1'. Error description: '%2'

'%1'. Error description: '%2'
Error code
-10155
Parameter 1
The class name.
Parameter 2
The error text.
Probable cause
A system exception was thrown when invoking the constructor of a user class. Please examine the stack trace
and fix the error.

#### 1.3.2.153 System parameter '%1' has been set to NULL

-10229
Error code
Parameter 1
Name of system parameter.
Probable cause
System parameters may be modified but not set to NULL.

#### 1.3.2.154 Table '%1' could not be found

Error code
-10427
Parameter 1
The required table
Probable cause
A required table parameter is missing from the BAPI.

#### 1.3.2.155 Table '%1' does not have a column named '%2'

Error code
-10233
Parameter 1
Name of table.
Parameter 2
Name of column.
Probable cause
The column name referenced in the script does not appear in the list of column names for the table.

#### 1.3.2.156 Table '%1' has no entry in the ml_table table

Error code
-10101
Parameter 1
Table name.

Probable cause
The tables ml_table, ml_table_script, ml_script contain the scripts for every table that participates in
synchronization. The synchronization server will show this warning for all the synchronization tables that have
no script or that have no entry in the table ml_table.

#### 1.3.2.157 The '%1' script returned '%2'

Error code
-10052
Parameter 1
The user authentication script name.
Parameter 2
The script returning value.
Probable cause
The user authentication script returned a value greater than 3000.

#### 1.3.2.158 The '-rrp' option has been used but no local server connect string has been specified. A local server connect string must be specified using the '-lsc' option to use the '-rrp' option

Error code
-10327

Probable cause
The '-rrp' option has been used but no local server connect string has been specified. A local server connect
string must be specified using the '-lsc' option to use the '-rrp' option.

#### 1.3.2.159 The .NET scripting VM requires version '%1' of the synchronization server ODBC Bridge DLL, but was supplied version '%2' instead

Error code
-10174
Parameter 1
The required version.
Parameter 2
The supplied version.
Probable cause
This is likely an install problem. Please contact technical support.

#### 1.3.2.160 The .NET scripting VM requires version '%1' of the synchronization server Script DLL, but was supplied version '%2' instead

-10175
Error code
Parameter 1
The required version.
Parameter 2
The supplied version.
Probable cause
This is likely an install problem. Please contact technical support.

#### 1.3.2.161 The bind to URL '%1' failed. The most recently reported LDAP API error is: '%2'

reported LDAP API error is: '%2'
Error code
-10396
Parameter 1
The LDAP URL used with bind().
Parameter 2
The LDAP API error message.
Probable cause
The message is reported from the LDAP API client with context from the LDAP User Authentication methods.
An LDAP administrator or SAP customer support may use these low level messages to help the database
administrator resolve a problem.

#### 1.3.2.162 The character set (%1) used by the remote client cannot be mapped by the synchronization server

cannot be mapped by the synchronization server
Error code
-10306
Parameter 1
Character set ID.
Probable cause
The character data supplied by the remote cannot be translated into the character set required by the
consolidated database.

#### 1.3.2.163 The character set (%1) used by the remote client cannot be mapped by the synchronization server

cannot be mapped by the synchronization server
Error code
-10307
Parameter 1
Character set label.
Probable cause
The character data supplied by the remote cannot be translated into the character set required by the
consolidated database.

#### 1.3.2.164 The client aborted the request because of a network protocol version mismatch

network protocol version mismatch
-10401
Error code
Probable cause
The client is either too old or too new to communicate with this server. You must upgrade one to proceed.

#### 1.3.2.165 The client failed to send a complete sequence of commands

commands
Error code
-10410

Probable cause
The client did not send its entire set of commands to perform a synchronization. This may be due to the client
aborting or a network interruption.

#### 1.3.2.166 The client is not authorized to download the requested file: '%1'

requested file: '%1'
Error code
-10408
Parameter 1
File name.
Probable cause
The authenticate_file_transfer script returned a value >= 2000.

#### 1.3.2.167 The client is not authorized to upload the requested file: '%1'

file: '%1'
Error code
-10409
Parameter 1
File name.
Probable cause
The authenticate_file_upload script returned a value >= 2000.

#### 1.3.2.168 The file name or subdirectory for a file upload is invalid: '%1'

invalid: '%1'
Error code
-10323
Parameter 1
Path name.

Probable cause
File names for file upload must not contain slashes.

#### 1.3.2.169 The following non-daemon threads were destroyed: '%1'

'%1'
Error code
-10124
Parameter 1
The list of thread identifiers.
Probable cause
The given Java threads were forcibly destroyed during shutdown. Use the ShutdownListener interface to
destroy threads gracefully during the synchronization server shutdown.

#### 1.3.2.170 The handle_UploadData event script must be void or return null

or return null
-10223
Error code
Probable cause
Rewrite this handle_UploadData script so that it has a void return type or returns null.

#### 1.3.2.171 The LDAP server '%1' is not properly defined

Error code
-10394
Parameter 1
The LDAP server name.
Probable cause
The LDAP server was not properly defined, because at least one of the parameters, search URL, access
account DN, access password, and authentication URL is NULL.

#### 1.3.2.172 The method matching '%1' found in class '%2' must return void

return void
Error code
-10402
Parameter 1
The method signature searched for.
Parameter 2
The class.
Probable cause
Methods executed by the synchronization server are not allowed to return any object.

#### 1.3.2.173 The method matching '%1' found in class '%2' must return void

return void
-10403
Error code
Parameter 1
The method signature searched for.
Parameter 2
The class.
Probable cause
Methods executed by the synchronization server are not allowed to return any object.

#### 1.3.2.174 The name '%1' is not a valid name for a .NET start class

class
Error code
-10177
Parameter 1
The start class name.
Probable cause
The start class name is not well formed please fix the name and run again.

#### 1.3.2.175 The number of columns in client table '%1' does not agree with the number defined in ml_column

agree with the number defined in ml_column
Error code
-10280
Parameter 1
Name of table.
Probable cause
The number of columns sent for the table from the client is greater than the number as defined in ml_column.
Ensure that ml_column is up to date.

#### 1.3.2.176 The ODBC connection string specifies a driver that is not compatible with a 64-bit synchronization server

Error code
-10379
Probable cause
The driver being used is not safe to use for a 64-bit synchronization server. You may need to reconfigure the
driver or specify a different one. Please refer to the list of Recommended ODBC Drivers for MobiLink.

#### 1.3.2.177 The option '%1' needs a path

Error code
-10140
Parameter 1
Option name.
Probable cause
The given option must be followed by a path.

#### 1.3.2.178 The options '%1' and '%2' must not be used together

together
Error code
-10139
Parameter 1
Option name.
Parameter 2
Option name.

Probable cause
Consider using one option or the other, or neither, but not both.

#### 1.3.2.179 The poll_every property for notifier, '%1', is invalid. The valid format is <num> for number of seconds

The valid format is <num> for number of seconds
Error code
-10336
Parameter 1
notifier name.
Probable cause
The poll_every property for the given notifier is invalid. The valid format is <num> for number of seconds.

#### 1.3.2.180 The prepared SQL statement '%1' requires '%2' parameters, but '%3' parameters were supplied

parameters, but '%3' parameters were supplied
-10200
Error code
Parameter 1
The SQL statement.
Parameter 2
The expected number of parameters.
Parameter 3
The supplied number of parameters.
Probable cause
The statement was executed with the wrong number of parameters. Please supply the correct number of
parameters before executing the statement.

#### 1.3.2.181 The prepared SQL statement '%1' requires '%2' parameters, but parameter '%3' was not supplied

parameters, but parameter '%3' was not supplied
Error code
-10198
Parameter 1
The SQL statement.
Parameter 2
The expected number of parameters.
Parameter 3
The supplied number of parameters.
Probable cause
The statement was executed too few parameters. Please supply the correct number of parameters before
executing the statement.

#### 1.3.2.182 The property set name, '%1', does not contain a correct bracket

correct bracket
-10338
Error code
Parameter 1
property set name.
Probable cause
The given property set name does not contain a correct bracket.

#### 1.3.2.183 The remote database identified by remote ID '%1' is already synchronizing or the database connection is unusable: unable to access the lock for that remote ID

Error code
-10343
Parameter 1
Remote ID.
Probable cause
The synchronization server could not access the lock for the remote ID in the consolidated database or the
synchronization server system database. The remote ID may have been locked by another synchronization, or
the database connection may be unusable. Please check the database connection and try the synchronization
later.

#### 1.3.2.184 The remote database identified by remote ID '%1' is already synchronizing: the lock for that remote ID has been changed by another synchronization

Error code
-10342
Parameter 1
Remote ID.

Probable cause
A concurrent synchronization was detected when the synchronization server checked the lock for the remote
ID. This can happen if another synchronization for the same remote database has already locked the remote ID.
Please try the synchronization later.

#### 1.3.2.185 The remote database identified by remote ID '%1' may already be synchronizing: orphaned UltraLite synchronization detected

Error code
-10344
Parameter 1
Remote ID.
Probable cause
An orphaned UltraLite synchronization was detected when the synchronization server checked the lock for the
remote ID. If an UltraLite client cancels a synchronization that is queued while waiting for a synchronization
server database worker thread, the synchronization has been orphaned. If the orphaned synchronization later
obtains a database worker thread when another synchronization has changed the lock for that remote ID, the
orphaned synchronization is closed with this error.

#### 1.3.2.186 The remote database identified by remote ID '%1' may already be synchronizing: unable to lock that remote ID

Error code
-10341
Parameter 1
Remote ID.
Probable cause
The synchronization server could not lock the remote ID in the consolidated database or the synchronization
server system database. The remote ID may have been locked by another synchronization, or the database
connection may be unusable. Please try the synchronization later.

#### 1.3.2.187 The script '%1' cannot process pre-image row data

-10234
Error code
Parameter 1
Name of script.
Probable cause
Only scripts that process pre-image row data may use named parameters that reference pre-image row data.

#### 1.3.2.188 The script '%1' cannot process row data

Error code
-10231
Parameter 1
Name of script.
Probable cause
Only scripts that process row data may use named parameters that reference row data.

#### 1.3.2.189 The script '%1' contains an invalid character in a named parameter

named parameter
Error code
-10235
Parameter 1
Name of script.
Probable cause
The rules for naming a SQL Anywhere identifier must be followed.

#### 1.3.2.190 The script '%1' contains an invalid parameter reference: '%2'

reference: '%2'
Error code
-10239
Parameter 1
Name of script.
Parameter 2
Number of parameter.
Probable cause
The script contains a numeric reference to a parameter which is either zero or too large.

#### 1.3.2.191 The script '%1' contains an invalid user parameter: '%2'

'%2'
-10240
Error code
Parameter 1
Name of script.
Parameter 2
Number of parameter.
Probable cause
The script contains a numeric reference to a user parameter.

#### 1.3.2.192 The script '%1' contains invalid syntax for using named parameters

named parameters
Error code
-10236
Parameter 1
Name of script.
Probable cause
The script does not contain a properly formed named parameter sequence. To reference a script parameter
by name, enclose the parameter in curly braces and prefix it with ml, as in {ml parameter}. For example, {ml
s.action_code}.

#### 1.3.2.193 The script '%1' references authentication parameter '%2' but there are only '%3'

parameter '%2' but there are only '%3'
Error code
-10242
Parameter 1
Name of script.
Parameter 2
Number of parameter.
Parameter 3
Number of parameters.
Probable cause
The script contains a reference to an authentication parameter which does not exist.

#### 1.3.2.194 The script '%1' references table '%2' column '%3', but there are only '%4' columns

but there are only '%4' columns
Error code
-10241
Parameter 1
Name of script.
Parameter 2
Name of table.
Parameter 3
Number of parameter.
Parameter 4
Number of table columns.
Probable cause
The script contains a reference to a parameter which is either zero or too large.

#### 1.3.2.195 The script '%1' references the in out parameter '%2' more than one time

'%2' more than one time
-10237
Error code
Parameter 1
Name of script.
Parameter 2
Name of parameter.
Probable cause
In out parameters may only be passed to a script once.

#### 1.3.2.196 The script '%1' references unknown authentication parameter '%2'

parameter '%2'
Error code
-10243
Parameter 1
Name of script.
Parameter 2
Name of parameter.
Probable cause
The script contains a reference to an authentication parameter which does not exist.

#### 1.3.2.197 The search on LDAP server '%1' completed with no matching results

matching results
Error code
-10393
Parameter 1
The LDAP server name or search URL specifying the search.
Probable cause
An LDAPUA search or validate failed returning LDAP_NO_RESULTS_RETURNED. This error is expected when
the user does not exist in the LDAP server.

#### 1.3.2.198 The search using '%1' failed due to one or more invalid values set

invalid values set
Error code
-10390
Parameter 1
The LDAP server name or search URL specifying the search.

Probable cause
An LDAPUA search or validate failed returning LDAP_INVALID_CREDENTIALS, LDAP_INSUFFICIENT_ACCESS,
LDAP_INVALID_DN_SYNTAX, LDAP_NO_SUCH_OBJECT, or LDAP_FILTER_ERROR due to the invalid settings.
Check the access account values for the named LDAP server or search URL.

#### 1.3.2.199 The server failed to initialize the recorder

Error code
-10325
Probable cause
The server was unable to close a recorded synchronization file.

#### 1.3.2.200 The synchronization server and client implementation IDs mismatch

implementation IDs mismatch
-10295
Error code
Probable cause
The synchronization server was not able to accept the synchronization request due to the server and client
implementation IDs mismatch.

#### 1.3.2.201 The synchronization server DLL or shared object version does not match the data layer DLL or shared object version

Error code
-10081
Probable cause
The synchronization server DLL or shared object that processes the upload and download data is not
consistent with the version of the data layer DLL or shared object (ODBC) that is used to interact with the
databases. Please check your synchronization server installation.

#### 1.3.2.202 The synchronization server has encountered an error and the synchronization has been aborted

error and the synchronization has been aborted
-10244
Error code
Probable cause
An error has occurred in the synchronization server. Please see the synchronization server message log for
more details about this error.

#### 1.3.2.203 The synchronization server has failed to start

Error code
-10382
Probable cause
The server will not run due to an error occurring during startup.

#### 1.3.2.204 The synchronization server must be run as a 64-bit application on a 64-bit operating system

application on a 64-bit operating system
Error code
-10381
Probable cause
Running the 32-bit version of the synchronization server on a 64-bit operating system is not supported. Please
use the 64-bit version.

#### 1.3.2.205 The synchronization server system table '%1' is missing or a table column is missing

missing or a table column is missing
Error code
-10100
Parameter 1
Table name.

Probable cause
The table or table column cannot be found in the consolidated database. The synchronization server tables
may not have been installed or an upgrade may be required.

#### 1.3.2.206 The synchronization server was locked down because its license is expired

because its license is expired
Error code
-10439
Probable cause
The synchronization server was locked down, because its license has expired. Please get and install a new
license.
1.3.2.207  The synchronization server was unable to calculate
the timestamp precision on the consolidated
database using the ml_scripts_modified table.
Timestamp precision related warnings will not be
generated
-10076
Error code
Probable cause
The synchronization server must calculate the maximum timestamp precision of the consolidated database to
properly synchronize all time-related values. This error typically comes up when a non-recommended ODBC
driver is used. Please start the synchronization server with a recommended ODBC driver.

#### 1.3.2.208 The table '%1' has no '%2' script

Error code
-10355
Parameter 1
Table name.
Parameter 2
Script name.
Probable cause
The upload data from the client contains data but no script is available to process it. To ignore this data provide
the script written with --{ml_ignore}.

#### 1.3.2.209 The table '%1' has no '%2' script

-10366
Error code
Parameter 1
Table name.
Parameter 2
Script name.
Probable cause
The download data script is missing. To ignore this script, please provide the script written with --{ml_ignore}.

#### 1.3.2.210 The table '%1' has the conflict resolution script(s), but no upload_fetch script defined

but no upload_fetch script defined
Error code
-10386
Parameter 1
Table name.
Probable cause
The conflict resolution script(s) is defined for the given table, but there is no upload_fetch script defined.
Please either remove the conflict resolution scripts or add an upload_fetch script.

#### 1.3.2.211 The table '%1' has the upload_fetch script, but no conflict resolution script defined

conflict resolution script defined
Error code
-10367
Parameter 1
Table name.
Probable cause
The upload_fetch script is defined for the given table, but there is no conflict resolution script defined. Please
either remove the upload_fetch script or add at least one conflict resolution script.

#### 1.3.2.212 The table '%1' must have the '%2' script written in SQL

SQL
Error code
-10405
Parameter 1
Table name.

Parameter 2
Script name.
Probable cause
Table scripts which process row data must be written in SQL. Scripts written in Java or .NET may no longer
return SQL.

#### 1.3.2.213 The update_poll_every property is invalid. The valid format is <num> for number of seconds

format is <num> for number of seconds
Error code
-10361
Probable cause
The update_poll_every SIRT global property is invalid. The valid format is <num> for number of seconds.
Please ensure that update_poll_every has a valid format in the ml_property table.

#### 1.3.2.214 The upload of file '%1' failed because the file received does not match the expected file

received does not match the expected file
-10373
Error code
Parameter 1
Filename.
Probable cause
The file transfer failed because the file received by the synchronization server did not match what was
expected. Re-try the file transfer.

#### 1.3.2.215 The upload table '%1' (column #%2) has the data type '%3', but your ODBC driver doesn't support '%4'

type '%3', but your ODBC driver doesn't support
'%4'
Error code
-10245
Parameter 1
Table name.
Parameter 2
Column index.
Parameter 3
SQL Anywhere data type.
Parameter 4
ODBC data type.
Probable cause
The upload table contains a column with a data type that is not supported by your ODBC driver. Please make
sure that the synchronization server is using a recommended ODBC driver.

#### 1.3.2.216 The upload_fetch or upload_fetch_column_conflict script for table '%1' cannot be defined as an ignored script

Error code
-10370
Parameter 1
Table name.

Probable cause
The synchronization server requires the upload_fetch or upload_fetch_column_conflict script defined as a real
SQL script or left undefined.

#### 1.3.2.217 The user authentication policy '%1' contains a NULL primary LDAP server

primary LDAP server
Error code
-10397
Parameter 1
The user authentication policy name.
Probable cause
The primary LDAP server for a user authentication policy cannot be NULL. If you are not using LDAP server for
user authentication, please create the users without specifying any user authentication policies for them, then
the synchronization server will use the default script-based logic for user authentication.

#### 1.3.2.218 The user authentication policy '%1' contains an invalid setting '%2' for the ldap_failover_to_std property

Error code
-10431
Parameter 1
The user authentication policy name.
Parameter 2
The setting for the ldap_failover_to_std property.

Probable cause
The valid setting for the ldap_failover_to_std property in a user authentication policy can be 0, 1, or 2. Please
either define the user authentication policy in the database or remove the default user authentication policy
name from the synchronization server command line.

#### 1.3.2.219 The user authentication policy '%1' is not defined in the database

the database
Error code
-10430
Parameter 1
The user authentication policy name.
Probable cause
The default user authentication policy has not been defined in the database. Please either define the user
authentication policy in the database or remove the default user authentication policy name from the
synchronization server command line.

#### 1.3.2.220 There are no entries in the JVM config file: '%1'

-10138
Error code
Parameter 1
Config file name.
Probable cause
If a jvm.cfg file is found it is expected to have at least one line. Please remove or populate the jvm.cfg.

#### 1.3.2.221 There are too many entries in the JVM config file: '%1'

'%1'
Error code
-10147
Parameter 1
The config file.
Probable cause
The jvm.cfg is probably corrupt. Please check the contents of the jvm.cfg file.

#### 1.3.2.222 This connection will be abandoned due to previous errors

errors
Error code
-10091
Probable cause
Due to the severity of error(s) encountered processing the upload stream, further work will be futile. This is
probably due to an I/O error or a protocol problem.

#### 1.3.2.223 This server is not licensed to connect to a consolidated database of the following type: '%1'

consolidated database of the following type: '%1'
Error code
-10309
Parameter 1
Consolidated database type.

Probable cause
Some synchronization server licenses are restricted to specific consolidated database types. Use a DSN that
connects to a consolidated database type you are licensed for.

#### 1.3.2.224 This server is not licensed to use dbmlsync

Error code
-10314
Probable cause
Some synchronization server licenses are not allowed to use dbmlsync. You may not use dbmlsync to sync with
this server.

#### 1.3.2.225 This server is not licensed to use the direct row API

-10312
Error code
Probable cause
Some synchronization server licenses are not allowed to use the direct row API. You may not have any
handle_UploadData or handle_DownloadData scripts.

#### 1.3.2.226 This synchronization has been aborted by client request

request
Error code
-10372
Probable cause
The client has requested that the current synchronization be terminated.

#### 1.3.2.227 This synchronization server is not licensed to run in High Availability mode

High Availability mode
Error code
-10369
Probable cause
Another synchronization server was detected using the same consolidated database. This is not allowed with
the current license.

#### 1.3.2.228 TLS ON cannot be used with URL '%1'

-10395
Error code
Parameter 1
The LDAP URL that is using Secure LDAP.
Probable cause
The LDAP server is specified with TLS ON and the specified LDAP URL uses Secure LDAP, that is, 'ldaps'
instead of 'ldap', which is not a valid combination. Use either TLS ON or an 'ldaps' URL.

#### 1.3.2.229 Too many options sent to Java VM

Error code
-10146
Probable cause
The number of options passed to the Java VM is exceedingly large. Please reduce the number of command line
arguments.

#### 1.3.2.230 Transactions on this connection cannot be committed or rolled back

committed or rolled back
Error code
-10202
Probable cause
An attempt was made to commit or roll back a transaction on a database connection that synchronization
server controls. Do not attempt to commit or roll back a synchronization server database connection from a
method invoked as a script.

#### 1.3.2.231 Two or more MobiLink clients are either simultaneously uploading the file '%1', or opening the temporary file '%2' failed

Error code
-10346
Parameter 1
Upload filename.
Parameter 2
Temporary upload filename.

Probable cause
The file is being uploaded by more than one client or the synchronization server could not open the temporary
file. A file can only be uploaded by one client at a time, and a temporary file is required.

#### 1.3.2.232 Two or more synchronization server clients are simultaneously uploading the file '%1'

simultaneously uploading the file '%1'
Error code
-10345
Parameter 1
Upload filename.
Probable cause
The file is being uploaded by more than one client. A file can only be uploaded by one client at a time.

#### 1.3.2.233 Unable to abort the distributed transaction (event: '%1') -- system error: '%2'

'%1') -- system error: '%2'
Error code
-10290
Probable cause
The synchronization server was not able to abort the distributed transaction.

#### 1.3.2.234 Unable to accept an incoming connection (system error '%1')

error '%1')
Error code
-10276
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.235 Unable to accept new connections on network listener port

listener port
-10292
Error code
Probable cause
The synchronization server was unable to accept an incoming connection. Please contact technical support.

#### 1.3.2.236 Unable to access the JRE at: '%1'

Error code
-10145
Parameter 1
The JRE path.

Probable cause
Please fix the argument to the -jrepath option so that the synchronization server may load the required Java
VM.

#### 1.3.2.237 Unable to allocate a connection

Error code
-10067
Probable cause
The synchronization server was not able to allocate a connection. Please make sure that there is enough
memory to start the synchronization server. Also, make sure that the database server is running, and that the
user ID and password are valid.

#### 1.3.2.238 Unable to allocate memory for the DownloadData instance

instance
Error code
-10221
Probable cause
The Java VM has run out of memory. Try increasing the amount of memory available to the Java VM.

#### 1.3.2.239 Unable to allocate memory for the UploadData instance

instance
Error code
-10222
Probable cause
The Java VM has run out of memory. Try increasing the amount of memory available to the Java VM.

#### 1.3.2.240 Unable to allocate memory needed for script execution

execution
Error code
-10170
Probable cause
Consider adding more RAM, or shutting down other programs, or reducing the memory required by the .NET
synchronization scripts.

#### 1.3.2.241 Unable to attach JDBC connection

Error code
-10160
Probable cause
The synchronization server was unable to wrap an ODBC connection to create a JDBC connection.

#### 1.3.2.242 Unable to attach thread to .NET runtime

Error code
-10168
Probable cause
This is an internal startup error. Please contact technical support.

#### 1.3.2.243 Unable to authenticate user '%1'

Error code
-10055
Parameter 1
The user name.
Probable cause
The synchronization server was not able to authenticate the given user.

#### 1.3.2.244 Unable to bind listener socket to port (system error '%1')

'%1')
Error code
-10261
Parameter 1
System error.

Probable cause
Please contact technical support.

#### 1.3.2.245 Unable to close socket (system error '%1')

Error code
-10271
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.246 Unable to close the recorded protocol file

Error code
-10324
Probable cause
The server was unable to close a recorded protocol file.

#### 1.3.2.247 Unable to commit the distributed transaction (event: '%1') -- system error: '%2'

(event: '%1') -- system error: '%2'
Error code
-10289

Probable cause
The synchronization server was not able to commit the distributed transaction.

#### 1.3.2.248 Unable to COMMIT transaction: '%1' -- Attempting to ROLLBACK

to ROLLBACK
Error code
-10065
Parameter 1
The script name.
Probable cause
The synchronization server was not able to commit the transaction for the given script. Writing scripts to avoid
deadlocks is always a good practice.

#### 1.3.2.249 Unable to complete the request

-10368
Error code
Probable cause
The synchronization server was not able to complete the client request. Please check the synchronization
server message log for more details.

#### 1.3.2.250 Unable to connect to the arbiter server

Error code
-10349
Probable cause
The synchronization server was not able connect to the arbiter server. Please make sure the arbiter server is
running and check your connection parameters.

#### 1.3.2.251 Unable to connect to the consolidated database. Aborting the synchronization

Aborting the synchronization
-10028
Error code
Probable cause
The synchronization server was not able to make a connection to the consolidated database server. Please
make sure that the database server is running and the network is okay.

#### 1.3.2.252 Unable to convert the string '%1' to a numeric value

value
Error code
-10213
Parameter 1
String to be converted.
Probable cause
The synchronization server cannot convert the string to a numeric value. This is an internal error. Please
contact technical support.

#### 1.3.2.253 Unable to create a shared memory file

Error code
-10282
Probable cause
The synchronization server was not able to create a shared memory file using the given synchronization server
name. Please check if a synchronization server with the same name is currently running on the local machine.

#### 1.3.2.254 Unable to create an I/O completion port (system error '%1')

error '%1')
-10258
Error code
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.255 Unable to create connection socket (system error '%1')

'%1')
Error code
-10264
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.256 Unable to create listener socket (system error '%1')

Error code
-10260
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.257 Unable to create new database connection

-10159
Error code
Probable cause
The synchronization server was unable to create a new ODBC connection needed to create a new JDBC
wrapper.

#### 1.3.2.258 Unable to create the background thread

Error code
-10112
Probable cause
The synchronization server was unable to create a thread for background processing. The most likely cause is
insufficient memory.

#### 1.3.2.259 Unable to create unix pipe for socket selector notification (system error '%1')

notification (system error '%1')
Error code
-10272
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.260 Unable to delete from table '%1' using '%2'

-10073
Error code
Parameter 1
Table name.
Parameter 2
Script name.
Probable cause
A failure occurred when the synchronization server was deleting row(s) from the given table in the consolidated
database.

#### 1.3.2.261 Unable to delete user name '%1' from the ml_user_table

ml_user_table
Error code
-10083
Parameter 1
The name of the user to be deleted.
Probable cause
Please check if the synchronization user is valid and is not currently in use by other threads.

#### 1.3.2.262 Unable to detach worker from VM

Error code
-10169
Probable cause
This is an internal shutdown error. Please contact technical support.

#### 1.3.2.263 Unable to dump exception information. Received exception while processing exception

exception while processing exception
-10119
Error code
Probable cause
A Java script caused an exception, but the synchronization server could not display the exception information
because of a subsequent exception.

#### 1.3.2.264 Unable to enlist the database in the Distributed Transaction Coordinator

Transaction Coordinator
Error code
-10288
Probable cause
The synchronization server was not able to enlist the database in the Distributed Transaction Coordinator.

#### 1.3.2.265 Unable to execute an RTNotifier's request cursor due to previous errors

due to previous errors
Error code
-10339
Probable cause
Unable to execute an RTNotifier's request cursor due to previous errors.

#### 1.3.2.266 Unable to fetch from table '%1' using '%2'

Error code
-10071
Parameter 1
Table name.

Parameter 2
Script name.
Probable cause
A failure occurred when the synchronization server was retrieving row(s) from the given table in the
consolidated database.

#### 1.3.2.267 Unable to find file '%1'

Error code
-10166
Parameter 1
The filename.
Probable cause
The synchronization server was unable to find one of the files it needs to start .NET scripting. Please check
your installation and environment variables.

#### 1.3.2.268 Unable to find shared components directory. JRE location is not specified in options. JRE location is unknown

-10143
Error code
Probable cause
Set the shared components environment variable or specify a JRE location using the -jrepath option.

#### 1.3.2.269 Unable to find the JAR file: '%1' in install directory or classpath

or classpath
Error code
-10142
Parameter 1
JAR file name.
Probable cause
Install the missing JAR file.

#### 1.3.2.270 Unable to flush scripts

-10020
Error code
Probable cause
If the -zf option has been provided on the synchronization server start line, then the synchronization server
always checks whether it needs to update its cached scripts at the beginning of each synchronization by
connecting to the consolidated database server and querying the ml_scripts_modified table.

#### 1.3.2.271 Unable to get an assertion ticket: '%1'

Error code
-10436
Parameter 1
Error message.
Probable cause
The synchronization server was not able to get an assertion ticket for logon.

#### 1.3.2.272 Unable to get the DTC transaction manager -- system error: '%1'

system error: '%1'
Error code
-10286
Probable cause
The synchronization server was not able to get the transaction manager. Please make sure the service of the
Distributed Transaction Coordinator (DTC) is running on the local computer.

#### 1.3.2.273 Unable to get the RID for remote ID '%1'

Error code
-10348
Parameter 1
Remote ID.

Probable cause
The synchronization server was not able to get the RID from the ml_database table in the consolidated
database or the synchronization server system database (MLSD). Please make sure the consolidated database
or MLSD is running.

#### 1.3.2.274 Unable to get the user ID for user '%1'

Error code
-10347
Parameter 1
The user name.
Probable cause
The synchronization server was not able to get the user_id from the ml_user table in the consolidated database
or the synchronization server system database (MLSD). Please make sure the consolidated database or MLSD
is running.

#### 1.3.2.275 Unable to initialize a distributed transaction -- system error: '%1'

system error: '%1'
Error code
-10287
Probable cause
The synchronization server was not able to initialize a distributed transaction. Please make sure the
transaction log of the database is not full.

#### 1.3.2.276 Unable to initialize communications stream '%1': '%2'

'%2'
-10110
Error code
Parameter 1
Stream number.
Parameter 2
Stream specification.
Probable cause
The given stream could not be initialized. Ensure that the stream name and stream options are valid.

#### 1.3.2.277 Unable to initialize ODBC

Error code
-10066
Probable cause
The synchronization server was not able to initialize the ODBC layer. Please make sure that there is enough
memory to start the synchronization server and then start the synchronization server with a recommended
ODBC driver.

#### 1.3.2.278 Unable to initialize SAP Native Component Supportability (NCS)

Supportability (NCS)
Error code
-10434
Probable cause
The -ncs, -ncsd, or -ncsp option was specified, but the NCS layer was unable to initialize.

#### 1.3.2.279 Unable to insert into table '%1' using '%2'

-10072
Error code
Parameter 1
Table name.
Parameter 2
Script name.
Probable cause
A failure occurred when the synchronization server was inserting row(s) into the given table in the consolidated
database.

#### 1.3.2.280 Unable to insert user name '%1' into the ml_user table

table
Error code
-10054
Parameter 1
The user name.
Probable cause
The synchronization server was not able to add the given user into the ml_user table. Please verify that
the consolidated database server is running and that the synchronization server's database login ID has
permission to modify the ml_user table.

#### 1.3.2.281 Unable to listen on port (system error '%1')

Error code
-10262
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.282 Unable to load '%1'

Error code
-10411
Probable cause
The required DLL could not be found. Please check your synchronization server installation.

#### 1.3.2.283 Unable to load .NET CLR Host DLL

Error code
-10165
Probable cause
The .NET CLR refused to load. Please use the .NET CLR utilities for logging binding and loading activity to
determine the problem.

#### 1.3.2.284 Unable to load .NET Framework CLR Version '%1'

Error code
-10164
Parameter 1
The CLR version.
Probable cause
Make sure the given CLR version is installed.

#### 1.3.2.285 Unable to load Assembly '%1' into domain '%2'

Error code
-10193
Parameter 1
The assembly name.
Parameter 2
The domain name.

Probable cause
The named assembly could not be loaded. Please use the .NET CLR utilities for logging binding and loading
activity to determine the problem.

#### 1.3.2.286 Unable to load DLL or shared object '%1' for stream '%2': '%3'

'%2': '%3'
Error code
-10108
Parameter 1
The DLL or shared object name.
Parameter 2
Stream type.
Parameter 3
Stream name.
Probable cause
The given DLL or shared object could not be loaded for the given stream. Ensure the correct version of the DLL
or shared object is present and in the proper location.

#### 1.3.2.287 Unable to load DLL or shared object: '%1'

Error code
-10107
Parameter 1
The DLL or shared object name.

Probable cause
The given DLL or shared object could not be loaded. Ensure the correct version of the DLL or shared object is
present and in the proper location.

#### 1.3.2.288 Unable to load entry points from DLL: '%1'

Error code
-10088
Parameter 1
The DLL or shared object name.
Probable cause
Please check your synchronization server installation.

#### 1.3.2.289 Unable to load the Java VM due to a memory error

-10122
Error code
Probable cause
The synchronization server was unable to load the Java VM. Consider increasing RAM or freeing up memory by
shutting down other processes.

#### 1.3.2.290 Unable to load the Java VM due to a version error

Error code
-10121

Probable cause
The synchronization server was unable to load the Java VM. Ensure the correct Java VM is installed.

#### 1.3.2.291 Unable to load the Java VM due to an unknown error

error
Error code
-10123
Probable cause
The synchronization server was unable to load the Java VM. The reason is likely displayed in previous output.

#### 1.3.2.292 Unable to load the Java VM shared library. Make sure that the shared library path is set correctly and that LD_PRELOAD is set correctly and supported by your version of the dynamic loader

Error code
-10209

Probable cause
The synchronization server was not able to load the Java VM shared library. Please make sure that the Java VM
shared library is installed, the path is set correctly, and the LD_PRELOAD is set correctly and supported by your
version of the dynamic loader

#### 1.3.2.293 Unable to load UNILIB collation '%1': '%2'

Error code
-10099
Parameter 1
Unilib charset ID.
Parameter 2
Unilib error string.
Probable cause
The synchronization server cannot initialize the Unilib converter. The installation may be damaged or the
required collation is unavailable.

#### 1.3.2.294 Unable to locate .NET Domain Configuration File '%1'

'%1'
-10191
Error code
Parameter 1
The filename.
Probable cause
The domain configuration file specified could not be found. Please check the file location and configuration file
setting.

#### 1.3.2.295 Unable to lock the primary synchronization server

Error code
-10351
Probable cause
The synchronization server was not able to lock the primary server. Please make sure the table
ml_primary_server_lock table exists and contains only one row.

#### 1.3.2.296 Unable to notify (system error '%1')

-10275
Error code
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.297 Unable to open '%1'

Error code
-10058
Parameter 1
The script name.
Probable cause
The synchronization server failed to execute the given table script. Please make sure that the script contains
valid SQL.

#### 1.3.2.298 Unable to open temporary file '%1'

Error code
-10212
Parameter 1
File name.
Probable cause
The synchronization server may use temporary files to store intermediate data. Please make sure the
synchronization server has permission to create temporary files.

#### 1.3.2.299 Unable to open the file '%1 for recording

Error code
-10316

Parameter 1
File name.
Probable cause
The server was unable to open the file for recording.

#### 1.3.2.300 Unable to parse class and method name from script: '%1'

script: '%1'
Error code
-10125
Parameter 1
Script name.
Probable cause
The proper format for Java synchronization scripts is 'myPackage.myClass.myMethod'.

#### 1.3.2.301 Unable to perform a hard close on a listener socket

Error code
-10268

Probable cause
Please contact technical support.

#### 1.3.2.302 Unable to perform a hard close on a socket '%1'

Error code
-10266
Parameter 1
Socket.
Probable cause
Please contact technical support.

#### 1.3.2.303 Unable to poll sockets (system error '%1')

Error code
-10274
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.304 Unable to post listener deletion request to completion queue (system error '%1')

completion queue (system error '%1')
-10269
Error code
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.305 Unable to post socket deletion request to completion queue (system error '%1')

completion queue (system error '%1')
Error code
-10267
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.306 Unable to process a synchronization request at this time

time
Error code
-10387
Probable cause
The synchronization request is unable to proceed as the consolidated database seems to be unavailable.

#### 1.3.2.307 Unable to process the request, because synchronization requires access to the ORACLE 'gv$transaction' table

-10380
Error code
Probable cause
Accessing the Oracle gv$transaction table for the synchronization server is necessary in order to ensure no
data missing in a timestamp based download. Please try to grant a select permission on gv$transaction to the
synchronization server database login ID.

#### 1.3.2.308 Unable to process the synchronization request because its sync sequence number '%1' is smaller than or equal to the one '%2' in consolidated database

Error code
-10388
Parameter 1
Sync sequence number of the remote.
Parameter 2
Sync sequence number in the consolidated database.
Probable cause
The synchronization server has refused to process the synchronization request, because its sync sequence
number is smaller than or equal to the one in consolidated database. This problem can happen, when a
synchronization server has already applied a later sync request from the same remote database.

#### 1.3.2.309 Unable to record part of the synchronization

-10318
Error code
Probable cause
The server was unable to record part of the synchronization. Check that the server was able to open the file for
recording.

#### 1.3.2.310 Unable to resolve host name '%1' (error: '%2')

Error code
-10283
Parameter 1
Host name.
Parameter 2
Error number.
Probable cause
The host name specified could not be resolved. An OS-specific error number is given.

#### 1.3.2.311 Unable to retrieve data from table '%1'

Error code
-10398
Parameter 1
The synchronization server system table name.
Probable cause
The synchronization server was not able to fetch data from its system table in the consolidated database.
Please see the previous errors for the cause of the problem.

#### 1.3.2.312 Unable to retry the current transaction after conflict-update with snapshot isolation in the consolidated database. The retry limit has been reached

-10246
Error code
Probable cause
The synchronization server has retried the current transaction, but the conflict-update problem still
occurred. Please commit all open transactions running against the consolidated database and try to run the
synchronization again.

#### 1.3.2.313 Unable to retry the current transaction after deadlock in the consolidated database. The retry limit has been reached

Error code
-10021
Probable cause
The synchronization server has retried the current transaction, but the deadlock problem still occurred. Please
redesign your synchronization logic or use the -r synchronization server command line option.

#### 1.3.2.314 Unable to reuse address (system error '%1')

-10273
Error code
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.315 Unable to ROLLBACK transaction: '%1'

Error code
-10064
Parameter 1
The script name.
Probable cause
The synchronization server was not able to roll back the transaction.

#### 1.3.2.316 Unable to send SQL Passthrough script due to an unknown script flag: '%1'

unknown script flag: '%1'
Error code
-10297
Probable cause
The synchronization server found an unknown SQL Passthrough script flag for this user. Check the scripts for
this user.

#### 1.3.2.317 Unable to set the thread affinity mask which is required by the recorder

required by the recorder
Error code
-10317
Probable cause
The server was unable to set the thread affinity mask which is required by the recorder.

#### 1.3.2.318 Unable to set transaction isolation level to snapshot

snapshot
Error code
-10247
Probable cause
The synchronization server was not able to set the transaction isolation level to snapshot. Please make sure the
database login ID used to connect the synchronization server to the consolidated database has the permission
to change the isolation level and the database allows snapshot isolation.

#### 1.3.2.319 Unable to set value for user parameter '%1' -- value larger than '%2' characters

larger than '%2' characters
Error code
-10375
Parameter 1
User parameter name.
Probable cause
A user defined variable cannot be set longer than specified.

#### 1.3.2.320 Unable to shutdown .NET scripting VM

Error code
-10180
Probable cause
The synchronization server was unable to shut down the .NET scripting VM. Shutdown actions performed by
start classes may not complete properly.

#### 1.3.2.321 Unable to shutdown .NET scripting VM. '%1' workers still attached

workers still attached
Error code
-10181
Parameter 1
The number of worker threads.
Probable cause
The synchronization server was unable to shutdown the .NET scripting VM because there are worker threads
still attached. There may be a start class that is not respecting the shutdown, or is delaying its response to the
shutdown.

#### 1.3.2.322 Unable to start accepting connections (system error '%1')

error '%1')
-10265
Error code
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.323 Unable to start the restartable synchronization

Error code
-10255

Probable cause
The synchronization server was unable to start the restartable synchronization requested by the client because
the synchronization may already have been completed or the synchronization server may have been restarted.
Remarks
That error can occur for a number of reasons, including:
•
The server restarts
•
The data is emptied out of the download cache to make room for more recent active syncs
•
The download was too large to fit in the download cache and the synchronization had to be restarted
(possibly due to a temporary drop in network activity)
When this error occurs, the client must retry the synchronzation. Increasing the size of the download cache
may prevent this error.

#### 1.3.2.324 Unable to store the primary server information

-10352
Error code
Probable cause
The synchronization server was not able to store the primary server information into the consolidated
database or the synchronization server system database.

#### 1.3.2.325 Unable to support MLSD

Error code
-10296
Probable cause
The synchronization server was not able to support its system objects stored in a database other than the
consolidated database, because the ODBC driver for this database server doesn't support the Microsoft
Distributed Transactions. Please install the synchronization server system objects on the consolidated
database and remove the -cs option from the command line.

#### 1.3.2.326 Unable to translate the authentication message

Error code
-10385
Probable cause
The synchronization server was not able to translate the authentication message returned by the
authentication scripts into the character set required by the remote database. Please check the authentication
scripts.

#### 1.3.2.327 Unable to update table '%1' using '%2'

Error code
-10074
Parameter 1
Table name.
Parameter 2
Script name.

Probable cause
A failure occurred when the synchronization server was updating row(s) for the given table in the consolidated
database.

#### 1.3.2.328 Unable to validate the synchronization server license

license
Error code
-10438
Probable cause
The synchronization server was not able to validate its license against the SAP HANA server. Please make sure
the remote data sync server license is registered in the SAP HANA server correctly.

#### 1.3.2.329 Unable to wait on completion port (system error '%1')

'%1')
Error code
-10270
Parameter 1
System error.
Probable cause
Please contact technical support.

#### 1.3.2.330 Unable to write to the file

Error code
-10319
Probable cause
The server was unable to record part of the synchronization because it could not write to the file.

#### 1.3.2.331 Unknown system parameter '%1' for script '%2'

Error code
-10227
Parameter 1
Name of unknown system parameter.
Parameter 2
Name of script.
Probable cause
The named system parameter is not in the list of valid system parameters.

#### 1.3.2.332 Unrecognized domain id '%1'

-10024
Error code
Parameter 1
Domain ID.
Probable cause
The client-requested domain ID (data type) is not supported. Please make sure that your synchronization
server is up-to-date.

#### 1.3.2.333 Unrecognized event name: '%1'

Error code
-10207
Parameter 1
The name of the unrecognized event.
Probable cause
The synchronization server only recognizes a set of connection and table events and these events are stored in
the tables of ml_connection_script and ml_table_script. Please make sure all the connection and table events
are valid.

#### 1.3.2.334 Upload data for column '%1' of table '%2' is invalid

Error code
-10308
Parameter 1
Column index.
Parameter 2
Table name.
Probable cause
The data uploaded from the client cannot be processed, either it is out of range or cannot be translated.

#### 1.3.2.335 Upload failed with client error '%1'

Error code
-10032
Parameter 1
An error number sent by the client.

Probable cause
The synchronization server aborted the synchronization because the client indicates there is a problem on the
remote site during upload.

#### 1.3.2.336 User name '%1' not found in the ml_user table

Error code
-10056
Parameter 1
The user name.
Probable cause
The synchronization server could not find the user from the ml_user table. Please add this user to the ml_user
table using mluser or start the synchronization server with the -zu+ option.

#### 1.3.2.337 Version '%1' not found in the ml_script_version table. Cannot synchronize

table. Cannot synchronize
Error code
-10013
Parameter 1
Version string.

Probable cause
The client-specified version does not exist in the consolidated database. Please create a script version.

#### 1.3.2.338 Version mismatch with DLL or shared object: '%1' Expected version: '%2' got version: '%3'

Expected version: '%2' got version: '%3'
Error code
-10087
Parameter 1
The DLL or shared object name.
Parameter 2
The expected version number.
Parameter 3
The supplied version number.
Probable cause
Please check your synchronization server installation.

#### 1.3.2.339 You have not specified a request_cursor for notifier '%1'

'%1'
Error code
-10334
Parameter 1
notifier name.

Probable cause
You have not specified a request_cursor for the given notifier.

#### 1.3.2.340 The synchronization server has failed a memory allocation and will prob ably soon crash

allocation and will prob ably soon crash
Error code
-10440
Probable cause
With 32-bit servers, the server's address space is probably exhausted. Lower -nc or -sm or switch to a 64-bit
system. With 64-bit servers, you have probably run out of virtual memory. You must reconfigure your operating
system to increase it.

#### 1.3.2.341 Unable to shared object: '%1' from library path '%2'

-10441
Error code
Parameter 1
The shared object name.
Parameter 2
The library path.
Probable cause
You have not specified a request_cursor for the given notifier.

### 1.4 MobiLink Server Warning Messages

The MobiLink server warning messages are written to the MobiLink server message log. Each error has a
numeric error code: both error and warning codes are positive, while warning codes are greater than 10000.
Many of the error messages contain the characters %1, %2, and so on. These characters are replaced by the
parameters to the error message.

#### 1.4.1 MobiLink Server Warning Messages Sorted by Error Code

Code
Error code
Message text
Maximum number of database connections set to '%1'
(must be at least the number of database worker threads)

ODBC Isolation level (%1) is not supported
ODBC function '%1' is not supported by the driver
ODBC statement option '%1' has changed from '%2' ( '%3')
to '%4' ( '%5')
ODBC statement option '%1' has changed from '%2' to '%3'

Retrying the begin_connection transaction after deadlock in
the consolidated database
Synchronization server table '%1' is damaged
No handle_error script is defined. The default action code
(%1) will decide the error behavior

Error code
Message text
The consolidated and remote databases disagree on when
the last synchronization took place, the progress offsets are
'%1' in the consolidated database and '%2' in the remote
database. The remote is being asked to send a new upload
that starts at the last ...
Expecting at most '%1' parameter(s) in cursor, but found
'%2'
Table '%1' has at least one timestamp column. Due to a
timestamp precision mismatch, uploaded timestamps can
lose precision, defeating download filtering
Table '%1' has at least one timestamp column. Due to a time-
stamp precision mismatch, downloaded timestamps can
lose precision, resulting in inconsistent data
The consolidated and remote databases have different time-
stamp precisions. Consolidated database timestamps are
precise to '%1' digit(s) in the fractional second while the re-
mote database timestamps are precise to '%2' digit(s)
Resolve the timestamp precision mismatch by setting the
SQL Anywhere DEFAULT_TIMESTAMP_INCREMENT option
on the remote database to '%1' and TRUNCATE_TIME-
STAMP_VALUES to 'On'. UltraLite remotes must set the
TIMESTAMP_INCREMENT option to '%2'
The remote database is not capable of matching the time-
stamp precision of the consolidated database. Your applica-
tion, schema, and scripts must contain logic that copes with
the precision mismatch
The timestamp precision mismatch may affect upload con-
flict detection. Use the -zp option to cause the synchroniza-
tion server to use the lowest timestamp precision for conflict
detection purposes
The remote and consolidated databases have different time-
stamp precisions, and a timestamp value with a precision
higher than the lower-precision side was used for conflict de-
tection purposes. Consider using the -zp option
Publication '%1' is not referenced by any table
The upload will be rolled back and the synchronization
aborted. The next time this remote synchronizes, it will ask
what happened to the previous upload
Unable to open the file to store the client synchronization
logs. The filename is '%1'
An error occurred reading the remote client's synchroniza-
tion log
Unable to write to the local file that contains remote syn-
chronization logs

Error code
Message text
The remote client's synchronization log ended prematurely,

#### 1.4.2.1 %1

%1
Error code
Parameter 1
A message from the ODBC driver.
Probable cause
The synchronization server made a successful ODBC call, but the ODBC driver displayed a warning message.
Avoiding this message depends on the specific warning.

#### 1.4.2.2 '%1' row(s) were ignored in uploading data into table '%2'

Error code
Parameter 1
The total number of ignored rows.
Parameter 2
Table name.
Probable cause
The synchronization server counts all the upload rows that were not applied to the consolidated database
as ignored rows. This can happen if there are upload inserts/updates/deletes from the client, but there is no

upload_insert/upload_update/upload_delete script for the listed table in the consolidated database or errors
occurred during uploading data into this table, but the handle_error/handle_odbc_error returned 1000.

#### 1.4.2.3 <OE>: '%1'

Error code
Parameter 1
The warning.
Probable cause
The integrate outbound enabler had a warning.

#### 1.4.2.4 '%1'

'%1'
Error code
Parameter 1
A warning message.
Probable cause
Warning messages generated by .Net CLR.

#### 1.4.2.5 '%1' might not be a local address

Error code
Parameter 1
The specified host
Probable cause
The synchronization server could not verify that a requested host uses a local IP address. This warning may be
ignored if the host parameter specifies a local, virtual IP address.

#### 1.4.2.6 A passthrough script failed at the remote client, run_order: '%1', script_id: '%2', error_code: '%3', error_text: ' '%4''

Error code
Parameter 1
The run_order of the failed passthrough script.
Parameter 2
The script_id of the failed passthrough script.
Parameter 3
The error_code of the failed passthrough script.
Parameter 4
The error_text of the failed passthrough script.
Probable cause
Examine the error code and text and create a repair action for this script.

#### 1.4.2.7 An error occurred reading the remote client's synchronization log

Error code
Probable cause
The synchronization server was unable to get the remote error log from the client. To avoid this warning, please
do not kill the client when it is running and also make sure the network connection is okay.

#### 1.4.2.8 Client network protocol version is too new

Error code
Probable cause
The synchronization server can not process this request because the server is too new. The client may be able
to continue using an older network protocol. If further requests fail, please update your server.

#### 1.4.2.9 Client network protocol version is too old

Error code

Probable cause
The synchronization server can not process this request because the client is too old. Please update your
client.

#### 1.4.2.10 Client synchronization logs will be shown in the synchronization server message log file or the synchronization server messages window

Error code
Probable cause
If an error occurs on the client side during synchronization, the client may send its output file to the server and
the server will store this output file to a file specified using the server command line option -e or -et. However,
if the synchronization server could not open this file for writing, it will show this warning message and will
write the remote log into its message log file or messages window. To avoid this warning, please make sure the
synchronization server has the privilege to write the file.

#### 1.4.2.11 Connection ID '%1' is currently blocked by connection ID ' '%2'' for '%3' seconds on '%4'

connection ID ' '%2'' for '%3' seconds on '%4'
Error code
Parameter 1
A synchronization server database connection ID.
Parameter 2
Another database connection ID.
Parameter 3
Time in seconds.
Parameter 4
Table name or database operation that is currently blocked.

Probable cause
The synchronization server detects database operations that take longer than a given time and reports the
database connection ID that is blocking the synchronization server connections.

#### 1.4.2.12 Either '%1' does not exist or it does not contain any recorded protocol files (files with extension mlr)

recorded protocol files (files with extension mlr)
Error code
Parameter 1
The directory given with the rrp option.
Probable cause
Either use the '-rrp' option with a directory that contains recorded protocol files (files with extension mlr) or do
not use the -rrp option.

#### 1.4.2.13 Error detected during multi-row operation, performing rollback before retrying in single row mode

Error code
Probable cause
Errors were detected when the synchronization server applied the upload stream using multi-row mode. It will
roll back the upload stream and retry the upload transaction in single-row mode.

#### 1.4.2.14 Expecting at most '%1' parameter(s) in cursor, but found '%2'

found '%2'
Error code
Parameter 1
The maximum number of parameter(s) expected.
Parameter 2
The number of parameter(s) found.
Probable cause
There is a maximum number of parameters for every cursor script in the synchronization server. If the number
of parameters for the given cursor script is larger than the maximum number of parameters, the server will
show this warning.

#### 1.4.2.15 For table '%1', the number of entries in the ml_column table is greater than the number of columns in the remote table

Error code
Parameter 1
Table name.
Probable cause
This warning tells you that you have extra column entries in the ml_column table for the given table. This is only
a problem if (i) your synchronization scripts reference the column names via named parameters, and (ii) they
reference a column name whose index is greater than the number of columns in the table. In this case, an error
will be issued after this warning.

#### 1.4.2.16 Generated too many Profiler phases

Error code
Probable cause
The synchronization server generated too many Profiler phases. This indicates a bug in the synchronization
server. Pease contact tech support.

#### 1.4.2.17 Initial cache size is smaller than the minimum cache size. Increasing initial size to '%1' bytes

size. Increasing initial size to '%1' bytes
Error code
Parameter 1
The new initial cache size.
Probable cause
The -cinit option value is smaller than the -cmin option value.

#### 1.4.2.18 Initial cache size is too small. Increasing from '%1' to '%2' bytes

'%2' bytes
Error code
Parameter 1
The given cache size.
Parameter 2
The new initial cache size.

Probable cause
The -cinit option value is too small.

#### 1.4.2.19 Initial number of concurrent database worker threads greater than maximum specified. Decreasing initial number from '%1' to '%2'

Error code
Parameter 1
The given or default number of concurrent database worker
threads.
Parameter 2
The new number of concurrent database worker threads.
Probable cause
The -w option value is smaller than the -wm option value.

#### 1.4.2.20 Invalid log verbosity options: '%1'

Error code
Parameter 1
Verbosity options.

Probable cause
The log verbosity options in the ml_property table are not valid. The valid verbosity options can be found from
the synchronization server usage window.

#### 1.4.2.21 Loading a client Java VM

Error code
Probable cause
The server could not find a server Java VM, so it loaded a client VM instead. Client VMs have significantly worse
performance than server VMs. If you are intentionally using a client VM and want to suppress this warning, add
-client to the -sl java options.

#### 1.4.2.22 Maximum cache size is smaller than the initial cache size. Increasing maximum size to '%1' bytes

size. Increasing maximum size to '%1' bytes
Error code
Parameter 1
The new maximum cache size.
Probable cause
The -cmax option value is smaller than the -cinit option value.

#### 1.4.2.23 Maximum cache size is too small. Increasing from '%1' to '%2' bytes

'%1' to '%2' bytes
Error code
Parameter 1
The given cache size.
Parameter 2
The new maximum cache size.
Probable cause
The -cmax option value is too small.

#### 1.4.2.24 Maximum number of database connections set to '%1' (must be at least the number of database worker threads)

Error code
Parameter 1
Maximum number of connections.
Probable cause
The synchronization server makes one connection for each database worker thread. Therefore, the maximum
number of connections must be at least the number of database worker threads.

#### 1.4.2.25 Minimum cache size is too small. Increasing from '%1' to '%2' bytes

'%1' to '%2' bytes
Error code
Parameter 1
The given cache size.
Parameter 2
The new minimum cache size.
Probable cause
The -cmin option value is too small.

#### 1.4.2.26 No handle_error script is defined. The default action code (%1) will decide the error behavior

code (%1) will decide the error behavior
Error code
Parameter 1
The error action code.
Probable cause
An error occurred in the synchronization server during synchronization. However there is no handle_error
script defined in the consolidated database. The server will take the default action for the error. To avoid this
warning, please define a handle_error script.

#### 1.4.2.27 No RTNotifier was started. Therefore, no remote tasks will be received by any agents

tasks will be received by any agents
Error code
Probable cause
No RTNotifier was started. Therefore, no remote tasks will be received by any agents. Make sure an RTNotifier
is in the ml_property table.

#### 1.4.2.28 ODBC function '%1' is not supported by the driver

Error code
Parameter 1
ODBC function name.
Probable cause
This function is required for the synchronization server to operate. Update your ODBC driver.

#### 1.4.2.29 ODBC Isolation level (%1) is not supported

Error code
Parameter 1
The required isolation level.
Probable cause
The required isolation level is not supported by the consolidated database. Determine if another level is
suitable.

#### 1.4.2.30 ODBC statement option '%1' has changed from '%2' ( '%3') to '%4' ( '%5')

( '%3') to '%4' ( '%5')
Error code
Parameter 1
Name of the ODBC statement option.
Parameter 2
Original name of the setting.
Parameter 3
Original value of the setting.
Parameter 4
New name of the setting.
Parameter 5
New value of the setting.
Probable cause
The option has been changed by the ODBC driver. This may not be desirable.

#### 1.4.2.31 ODBC statement option '%1' has changed from '%2' to '%3'

to '%3'
Error code
Parameter 1
Name of the ODBC statement option.
Parameter 2
Original value of the setting.
Parameter 3
New value of the setting.
Probable cause
The option has been changed by the ODBC driver. This may not be desirable.

#### 1.4.2.32 ODBC tracing is currently enabled. This will significantly degrade performance

significantly degrade performance
Error code
Probable cause
The synchronization server performance will be degraded when ODBC tracing is enabled. This warning will not
be displayed when tracing has been enabled as a server option (-t or -tt).

#### 1.4.2.33 Performance warning -- database connections have been recycled at a rate of '%1'%

been recycled at a rate of '%1'%
Error code
Parameter 1
Connection recycle rate.
Probable cause
The synchronization server maintains a pool of connections to the consolidated database to improve
performance. Each pooled connection is associated with a script version. If the pool is full and there are
no connection available for the requested version, then a pooled connection will be reconnected to get the
required version. Please see the -cn switch for more information.

#### 1.4.2.34 Performance warning: Column '%1' in the remote table ' '%2'' has been remapped from ' '%3'' to ' '%4''

Error code
Parameter 1
Column index.
Parameter 2
Table name.
Parameter 3
Remote data type.
Parameter 4
Consolidated data type.
Probable cause
In order to properly complete the synchronization request, the synchronization server has remapped the
column type. This remapping may decrease synchronization performance. See the documentation for
information about data type mapping between consolidated and remote databases.

#### 1.4.2.35 Publication '%1' is not referenced by any table

Error code
Parameter 1
Publication name.
Probable cause
The synchronization synchronization client sends an upload stream that includes upload data as well as upload
tables, publications, and so on. All these publications must be referenced by at least one of the upload tables. If
there are any publications that are not referenced by any upload table, the server will show this warning. If this
happens, please contact technical support.

#### 1.4.2.37 Retrying the begin_connection transaction after deadlock in the consolidated database

deadlock in the consolidated database
Error code
Probable cause
Deadlock occurred in the transaction of begin_transaction in the consolidated database. To avoid this warning,
please rewrite your begin_connection script to avoid deadlocks.

#### 1.4.2.38 Retrying the begin_synchronization transaction after deadlock in the consolidated database

after deadlock in the consolidated database
Error code
Probable cause
Deadlock occurred when the synchronization server executed the begin_synchronization script. It will roll back
the transaction and retry this script.

#### 1.4.2.39 Retrying the end_synchronization transaction after deadlock in the consolidated database

deadlock in the consolidated database
Error code
Probable cause
Deadlock occurred when the synchronization server executed the end_synchronization script. It will roll back
the transaction and retry this script.

#### 1.4.2.40 Retrying the upload after conflicting update in the consolidated database

consolidated database
Error code
Probable cause
A conflicting update occurred when the synchronization server was applying the upload stream with snapshot
isolation. It will roll back the transaction and retry this script. To avoid this warning, please commit all the open
transactions in all other applications that are connecting to this consolidated database.

#### 1.4.2.41 Retrying the upload after deadlock in the consolidated database

consolidated database
Error code
Probable cause
Deadlock occurred when the synchronization server was applying the upload stream. It will roll back the
transaction and retry this script. Avoid this warning by removing contention between synchronization scripts.
There can also be contention between synchronization scripts and other applications.

#### 1.4.2.42 RETURN structure contained an warning

Error code
Probable cause
details follow.

#### 1.4.2.43 Spatial library warning: '%1'

Error code
Parameter 1
The actual warning code generated by the spatial library.
Probable cause
Please look at the actual spatial library warning message to find the cause of the warning.

#### 1.4.2.44 Synchronization request from client '%1' was rejected

rejected
Error code
Parameter 1
Remote ID.
Probable cause
The synchronization server has rejected the synchronization request issued by the given client due to the
number of concurrent synchronization requests being greater than the maximum number of concurrent active
synchronizations allowed (specified by -sm).

#### 1.4.2.45 Synchronization server table '%1' is damaged

Error code
Parameter 1
The synchronization server system table name.
Probable cause
The synchronization server was unable to get information from the listed table. Please make sure the table
does exist and the database server is running.

#### 1.4.2.46 Table '%1' has at least one timestamp column. Due to a timestamp precision mismatch, downloaded timestamps can lose precision, resulting in inconsistent data

Error code
Parameter 1
Table name.
Probable cause
A remote database is synchronizing a table with at least one timestamp column while the timestamp
precision of the remote database is lower than that of the consolidated database. The downloaded value
will lose precision after being stored into the remote database. This situation creates a virtual difference in
the synchronized timestamp data between the consolidated database and the remote database. To avoid
this data inconsistency problem, you should align timestamp precision across all databases involved in your
synchronization system.

#### 1.4.2.47 Table '%1' has at least one timestamp column. Due to a timestamp precision mismatch, uploaded timestamps can lose precision, defeating download filtering

Error code
Parameter 1
Table name.

Probable cause
A remote database is synchronizing a table with at least one timestamp column while the timestamp precision
on the remote database is higher than that of the consolidated database. The uploaded value will lose precision
after being stored in the consolidated database. The synchronization server compares upload rows and
download rows to filter away redundant download rows. The loss of precision may create a virtual difference
that defeats the download filtering. This situation can affect download performance. To avoid this performance
penalty, you should align timestamp precision across all databases involved in your synchronization system.

#### 1.4.2.48 The client has provided '%1' authentication parameter(s), but no authenticate_parameters script exists

Error code
Parameter 1
The number of authentication parameter(s).
Probable cause
The synchronization client sent the listed number of authentication parameters. However, there is no
authentication parameter script defined in the consolidated database. To avoid this warning, please define
the authenticate_parameters script in the consolidated database or do not send authentication parameter(s)
from the client.

#### 1.4.2.49 The command line option '%1' is ignored

Error code
Parameter 1
Command line option.
Probable cause
The command line option is ignored by the synchronization server. Please make sure if the command line
option can be applied.

#### 1.4.2.52 The current SQL statement has been running for too long in the consolidated database. The connection ID is '%1'

Error code
Probable cause
The synchronization server has detected the SQL statement has been running for too long and the
synchronization may be stuck. Please check the consolidated database server to see if the connection is
still healthy

#### 1.4.2.53 The earliest transaction has been running for '%1' seconds

seconds
Error code
Parameter 1
The oldest transaction running time in seconds.
Probable cause
With snapshot isolation for download, an open transaction would prevent the synchronization server to
advance the next last download time to the current timestamp and then it will generate lots redundant rows in
the next download. To avoid this problem, try to reduce the transaction open time.

#### 1.4.2.54 The following option has been deprecated: '%1'

Error code
Parameter 1
The deprecated option.
Probable cause
The option specified has been deprecated. This option will be removed in a future version. Please consult the
documentation to remove the usage of this option.

#### 1.4.2.56 The remote client's synchronization log ended prematurely, and was probably truncated

prematurely, and was probably truncated
Error code
Probable cause
The synchronization server was not able to completely get the remote error log from the client, so the remote
error log may have been truncated. To avoid this warning, please do not kill the client when it is running and
also make sure the network connection is okay.

#### 1.4.2.57 The remote database is not capable of matching the timestamp precision of the consolidated database. Your application, schema, and scripts must contain logic that copes with the precision mismatch

Error code
Probable cause
Timestamp precision of the consolidated database is higher than attainable by the remote database. If
possible you may lower the timestamp precision on the consolidated database to avoid inconsistent timestamp
data between the remote and the consolidated database. Otherwise, you may need to avoid synchronizing
timestamps in your synchronization schema; or you may need to have conflict detection scripts aware of the
virtual difference; or you may need to use the -zp command line option to tolerate the conflict. Your application
should also be able to deal with the inconsistency.

#### 1.4.2.58 The synchronization server has suspended network reads on this synchronization due to a limit on concurrent synchronizations

Error code

Probable cause
The synchronization server will suspend any new synchronization connections when the maximum number of
concurrent synchronizations has been exceeded. This limit is set using the -sm option.

#### 1.4.2.59 The synchronization server has swapped data pages to disk out:%1 in: '%2' concurrently used pages: '%3'

to disk out:%1 in: '%2' concurrently used pages:
'%3'
Error code
Parameter 1
Total count of pages swapped out.
Parameter 2
Total count of pages swapped in.
Parameter 3
Count of concurrently used disk pages.
Probable cause
The synchronization server may write data out to disk that cannot fit in its cache memory. The server prints
warning message to the log when this happens so that the user may determine if this is a performance
problem. The -cm option controls the server cache memory size.

#### 1.4.2.60 The synchronization server is currently running with -zf that will reduce its performance

-zf that will reduce its performance
Error code
Probable cause
The synchronization server checks for script changes at the beginning of each synchronization, when it is
started with -zf. This switch is intended to be used in a development environment where scripts may be
changed after the synchronization server is started.

#### 1.4.2.61 The synchronization server restarted network reads on this synchronization due to a drop in the number of concurrent synchronizations

Error code
Probable cause
The synchronization server will restart reads on a synchronization that was stopped due to a limit on
concurrent synchronizations. This limit is set using the -sm option.

#### 1.4.2.62 The synchronization server will record all synchronizations

synchronizations
Error code
Probable cause
The synchronization server will record all synchronizations.

#### 1.4.2.63 The timestamp precision mismatch may affect upload conflict detection. Use the -zp option to cause the synchronization server to use the lowest timestamp precision for conflict detection purposes

Error code
Probable cause
Timestamp precision mismatch between the remote database and the consolidated database has been
detected. The mismatch can affect upload conflict detection as the synchronization server will compare
the rows for the two databases. If you decided not to align precision on the databases involved in your
synchronization system, you may use the -zp swith to start the synchronization server. If this command line
option is used, the synchronization server will tolerate conflict caused by timestamp differences smaller than
the lower precision among the two databases.

#### 1.4.2.64 The upload will be committed and the synchronization aborted. The next time this remote synchronizes, it will ask what happened to the previous upload

Error code
Probable cause
This is an internal warning that is primarily used for testing, but may also be seen as part of technical support
engagements.

#### 1.4.2.65 The upload will be rolled back and the synchronization aborted. The next time this remote synchronizes, it will ask what happened to the previous upload

Error code
Probable cause
This is an internal warning that is primarily used for testing, but may also be seen as part of technical support
engagements.

#### 1.4.2.66 The Z/M values were dropped from the upload spatial data

spatial data
Error code
Probable cause
The synchronization server has dropped the Z/M values from the upload spatial data, because the
consolidated database does not accept them in WKB.

#### 1.4.2.67 There are too many remote tasks to send to agent, '%1', at one time. The maximum number of remote tasks an agent can receive at one time is 255

Error code
Parameter 1
The agent name.
Probable cause
There are too many remote tasks to send to an agent at one time. The maximum number of remote tasks an
agent can receive at one time is 255.

#### 1.4.2.68 This connection will be abandoned due to a first read error

read error
Error code
Probable cause
A connection was made to the socket on which the synchronization server was listening, but the first attempt
to read data from the socket resulted in a failure.

#### 1.4.2.69 Unable to access ASE table 'master..systransactions'. The synchronization server will use system time for download

Error code
Probable cause
The synchronization server needs to access some tables in the master database to get transaction starting
time during synchronization. Please make sure the userid used to connect the synchronization server to the
Microsoft SQL Server has permission to access the 'master..systransactions' table.

#### 1.4.2.70 Unable to access Microsoft SQL Server virtual table 'sys.dm_tran_active_transactions'. The synchronization server will not use snapshot isolation

Error code
Probable cause
The synchronization server needs to access some virtual tables to use snapshot isolation during
synchronization. Please make sure the userid used to connect the synchronization server to the Microsoft
SQL Server has permission to access the 'sys.dm_tran_active_transactions' table.

#### 1.4.2.71 Unable to access ORACLE table 'gv$transaction'. Access is needed to ensure no data is missed if using timestamp-based downloads

Error code
Probable cause
The timestamp generated to filter the download may be incorrect due to ORACLE's non-blocking read feature.
Please make sure the userid used to connect the synchronization server to the ORACLE database has
permission to access the gv$transaction table.

#### 1.4.2.72 Unable to access SAP HANA Server system view 'SYS.M_TRANSACTIONS'. The synchronization server will not use snapshot isolation

Error code
Probable cause
The synchronization server needs to access some system tables or views to use snapshot isolation during
synchronization. Please make sure the userid used to connect the synchronization server to the SAP HANA
Server has permission to access the 'SYS.M_TRANSACTIONS' view.

#### 1.4.2.73 Unable to authenticate the user '%1' against LDAP server

server
Error code
Parameter 1
The user name.

Probable cause
The synchronization server was not able to authenticate the user against the LDAP servers. Please make sure
the LDAP servers are up running or the user authentication policy is configurated properly.

#### 1.4.2.74 Unable to determine current timestamp from consolidated database

consolidated database
Error code
Probable cause
The synchronization server was not able to get the current timestamp from the consolidated database. Please
make sure the database server is running and the network connection is okay.

#### 1.4.2.75 Unable to fetch the download timestamp from the consolidated database

consolidated database
Error code
Probable cause
The synchronization server was unable to get the download timestamp from the consolidated database. Please
make sure the database server is running and the network connection is okay.

#### 1.4.2.76 Unable to fetch the UTC time from the database server

server
Error code
Probable cause
The synchronization server uses the database server UTC time to order sync requests. However, it was not able
to fetch the UTC time from the database server within less than 1 second, so it will use the UTC time from local
OS.

#### 1.4.2.77 Unable to lock the remote ID '%1', will try again

Error code
Parameter 1
Remote ID.
Probable cause
The synchronization server needs to lock the remote ID in order to detect concurrent synchronizations with the
same remote ID. The server was not able to lock the given remote ID, but it will try to again.

#### 1.4.2.78 Unable to open the file to store the client synchronization logs. The filename is '%1'

synchronization logs. The filename is '%1'
Error code
Parameter 1
File name.
Probable cause
The synchronization server was unable to open the local remote log file given by option -e or -et. Please make
sure the file name and path are valid and the file is writable.

#### 1.4.2.79 Unable to record the schema

Error code
Probable cause
The synchronization server was unable to record the schema for the synchronization; which implies this
synchronization cannot be replayed with different data.

#### 1.4.2.80 Unable to retrieve the column data types for table '%1' from the consolidated database

'%1' from the consolidated database
Error code
Parameter 1
Table name.
Probable cause
The synchronization server was not able to retrieve the column data types for the given table from the
consolidated database using SQLDescribeParam. Therefore the server will assume that the data types for this
table in the consolidated database are equivalent to those defined in the remote database.

#### 1.4.2.81 Unable to write to the local file that contains remote synchronization logs

synchronization logs
Error code
Probable cause
The synchronization server was unable to write the remote error log to a local file. To avoid this warning, please
make sure the file name and path given by option -e or -et are valid and the file is writable.

#### 1.4.2.82 Unknown users will be added automatically (when there is no authenticate_user script)

there is no authenticate_user script)
Error code
Probable cause
This is a friendly warning message when the synchronization server command line option, -zu+ is used.

#### 1.4.2.83 Unrecognized ODBC driver '%1'. The functionality and quality of ODBC drivers varies greatly. This driver may lack functionality required for successful synchronizations. Use at your own risk

Error code
Parameter 1
The file name of an ODBC driver.
Probable cause
The synchronization server is very well tested with a set of ODBC drivers. However, the ODBC driver you
are currently using is not on the list. To avoid this warning, please run the synchronization server with a
recommended ODBC driver.

#### 1.4.2.84 Windows Firewall is enabled, and the synchronization server is not in the exception list. Clients on remote machines may not be able to connect to this server

Error code
Probable cause
The Windows Firewall is enabled and either the synchronization server is not in the exception list or it is in the
exception list but disabled. This configuration will prevent remote clients from connecting to the server.

### 1.5 MobiLink Communication Error Messages

The error messages are written to the MobiLink server message log and the MobiLink SQL Anywhere
client message log. The error codes are returned to UltraLite clients in the ss_error_code member of the
stream_error parameter.
Each error has a numeric error code. Both error and warning codes are positive. Warning codes are greater
than 10000.
Many of the error messages contain the characters %1, %2, and so on. These characters are replaced by the
parameters to the error message.

#### 1.5.1 MobiLink Communication Error Messages Sorted by Error Code

Error Code
Error code
Message text
No error
Invalid parameter '%1'
Parameter value '%1' is not an unsigned integer
Parameter value '%1' is not an unsigned integer value or
range. A range has the form NNN-NNN
Parameter value '%1' is not a valid boolean value. The value
must be 0 or 1
Parameter value '%1' is not a valid hexadecimal value
Unable to allocate sufficient memory
Unable to parse the parameter string '%1'
Unable to read %1 bytes
Unable to write %1 bytes
An end write failed
An end read failed
Feature not implemented
The operation would cause blocking
Unable to generate a random number
Unable to initialize the random number generator
Unable to seed the random number generator
Unable to create a random number object

Error code
Message text

#### 1.5.2 MobiLink Communication Error Messages Listed by Message Text

Message Text

#### 1.5.2.1 %1

%1
Error code
Error constant
SACI_ERROR
Parameter 1
The description of the SACI error.
Probable cause
The SACI encryption/decryption library is reporting an error. Refer to the provider of the SACI encryption/
decryption library to resolve the problem.

#### 1.5.2.2 A certificate has expired

Error code
Error constant
SECURE_CERTIFICATE_EXPIRED
Probable cause
A certificate in the certificate chain has expired. Obtain a new certificate with a later expiry date and retry the
operation.

#### 1.5.2.3 A request by a proxy server to do Basic HTTP authentication was rejected

Error code
Error constant
HTTP_BASIC_AUTH_DISALLOWED
Probable cause
A request by a proxy server to do Basic HTTP authentication was rejected to avoid sending plaintext
credentials over the wire unencrypted. To allow this, use the allow_unencrypted_basic_proxy_auth option.

#### 1.5.2.4 A secure stream has FIPS explicitly disabled, but the -fips option is in effect

Error code
Error constant
INCONSISTENT_FIPS
Probable cause
Use of the -fips switch on the synchronization server command line requires that all secure streams be
FIPS-compliant. If a secure stream is not configured with the fips option, it will automatically be FIPS-compliant
(for example, fips=y). Either remove the fips option from the secure stream, or enable it with fips=y.

#### 1.5.2.5 A userid and password are required for HTTP authentication

Error code

Error constant
HTTP_AUTHENTICATION_REQUIRED
Probable cause
An HTTP server or gateway requested HTTP authentication. Please supply a userid and password using the
HTTP synchronization parameters http_userid and http_password.

#### 1.5.2.6 A userid and password are required for HTTP proxy authentication

Error code
Error constant
HTTP_PROXY_AUTHENTICATION_REQUIRED
Probable cause
An HTTP proxy requested HTTP authentication. Please supply a userid and password using the HTTP
synchronization parameters http_proxy_userid and http_proxy_password.

#### 1.5.2.7 ActiveSync provider has not been installed

Error code
Error constant
ACTSYNC_NOT_INSTALLED

Probable cause
The Microsoft ActiveSync provider has not been installed. Run mlasinst to install it (see documentation for
details).

#### 1.5.2.8 ActiveSync synchronization cannot be initiated by an application

Error code
Error constant
ACTSYNC_NO_PORT
Probable cause
Microsoft ActiveSync synchronization can only be initiated by Microsoft ActiveSync itself, either by placing
the device in its cradle or by selecting "Synchronize" from the Microsoft ActiveSync Manager. To initiate a
synchronization from an application, use the TCP/IP socket synchronization stream.

#### 1.5.2.9 An end read failed

Error code
Error constant
END_READ
Probable cause
Unable to finish a sequence of reads from the network. See also: READ

#### 1.5.2.10 An end write failed

Error code
Error constant
END_WRITE
Probable cause
Unable to finish a sequence of writes to the network. See also: WRITE

#### 1.5.2.11 An error occurred during shutdown

Error code
Error constant
SHUTTING_DOWN
Probable cause
The synchronization server encountered an error in the network layer during shutdown. Perhaps some network
operations pending at the time of shutdown were affected.

#### 1.5.2.12 An error occurred while writing to %1

Error code
Error constant
FILE_WRITE
Parameter 1
The name of the file.
Probable cause
An error occurred while trying to write to the specified file.

#### 1.5.2.13 An error status was returned: '%1'

Error code
Error constant
HTTP_BAD_STATUS_CODE
Parameter 1
The status line read.
Probable cause
Examine the status line to determine the cause of the failure. The parameter of the error is a standard HTTP
status code.

#### 1.5.2.14 An unexpected character was read while parsing the chunk length. %1

chunk length. %1
Error code
Error constant
HTTP_CHUNK_LEN_BAD_CHARACTER
Parameter 1
The unexpected character.
Probable cause
Try using a fixed length HTTP body.

#### 1.5.2.15 Automatic dialup is not supported on this machine

Error code
Error constant
DUN_NOT_SUPPORTED
Probable cause
An attempt to dialup has failed due to insufficient system support. On PocketPC you must use cellcore.dll and
on Windows you must use wininet.dll from IE 4.0 or above. Dialup is not supported on other platforms.

#### 1.5.2.16 Client id is not available for use in HTTP header

Error code
Error constant
HTTP_CLIENT_ID_NOT_SET
Probable cause
The client id was not passed into the HTTP client code. Contact technical support for a fix.

#### 1.5.2.17 Connection attempt timed out

Error code
Error constant
CONNECT_TIMEOUT
Probable cause
The connection attempt timed out. Either the server is not running on the indicated host and port or the
timeout value needs to increased to allow more time to connect.

#### 1.5.2.18 Could not open %1 for write

Error code
Error constant
COULD_NOT_OPEN_FILE_FOR_WRITE
Parameter 1
The name of the file.

Probable cause
The specified file could not be opened for write. Make sure that this is the correct file and that no other
application is using it.

#### 1.5.2.19 Error parsing HTTP header: %1

Error code
Error constant
HTTP_HEADER_PARSE_ERROR
Probable cause
An error occurred while trying to parse an HTTP header. The header may be malformed.

#### 1.5.2.20 Error reading from the trusted certificate file '%1'

Error code
Error constant
SECURE_TRUSTED_CERTIFICATE_READ
Parameter 1
The trusted certificate file name.
Probable cause
The secure network layer was unable to read the trusted certificate file. Check the following: 1) The certificate
file name was properly specified. 2) The certificate file exists. 3) The certificate file contains one or more
certificates. 4) The certificate file contains the correct certificate(s). 5) The program attempting to open the
certificate file has sufficient privileges to see the file. This only applies to operating systems having user and/or
file permissions.

#### 1.5.2.21 Expected data from remote but current request is not a POST

not a POST
Error code
Error constant
HTTP_EXPECTED_POST
Probable cause
The proxy you are using may not be compatible with the synchronization server. Please check your
configuration.

#### 1.5.2.22 Extra data found in the HTTP body: %1

Error code
Error constant
HTTP_EXTRA_DATA_END_READ
Parameter 1
First few characters in the extra data.
Probable cause
Extra data has been introduced into the HTTP body. This may have been added by a proxy agent. Try
eliminating the proxy.

#### 1.5.2.23 Failed dialing to %1

Error code
Error constant
DUN_DIAL_FAILED
Probable cause
Automatic dialup failed to establish connection to the specified dial up network.

#### 1.5.2.24 Failed reading an incomplete HTTP request

Error code
Error constant
HTTP_FAILED_READING_HEADERS
Probable cause
The synchronization server received an incomplete set of HTTP headers.

#### 1.5.2.25 Failed to import a certificate from the system certificate store

certificate store
Error code
Error constant
SECURE_IMPORT_CERT_FROM_SYSTEM_STORE
Probable cause
Failed to import a certificate from the system certificate store.

#### 1.5.2.26 Failed to load library %1

Error code
Error constant
LOAD_LIBRARY_FAILURE
Probable cause
The indicated library could not be found in the path. If you are trying to use TLS encryption for synchronization,
make sure you have acquired the proper license.

#### 1.5.2.27 Failed to open system certificate store

Error code
Error constant
SECURE_OPEN_SYSTEM_CERT_STORE
Probable cause
An attempt to open a system certificate store failed.

#### 1.5.2.28 Failed to read CR LF

Error code
Error constant
HTTP_CRLF_MISSING
Probable cause
The proxy you are using may not be compatible with the synchronization server. Please check your
configuration.

#### 1.5.2.29 Failed to read encoded chunk length

Error code
Error constant
HTTP_CHUNK_LEN_ENCODED_MISSING
Probable cause
Try using a fixed length HTTP body.

#### 1.5.2.30 Failed to read encoded CR LF

Error code
Error constant
HTTP_CRLF_ENCODED_MISSING
Probable cause
The proxy you are using may not be compatible with the synchronization server. Please check your
configuration.

#### 1.5.2.31 Feature not implemented

Error code
Error constant
NOT_IMPLEMENTED
Probable cause
An unimplemented internal feature was requested. Please contact technical support.

#### 1.5.2.32 Function %1 could not be found

Error code
Error constant
LIBRARY_ENTRY_POINT_NOT_FOUND
Probable cause
The indicated library entry point could not be found.

#### 1.5.2.33 Handshake error

Error code
Error constant
SECURE_HANDSHAKE
Probable cause
The secure handshake failed. Check the following: 1) On the client, the correct host machine and port number
were specified. 2) On the server, the correct port number was specified. 3) The correct trusted certificate was
specified on the client and the correct identity file was specified on the server.

#### 1.5.2.34 Hostname '%1!s!' check against server identity failed

failed
Error code
Error constant
TLS_HOSTNAME_CHECK_FAILED
Probable cause
The hostname check against the valid names listed in the server's identity certificate failed. If the
server identity is not expected to match the hostname, a custom check can be done by specifying the
certificate_name, certificate_company, or certificate_unit options. Alternately, the check can be skipped
entirely by setting the skip_certificate_name_check option.

#### 1.5.2.35 HTTP Authentication failed

Error code
Error constant
HTTP_AUTHENTICATION_FAILED
Probable cause
The supplied userid and password were rejected. Check that they were entered correctly. If so, contact your
systems administrator to ensure you have proper access.

#### 1.5.2.36 HTTP Proxy Authentication failed

Error code
Error constant
HTTP_PROXY_AUTHENTICATION_FAILED
Probable cause
The supplied userid and password were rejected by the proxy server. Check that they were entered correctly. If
so, contact your systems administrator to ensure you have proper access.

#### 1.5.2.37 HTTP server authentication failed

Error code
Error constant
HTTP_SERVER_AUTH_FAILED
Probable cause
The Authentication-Info header sent from the server contained an incorrect value, causing authentication to
fail. Make sure that you are connecting to a legitimate HTTP server.

#### 1.5.2.38 Incorrect password for private key

Error code
Error constant
BAD_PRIVATE_KEY_PASSWORD
Probable cause
The provided password for the encrypted private key is incorrect.

#### 1.5.2.39 Internal error (%1)

Error code
Error constant
INTERNAL
Parameter 1
The internal error code.
Probable cause
An internal error has occurred in the network layer. Please contact technical support.

#### 1.5.2.40 Internal error: %1 returned %2

Error code
Error constant
INTERNAL_API
Parameter 1
The name of the internal API.
Parameter 2
The internal error code.
Probable cause
An internal error has occurred in the network layer. Please contact technical support.

#### 1.5.2.41 Internal protocol not loaded: %1

Error code
Error constant
INTERNAL_PROTOCOL_NOT_LOADED

Probable cause
A synchronization protocol could not be loaded. If you are using UltraLite, make sure you have called the proper
ULEnable method.

#### 1.5.2.42 Invalid compression type: %1

Error code
Error constant
INVALID_COMPRESSION_TYPE
Parameter 1
The invalid compression type
Probable cause
The specified compression type was not recognized.

#### 1.5.2.43 Invalid destination path %1 for the downloaded file

Error code
Error constant
INVALID_LOCAL_PATH
Parameter 1
The local path.
Probable cause
The destination path for the downloaded file is invalid. Consult the documentation for details.

#### 1.5.2.44 Invalid e2ee_type '%1'

Error code
Error constant
E2EE_INVALID_TYPE
Parameter 1
The invalid end-to-end private key type
Probable cause
An invalid e2ee_type was specified. Please specify a valid value.

#### 1.5.2.45 Invalid HTTP character

Error code
Error constant
HTTP_INVALID_CHARACTER
Probable cause
An unexpected character was read in an HTTP header. The header may be malformed or the other side may
not be sending HTTP at all.

#### 1.5.2.46 Invalid HTTP session ID received from the synchronization server

synchronization server
Error code
Error constant
HTTP_INVALID_SESSION_ID
Probable cause
The client received an ml-session-id value from the synchronization server that doesn't match the one it
generated. It is possible this could occur if an intermediary erroneously sent a cached response from an earlier
session or from a session involving a different client.

#### 1.5.2.47 Invalid liveness timeout value %1. The value must be between zero and 65535

between zero and 65535
Error code
Error constant
SOCKET_LIVENESS_OUT_OF_RANGE
Parameter 1
The liveness timeout value.
Probable cause
An invalid liveness timeout value was specified. The liveness timeout value must be an integer between zero
and 65535.

#### 1.5.2.48 Invalid or corrupt network interface library: %1

Error code
Error constant
INVALID_NETWORK_LIBRARY

Parameter 1
The network library path.
Probable cause
The given network interface DLL or shared object could not be loaded, possibly because it is invalid or corrupt.

#### 1.5.2.49 Invalid parameter '%1'

Error code
Error constant
PARAMETER
Parameter 1
The invalid parameter value.
Probable cause
Network parameters are of the form "name=value;[name2=value2[;...]]". This code indicates an invalid
parameter value. Consult the documentation for the corresponding parameter name, and correct the
parameter value.

#### 1.5.2.50 Invalid port number %1. The value must be between zero and 65535

zero and 65535
Error code
Error constant
SOCKET_PORT_OUT_OF_RANGE
Parameter 1
The port number.

Probable cause
An invalid port number was specified. The port number must be an integer between zero and 65535.

#### 1.5.2.51 Invalid root certificate

Error code
Error constant
SECURE_CERTIFICATE_ROOT
Probable cause
The root certificate in the chain is invalid. At the time of publication, this error was defined but not used.

#### 1.5.2.52 Invalid SAP passport: %1

Error code
Error constant
INVALID_SAP_PASSPORT
Parameter 1
The raw passport data received from the client via the SAP-
PASSPORT HTTP header.
Probable cause
The SAP-PASSPORT HTTP header value received from the client could not be interpreted as an SAP passport.
Make sure the client is set up to send a valid SAP passport in the SAP-PASSPORT header.

#### 1.5.2.53 Invalid synchronization protocol: %1

Error code
Error constant
INVALID_SYNC_PROTOCOL
Probable cause
The specified protocol is not a valid synchronization protocol.

#### 1.5.2.54 Malformed session cookie (ML_SESSION_ID) value: %1

%1
Error code
Error constant
HTTP_MALFORMED_SESSION_COOKIE
Parameter 1
The cookie value
Probable cause
The HTTP cookie used to manage the synchronization session is corrupt. Determine where the cookie is being
corrupted. The most likely cause is a client error, or perhaps an HTTP intermediary misbehaving.

#### 1.5.2.55 Mismatched end-to-end encryption keys

Error code
Error constant
E2EE_MISMATCHED_KEYS

Probable cause
The client and server are unable to communicate because the e2ee_public_key used for end-to-end encryption
at the remote does not match the e2ee_private_key at the server.

#### 1.5.2.56 Missing e2ee_private_key

Error code
Error constant
E2EE_MISSING_PRIVATE_KEY
Probable cause
Another end-to-end encryption option was specified, but not the e2ee_private_key option. Either specify
all end-to-end encryption options or remove them all. Required end-to-end encryption options include:
e2ee_private_key, e2ee_private_key_password.

#### 1.5.2.57 Missing e2ee_private_key_password for the e2ee_private_key file '%1'

e2ee_private_key file '%1'
Error code

Error constant
E2EE_MISSING_PRIVATE_KEY_PASSWORD
Parameter 1
The private key file from the e2ee_private_key option.
Probable cause
The e2ee_private_key file cannot be read without an e2ee_private_key_password. Please provide the
e2ee_private_key_password.

#### 1.5.2.58 Missing parameter: %1

Error code
Error constant
MISSING_PARAMETER
Parameter 1
The name of the missing parameter.
Probable cause
The specified parameter was expected but not supplied.

#### 1.5.2.59 ml-session-id changed from %1 to %2

Error code

Error constant
HTTP_SESSION_ID_CHANGED
Parameter 1
This connection's old ml-session-id value
Parameter 2
This connection's new ml-session-id value
Probable cause
The ml-session-id header value for this connection has changed. This is typically caused by an HTTP proxy that
is reusing connections between unrelated syncs. Your proxy must be configured such that each connection
to the proxy results in a new connection to the synchronization server and that these connections are never
reused for new connections to the proxy.

#### 1.5.2.60 Network communications failure: %1

Error code
Error constant
NETWORK_IO
Parameter 1
The failure description.
Probable cause
The network layer reported the given failure.

#### 1.5.2.61 Network interface library version mismatch. Expecting version %1.%2, but found version %3.%4

Expecting version %1.%2, but found version
%3.%4
Error code
Error constant
NETWORK_LIBRARY_VERSION_MISMATCH
Parameter 1
The major version expected.
Parameter 2
The minor version expected.
Parameter 3
The major version found.
Parameter 4
The minor version found.

Probable cause
A network interface DLL or shared object could not be loaded because it is the wrong version.

#### 1.5.2.62 No certificate found in system certificate store

Error code
Error constant
SECURE_NO_CERTS_IN_SYS_STORE
Probable cause
No certificates were found in the system's certificate store.

#### 1.5.2.63 No error

Error code
Error constant
NONE
Probable cause
This code indicates there was no network error.

#### 1.5.2.64 No password was supplied

Error code
Error constant
HTTP_NO_PASSWORD

Probable cause
A userid was supplied for HTTP authentication but no password. Both are required for authentication.

#### 1.5.2.65 No peer certificate validation parameters were provided

provided
Error code
Error constant
SECURE_NO_CERTIFICATE_VALIDATION_PARAMETERS
Probable cause
No peer certificate validation parameters were provided. To ensure the peer is trusted, provide one or more of
the certificate_name, certificate_company, or certificate_unit parameters.

#### 1.5.2.66 No server certificate password was provided

Error code
Error constant
SECURE_NO_SERVER_CERTIFICATE_PASSWORD
Probable cause
No server certificate password was provided. This password is required to decrypt the server's encrypted
private key.

#### 1.5.2.67 No server certificate was provided

Error code
Error constant
SECURE_NO_SERVER_CERTIFICATE
Probable cause
No server certificate was provided. A server certificate is required for secure communications. The file provided
must contain the full chain of certificates for the server as well as its private key.

#### 1.5.2.68 No trusted certificates found in %1

Error code
Error constant
SECURE_CERTIFICATE_COUNT
Probable cause
The given file does not contain a certificate. Check the following: 1) The certificate file name was properly
specified. 2) The certificate file contains one or more certificates. 3) The certificate file contains the correct
certificate(s).

#### 1.5.2.69 No trusted root certificates were provided

Error code
Error constant
SECURE_NO_TRUSTED_ROOTS

Probable cause
No trusted root certificates were provided. At least one trusted root certificate is required for secure
communications.

#### 1.5.2.70 No userid was supplied

Error code
Error constant
HTTP_NO_USERID
Probable cause
A password was supplied for HTTP authentication but no userid. Both are required for authentication.

#### 1.5.2.71 Operation interrupted

Error code
Error constant
INTERRUPTED
Probable cause
The current operation was interrupted by the caller.

#### 1.5.2.72 Parameter value '%1' is not a valid boolean value. The value must be 0 or 1

The value must be 0 or 1
Error code
Error constant
PARAMETER_NOT_BOOLEAN
Parameter 1
The invalid parameter value.
Probable cause
Network parameters are of the form "name=value;[name2=value2[;...]]". The parameter value is not a boolean
value. Locate the offending parameter specification and change the value of the parameter to either 0 (for off
or false) or 1 (for on or true).

#### 1.5.2.73 Parameter value '%1' is not a valid hexadecimal value

value
Error code
Error constant
PARAMETER_NOT_HEX
Parameter 1
The invalid parameter value.
Probable cause
Network parameters are of the form "name=value;[name2=value2[;...]]". The parameter value is not a
hexadecimal (base 16) value. Locate the offending parameter specification and change the value of the
parameter to a hexadecimal value.

#### 1.5.2.74 Parameter value '%1' is not an unsigned integer

Error code
Error constant
PARAMETER_NOT_UINT32
Parameter 1
The invalid parameter value.
Probable cause
Network parameters are of the form "name=value;[name2=value2[;...]]". The parameter value is not an
unsigned integer. Locate the offending parameter specification and change the value of the parameter to
an unsigned integer.

#### 1.5.2.75 Parameter value '%1' is not an unsigned integer value or range. A range has the form NNN-NNN

value or range. A range has the form NNN-NNN
Error code
Error constant
PARAMETER_NOT_UINT32_RANGE
Parameter 1
The invalid parameter value.
Probable cause
Network parameters are of the form "name=value;[name2=value2[;...]]". The parameter value is not an
unsigned integer value or range. Locate the offending parameter specification and change the value of the
parameter to an unsigned integer or an unsigned range. An unsigned range has the form: NNN-NNN.

#### 1.5.2.76 Password specified for an unencrypted server key

Error code
Error constant
SECURE_REDUNDANT_SERVER_CERTIFICATE_PASSWORD
Probable cause
A password was specified when the server's private key wasn't encrypted by any password.

#### 1.5.2.77 Protocol error

Error code
Error constant
PROTOCOL_ERROR
Probable cause
An unexpected value or token was read.

#### 1.5.2.78 Received encrypted traffic instead of HTTP traffic on port %1

port %1
Error code
Error constant
ENCRYPTED_INSTEAD_OF_HTTP
Parameter 1
The listening port.
Probable cause
The synchronization server aborted a request because it received encrypted, non-HTTP traffic on a port that
was servicing HTTP traffic. Ensure that the stream options used on the client match those on the server.

#### 1.5.2.79 Received end-to-end encrypted traffic instead of HTTP traffic on port %1

HTTP traffic on port %1
Error code
Error constant
E2EE_INSTEAD_OF_HTTP
Parameter 1
The listening port.
Probable cause
The synchronization server aborted a request because it received end-to-end encrypted, non-HTTP traffic on
a port that was servicing HTTP traffic. Ensure that the stream options used on the client match those on the
server.

#### 1.5.2.80 Received end-to-end, but not transport layer security encrypted traffic on port %1

security encrypted traffic on port %1
Error code
Error constant
E2EE_INSTEAD_OF_ENCR
Parameter 1
The listening port.
Probable cause
The synchronization server aborted a request because it received non-TLS encrypted, but end-to-end
encrypted traffic on a port that was servicing TLS encrypted traffic. Ensure that the stream options used
on the client match those on the server.

#### 1.5.2.81 Received non-HTTP traffic on port %1

Error code
Error constant
TCP_INSTEAD_OF_HTTP
Parameter 1
The listening port.
Probable cause
The synchronization server aborted a request because it received non-HTTP traffic on a port that was servicing
HTTP traffic. Ensure that the stream options used on the client match those on the server.

#### 1.5.2.82 Received out of order HTTP request on port %1

Error code
Error constant
OUT_OF_ORDER_HTTP_REQUEST
Parameter 1
The listening port.
Probable cause
The synchronization server aborted a request because it received an HTTP request that was sent by the client
before another request the server has already processed.

#### 1.5.2.83 Received unencrypted HTTP traffic on port %1

Error code
Error constant
HTTP_INSTEAD_OF_ENCR
Parameter 1
The listening port.
Probable cause
The synchronization server aborted a request because it received non-encrypted HTTP traffic on a port that
was servicing encrypted traffic. Ensure that the stream options used on the client match those on the server.

#### 1.5.2.84 Received unencrypted traffic on port %1

Error code
Error constant
TCP_INSTEAD_OF_ENCR
Parameter 1
The listening port.

Probable cause
The synchronization server aborted a request because it received non-encrypted traffic on a port that was
servicing encrypted traffic. Ensure that the stream options used on the client match those on the server.

#### 1.5.2.85 Request headers too large

Error code
Error constant
HTTP_HEADERS_TOO_BIG
Probable cause
The headers for this HTTP header were too large. Consider increasing the header_limit HTTP option.

#### 1.5.2.86 SACI implementation mismatch

Error code
Error constant
SACI_IMPLEMENTATION_MISMATCH
Probable cause
The SACI implementation could not be loaded because it had an incompatible implementation ID.

#### 1.5.2.87 Server certificate not trusted

Error code
Error constant
SECURE_CERTIFICATE_NOT_TRUSTED
Probable cause
The server's certificate was not signed by a trusted authority. Check the following: 1) The certificate file name
was properly specified. 2) The certificate file contains one or more certificates. 3) The certificate file contains
the correct certificate(s). 4) The client's list of trusted root certificates includes the server's root certificate.

#### 1.5.2.88 Server error %1

Error code
Error constant
SERVER_ERROR
Parameter 1
The error reported by the server.
Probable cause
The server reported an error. Contact the synchronization server administrator to learn more.

#### 1.5.2.89 Synchronization server authentication failed

Error code
Error constant
AUTHENTICATION_FAILED

Probable cause
The client failed to authenticate itself to the synchronization server.

#### 1.5.2.90 The content type '%1' is unknown

Error code
Error constant
HTTP_CONTENT_TYPE_NOT_SPECIFIED
Parameter 1
The content type.
Probable cause
An unknown content type was specified. Refer to the documentation and change the content type to one of the
supported types.

#### 1.5.2.91 The host name '%1' could not be found

Error code
Error constant
SOCKET_HOST_NAME_NOT_FOUND
Parameter 1
The name of the host.
Probable cause
The given host name could not be found. Check the following: 1) The host name was correctly specified. 2) The
host is accessible. Many systems include a "ping" utility that can be used to verify access to a named host. 3)
The Domain Name Server (DNS), or its equivalent, is available. If the DNS is not available, try specifying the
host's IP number (for example, NNN.NNN.NNN.NNN) instead of the host name. 4) The HOSTS file contains an
entry that maps the host name to an IP number.

#### 1.5.2.92 The HTTP buffer size specified is out of the valid range

range
Error code
Error constant
HTTP_BUFFER_SIZE_OUT_OF_RANGE
Probable cause
Fix the HTTP buffer size. A valid buffer size is positive and not overly large for the host platform.

#### 1.5.2.93 The operation would cause blocking

Error code
Error constant
WOULD_BLOCK
Probable cause
A requested operation would block where blocking is undesirable or unexpected.

#### 1.5.2.94 The session key type '%1' is unknown

Error code
Error constant
HTTP_INVALID_SESSION_KEY
Parameter 1
The session key type.
Probable cause
An unknown session key type was specified. Refer to the documentation and change the session key type to
one of the supported types.

#### 1.5.2.95 The value for option '%1' is incompatible with the value for option '%2'

value for option '%2'
Error code
Error constant
INCOMPATIBLE_OPTION_VALUES
Probable cause
The values for the two options are incompatible with each other. Review the documentation for each option.

#### 1.5.2.96 The value specified for %1 is out of range

Error code
Error constant
VALUE_OUT_OF_RANGE

Parameter 1
The name of the parameter
Probable cause
The specified value was not in the range of acceptable values for that parameter. Check the documentation for
the parameter to learn the acceptable range of values.

#### 1.5.2.97 There is no private key in the e2ee_private_key file '%1'

'%1'
Error code
Error constant
E2EE_NO_PRIVATE_KEY_IN_FILE
Parameter 1
The private key file from the e2ee_private_key option.
Probable cause
The given filename does not contain a private key.

#### 1.5.2.98 This connection will be abandoned because of previous errors

previous errors
Error code
Error constant
CONNECTION_ABANDONED

Probable cause
Some previous error forced the server to close this connection

#### 1.5.2.99 Timed out trying to read %1 bytes

Error code
Error constant
READ_TIMEOUT
Parameter 1
The number of bytes that could not be read.
Probable cause
Unable to read the given number of bytes from the network layer in the given time. Check that the network is
functioning correctly, and that the sending application is still running.

#### 1.5.2.100 Timed out trying to write %1 bytes

Error code
Error constant
WRITE_TIMEOUT
Parameter 1
The number of bytes that could not be written.
Probable cause
Unable to write the given number of bytes to the network layer in the given time. Check that the network is
functioning correctly, and that the receiving application is still running.

#### 1.5.2.101 Timed out while waiting for the next HTTP request in this synchronization

in this synchronization
Error code
Error constant
HTTP_NO_CONTD_CONNECTION
Probable cause
The server timed out while waiting for the next HTTP request from the remote site. Determine why this request
failed to reach the server or try a persistent connection.

#### 1.5.2.102 Unable to add a certificate to a certificate chain

Error code
Error constant
SECURE_ADD_CERTIFICATE
Probable cause
The secure network layer was unable to add a certificate to a certificate chain. Free up system resources and
retry the operation.

#### 1.5.2.103 Unable to add a trusted certificate

Error code
Error constant
SECURE_ADD_TRUSTED_CERTIFICATE
Probable cause
The secure network layer was unable to add a trusted certificate to a certificate chain. The most likely cause is
a shortage of system resources. Free up system resources and retry the operation.

#### 1.5.2.104 Unable to allocate a certificate

Error code
Error constant
SECURE_CREATE_CERTIFICATE
Probable cause
The secure network layer was unable to allocate storage for a certificate. Free up system resources and retry
the operation.

#### 1.5.2.105 Unable to allocate sufficient memory

Error code

Error constant
MEMORY_ALLOCATION
Probable cause
The network layer was unable to allocate enough bytes of storage. Free up system memory and retry the
operation. The technique used to free up system memory depends on the operating system and how it is
configured. The simplest technique is to reduce the number of active processes. Consult your operating
system documentation for details.

#### 1.5.2.106 Unable to attach the network layer to the security layer

layer
Error code
Error constant
SECURE_SET_IO
Probable cause
The secure network layer was unable to attach to the network layer. Free up system resources and retry the
operation.

#### 1.5.2.107 Unable to bind a socket to port %1

Error code
Error constant
SOCKET_BIND
Parameter 1
The port number.
Probable cause
The network layer was unable to bind a socket to the given port. Check the following. 1) (Server only) Verify
that the port isn't already in use. If the port is in use, either shut down the application listening on that port, or
specify a different port. 2) (Server only) Verify that there are no firewall restrictions on the use of the port. 3)
(Client only) If the client_port option was used, verify that the given port isn't already in use. If only one client
port was specified, consider using a range (for example, NNN-NNN). If a range was specified, consider making
it a wider range, or a different range. 4) (Client only) If the client_port option was used, verify that there are no
firewall restrictions on the use of the port.

#### 1.5.2.108 Unable to clean up the socket layer

Error code
Error constant
SOCKET_CLEANUP
Probable cause
The network layer was unable to clean up the socket layer. This error should only occur after all connections
are finished, so no current connections should be affected.

#### 1.5.2.109 Unable to close a socket

Error code
Error constant
SOCKET_CLOSE
Probable cause
The network layer was unable to close a socket. The network session may or may not have terminated
prematurely, due to pending writes that were not flushed. Check the following: 1) The other side of the network
connection had any errors. 2) The other side of the connection is running normally. 3) The machine is still
connected to the network, and the network is responsive.

#### 1.5.2.110 Unable to connect a socket

Error code
Error constant
SOCKET_CONNECT

Probable cause
The network layer was unable to connect a socket. Check the following: 1) The machine is connected to the
network. 2) The socket layer is properly initialized. 3) The correct host machine and port were specified. 4) The
host server is running normally and listening on the correct port. 5) The host machine is listening for the proper
socket type (TCP/IP vs. UDP). 6) If the client_port option was used, verify that there are no firewall restrictions
on the use of the port. 7) If the device has a limit on the number of open sockets, verify that the limit has not
been reached. 8) There are enough system resources available. Free up system resources if they are running
low.

#### 1.5.2.111 Unable to continue unknown HTTP session

Error code
Error constant
HTTP_UNKNOWN_SESSION
Probable cause
The HTTP cookie used to manage the synchronization session is not recognized. All HTTP requests for
the same session must go to the same synchronization server instance. The most likely cause is an HTTP
intermediary not sending all HTTP requests for the same session to the same synchronization server. This
error can also occur when a server is quickly shut down and restarted between HTTP requests for the same
session.

#### 1.5.2.112 Unable to copy a certificate

Error code
Error constant
SECURE_EXPORT_CERTIFICATE
Probable cause
The secure network layer was unable to copy a certificate. Free up system resources and retry the operation.

#### 1.5.2.113 Unable to create a private key object

Error code
Error constant
SECURE_CREATE_PRIVATE_KEY_OBJECT
Probable cause
The secure network layer was unable to create a private key object before loading the private key. The most
likely cause is a shortage of system resources. Free up system resources and retry the operation.

#### 1.5.2.114 Unable to create a random number object

Error code
Error constant
CREATE_RANDOM_OBJECT

Probable cause
The secure network layer could not create a random-number-generating object. Free up system resources,
reconnect and retry the operation.

#### 1.5.2.115 Unable to create a TCP/IP socket

Error code
Error constant
SOCKET_CREATE_TCPIP
Probable cause
The network layer was unable to create a TCP/IP socket. Check the following: 1) The machine is connected
to the network. 2) The socket layer is properly initialized. 3) If the device has a limit on the number of open
sockets, verify that the limit has not been reached. 4) There are enough system resources available. Free up
system resources if they are running low.

#### 1.5.2.116 Unable to create a UDP socket

Error code
Error constant
SOCKET_CREATE_UDP
Probable cause
The network layer was unable to create a UDP socket. Check the following: 1) The machine is connected to the
network. 2) The socket layer is properly initialized. 3) If the client_port option was used, verify that the given
port isn't already in use. If only one client port was specified, consider using a range (for example, NNN-NNN).
If a range was specified, consider making it a wider range, or a different range. 4) If the client_port option was
used, verify that there are no firewall restrictions on the use of the port. 5) If the device has a limit on the
number of open sockets, verify that the limit has not been reached. 6) There are enough system resources
available. Free up system resources if they are running low.

#### 1.5.2.117 Unable to decode the e2ee_private_key file '%1'. The error code is %2

error code is %2
Error code
Error constant
E2EE_DECODING_PRIVATE_KEY_FILE
Parameter 1
The private key file from the e2ee_private_key option.
Parameter 2
The error code.
Probable cause
The file was found and its contents were read, but there was an error decoding the file. Please contact technical
support and provide the error code.

#### 1.5.2.118 Unable to dequeue from the connection queue

Error code
Error constant
DEQUEUING_CONNECTION
Probable cause
The synchronization server encountered an error while attempting to get a queued connection
(synchronization) request. Free up system resources. If the problem persists, restart the synchronization
server.

#### 1.5.2.119 Unable to determine localhost

Error code
Error constant
SOCKET_LOCALHOST_NAME_NOT_FOUND
Probable cause
The network layer was unable to determine the IP address of "localhost". Check the following: 1) The Domain
Name Server (DNS), or its equivalent, is available. If the DNS is not available, try explicitly specifying the
localhost IP number (usually 127.0.0.1) instead. 2) The HOSTS file contains an entry that maps the "localhost"
name to an IP number. 3) There are enough system resources available. Free up system resources if they are
running low.

#### 1.5.2.120 Unable to duplicate security context

Error code
Error constant
SECURE_DUPLICATE_CONTEXT
Probable cause
The secure network layer was unable to duplicate a security context. Free up system resources and retry the
operation.

#### 1.5.2.121 Unable to enable FIPS mode: %1

Error code
Error constant
CANNOT_ENABLE_FIPS_MODE
Parameter 1
The reason why FIPS mode cannot be enabled.
Probable cause
The encryption layer was unable to enable FIPS mode.

#### 1.5.2.122 Unable to fetch a certificate expiry date

Error code
Error constant
SECURE_CERTIFICATE_EXPIRY_DATE
Probable cause
A certificate's expiry date could not be read. Check the following: 1) The password was entered correctly. 2)
The certificate file contains one or more certificates. 3) The certificate file contains the correct certificate(s). 4)
The certificate file is undamaged.

#### 1.5.2.123 Unable to find the trusted certificate file '%1'

Error code
Error constant
SECURE_TRUSTED_CERTIFICATE_FILE_NOT_FOUND

Parameter 1
The trusted certificate file name.
Probable cause
The certificate file could not be found. Check the following: 1) The certificate file name was properly specified.
2) The certificate file exists. 3) The certificate file contains one or more certificates. 4) The certificate file
contains the correct certificate(s). 5) The program attempting to open the certificate file has sufficient
privileges to see the file. This only applies to operating systems having user and/or file permissions.

#### 1.5.2.124 Unable to generate a random number

Error code
Error constant
GENERATE_RANDOM
Probable cause
The secure network layer requires a random number but was unable to generate one. Free up system
resources, reconnect and retry the operation.

#### 1.5.2.125 Unable to get a socket's local name

Error code
Error constant
SOCKET_GET_NAME
Probable cause
The network layer was unable to determine a socket's local name. In a TCP/IP connection, each end of the
connection has a socket exclusively attached to a port. A socket's local name includes this port number, which
is assigned by the network at connection time. Check the following: 1) The machine is still connected to the

network, and the network is responsive. 2) The other side of the connection is running normally. 3) There are
enough system resources available. Free up system resources if they are running low.

#### 1.5.2.126 Unable to get host by address

Error code
Error constant
SOCKET_GET_HOST_BY_ADDR
Probable cause
The network layer was unable to get the name of a host using its IP address. At the time of publication, this
error was defined but not used.

#### 1.5.2.127 Unable to get socket option number %1

Error code
Error constant
SOCKET_GET_OPTION
Parameter 1
The socket option being retrieved.
Probable cause
The network layer was unable to get a socket option. This error may be the first indication that a connection
has been lost. Check the following: 1) The machine is still connected to the network, and the network is
responsive. 2) The other side of the connection is running normally. 3) There are enough system resources
available. Free up system resources if they are running low.

#### 1.5.2.128 Unable to import a certificate

Error code
Error constant
SECURE_IMPORT_CERTIFICATE
Probable cause
The secure network layer was unable to import a certificate. Check the following: 1) The certificate file name
was properly specified. 2) The certificate file exists. 3) The certificate file contains one or more certificates. 4)
The certificate file contains the correct certificate(s).

#### 1.5.2.129 Unable to initialize the random number generator

Error code
Error constant
INIT_RANDOM
Probable cause
The secure network layer could not initialize its random number generator. Free up system resources,
reconnect and retry the operation.

#### 1.5.2.130 Unable to initialize the sockets layer

Error code
Error constant
SOCKET_STARTUP
Probable cause
The network layer was unable to initialize the socket layer. Check the following: 1) The sockets layer is properly
installed. The correct network interface library must be present and accessible. 2) The machine is connected

to the network, and the network is responsive. 3) There are enough system resources available. Free up system
resources if they are running low.

#### 1.5.2.131 Unable to listen on a socket. The backlog is %1

Error code
Error constant
SOCKET_LISTEN
Parameter 1
The requested listener backlog.
Probable cause
The server is unable to listen on a socket. The backlog refers to the maximum number of queued connection
requests that may be pending at any given time. Check the following: 1) The machine is still connected to
the network, and the network is responsive. 2) There are no firewall or other restrictions preventing a socket
listener from running on the current machine. 3) The backlog setting is within the limit, if any, on the machine.
4) There are enough system resources available. Free up system resources if they are running low.

#### 1.5.2.132 Unable to load MLSACIGetE2EEIface

Error code
Error constant
E2EE_REQUESTED_BUT_MISSING
Probable cause
End-to-end encryption was requested, but the encryption library does not export MLSACIGetE2EEIface.

#### 1.5.2.133 Unable to load the network interface library

Error code
Error constant
LOAD_NETWORK_LIBRARY

Probable cause
The network interface library could not be found and/or loaded. Please check the following: 1) The sockets
layer is properly installed. The correct network interface library (or DLL or shared object) must be present and
accessible. 2) There are enough system resources available. Free up system resources if they are running low.

#### 1.5.2.134 Unable to open '%1'

Error code
Error constant
COULD_NOT_OPEN_FILE
Parameter 1
The name of the file.
Probable cause
The specified file could not be opened.

#### 1.5.2.135 Unable to open certificate file '%1'

Error code
Error constant
SECURE_CERTIFICATE_FILE_NOT_FOUND
Parameter 1
The certificate file name.
Probable cause
The certificate file could not be opened. Check the following: 1) The certificate file name was properly specified.
2) The certificate file exists. 3) The certificate file contains one or more certificates. 4) The certificate file
contains the correct certificate(s). 5) The program attempting to open the certificate file has sufficient
privileges to read the file. This only applies to operating systems having user and/or file permissions.

#### 1.5.2.136 Unable to parse cookie: '%1'

Error code
Error constant
HTTP_UNABLE_TO_PARSE_COOKIE
Parameter 1
The set cookie header.
Probable cause
Determine where the set cookie header is being corrupted.

#### 1.5.2.137 Unable to parse the parameter string '%1'

Error code
Error constant
PARSE
Parameter 1
The parameter string that could not be parsed.
Probable cause
Network parameters are of the form "name=value;[name2=value2[;...]]". Optionally, the entire list of
parameters may be enclosed in parentheses. The given string does not follow this convention. Inspect the
string, fix any formatting problems, and retry the operation.

#### 1.5.2.138 Unable to read %1 bytes

Error code
Error constant
READ
Parameter 1
The number of bytes that could not be read.
Probable cause
Unable to read the given number of bytes from the network layer. Note that reads may occur as part of
any larger network operation. For example, some network layers have sub-layers that perform several reads
and writes as part of a basic operation in the upper layer. The cause of a read error is usually one of the
following: 1) The network had a problem that caused the read to fail. Reconnect and retry the operation. 2)
The connection timed out. Reconnect and retry the operation. 3) The other side of the connection cleanly
terminated the connection. Consult the client and/or server logs for errors that indicate why the connection
has been dropped. Consult the output-log errors and fix the cause, then retry the operation. 4) The process
at the other side of the connection was aborted. Consult the client and/or server output logs for errors that
indicate why the process was aborted. If the process was shut down by other than normal means, there may
not be any errors in its output log. Reconnect and retry the operation. 5) The system is low on resources, and
cannot perform the read. Free up system resources, reconnect and retry the operation. If subsequent retry
attempts fail, consult your network administrator.

#### 1.5.2.139 Unable to read certificates

Error code
Error constant
SECURE_READ_CERTIFICATE
Probable cause
The certificate file could not be read. Check the following: 1) The password was entered correctly. 2) The
certificate file contains one or more certificates. 3) The certificate file contains the correct certificate(s). 4) The
certificate file is undamaged.

#### 1.5.2.140 Unable to read the e2ee public key

Error code
Error constant
E2EE_PUBLIC_KEY
Probable cause
An error occurred while trying to read the end-to-end encryption public key.

#### 1.5.2.141 Unable to read the e2ee_private_key file '%1'. The error code is %2

error code is %2
Error code
Error constant
E2EE_READING_PRIVATE_KEY
Parameter 1
The private key file from the e2ee_private_key option.
Parameter 2
The error code.
Probable cause
An error occurred reading the e2ee_private_key file. Please contact technical support and provide the error
code.

#### 1.5.2.142 Unable to read the e2ee_private_key file '%1'. The error code is %2

error code is %2
Error code
Error constant
E2EE_READING_PRIVATE_KEY_FILE
Parameter 1
The private key file from the e2ee_private_key option.
Parameter 2
The error code.
Probable cause
The given file could not be read. Please contact technical support and provide the error code.

#### 1.5.2.143 Unable to read the private key

Error code
Error constant
SECURE_READ_PRIVATE_KEY
Probable cause
The private key could not be read from the certificate file. Check the following: 1) The password was entered
correctly. 2) The certificate file contains one or more certificates. 3) The certificate file contains the correct
certificate(s). 4) The certificate file is undamaged.

#### 1.5.2.144 Unable to seed the random number generator

Error code
Error constant
SEED_RANDOM
Probable cause
The secure network layer could not seed its random number generator. Free up system resources, reconnect
and retry the operation.

#### 1.5.2.145 Unable to select a socket status

Error code
Error constant
SOCKET_SELECT
Probable cause
The network layer encountered an error attempting to wait for a socket to be ready for reading or writing.
Check the following: 1) The machine is connected to the network, and the network is responsive. 2) The other
side of the connection is running normally. 3) There are enough system resources available. Free up system
resources if they are running low.

#### 1.5.2.146 Unable to set socket option number %1

Error code
Error constant
SOCKET_SET_OPTION

Parameter 1
The socket option being set.
Probable cause
The network layer was unable to set a socket option. This error may be the first indication that a connection
has been lost. Check the following: 1) The machine is still connected to the network, and the network is
responsive. 2) The other side of the connection is running normally. 3) There are enough system resources
available. Free up system resources if they are running low.

#### 1.5.2.147 Unable to set the private key

Error code
Error constant
SECURE_SET_PRIVATE_KEY
Probable cause
The private key could not be used. Check the following: 1) The password was entered correctly. 2) The
certificate file contains one or more certificates. 3) The certificate file contains the correct certificate(s). 4) The
certificate file is undamaged.

#### 1.5.2.148 Unable to shut down a socket

Error code
Error constant
SOCKET_SHUTDOWN

Probable cause
The network layer was unable to shut down a socket. Check the following: 1) The machine is connected to the
network, and the network is responsive. 2) The other side of the connection is running normally. 3) There are
enough system resources available. Free up system resources if they are running low.

#### 1.5.2.149 Unable to validate peer certificate '%1': certificate chain too long

chain too long
Error code
Error constant
PEER_VAL_CERT_CHAIN_TOO_LONG
Parameter 1
The peer certificate name.
Probable cause
The peer certificate chain length is greater than the maximum depth.

#### 1.5.2.150 Unable to validate peer certificate '%1': certificate not trusted

not trusted
Error code
Error constant
PEER_VAL_CERT_UNTRUSTED
Parameter 1
The peer certificate name.
Probable cause
The root CA is not marked as trusted for the specified purpose.

#### 1.5.2.151 Unable to validate peer certificate '%1': certificate rejected

rejected
Error code
Error constant
PEER_VAL_CERT_REJECTED
Parameter 1
The peer certificate name.
Probable cause
The root CA is marked to reject the specified purpose.

#### 1.5.2.152 Unable to validate peer certificate '%1': format error in the certificate notAfter field

error in the certificate notAfter field
Error code
Error constant
PEER_VAL_ERROR_IN_CERT_NOT_AFTER_FIELD
Parameter 1
The peer certificate name.

Probable cause
The peer certificate's notAfter field contains an invalid time.

#### 1.5.2.153 Unable to validate peer certificate '%1': format error in the certificate notBefore field

error in the certificate notBefore field
Error code
Error constant
PEER_VAL_ERROR_IN_CERT_NOT_BEFORE_FIELD
Parameter 1
The peer certificate name.
Probable cause
The peer certificate's notBefore field contains an invalid time.

#### 1.5.2.154 Unable to validate peer certificate '%1': general error

error
Error code

Error constant
PEER_VAL_GENERAL
Parameter 1
The peer certificate name.
Probable cause
The peer certificate could not be validated due to an unspecified or unexpected general error.

#### 1.5.2.155 Unable to validate peer certificate '%1': invalid CA certificate

certificate
Error code
Error constant
PEER_VAL_INVALID_CA
Parameter 1
The peer certificate name.
Probable cause
A CA certificate is invalid. Either it is not a CA certificate or its extensions are not consistent with the supplied
purpose.

#### 1.5.2.156 Unable to validate peer certificate '%1': path length constraint exceeded

constraint exceeded
Error code
Error constant
PEER_VAL_PATH_LENGTH_EXCEEDED
Parameter 1
The peer certificate name.
Probable cause
A path length has been exceeded while attempting to validate a peer certificate.

#### 1.5.2.157 Unable to validate peer certificate '%1': self-signed certificate

certificate
Error code
Error constant
PEER_VAL_DEPTH_ZERO_SELF_SIGNED_CERT
Parameter 1
The peer certificate name.
Probable cause
The peer certificate is self-signed and cannot be found in the list of trusted certificates.

#### 1.5.2.158 Unable to validate peer certificate '%1': root certificate is not trusted

certificate is not trusted
Error code
Error constant
PEER_VAL_SELF_SIGNED_CERT_IN_CHAIN
Parameter 1
The peer certificate name.
Probable cause
The certificate chain could be verified using the certificate chain the peer sent, but the root could not be found
in the list of trusted certificate authorities.

#### 1.5.2.159 Unable to validate peer certificate '%1': the certificate has expired

certificate has expired
Error code
Error constant
PEER_VAL_CERT_HAS_EXPIRED
Parameter 1
The peer certificate name.
Probable cause
The peer certificate has expired.

#### 1.5.2.160 Unable to validate peer certificate '%1': the certificate is not yet valid

certificate is not yet valid
Error code
Error constant
PEER_VAL_CERT_NOT_YET_VALID
Parameter 1
The peer certificate name.
Probable cause
The peer certificate is being used too early. The current time is before the range of time the peer certificate can
be used.

#### 1.5.2.161 Unable to validate peer certificate '%1': unable to decode the issuer public key

decode the issuer public key
Error code
Error constant
PEER_VAL_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY
Parameter 1
The peer certificate name.

Probable cause
The public key of the peer certificate issuer could not be read.

#### 1.5.2.162 Unable to validate peer certificate '%1': unable to decrypt the certificate signature

decrypt the certificate signature
Error code
Error constant
PEER_VAL_UNABLE_TO_DECRYPT_CERT_SIGNATURE
Parameter 1
The peer certificate name.
Probable cause
The signature of the peer certificate could not be decrypted. The certificate may be in an invalid or unexpected
format.

#### 1.5.2.163 Unable to validate peer certificate '%1': unable to find the issuer certificate

find the issuer certificate
Error code

Error constant
PEER_VAL_UNABLE_TO_GET_ISSUER_CERT
Parameter 1
The peer certificate name.
Probable cause
The issuer certificate of a looked up certificate could not be found. This normally means the list of trusted
certificates is not complete.

#### 1.5.2.164 Unable to validate peer certificate '%1': unable to get local issuer certificate

get local issuer certificate
Error code
Error constant
PEER_VAL_UNABLE_TO_GET_ISSUER_CERT_LOCALLY
Parameter 1
The peer certificate name.
Probable cause
The issuer certificate was not sent by the peer and can not be found in the list of trusted certificate authorities.

#### 1.5.2.165 Unable to validate peer certificate '%1': unable to verify the certificate signature

verify the certificate signature
Error code
Error constant
PEER_VAL_CERT_SIGNATURE_FAILURE
Parameter 1
The peer certificate name.
Probable cause
The signature of the peer certificate is invalid. Verify the signature on the peer certificate.

#### 1.5.2.166 Unable to validate peer certificate '%1': unable to verify the first certificate

verify the first certificate
Error code
Error constant
PEER_VAL_UNABLE_TO_VERIFY_LEAF_SIGNATURE
Parameter 1
The peer certificate name.
Probable cause
The peer certificate chain contains only one certificate and it isn't self-signed.

#### 1.5.2.167 Unable to validate peer certificate '%1': unsupported certificate purpose

unsupported certificate purpose
Error code
Error constant
PEER_VAL_INVALID_PURPOSE
Parameter 1
The peer certificate name.
Probable cause
The peer certificate cannot be used for the specified purpose. This usually means the peer certificate was
not created for bi-directional encryption. Ensure the peer certificate is configured to allow bi-directional
encryption.

#### 1.5.2.168 Unable to write %1 bytes

Error code
Error constant
WRITE
Parameter 1
The number of bytes that could not be written.
Probable cause
Unable to write the given number of bytes to the network layer. Note that writes may occur as part of
any larger network operation. For example, some network layers have sub-layers that perform several reads
and writes as part of a basic operation in the upper layer. The cause of a write error is usually one of the
following: 1) The network had a problem that caused the write to fail. Reconnect and retry the operation. 2)
The connection timed out. Reconnect and retry the operation. 3) The other side of the connection cleanly

terminated the connection. Consult the client and/or server logs for errors that indicate why the connection
has been dropped. Consult the output-log errors and fix the cause, then retry the operation. 4) The process
at the other side of the connection was aborted. Consult the client and/or server output logs for errors that
indicate why the process was aborted. If the process was shut down by other than normal means, there may
not be any errors in its output log. Reconnect and retry the operation. 5) The system is low on resources, and
cannot perform the write. Free up system resources, reconnect and retry the operation. If subsequent retry
attempts fail, consult your network administrator.

#### 1.5.2.169 Unexpected HTTP state %1 when decoding the header

header
Error code
Error constant
HTTP_INTERNAL_HEADER_STATE
Parameter 1
The internal header state
Probable cause
There was a problem decoding the HTTP header. This is an internal error that should never occur. Please
contact technical support.

#### 1.5.2.170 Unexpected internal HTTP request type %1

Error code
Error constant
HTTP_INTERNAL_REQUEST_TYPE
Parameter 1
The internal HTTP request type
Probable cause
There was a problem determining the HTTP request type. This is an internal error that should never occur.
Please contact technical support.

#### 1.5.2.171 Unexpected private key type. Expecting %1 but found %2 in the e2ee_private_key file '%3'

found %2 in the e2ee_private_key file '%3'
Error code
Error constant
E2EE_UNEXPECTED_PRIVATE_KEY_TYPE
Parameter 1
The end-to-end private key type from the e2ee_type option.
Parameter 2
The end-to-end private key type from the file.
Parameter 3
The private key file from the e2ee_private_key option.
Probable cause
The private key type found in the e2ee_private_key file does not match the type specified in the e2ee_type.

#### 1.5.2.172 Unexpected public key end-to-end encryption type. Expecting %1 but received %2

Expecting %1 but received %2
Error code
Error constant
E2EE_UNEXPECTED_PUBLIC_KEY_ENC_TYPE
Parameter 1
The end-to-end encryption type from the server.
Parameter 2
The end-to-end encryption type from the client.
Probable cause
The client sent an e2ee_type value that is different from the e2ee_type specified at the server. Please make
sure these are the same.

#### 1.5.2.173 Unexpected request type: %1

Error code
Error constant
UNEXPECTED_HTTP_REQUEST_TYPE
Parameter 1
The HTTP request type
Probable cause
The given HTTP request type was unexpected at this time. The most likely cause is an HTTP client that is not a
synchronization server client.

#### 1.5.2.174 Unexpected response received

Error code
Error constant
HTTP_UNEXPECTED_RESPONSE
Probable cause
The client received an HTTP response that was not from a synchronization server. This most often occurs when
an intermediary web server or proxy server requires authentication and sends back an HTML login form. To
resolve this, connect with an application that can display the form and complete the login and pass the cookies
and any special headers received from the server to the client using the set_cookie and custom_header
options.

#### 1.5.2.175 Unknown HTTP User-Agent or request type

Error code
Error constant
HTTP_BAD_REQUEST
Probable cause
The synchronization server received an HTTP request with either an unknown User-Agent header, or an
unknown request type.

#### 1.5.2.176 Unknown public key end-to-end encryption type sent from client: %1

sent from client: %1
Error code
Error constant
E2EE_UNKNOWN_PUBLIC_KEY_ENC_TYPE
Parameter 1
The end-to-end encryption type code
Probable cause
The client sent an e2ee_type value that is not recognized by the server. Please make sure the server version is
equal to or greater than the version of the remote.

#### 1.5.2.177 Unknown transfer encoding: '%1'

Error code
Error constant
HTTP_UNKNOWN_TRANSFER_ENCODING
Parameter 1
The unknown encoding.
Probable cause
Determine how the unknown transfer encoding is getting generated.

#### 1.5.2.178 Unrecognized common name '%1'

Error code
Error constant
SECURE_CERTIFICATE_COMMON_NAME
Parameter 1
The common name.
Probable cause
The given common name is not in the certificate chain. Check the following: 1) The common name was
properly entered. 2) The correct certificate file was specified. 3) The common name is in the certificate chain.
You can verify this with the viewcert utility.

#### 1.5.2.179 Unrecognized organization '%1'

Error code
Error constant
SECURE_CERTIFICATE_COMPANY_NAME
Parameter 1
The organization name.
Probable cause
The given organization name is not in the certificate chain. Check the following: 1) The organization name was
properly entered. 2) The correct certificate file was specified. 3) The organization name is in the certificate
chain. You can verify this with the viewcert utility.

#### 1.5.2.180 Unrecognized organization unit '%1'

Error code
Error constant
SECURE_CERTIFICATE_COMPANY_UNIT
Parameter 1
The organization unit name.
Probable cause
The given organization unit is not in the certificate chain. Check the following: 1) The in company name was
properly entered. 2) The correct certificate file was specified. 3) The company name is in the certificate chain.
You can verify this with the viewcert utility.

#### 1.5.2.181 Unrecognized TLS type %1

Error code
Error constant
UNRECOGNIZED_TLS_TYPE
Parameter 1
The TLS type
Probable cause
The TLS type is invalid. Consult the documentation for valid types.

#### 1.5.2.182 Unsupported http authentication algorithm: %1

Error code
Error constant
HTTP_UNSUPPORTED_AUTH_ALGORITHM
Probable cause
The HTTP Digest authentication algorithm requested by the server is unsupported. Only "MD5" and "MD5-
sess" are supported.

#### 1.5.2.183 Unsupported HTTP version: %1

Error code
Error constant
HTTP_VERSION
Parameter 1
The requested HTTP version.
Probable cause
The requested HTTP version is unsupported. Consult the documentation and specify a supported HTTP
version. At the time of publication the supported HTTP versions are 1.0 and 1.1.

### 1.6 MobiLink Replay Utility Error Messages

The MobiLink Replay utility error messages are written to the MobiLink Replay utility message log.
Each message has a numeric code. Many of the messages contain the characters %1, %2, and so on. These
characters are replaced by the parameters to the message.

#### 1.6.1 MobiLink Replay Utility Error Messages Sorted by Error Code

Code
Error code
Message text
No error or unknown error
-5001
The replay failed
-5002
MLReplay failed to initialize correctly
-5003
MLReplay was unable to connect to the MobiLink server for
the following reason: '%1'
-5005
MLReplay was unable to open the recorded protocol file %1

-5006
An error occurred while trying to read the recorded protocol

-5007
MLReplay is sending an unexpected amount of data to the
MobiLink server
-5008
MLReplay could not generate a GUID for the remote ID
Memory allocation failed
-5010
The specified username is too long
-5011
The specified remote ID is too long
-5012
The specified password is too long
-5016
Unable to open the log file, %1
-5017
Unable to initialize the log
-5018
MLReplay was unable to open the file %1 to get the simu-
lated client information
-5019
The format of the specified simulated client information
file does not match the expected format, which should con-
sist of lines of the form '[username],[password],[remote ID],
[last download time]'
-5020
A file I/O error occurred while MLReplay was accessing the
specified simulated client information file
-5022
The Replay API Generator was unable to open the file, '%1'

-5023
The recorded protocol file is corrupted
-5024
The schema information could not be retrieved from the
recorded protocol
-5026
The schema information read from the recorded protocol
could not be parsed successfully
-5028
Unable to determine the transaction information from the
recorded protocol

Error code
Message text
-5029
The Replay API Generator failed to initialize successfully

#### 1.6.2.2 %1 is an incompatible recorded protocol version with this version of the Replay API Generator

Error code
-5076
Error constant
MLGENREPLAYAPI_INCOMPATIBLE_RECORDED_PROTO-
COL_VERSION
Parameter 1
The recorded protocol version retrieved from the recorded
protocol file
Probable cause
The recorded protocol version retrieved from the recorded protocol file was recorded by a MobiLink server that
is newer than version of the Replay API Generator being used.

#### 1.6.2.3 A file I/O error occurred while MLReplay was accessing the specified simulated client information file

Error code
-5020
Error constant
MLREPLAY_SIMULATED_CLIENT_INFO_FILE_IO_ERROR
Probable cause
A file I/O error occurred while MLReplay was accessing the specified simulated client information file.

#### 1.6.2.4 An error occurred while accessing the recorded protocol

-5035
Error code
Error constant
MLREPLAY_RECORDED_PROTOCOL_ACCESS_ERROR
Probable cause
An error occurred while accessing the recorded protocol.

#### 1.6.2.5 An error occurred while trying to read the recorded protocol

Error code
-5006
Error constant
MLREPLAY_READ_RECORDED_PROTOCOL_ERROR
Probable cause
An error occurred while trying to read the recorded protocol.

#### 1.6.2.6 An unknown SQL domain type was found while determining the transaction information from the recorded protocol

Error code
-5044
Error constant
MLGENREPLAYAPI_UNKNOWN_DOMAIN
Probable cause
An unknown SQL domain type was found while determining the transaction information from the recorded
protocol.

#### 1.6.2.7 Column '%1' in table '%2' cannot be NULL

-5054
Error code
Error constant
MLREPLAY_NULL_VALUE
Parameter 1
column name
Parameter 2
table name
Probable cause
Cannot insert a NULL value into a non-nullable column.

#### 1.6.2.8 Invalid liveness timeout value %1. The value must be between 0 and 65535

Error code
-5073
Error constant
MLREPLAY_TIMEOUT_OUT_OF_RANGE
Parameter 1
The timeout specified on the command line
Probable cause
An invalid liveness timeout value was specified. The liveness timeout value must be an integer between 0 and
65535.

#### 1.6.2.9 Memory allocation failed

Error code
-5009
Error constant
MLREPLAY_OUT_OF_MEMORY
Probable cause
Your system is running out of memory. You may need to close some applications or add more memory to your
system.

#### 1.6.2.10 MLReplay could not generate a GUID for the remote ID

ID
-5008
Error code
Error constant
MLREPLAY_COULD_NOT_GENERATE_GUID
Probable cause
MLReplay could not generate a GUID for the remote ID.

#### 1.6.2.11 MLReplay failed due to the following network error: '%1'

'%1'
Error code
-5065
Error constant
MLREPLAY_STREAM_ERROR
Parameter 1
Error message from the stream.
Probable cause
MLReplay failed due to the specified network error. Please check the network.

#### 1.6.2.12 MLReplay failed to initialize correctly

Error code
-5002
Error constant
MLREPLAY_FAILED_INIT
Probable cause
MLReplay failed to initialize correctly.

#### 1.6.2.13 MLReplay failed to initialize correctly for the following reason: '%1'

following reason: '%1'
-5064
Error code
Error constant
MLREPLAY_FAILED_INIT_REASON
Parameter 1
Error message from the stream.
Probable cause
MLReplay failed to initialize correctly.

#### 1.6.2.14 MLReplay failed to prepare repetition %1

Error code
-5068
Error constant
MLREPLAY_FAILED_PREPARING_REPETITION
Parameter 1
repetition number
Probable cause
MLReplay failed to prepare a repetition. The most likely cause of this error is a memory allocation error or one
of the MLReplay callbacks failed. Check further up in the log to find the cause.

#### 1.6.2.15 MLReplay failed to prepare repetition %1 for the following reason: '%2'

following reason: '%2'
Error code
-5069
Error constant
MLREPLAY_FAILED_PREPARING_REPETITION_REASON
Parameter 1
repetition number
Parameter 2
Error message from the stream.
Probable cause
MLReplay failed to prepare a repetition for the given reason.

#### 1.6.2.16 MLReplay failed to replay a download because MLReplay timed out while waiting for the MobiLink server

-5031
Error code
Error constant
MLREPLAY_REPLAY_DOWNLOAD_FAILED_TIMED_OUT
Probable cause
MLReplay failed to replay a download because MLReplay timed out while waiting for the MobiLink server.

#### 1.6.2.17 MLReplay failed to upload data to the MobiLink server

server
Error code
-5042
Error constant
MLREPLAY_FAILED_UPLOAD
Probable cause
MLReplay failed to upload data to the MobiLink server.

#### 1.6.2.18 MLReplay has received an unexpected progress offset mismatch warning from the MobiLink server

offset mismatch warning from the MobiLink server
Error code
-5074
Error constant
MLREPLAY_RECEIVED_UNEXPECTED_SUB_MISMATCH
Probable cause
The most likely cause of this error is that the same recorded protocol file is being replayed more than once by
the same client. To resolve the issue, run MLReplay with the -ap option.

#### 1.6.2.19 MLReplay is sending an unexpected amount of data to the MobiLink server

to the MobiLink server
-5007
Error code
Error constant
MLREPLAY_SENDING_UNEXPECTED_AMOUNT_OF_DATA
Probable cause
MLReplay is sending an unexpected amount of data to the MobiLink server.

#### 1.6.2.20 MLReplay received unexpected data from the MobiLink server

MobiLink server
Error code
-5043
Error constant
MLREPLAY_RECEIVED_UNEXPECTED_DATA
Probable cause
MLReplay received unexpected data from the MobiLink server.

#### 1.6.2.21 MLReplay timed out while waiting for the MobiLink server to respond

server to respond
Error code
-5030
Error constant
MLREPLAY_TIMED_OUT
Probable cause
MLReplay timed out while waiting for the MobiLink server to respond.

#### 1.6.2.22 MLReplay was unable to close the recorded protocol file

file
-5034
Error code
Error constant
MLREPLAY_CLOSE_RECORDED_PROTOCOL_FILE_FAILED
Probable cause
MLReplay was unable to close the recorded protocol file.

#### 1.6.2.23 MLReplay was unable to close the specified simulated client information file

simulated client information file
Error code
-5032
Error constant
MLREPLAY_SIMULATED_CLIENT_INFO_FILE_CLOSE_ER-
ROR
Probable cause
MLReplay was unable to close the specified simulated client information file.

#### 1.6.2.24 MLReplay was unable to connect to the MobiLink server for the following reason: '%1'

server for the following reason: '%1'
Error code
-5003
Error constant
MLREPLAY_REPLAY_NEW_CONN_FAILED
Parameter 1
Error message from the stream.
Probable cause
MLReplay was unable to connect to the MobiLink server.

#### 1.6.2.25 MLReplay was unable to load %1

-5036
Error code
Error constant
MLREPLAY_LOAD_DLL_FAILED
Probable cause
MLReplay was unable to load the specified replay DLL.

1.6.2.26  MLReplay was unable to load the
CreateAndInitMLReplayUploadTransaction callback.
The CreateAndInitMLReplayUploadTransaction
callback is required to use the
GetUploadTransaction callback
Error code
-5038
Error constant
MLREPLAY_LOAD_CREATE_UPLOAD_TRANS_FAILED
Probable cause
MLReplay was unable to load the CreateAndInitMLReplayUploadTransaction callback. The
CreateAndInitMLReplayUploadTransaction callback is required to use the GetUploadTransaction callback.
Make sure the CreateAndInitMLReplayUploadTransaction callback is defined in mlreplaycallbacks.cpp.

#### 1.6.2.27 MLReplay was unable to load the DestroyMLReplayUploadTransaction callback. The DestroyMLReplayUploadTransaction callback is required to use the GetUploadTransaction callback

Error code
-5050
Error constant
MLREPLAY_LOAD_DESTROY_MLREPLAY_UP-
LOAD_TRANS_FAILED
Probable cause
MLReplay was unable to load the DestroyMLReplayUploadTransaction callback. The
DestroyMLReplayUploadTransaction callback is required to use the GetUploadTransaction callback. Make sure
the DestroyMLReplayUploadTransaction callback is defined in mlreplaycallbacks.cpp.

#### 1.6.2.28 MLReplay was unable to load the FiniIdentifySimulatedClient callback, which is a required callback

Error code
-5048
Error constant
MLREPLAY_LOAD_FINI_IDENTIFY_SIMULATED_CLI-
ENT_FAILED
Probable cause
MLReplay was unable to load the FiniIdentifySimulatedClient callback, which is a required callback. Make sure
the FiniIdentifySimulatedClient callback is defined in mlreplaycallbacks.cpp.

#### 1.6.2.29 MLReplay was unable to load the FreeAllUploadRows callback. The FreeAllUploadRows callback is required to use the GetUploadTransaction callback

Error code
-5055
Error constant
MLREPLAY_LOAD_FREE_ALL_UPLOAD_ROWS_FAILED
Probable cause
MLReplay was unable to load the FreeAllUploadRows callback. The FreeAllUploadRows callback is required
to use the GetUploadTransaction callback. Make sure the FreeAllUploadRows callback is defined in
mlreplaycallbacks.cpp.

#### 1.6.2.30 MLReplay was unable to load the GetNumRows callback. The GetNumRows callback is required to use the GetUploadTransaction callback

Error code
-5058
Error constant
MLREPLAY_LOAD_GET_NUM_ROWS_FAILED

Probable cause
MLReplay was unable to load the GetNumRows callback. The GetNumRows callback is required to use the
GetUploadTransaction callback. Make sure the GetNumRows callback is defined in mlreplaycallbacks.cpp.

#### 1.6.2.31 MLReplay was unable to load the GetNumUploadTables callback. The GetNumUploadTables callback is required to use the GetUploadTransaction callback

Error code
-5056
Error constant
MLREPLAY_LOAD_GET_NUM_UPLOAD_TABLES_FAILED
Probable cause
MLReplay was unable to load the GetNumUploadTables callback. The GetNumUploadTables callback is
required to use the GetUploadTransaction callback. Make sure the GetNumUploadTables callback is defined
in mlreplaycallbacks.cpp.

#### 1.6.2.32 MLReplay was unable to load the GetRow callback. The GetRow callback is required to use the GetUploadTransaction callback

-5059
Error code
Error constant
MLREPLAY_LOAD_GET_ROW_FAILED
Probable cause
MLReplay was unable to load the GetRow callback. The GetRow callback is required to use the
GetUploadTransaction callback. Make sure the GetRow callback is defined in mlreplaycallbacks.cpp.

#### 1.6.2.33 MLReplay was unable to load the GetUploadTable callback. The GetUploadTable callback is required to use the GetUploadTransaction callback

Error code
-5057
Error constant
MLREPLAY_LOAD_GET_UPLOAD_TABLE_FAILED
Probable cause
MLReplay was unable to load the GetUploadTable callback. The GetUploadTable callback is required to use the
GetUploadTransaction callback. Make sure the GetUploadTable callback is defined in mlreplaycallbacks.cpp.

#### 1.6.2.34 MLReplay was unable to load the IdentifySimulatedClient callback, which is a required callback

Error code
-5039
Error constant
MLREPLAY_LOAD_IDENTIFY_SIMULATED_CLIENT_FAILED
Probable cause
MLReplay was unable to load the IdentifySimulatedClient callback, which is a required callback. Make sure the
IdentifySimulatedClient callback is defined in mlreplaycallbacks.cpp.

#### 1.6.2.35 MLReplay was unable to open the file %1 to get the simulated client information

simulated client information
Error code
-5018
Error constant
MLREPLAY_OPEN_SIMULATED_CLIENT_INFO_FAILED
Parameter 1
File name.

Probable cause
MLReplay was unable to open the file that contains the simulated client information.

#### 1.6.2.36 MLReplay was unable to open the recorded protocol file %1

file %1
Error code
-5005
Error constant
MLREPLAY_OPEN_RECORDED_PROTOCOL_FILE_FAILED
Parameter 1
File name.
Probable cause
MLReplay was unable to open the recorded protocol file.

#### 1.6.2.37 No error or unknown error

Error code
Error constant
MLREPLAY_NONE
Probable cause
This code indicates there was either no error or an unknown error.

#### 1.6.2.38 Replay API version '%1' is not valid

Error code
-5071
Error constant
MLREPLAY_INVALID_API_VERSION
Parameter 1
The replay API version

Probable cause
The replay API version retrieved from the specified DLL or shared object is invalid. Regenerate the code using
mlgenreplayapi.

#### 1.6.2.39 Spatial library error: '%1'

Error code
-5070
Error constant
MLREPLAY_SPATIALLIB_ERROR
Parameter 1
The actual error code or error message generated by the
spatial library.
Probable cause
Please look at the actual spatial library error message to find the cause of the error.

#### 1.6.2.40 Support for spatial is not available for this CPU

Error code
-5066
Error constant
MLREPLAY_SPATIAL_SUPPORT_UNAVAILABLE
Probable cause
Spatial data support for 32-bit Windows and 32-bit Linux requires a CPU that supports the SSE2 instructions.
1.6.2.41  The CreateAndInitMLReplayUploadTransaction
callback failed. The
CreateAndInitMLReplayUploadTransaction callback
is required to use the GetUploadTransaction
callback
Error code
-5045

Error constant
MLREPLAY_CREATE_UPLOAD_TRANS_FAILED
Probable cause
The CreateAndInitMLReplayUploadTransaction callback failed. The CreateAndInitMLReplayUploadTransaction
callback is required to use the GetUploadTransaction callback.
1.6.2.42  The format of the specified simulated client
information file does not match the expected
format, which should consist of lines of the form
'[username],[password],[remote ID],[last download
time]'
Error code
-5019
Error constant
MLREPLAY_WRONG_FORMAT_IN_SIMULATED_CLI-
ENT_INFO_FILE
Probable cause
The format of the specified simulated client information file does not match the expected format, which should
consist of lines of the form '[username],[password],[remote ID],[last download time]'

#### 1.6.2.43 The GetUploadTransaction callback failed

-5046
Error code
Error constant
MLREPLAY_GET_UPLOAD_TRANS_FAILED
Probable cause
The GetUploadTransaction callback failed.

#### 1.6.2.44 The GlobalInit callback failed

Error code
-5061
Error constant
MLREPLAY_GLOBAL_INIT_FAILED
Probable cause
The GlobalInit callback failed.

#### 1.6.2.45 The IdentifySimulatedClient callback failed

Error code
-5047
Error constant
MLREPLAY_IDENTIFY_SIMULATED_CLIENT_FAILED
Probable cause
The IdentifySimulatedClient callback failed.

#### 1.6.2.46 The number of simulated clients specified using the -n option is greater than the number of simulated clients specified in the simulated client information file

-5067
Error code
Error constant
MLREPLAY_INVALID_NUM_SIM_CLIENTS_SCI
Probable cause
If the -n <number of simulated clients> option is used with the -sci option, then the number of simulated clients
specified by -n must be less than or equal to the number of simulated clients specified in the simulated client
information file.

#### 1.6.2.47 The recorded protocol file is corrupted

Error code
-5023
Error constant
MLREPLAY_CORRUPT_RECORDED_PROTOCOL_FILE
Probable cause
The recorded protocol file is corrupted. Make sure there were no errors on the MobiLink server while the file
was being recorded.

#### 1.6.2.48 The Replay API Generator failed to create %1

Error code
-5077
Error constant
MLGENREPLAYAPI_MKDIR_ERROR
Parameter 1
The directory in which to put the generated code
Probable cause
The Replay API Generator failed to create the directory in which to put the generated code. Try to create the
directory manually and then re-try.

#### 1.6.2.49 The Replay API Generator failed to generate the replay API

replay API
-5053
Error code
Error constant
MLGENREPLAYAPI_FAILED
Probable cause
The Replay API Generator failed to generate the replay API.

#### 1.6.2.50 The Replay API Generator failed to initialize successfully

successfully
Error code
-5029
Error constant
MLGENREPLAYAPI_FAILED_INIT
Probable cause
The Replay API Generator failed to initialize successfully.

#### 1.6.2.51 The Replay API Generator was unable to close the file, '%1'

file, '%1'
Error code
-5052
Error constant
MLGENREPLAYAPI_FILE_CLOSE_FAILED
Parameter 1
filename
Probable cause
The Replay API Generator was unable to close a file.

#### 1.6.2.52 The Replay API Generator was unable to open the file, '%1'

file, '%1'
-5022
Error code
Error constant
MLGENREPLAYAPI_FILE_OPEN_FAILED
Parameter 1
filename
Probable cause
The Replay API Generator was unable to open a file.

#### 1.6.2.53 The Replay API Generator was unable to write to the file, %1

file, %1
Error code
-5051
Error constant
MLGENREPLAYAPI_FILE_WRITE_FAILED
Parameter 1
filename
Probable cause
The Replay API Generator was unable to write to a file.

#### 1.6.2.54 The replay failed

Error code
-5001
Error constant
MLREPLAY_REPLAY_FAILED
Probable cause
MLReplay was unable to replay the recorded protocol successfully.

#### 1.6.2.55 The ReportEndOfReplay callback returned false even though MLReplay determined that the simulated client was successful

-5060
Error code
Error constant
MLREPLAY_REPORT_END_OF_REPLAY_FAILED
Probable cause
The ReportEndOfReplay callback returned false even though MLReplay determined that the simulated client
was successful.

#### 1.6.2.56 The schema information could not be retrieved from the recorded protocol

the recorded protocol
Error code
-5024
Error constant
MLREPLAY_FAILED_TO_GET_SCHEMA
Probable cause
The schema information could not be retrieved from the recorded protocol. The schema information is
necessary to generate part of the replay API.

#### 1.6.2.57 The schema information read from the recorded protocol could not be parsed successfully

protocol could not be parsed successfully
Error code
-5026
Error constant
MLREPLAY_FAILED_TO_PARSE_SCHEMA
Probable cause
The schema information read from the recorded protocol could not be parsed successfully.

#### 1.6.2.58 The specified password is too long

-5012
Error code
Error constant
MLREPLAY_PASSWORD_TO_LONG
Probable cause
The specified password is too long. The password must not be longer than 128 bytes.

#### 1.6.2.59 The specified remote ID is too long

Error code
-5011
Error constant
MLREPLAY_REMOTE_ID_TO_LONG
Probable cause
The specified remote ID is too long. The remote ID must not be longer than 128 bytes.

#### 1.6.2.60 The specified script version is too long

Error code
-5072
Error constant
MLREPLAY_SCRIPT_VERSION_TO_LONG
Probable cause
The specified script version is too long. The script version must not be longer than 128 bytes.

#### 1.6.2.61 The specified username is too long

-5010
Error code
Error constant
MLREPLAY_USER_NAME_TO_LONG
Probable cause
The specified username is too long. The username must not be longer than 128 bytes.

#### 1.6.2.62 Unable to determine the transaction information from the recorded protocol

from the recorded protocol
Error code
-5028
Error constant
MLGENREPLAYAPI_FAILED_TO_LOAD_TRANS_INFO
Probable cause
Unable to determine the number of inserts, updates, and deletes per table, per transaction, per
synchronization from the recorded protocol.

#### 1.6.2.63 Unable to determine whether or not the recorded protocol came from a DBMLSync client

protocol came from a DBMLSync client
Error code
-5062
Error constant
MLGENREPLAYAPI_FAILED_TO_DETERMINE_CLIENT_TYPE
Probable cause
Unable to determine whether or not the recorded protocol came from a DBMLSync client. The most likely
cause is a corrupt recorded protocol file.

#### 1.6.2.64 Unable to initialize the log

-5017
Error code
Error constant
MLREPLAY_INIT_LOG_FAILED
Probable cause
MLReplay or the MLReplay API generator was unable to initialize the log file.

#### 1.6.2.65 Unable to open the log file, %1

Error code
-5016
Error constant
MLREPLAY_OPEN_LOG_FAILED
Parameter 1
Log file name.
Probable cause
MLReplay or the MLReplay API generator was unable to open the log file.

### 1.7 MobiLink Replay Utility Warning Messages

The MobiLink Replay utility warning messages are written to the MobiLink Replay utility message log.
Each message has a numeric code. Many of the messages contain the characters %1, %2, and so on. These
characters are replaced by the parameters to the message.

#### 1.7.1 MobiLink Replay Utility Warning Messages Sorted by Error Code

Error Code
Error code
Message text
The recorded protocol being replayed is uploading schema
information. Therefore, this recorded protocol cannot be re-
played again without restarting the MobiLink server
MLReplay was unable to load the ReportEndOfReplay call-
back

Error code
Message text
MLReplay was unable to load the GetUploadTransaction call-

#### 1.7.2 MobiLink Replay Utility Warning Messages Listed by Message Text

Message Text

#### 1.7.2.1 MLReplay was unable to load the DelayCreationOfSimulatedClient callback

Error code
Error constant
MLREPLAY_LOAD_DELAY_CREATION_OF_SIMULATED_CLI-
ENT_FAILED
Probable cause
MLReplay was unable to load the DelayCreationOfSimulatedClient callback. If you expected MLReplay to use
the DelayCreationOfSimulatedClient callback, make sure it is defined in mlreplaycallbacks.cpp.

#### 1.7.2.2 MLReplay was unable to load the DelayDestructionOfSimulatedClient callback

Error code
Error constant
MLREPLAY_LOAD_DELAY_DESTRUCTION_OF_SIMU-
LATED_CLIENT_FAILED

Probable cause
MLReplay was unable to load the DelayDestructionOfSimulatedClient callback. If you expected MLReplay to
use the DelayDestructionOfSimulatedClient callback, make sure it is defined in mlreplaycallbacks.cpp.

#### 1.7.2.3 MLReplay was unable to load the DelayStartOfReplay callback

Error code
Error constant
MLREPLAY_LOAD_DELAY_START_OF_REPLAY_FAILED
Probable cause
MLReplay was unable to load the DelayStartOfReplay callback. If you expected MLReplay to use the
DelayStartOfReplay callback, make sure it is defined in mlreplaycallbacks.cpp.

#### 1.7.2.4 MLReplay was unable to load the GetDownloadApplyTime callback

Error code
Error constant
MLREPLAY_LOAD_GET_DOWNLOAD_APPLY_TIME_FAILED
Probable cause
MLReplay was unable to load the GetDownloadApplyTime callback. If you expected MLReplay to use the
GetDownloadApplyTime callback, make sure it is defined in mlreplaycallbacks.cpp.

#### 1.7.2.5 MLReplay was unable to load the GetUploadTransaction callback

Error code
Error constant
MLREPLAY_LOAD_GET_UPLOAD_TRANS_FAILED

Probable cause
MLReplay was unable to load the GetUploadTransaction callback.

#### 1.7.2.6 MLReplay was unable to load the GlobalFini callback

Error code
Error constant
MLREPLAY_LOAD_GLOBAL_FINI_FAILED
Probable cause
MLReplay was unable to load the GlobalFini callback. If you expected MLReplay to use the GlobalFini callback,
make sure it is defined in mlreplaycallbacks.cpp.

#### 1.7.2.7 MLReplay was unable to load the GlobalInit callback

Error code
Error constant
MLREPLAY_LOAD_GLOBAL_INIT_FAILED
Probable cause
MLReplay was unable to load the GlobalInit callback. If you expected MLReplay to use the GlobalInit callback,
make sure it is defined in mlreplaycallbacks.cpp.

#### 1.7.2.8 MLReplay was unable to load the ReportEndOfReplay callback

Error code
Error constant
MLREPLAY_LOAD_REPORT_END_OF_REPLAY_FAILED

Probable cause
MLReplay was unable to load the ReportEndOfReplay callback. If you expected MLReplay to use the
ReportEndOfReplay callback, make sure it is defined in mlreplaycallbacks.cpp.

#### 1.7.2.9 Repetition %1 of replaying the recorded protocol is being skipped because DelayStartOfReplay returned false

Error code
Error constant
MLREPLAY_SKIPPING_REPLAY
Parameter 1
repetition number
Probable cause
The specified repetition of replaying the recorded protocol is being skipped because DelayStartOfReplay
returned false.

#### 1.7.2.10 Replay API version '%1' is not the latest version of the replay API

the replay API
Error code
Error constant
MLREPLAY_OLD_API_VERSION
Parameter 1
The API version
Probable cause
The replay API being used is not the latest version. Regenerate the code with the latest mlgenreplayapi to get
the latest replay API.

#### 1.7.2.11 Simulated client '%1' was not created because DelayCreationOfSimulatedClient returned false

DelayCreationOfSimulatedClient returned false
Error code
Error constant
MLREPLAY_NOT_CREATING_SIMULATED_CLIENT
Parameter 1
Simulated client number
Probable cause
The specified simulated client was not created because DelayCreationOfSimulatedClient returned false.

#### 1.7.2.12 Spatial library warning: '%1'

Error code
Error constant
MLREPLAY_SPATIALLIB_WARNING
Parameter 1
The actual warning code generated by the spatial library.
Probable cause
Please look at the actual spatial library warning message to find the cause of the warning.

#### 1.7.2.13 The directory, %1, does not exist; The Replay API Generator is creating it

Generator is creating it
Error code
Error constant
MLGENREPLAYAPI_MKDIR_WARNING
Parameter 1
The directory in which the generated code will be put
Probable cause
The Replay API Generator is creating the directory in which to put the generated code because it does not exist.
To avoid this warning, create the directory manually.

#### 1.7.2.14 The format of the simulated client information file being used does not match the latest format

being used does not match the latest format
Error code
Error constant
MLREPLAY_OLD_SCI_VERSION
Probable cause
The format of the simulated client information file does not match the latest format which is lines of the form
<username>,<password>,<remote ID>,<last download time>,<script version>.

#### 1.7.2.15 The log file could not be renamed; continuing to append to the original log file

append to the original log file
Error code
Error constant
MLREPLAY_CANNOT_RENAME_LOG
Probable cause
The log file could not be renamed to a file with filename like YYMMDDxx.rlg because all YYMMDDxx.rlg filename
combinations have been used for the current day. To avoid this issue, make the size specified with the -os
option larger.

#### 1.7.2.16 The recorded protocol being replayed is uploading schema information. Therefore, this recorded protocol cannot be replayed again without restarting the MobiLink server

Error code
Error constant
MLREPLAY_SCHEMA_INFO_SENT

Probable cause
The recorded protocol being replayed is uploading schema information. Therefore, this recorded protocol
cannot be replayed again without restarting the MobiLink server.

#### 1.7.2.17 There was no schema information in the recorded protocol which is necessary to generate some of the replay API

Error code
Error constant
MLREPLAY_NO_SCHEMA
Probable cause
The recorded protocol did not contain schema information which is necessary to generate some of the replay
API. Any part of the replay API that does not depend on the schema information will still be generated.

### 1.8 Relay Server Error Messages

Each Relay Server error has a numeric error code.
Many of the error messages contain the characters %1, %2, and so on. These characters are replaced by the
parameters to the error message.
The text of each error message contains a prefix describing the type of error or warning:
RSE
A Relay Server error.
RSF
A Relay Server fatal error.
RSW
A Relay Server warning.

#### 1.8.1 Relay Server Error Messages Sorted by Error Code

Error code
Message text
RSE0: No error
RSE1000: Client used a URL with no backend farm specified

RSE1001: Client specified an unrecognized farm name '%1'
in the URL
RSE1002: Outbound enabler specified an unrecognized farm
name '%1'
RSE1003: Failed decoding session id '%1' from client request

RSE1004: Outbound Enabler attempted to connect with in-
valid farm index: %1
RSE1005: Relay Server configuration request has been can-
celed
RSE1006: Timed out waiting for SQL Anywhere Monitor
commands
RSE1007: The SQL Anywhere Monitor has disconnected pre-
maturely
RSE1008: Communication error [SYS%1: %2] occurred
while reading SQL Anywhere Monitor request
RSE1009: Communication error [SYS%1: %2] occurred
while writing response back to SQL Anywhere Monitor
RSE1010: Cannot update configuration concurrently
RSE1011: Invalid or malformed session parameter in URL:
'%1'
RSE1012: Request from Outbound Enabler should not be
chunked
RSE1013: Request from Outbound Enabler cannot be
smaller than minimum packet size
RSE1014: Timed out waiting for the first packet from the
Outbound Enabler
RSE1015: Invalid first '%1' packet from the Outbound Enabler


Error code
Message text
RSE1016: Timed out disconnecting up channel for server

#### 1.8.2.1 RSE0: No error

Error code
Error constant
RSE_NO_ERROR
Probable cause
This code indicates there was no error.

#### 1.8.2.2 RSE1000: Client used a URL with no backend farm specified

Error code
Error constant
RSE_ROOT_NO_FARM_IN_URL

Probable cause
A client did not specify a backend farm in the URL. The request was aborted.

#### 1.8.2.3 RSE1001: Client specified an unrecognized farm name '%1' in the URL

Error code
Error constant
RSE_ROOT_FARM_NOT_FOUND_BY_CLIENT
Parameter 1
Backend farm name
Probable cause
The Relay Server is not configured with the given backend farm. The request was aborted. Please make
sure the backend farm name sent from the client matches a configured backend farm name. Farm name
comparison is case sensitive.

#### 1.8.2.4 RSE1002: Outbound enabler specified an unrecognized farm name '%1'

Error code
Error constant
RSE_ROOT_FARM_NOT_FOUND_BY_SERVER
Parameter 1
Backend farm name
Probable cause
The Relay Server is not configured with the given backend farm, so the connection was rejected. Please make
sure the backend farm name specified by the outbound enabler matches a configured backend farm name.
Farm name comparison is case sensitive.

#### 1.8.2.5 RSE1003: Failed decoding session id '%1' from client request

Error code
Error constant
RSE_ROOT_BAD_SESSION_ID
Parameter 1
Relay Server session id
Probable cause
The client sent an invalid session id. The request was aborted. Restarting the session at the client should
resolve this error.

#### 1.8.2.6 RSE1004: Outbound Enabler attempted to connect with invalid farm index: %1

Error code
Error constant
RSE_ROOT_CHANNEL_CONNECT_WITH_INVA-
LID_FARM_IDX
Parameter 1
Backend farm index
Probable cause
The backend farm was previously removed from the Relay Server configuration. The connection was rejected.
Make sure the outbound enabler uses a configured backend farm name before restarting the outbound
enabler.

#### 1.8.2.7 RSE1005: Relay Server configuration request has been canceled

Error code
Error constant
RSE_ROOT_ADMIN_CANCEL

Probable cause
A configuration request has been canceled. The previous configuration will remain in effect. If you still want the
new Relay Server configuration, reapply it.

#### 1.8.2.8 RSE1006: Timed out waiting for SQL Anywhere Monitor commands

Error code
Error constant
RSE_ROOT_MON_READ_TIMEOUT
Probable cause
The SA monitor was not responding in a timely manner, so it was disconnected. The SA monitor should
automatically reconnect some time after this error. If this error persists, make sure the machine running the SA
monitor has enough resources.
  Note
Adobe will stop updating and distributing the Flash Player at the end of 2020. Because the SQL Anywhere
Monitor is based on Flash, you cannot use it once Flash support ends. In many cases, tasks that were
previously performed in the Monitor can be performed in the SQL Anywhere Cockpit.

#### 1.8.2.9 RSE1007: The SQL Anywhere Monitor has disconnected prematurely

Error code
Error constant
RSE_ROOT_MON_DISCONNECT_EARLY
Probable cause
The SA monitor has disconnected prematurely. The SA monitor should automatically reconnect some time
after this error.

  Note
Adobe will stop updating and distributing the Flash Player at the end of 2020. Because the SQL Anywhere
Monitor is based on Flash, you cannot use it once Flash support ends. In many cases, tasks that were
previously performed in the Monitor can be performed in the SQL Anywhere Cockpit.

#### 1.8.2.10 RSE1008: Communication error [SYS%1: %2] occurred while reading SQL Anywhere Monitor request

Error code
Error constant
RSE_ROOT_MON_READ_FAIL
Parameter 1
System error code
Parameter 2
System error message
Probable cause
There was a communication error reading from the SA monitor, and the SA monitor connection was
disconnected. If the SA monitor is still running properly, it should automatically reconnect some time after
this error.
  Note
Adobe will stop updating and distributing the Flash Player at the end of 2020. Because the SQL Anywhere
Monitor is based on Flash, you cannot use it once Flash support ends. In many cases, tasks that were
previously performed in the Monitor can be performed in the SQL Anywhere Cockpit.

#### 1.8.2.11 RSE1009: Communication error [SYS%1: %2] occurred while writing response back to SQL Anywhere Monitor

Error code
Error constant
RSE_ROOT_MON_WRITE_FAIL
Parameter 1
System error code
Parameter 2
System error message

Probable cause
There was a communication error writing to the SA monitor, and the SA monitor connection was disconnected.
If the SA monitor is still running properly, it should automatically reconnect some time after this error.
  Note
Adobe will stop updating and distributing the Flash Player at the end of 2020. Because the SQL Anywhere
Monitor is based on Flash, you cannot use it once Flash support ends. In many cases, tasks that were
previously performed in the Monitor can be performed in the SQL Anywhere Cockpit.

#### 1.8.2.12 RSE1010: Cannot update configuration concurrently

Error code
Error constant
RSE_ROOT_NO_CONCUR_CONFIG_UPDATE
Probable cause
A second configuration request was attempted while another was in progress. The second configuration
request was aborted. Please wait until the current configuration update is complete before attempting another
configuration update.

#### 1.8.2.13 RSE1011: Invalid or malformed session parameter in URL: '%1'

URL: '%1'
Error code
Error constant
RSE_ROOT_BAD_AFQ
Parameter 1
Value of IAS-RS-AFQ session parameter
Probable cause
The Relay Server was unable to interpret the session parameter in the URL sent up from the client. The request
was aborted. There might be a compatibility issue between Relay Server and the client software or the backend
server. Please consult the documentation, or technical support, for your client and/or backend server.

#### 1.8.2.14 RSE1012: Request from Outbound Enabler should not be chunked

not be chunked
Error code
Error constant
RSE_ROOT_INVALID_CHUNKED_OE_REQUEST
Probable cause
This was a bad request likely not issued by an outbound enabler. The request was ignored. Make sure only
outbound enablers are accessing the server extension. If this error persists and prevents Relay Server access
to your backend farm(s), please contact technical support.

#### 1.8.2.15 RSE1013: Request from Outbound Enabler cannot be smaller than minimum packet size

smaller than minimum packet size
Error code
Error constant
RSE_ROOT_OE_REQUEST_TOO_SMALL
Probable cause
This was a bad request likely not issued by an outbound enabler. The request was ignored. Make sure only
outbound enablers are accessing the server extension. If this error persists and prevents Relay Server access
to your backend farm(s), please contact technical support.

#### 1.8.2.16 RSE1014: Timed out waiting for the first packet from the Outbound Enabler

the Outbound Enabler
Error code
Error constant
RSE_ROOT_OE_FIRST_READ_TIMEOUT
Probable cause
The outbound enabler has not responded in a timely manner, so the connection was aborted. The initial read
timeout is 60 seconds before the channels are established.

#### 1.8.2.17 RSE1015: Invalid first '%1' packet from the Outbound Enabler

Enabler
Error code
Error constant
RSE_ROOT_INVALID_FIRST_OE_PACKET
Parameter 1
Outbound enabler packet type
Probable cause
This was a bad request likely not issued by an outbound enabler. Make sure only outbound enablers are
accessing the server extension. If this error persists and prevents Relay Server access to your backend farm(s),
please contact technical support.

#### 1.8.2.18 RSE1016: Timed out disconnecting up channel for server '%1' in farm '%2'

server '%1' in farm '%2'
Error code
Error constant
RSE_ROOT_TIMEOUT_DISCONNECT_CHANNEL
Probable cause
The outbound enabler was not responding to the Relay Server shutdown in a timely manner. Hard shutdown
was initiated, and outstanding channels and client connections were all aborted abruptly.

#### 1.8.2.19 RSE1017: Timed out waiting for down channels and clients to detach from shared memory during soft shutdown

Error code
Error constant
RSE_ROOT_DETACH_TOO_LONG

Probable cause
All up channels were stopped but some client connection(s) or down channels were not responding to the
Relay Server shutdown in a timely manner. Hard shutdown was initiated, and outstanding channels and client
connections were all aborted abruptly.

#### 1.8.2.20 RSE11017: Backend farm name '%1' not found while adding backend server '%2'

adding backend server '%2'
Error code
Error constant
RSF_ROOT_FARM_NOT_FOUND_ADDING_SERVER
Parameter 1
Backend farm name
Parameter 2
Backend server name
Probable cause
Each backend farm must be added to the configuration before adding a backend server to it. Make sure your
outbound enabler is configured with the correct backend farm name.

#### 1.8.2.21 RSE2000: Backend farm '%1' is currently disabled

Error code
Error constant
RSE_FARM_DISABLED
Parameter 1
Backend farm name
Probable cause
The backend farm was found in the Relay Server configuration but it was disabled. Either change the backend
farm name sent from the client or the outbound enabler to an enabled name or enable the given backend farm.

#### 1.8.2.22 RSE2001: Client security requirement is not satisfied in farm '%1'

satisfied in farm '%1'
Error code
Error constant
RSE_FARM_CLIENT_SECURITY_DISALLOWED
Parameter 1
Backend farm name
Probable cause
The backend farm was set up to require specific client security using the client_security property but the client
accessing the farm doesn't satisfy the requirement. The request was aborted.

#### 1.8.2.23 RSE2002: Failed to assign client request to any backend server in farm '%1' within %2 sec of application timeout

Error code
Error constant
RSE_FARM_SERVER_NOT_AVAILABLE
Parameter 1
Backend farm name
Parameter 2
Application timeout limit in seconds
Probable cause
Either there was no backend server available at the moment or the servers were extremely busy. The request
was aborted. Retry the request later.

#### 1.8.2.24 RSE2003: Failed to use session id from client because backend server '%1' was not found in farm '%2'

Error code
Error constant
RSE_FARM_BAD_SERVER_NAME_IN_SESSION_ID
Parameter 1
Backend server name

Parameter 2
Backend farm name
Probable cause
The client request had a bad backend server name in the session id. The request was aborted. The backend
server might have been removed or disabled from the Relay Server configuration. This error is usually
temporary, due to a configuration change. Starting a new client session should succeed as long as there is
at least one active backend server in the farm.

#### 1.8.2.25 RSE2004: Backend security requirement is not satisfied in backend farm '%1'

satisfied in backend farm '%1'
Error code
Error constant
RSE_FARM_SERVER_SECURITY_DISALLOWED
Parameter 1
Backend farm name
Probable cause
The backend farm was set up to require specific backend security using the backend_security property but the
outbound enabler accessing the farm doesn't satisfy the requirement. The connection was aborted.

#### 1.8.2.26 RSE2005: Backend server '%1' is not a recognized member of backend farm '%2'

member of backend farm '%2'
Error code
Error constant
RSE_FARM_SERVER_NOT_CONFIGURED
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The given backend server name is not a known member of the given backend farm. Make sure the backend
server and backend farm names specified to the outbound enabler match the corresponding names in the
Relay Server configuration. Farm and server name comparisons are case sensitive.

#### 1.8.2.27 RSE2006: Outbound enabler is connecting a channel with invalid server index %1 in farm '%2'

with invalid server index %1 in farm '%2'
Error code
Error constant
RSE_FARM_CHANNEL_CONNECT_WITH_INVA-
LID_SERVER_IDX
Parameter 1
Backend server index
Parameter 2
Backend farm name
Probable cause
The invalid server index usually occurs when a backend server was removed or disabled from the Relay Server
configuration while a multi-request session was active. The connection was rejected. This error is usually
temporary, due to a configuration change. Starting a new client session should succeed as long as there is at
least one active backend server in the farm.

#### 1.8.2.28 RSE3000: Incorrect MAC address(es) '%1' for backend server '%2' in backend farm '%3'

backend server '%2' in backend farm '%3'
Error code
Error constant
RSE_SERVER_UNAUTHORIZED_MAC
Parameter 1
Mac address(es) of the outbound enabler
Parameter 2
Backend server name
Parameter 3
Backend farm name
Probable cause
The Relay Server was configured to require MAC address verification when the outbound enabler connects for
the named backend server, but the connecting outbound enabler failed to match the required MAC address.
The connection was rejected. Make sure the configured MAC address is correct.

#### 1.8.2.29 RSE3001: Got token '%1' for backend server '%2' in farm '%3' but expecting '%4'

farm '%3' but expecting '%4'
Error code
Error constant
RSE_SERVER_UNAUTHORIZED_TOKEN
Parameter 1
Received token
Parameter 2
Backend server name
Parameter 3
Backend farm name
Parameter 4
Expected token
Probable cause
The backend server was configured to require token verification when the outbound enabler connects for
the named backend server, but the connecting outbound enabler failed to match the required token. The
connection was rejected. Make sure the configured token is correct.

#### 1.8.2.30 RSE3002: Backend server '%1' in backend farm '%2' is using an unsupported outbound enabler

is using an unsupported outbound enabler
Error code
Error constant
RSE_SERVER_BETA_OE_NOT_SUPPORTED
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The outbound enabler must be upgraded to a newer, supported version.

#### 1.8.2.31 RSE3003: Redundant outbound enabler connection for backend server '%1' in backend farm '%2' was ignored

Error code

Error constant
RSE_SERVER_REDUNDANT_OE
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
A second outbound enabler connected using the same server id as an existing connected outbound enabler.
The new instance was rejected. Make sure all outbound enablers are properly configured with unique server
ids.

#### 1.8.2.32 RSE3004: Communication error [SYS%1: %2] occurred while reading from down channel of backend server '%3' in backend farm '%4'

Error code
Error constant
RSE_SERVER_READ_FAIL
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Probable cause
This error can be caused by a network problem between the Relay Server and the outbound enabler. The
outbound enabler will normally try to reconnect some time after this error.

#### 1.8.2.33 RSE3005: Mismatched outbound enabler instance for backend server '%1' in backend farm '%2'

for backend server '%1' in backend farm '%2'
Error code
Error constant
RSE_SERVER_CONNECT_WITH_MISMATCH_OE_UUID
Parameter 1
Backend server name
Parameter 2
Backend farm name

Probable cause
This error can happen if there are contending outbound enablers using the same server id. Each outbound
enabler must have a unique server id. You should keep your backend server token confidential. Renew your
backend server token with your Relay Server administrator if you suspect your token has been jeopardized.

#### 1.8.2.34 RSE3006: Mismatched Relay Server instance for backend server '%1' in backend farm '%2'

backend server '%1' in backend farm '%2'
Error code
Error constant
RSE_SERVER_CONNECT_WITH_MISMATCH_RS_UUID
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
This error can happen if there are contending outbound enablers using the same server id. Each outbound
enabler must have a unique server id. You should keep your backend server token confidential. Renew your
backend server token with your Relay Server administrator if you suspect your token has been jeopardized.

#### 1.8.2.35 RSE3007: Timed out engaging reconnected up channel for backend server '%1' in backend farm '%2' after %3 seconds

Error code
Error constant
RSE_SERVER_FAIL_ENGAGE_UPCHANNEL
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Outbound enabler timeout limit
Probable cause
If this error occurs repeatedly, the Relay Server may need to be restarted.

#### 1.8.2.36 RSE3008: Backend server channel has been aborted because the backend server '%1' in backend farm '%2' has been removed or disabled from the Relay Server configuration

Error code
Error constant
RSE_SERVER_DISABLED
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
Existing requests to this backend server will be interrupted. This is normally a temporary error. Once the
existing requests are aborted, the Relay Server will no longer redirect traffic to the given backend server.

#### 1.8.2.37 RSE3009: Communication error [SYS%1: %2] occurred while writing to up channel of backend server '%3' in backend farm '%4'

Error code
Error constant
RSE_SERVER_WRITE_FAIL
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Probable cause
A network communication error occurred when writing to the backend server. The outbound enabler will
normally try to reconnect some time after this error.

#### 1.8.2.38 RSE3010: The outbound enabler of backend server '%1' in backend farm '%2' is using the -af switch which is longer supported. Please upgrade your outbound enabler

Error code
Error constant
RSE_SERVER_OLD_OE_WITH_DASH_AF
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The -af switch was introduced to the outbound enabler for Afaria server but the use of the switch is no longer
supported in the current Relay Server. In the current Relay Server, there is no need to use the -af switch on the
outbound enabler. Please upgrade the outbound enabler.

#### 1.8.2.39 RSE3011: Unknown event happened on backend server '%1' in backend farm '%2'

server '%1' in backend farm '%2'
Error code
Error constant
RSE_SERVER_UNKNOWN_OE_EVENT
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
Make sure only outbound enablers are accessing the server extension. Please contact technical support if the
problem persists.

#### 1.8.2.40 RSE3012: Invalid packet from backend server '%1' in backend farm '%2'

backend farm '%2'
Error code

Error constant
RSE_SERVER_PROTOCOL_ERROR
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
Make sure only outbound enablers are accessing the server extension. Please contact technical support if the
problem persists.

#### 1.8.2.41 RSE3013: Timed out waiting for activity from outbound enabler for backend server '%1' in backend farm '%2' after %3 seconds

Error code
Error constant
RSE_SERVER_LIVENESS_TIMEOUT
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Outbound enabler timeout limit
Probable cause
The outbound enabler was not responding and the channels associated with it were aborted. It is likely that
current multi-request sessions targeting the given backend server also failed. If the outbound enabler doesn't
automatically reconnect, verify that it is functioning properly.

#### 1.8.2.42 RSE3014: The outbound enabler for backend server '%1' in backend farm '%2' disconnected prematurely

Error code
Error constant
RSE_SERVER_DISCONNECT_EARLY
Parameter 1
Backend server name
Parameter 2
Backend farm name

Probable cause
This can be caused by a network problem or abrupt termination of the outbound enabler process. It is likely
that current multi-request sessions targeting the given backend server failed. If the outbound enabler doesn't
automatically reconnect, verify that it is functioning properly.

#### 1.8.2.43 RSE3015: Failed to lock urgent queue

Error code
Error constant
RSE_SERVER_LOCK_URGENT_QUEUE_FAIL
Probable cause
The Relay Server timeout locking the urgent queue for flow control. This may happen under stress. If this
happen frequently, consider adding more Relay Servers to the farm.

#### 1.8.2.44 RSE3016: Failed to signal the Outbound Enabler for flow control purpose because %1

flow control purpose because %1
Error code
Error constant
RSE_SERVER_URGENT_SIGNAL_FAIL
Parameter 1
Reason of the failure (for technical support)
Probable cause
This may happen under extreme load and the Relay Server may run out of shared memory. If this happen
frequently, consider adding more Relay Servers to the farm.

#### 1.8.2.45 RSE3017: Request with missing '%1' header from malicious Outbound Enabler

malicious Outbound Enabler
Error code
Error constant
RSE_SERVER_MISSING_HEADER

Parameter 1
Anticipated header name
Probable cause
A malicious request being refused by the Relay Server.

#### 1.8.2.46 RSE3018: Request with incorrect header '%1: %2' from malicious Outbound Enabler

from malicious Outbound Enabler
Error code
Error constant
RSE_SERVER_INCORRECT_HEADER_VALUE
Parameter 1
Header name
Parameter 2
Header value
Probable cause
A malicious request being refused by the Relay Server.

#### 1.8.2.47 RSE3019: Incompatible with Outbound Enabler protocol version %1

protocol version %1
Error code
Error constant
RSE_SERVER_INCOMPATIBLE
Parameter 1
Requested protocol version
Probable cause
Request from an incompatible Outbound Enabler has been ignored.

#### 1.8.2.48 RSE3020: Ignored an add junction request

Error code
Error constant
RSE_SERVER_CANNOT_ADD_JUNCTION
Probable cause
Cannot have more junction than what is specified in the max_junction property.

#### 1.8.2.49 RSE3021: There is no junction %1

Error code
Error constant
RSE_SERVER_NO_SUCH_JUNCTION
Parameter 1
Junction index
Probable cause
This may be caused by a Relay Server restart. The Outbound Enabler will automatically replenish the lost
junction.

#### 1.8.2.50 RSE3022: Automatic configuration of backend server '%1' in backend farm '%2' failed with mismatched token

Error code
Error constant
RSE_SERVER_BAD_AUTO_CONFIG_TOKEN
Parameter 1
Backend server name
Parameter 2
Backend farm name

Probable cause
Automatic configuration is enabled in your Relay Server configuration and an Outbound Enabler is connecting
an unseen backend server name but the token provided didn't match the farm-wide token perviously
established.

#### 1.8.2.51 RSE4000: Timed out waiting for up channel of backend server '%1' in backend farm '%2' after %3 seconds

Error code
Error constant
RSE_CLIENT_TIMEOUT_WAITING_FOR_UP_CHANNEL
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Application timeout limit
Probable cause
The backend server was not available due to the timeout. The request was aborted. If the outbound enabler
doesn't automatically reconnect, verify that it is functioning properly.

#### 1.8.2.52 RSE4001: Timed out reading from client of backend server '%1' in backend farm '%2' after %3 seconds

server '%1' in backend farm '%2' after %3 seconds
Error code
Error constant
RSE_CLIENT_READ_TIMEOUT
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Application timeout limit
Probable cause
The Relay Server was expecting more bytes in the request but the client did not send any. The request was
aborted. The client will likely see an error and should retry the request.

#### 1.8.2.53 RSE4002: Communication error [SYS%1: %2] occurred while reading from client of backend server '%3' in backend farm '%4'

Error code
Error constant
RSE_CLIENT_READ_FAIL
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Probable cause
This can be caused by a network communication issue between the Relay Server and the client. The request
was aborted. The client will likely see an error and should retry the request.

#### 1.8.2.54 RSE4003: Client of backend server '%1' in backend farm '%2' timed out waiting for backend server response after '%3' seconds

Error code
Error constant
RSE_CLIENT_TIMEOUT_WAITING_FOR_RESPONSE
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Application timeout limit
Probable cause
The client was expecting a backend server response but the backend server did not send it on time. The
request was aborted. The client will likely see an error and should retry the request.

#### 1.8.2.55 RSE4004: Outbound enabler of backend server '%1' in backend farm '%2' reports session error '%7''%3' with parameters '%4', '%5', '%6'

Error code
Error constant
RSE_CLIENT_RSOE_REPORT_SESSION_ERROR
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Outbound enabler error code
Parameter 4
Outbound enabler error parameter number 1
Parameter 5
Outbound enabler error parameter number 2
Parameter 6
Outbound enabler error parameter number 3
Parameter 7
Qualifier for the class of error. OEF for fatal error or OEE for
non-fatal error
Probable cause
The outbound enabler reported an error handling traffic for the client session. The session was aborted. The
client will likely see an error and should retry the request.

#### 1.8.2.56 RSE4005: Aborting client request to backend server '%1' in backend farm '%2' due to backend server being unavailable

Error code
Error constant
RSE_CLIENT_ABORT_BY_BACKEND_DOWN
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The outbound enabler will continue to monitor the backend server and attempt to recover service
automatically when the backend server is restored.

#### 1.8.2.57 RSE4006: Aborting client request to backend server '%1' in backend farm '%2' due to outbound enabler shutdown

'%1' in backend farm '%2' due to outbound enabler
shutdown
Error code
Error constant
RSE_CLIENT_ABORT_BY_OE_SHUTDOWN
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
Service from this backend server will not be available unless the outbound enabler for the backend server is
restarted.

#### 1.8.2.58 RSE4007: Aborting client request to backend server '%1' in backend farm '%2' due to unexpected down channel packet opcode %3 from the outbound enabler

Error code
Error constant
RSE_CLIENT_ABORT_BY_RSOE_PROTOCOL_ERROR
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Down channel packet opcode
Probable cause
Make sure only outbound enablers are accessing the server extension. If this error persists, please contact
technical support.

#### 1.8.2.59 RSE4008: Communication error [SYS%1: %2] occurred while writing response to client of backend server '%3' in backend farm '%4' when '%5'

Error code
Error constant
RSE_CLIENT_WRITE_FAIL
Parameter 1
System error code if any, otherwise 0
Parameter 2
System error message if any, otherwise NULL
Parameter 3
Backend server name
Parameter 4
Backend farm name
Parameter 5
Internal context
Probable cause
The client request was aborted but the backend server should remain usable to other clients. If this error
persists, please contact technical support.

#### 1.8.2.60 RSE4009: Unexpected end of request while reading from client of backend server '%1' in backend farm '%2'

from client of backend server '%1' in backend farm
'%2'
Error code
Error constant
RSE_CLIENT_READ_NOT_ENOUGH_CONTENT
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
There was an error at the client or in an intermediary that caused the request to end prematurely. The client
should retry the request. If this error persists, please contact technical support.

#### 1.8.2.61 RSE4010: Client of backend server '%1' in backend farm '%2' ignoring mis-routed OE_SERVER_RESPONSE packet with request index %3

Error code
Error constant
RSE_CLIENT_UNEXPECTED_REQUEST_INDEX
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Internal request index
Probable cause
The mis-routed packet was ignored and was not delivered to the client. The request from the intended client of
the mis-routed packet will be aborted. If this error persists, please contact technical support.

#### 1.8.2.62 RSE4011: Client of backend server '%1' in backend farm '%2' ignored mis-routed OE_SERVER_RESPONSE packet with session number %3

Error code
Error constant
RSE_CLIENT_UNEXPECTED_SESSION_NUMBER
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Internal session number
Probable cause
The mis-routed packet was ignored and was not delivered to the client. The session from the intended client of
the mis-routed packet will be aborted. If this error persists, please contact technical support.

#### 1.8.2.63 RSE4012: Client of backend server '%1' in backend farm '%2' ignored mis-routed OE_SERVER_RESPONSE packet with session fingerprint %3 while expecting %4

Error code
Error constant
RSE_CLIENT_UNEXPECTED_SESSION_FINGER_PRINT
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Internal session fingerprint of the received packet
Parameter 4
Internal session fingerprint of the request that received the
packet
Probable cause
The mis-routed packet was ignored and was not delivered to the client. The session from the intended client of
the mis-routed packet will be aborted. If this error persists, please contact technical support.

#### 1.8.2.64 RSE4013: Forwarder certificate subject '%1' does not match pattern '%2'

not match pattern '%2'
Error code
Error constant
RSE_CLIENT_MISMATCH_FORWARDER_SUBJECT
Parameter 1
Subject of forwarder certificate
Parameter 2
Required pattern
Probable cause
The forwarder certificate was issued with a subject not matching the required pattern specified in the
forwarder_certificate_subject property of the backend farm in the Relay Server configuration. Make sure the
forwarder has a valid certificate and the pattern is specified correctly.

#### 1.8.2.65 RSE4014: Forwarder certificate issuer '%1' does not match pattern '%2'

match pattern '%2'
Error code
Error constant
RSE_CLIENT_MISMATCH_FORWARDER_ISSUER
Parameter 1
Issuer of forwarder certificate
Parameter 2
Required pattern
Probable cause
The forwarder certificate issuer does not match the required pattern specified in the
forwarder_certificate_issuer property of the backend farm in the Relay Server configuration. Make sure the
forwarder has a valid certificate and the pattern is specified correctly.

#### 1.8.2.66 RSE4015: Outbound enabler of backend server '%1' in backend farm '%2' reports session error %3 with parameters '%4', '%5', '%6'

Error code
Error constant
RSE_CLIENT_RSOE_REPORT_SESSION_ERR
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Outbound enabler error name and id
Parameter 4
Outbound enabler error parameter number 1
Parameter 5
Outbound enabler error parameter number 2
Parameter 6
Outbound enabler error parameter number 3
Probable cause
The outbound enabler reported an error handling traffic for the client session. The session was aborted. The
client will likely see an error and should retry the request.

#### 1.8.2.67 RSE4016: Failed to extract next header from response near '%1'

response near '%1'
Error code
Error constant
RSE_CLIENT_RESPONSE_HEADER_ERR
Parameter 1
Content of the malformed response near where the problem
occurs
Probable cause
The Relay Server failed to process the server response while extracting HTTP headers. The server response
may be malformed. Use verbosity level 5 to examine the server response to identify the source of
the malformed data. Removing or correcting the malformed data depends on the backend deployment
environment and is beyond the scope of this error description.

#### 1.8.2.68 RSE4017: The Outbound enabler reports error %1(%2) with parameters (%3)

%1(%2) with parameters (%3)
Error code
Error constant
RSE_CLIENT_RSOE_REPORT_ABORTED
Parameter 1
Outbound enabler error name
Parameter 2
Outbound enabler error id
Parameter 3
List of Outbound enabler error parameters separated by #
Probable cause
The outbound enabler reported an abortion when relaying a client request.

#### 1.8.2.69 RSF11000: Relay Server list is too long. Outbound enabler connection aborted

enabler connection aborted
Error code
Error constant
RSF_ROOT_RS_LIST_TOO_LONG

Probable cause
This error should be rare. The Relay Server has a limit on the total size of the configuration. The number
of Relay Servers in the farm as well as the size of host names contribute to the total list size. Replacing
host names with the dotted ip address, or removing domain names from configuration entries, or reducing
the number of Relay Servers, can relieve the problem. These changes can be made with a Relay Server
configuration update.

#### 1.8.2.70 RSF11001: Shared memory exhausted when '%1'

Error code
Error constant
RSF_ROOT_OUT_OF_SHM
Parameter 1
Internal context
Probable cause
The Relay Server failed to allocate a memory block from the pre-allocated shared memory, which has a fixed
size determined on start up. The size is optionally specified using the shared_mem property in the options
section in the Relay Server configuration file. The default value is 10M and changing this value requires
restarting the Relay Server.

#### 1.8.2.71 RSF11002: System error [SYS%1: %2] occurred while initializing resources for remote administration

Error code
Error constant
RSF_ROOT_ADMIN_USE_FAIL
Parameter 1
System error code
Parameter 2
System error message
Probable cause
There was a resource problem preventing remote administration. Please fix the problem according to the
system error.

#### 1.8.2.72 RSF11003: System error [SYS%1: %2] occurred while writing the entire configuration to file '%3'

while writing the entire configuration to file '%3'
Error code
Error constant
RSF_ROOT_WRITE_CONFIG_FILE_FAIL
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Relay Server configuration file
Probable cause
The configuration was applied to the Relay Server and is in effect but the configuration file update failed.
Restarting the Relay Server will revert to the last saved configuration. Please fix the problem according to the
system error.

#### 1.8.2.73 RSF11004: Out of memory while reading new configuration

configuration
Error code
Error constant
RSF_ROOT_ADMIN_OUT_OF_MEM
Probable cause
The configuration update was aborted due to lack of memory. If this is an IIS based Relay Server, please check
if the application pool setting is limiting memory usage of your Relay Server web server extensions. Increasing
the maximum number of worker processes in the application pool on 32-bit IIS will help spread the load.
Upgrading to a 64-bit Relay Server or adding another Relay Server to the Relay Server farm can also be valid
solutions. Offloading other applications running on the Relay Server machine to other machines may also help.

#### 1.8.2.74 RSF11005: Protocol error when '%1'

Error code
Error constant
RSF_ROOT_ADMIN_PROTOCOL_ERROR
Parameter 1
Internal context

Probable cause
The administration request was invalid. Remote access of the administration extension should be secured with
HTTP authentication and HTTPS so as to protect against invalid accesses.

#### 1.8.2.75 RSF11006: Failed to open '%1' to apply a configuration update

configuration update
Error code
Error constant
RSF_ROOT_OPEN_CONFIG_FILE_FAIL
Parameter 1
Relay Server configuration file
Probable cause
The configuration was applied to the Relay Server and is in effect but the configuration file update failed.
Restarting the Relay Server will revert to the last saved configuration. Make sure the Relay Server state
manager process has sufficient permission to open the configuration for update.

#### 1.8.2.76 RSF11007: System error [SYS%1: %2] occurred while updating configuration

while updating configuration
Error code
Error constant
RSF_ROOT_ADMIN_RECONFIG_FAIL
Parameter 1
System error code
Parameter 2
System error message
Probable cause
Reconfiguration of the Relay Server failed. The resulting configuration may be corrupted and may require fixing
with a further configuration update. The original configuration file will not have been updated with the failed
configuration. Please fix the problem according to the system error.

#### 1.8.2.77 RSF11008: Timed out waiting for administration command after %1 seconds

command after %1 seconds
Error code
Error constant
RSF_ROOT_ADMIN_READ_TIMEOUT
Parameter 1
Administration timeout limit
Probable cause
The Relay Server was expecting more administration commands but the remote administration tool did not
send them on time. The request was aborted. Please retry again. If this error persists, please contact technical
support.

#### 1.8.2.78 RSF11009: The remote administration tool disconnected prematurely

disconnected prematurely
Error code
Error constant
RSF_ROOT_ADMIN_DISCONNECT_EARLY
Probable cause
This can be caused by a network problem or abrupt termination of the remote administration tool. Please try
again.

#### 1.8.2.79 RSF11010: Communication error [SYS%1: %2] occurred while reading from remote administration tool

Error code
Error constant
RSF_ROOT_ADMIN_READ_FAIL
Parameter 1
System error code
Parameter 2
System error message

Probable cause
This can be caused by a network communication issue between the Relay Server and the remote
administration tool. The request was aborted. Please try again.

#### 1.8.2.80 RSF11011: Cannot continue to process ADMIN_CMD_CONFIG_CONTINUE packet due to previous error

Error code
Error constant
RSF_ROOT_ADMIN_CONTINUE_FAIL
Probable cause
Please refer to previous error with the same line label to inspect the cause of the problem.

#### 1.8.2.81 RSF11012: Expecting section header at line %1 in configuration file '%2'

configuration file '%2'
Error code
Error constant
RSF_ROOT_CONFIG_EXPECT_SECTION_HEADER
Parameter 1
Line number
Parameter 2
Relay Server configuration file
Probable cause
The given Relay Server configuration file is missing a required section header entry at the given line
number. Either use the administration tool to generate the configuration file, or consult the configuration-file
documentation and fix the file directly.

#### 1.8.2.82 RSF11013: System error [SYS%1: %2] occurred while archiving log file '%3' into '%4'

while archiving log file '%3' into '%4'
Error code
Error constant
RSF_ROOT_ADMIN_ARCHIVE_LOG_FAIL
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Current log file name
Parameter 4
Archive log file name if available otherwise empty
Probable cause
Encountered a system error while creating an archive log, copying current log content over or truncating the
current log. Please fix the problem according to the system error.

#### 1.8.2.83 RSF11014: Communication error [SYS%1: %2] occurred while writing response back to remote administration tool

Error code
Error constant
RSF_ROOT_ADMIN_WRITE_FAIL
Parameter 1
System error code
Parameter 2
System error message
Probable cause
There was a communication error reporting back to the remote administration tool. The request was aborted,
after reconfiguration occurred. Please try again.

#### 1.8.2.84 RSF11015: Invalid opcode in monitor command packet

packet
Error code

Error constant
RSF_ROOT_MON_PROTOCOL_ERROR
Probable cause
Please make sure only the SA monitor is accessing the monitor extension. If this error persists, please contact
technical support.
  Note
Adobe will stop updating and distributing the Flash Player at the end of 2020. Because the SQL Anywhere
Monitor is based on Flash, you cannot use it once Flash support ends. In many cases, tasks that were
previously performed in the Monitor can be performed in the SQL Anywhere Cockpit.

#### 1.8.2.85 RSF11016: Freeing already freed memory block in shared memory

shared memory
Error code
Error constant
RSF_ROOT_MEMORY_ALREADY_FREED
Probable cause
This is an internal error. The shared memory manager inside the Relay Server is protected against this type of
error and the Relay Server should remain stable without requiring a restart. If this error persists, please contact
technical support.

#### 1.8.2.86 RSF11018: Cannot add backend server '%1' as it is already defined in backend farm '%2'

already defined in backend farm '%2'
Error code
Error constant
RSF_ROOT_SERVER_PREVIOUSLY_DEFINED
Parameter 1
Backend server name
Parameter 2
Backend farm name

Probable cause
This error occurs during Relay Server configuration and will not affect other parts of the configuration
operation. However, the new configuration of the previously defined backend server was not applied to the
Relay Server. You may need to reapply the Relay Server configuration. If this error persists, please contact
technical support.

#### 1.8.2.87 RSF11019: Failed initializing resource for accessing backend server '%1' in farm '%2'

backend server '%1' in farm '%2'
Error code
Error constant
RSF_ROOT_INIT_SERVER_FAIL
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
This may be caused by failing to allocate a memory block from the pre-allocated shared memory which has
a fixed size determined on start up. The size is optionally specified using the shared_mem property in the
options section in the Relay Server configuration file. The default value is 10M and changing this value requires
restarting the Relay Server. This error can also be caused by other system resource limitations.

#### 1.8.2.88 RSF11020: Missing required section '%1' in configuration file '%2'

configuration file '%2'
Error code
Error constant
RSF_ROOT_CONFIG_MISSING_SECTION
Parameter 1
Configuration section name
Parameter 2
Relay Server configuration file
Probable cause
The given Relay Server configuration file is missing a required section entry at the given line number. Either use
the administration tool to generate the configuration file, or consult the configuration-file documentation and
fix the file directly.

#### 1.8.2.89 RSF11021: Failed preparing shared log

Error code
Error constant
RSF_ROOT_FAILED_PREPARE_SHARED_LOG
Probable cause
Make sure the state manager is running. If this error persists, please contact technical support.

#### 1.8.2.90 RSF11022: Failed setting up data structure for all Relay Servers in the configuration

Relay Servers in the configuration
Error code
Error constant
RSF_ROOT_FAILED_SETUP_RS_LIST
Probable cause
This can be caused by either having redundant Relay Servers in the configuration or the Relay Server running
out of resources while creating the list of all Relay Servers. Make sure the configuration has uniquely-named
Relay Servers and/or make sure there are sufficient resources on the machine running the Relay Server.

#### 1.8.2.91 RSF11023: Relay Server '%1' is previously defined in the configuration

the configuration
Error code
Error constant
RSF_ROOT_RS_PREVIOUSLY_DEFINED
Parameter 1
Relay Server host name
Probable cause
No two Relay Servers can share the same host name. Make sure each Relay Server in the Relay Server farm has
a unique name.

#### 1.8.2.92 RSF11024: Failed preparing backend farms information

information
Error code
Error constant
RSF_ROOT_FAILED_PREPARE_FARMS
Probable cause
Failed to prepare some of the backend farm(s). Errors with the same line label that come before this error in the
log file may contain further details.

#### 1.8.2.93 RSF11025: Out of heap memory

Error code
Error constant
RSF_ROOT_OUT_OF_MEM
Probable cause
If this is an IIS based Relay Server, please check if the application pool setting is limiting memory usage of your
Relay Server web server extensions. Increasing the maximum number of worker processes in the application
pool on 32-bit IIS will help spread the load. Upgrading to a 64-bit Relay Server or adding Relay Server to
the Relay Server farm can also be valid solutions. Offloading other applications running on the Relay Server
computer to other computers may also help.

#### 1.8.2.94 RSF11026: System error [SYS%1: %2] occurred while creating internal data structure on start up

while creating internal data structure on start up
Error code
Error constant
RSF_ROOT_FAILED_CREATE_ROOT
Parameter 1
System error code
Parameter 2
System error message

Probable cause
Please fix the problem according to the system error.

#### 1.8.2.95 RSF11027: System error [SYS%1: %2] occurred while initializing internal data structures

while initializing internal data structures
Error code
Error constant
RSF_ROOT_FAILED_INIT_ROOT
Parameter 1
System error code
Parameter 2
System error message
Probable cause
Please fix the problem according to the system error.

#### 1.8.2.96 RSF11028: System error [SYS%1: %2] occurred while creating shared memory. Please shutdown any running rshost processes and restart the web server before retrying

Error code
Error constant
RSF_ROOT_FAILED_CRT_SHM
Parameter 1
System error code
Parameter 2
System error message
Probable cause
Shutdown any running rshost processes and restart the web server before retrying. If this error persists, please
contact technical support.

#### 1.8.2.97 RSF11029: Failed to create semaphore manager

Error code
Error constant
RSF_ROOT_FAILED_CREATE_SEM_MGR
Probable cause
Please make sure your system is not running out of System V semaphores.

#### 1.8.2.98 RSF11030: System error [SYS%1: %2] occurred while initializing shared data structures

while initializing shared data structures
Error code
Error constant
RSF_ROOT_FAILED_INIT_ROOT_USE
Parameter 1
System error code
Parameter 2
System error message
Probable cause
Please fix the problem according to the system error.

#### 1.8.2.99 RSF11031: Failed attaching to shared memory of Relay Server '%1'

Relay Server '%1'
Error code
Error constant
RSF_ROOT_FAILED_ATTACH_SHM
Parameter 1
Internal name of the Relay Server
Probable cause
This error can occur for several reasons. Verify the following: 1) Your Relay Server configuration file is valid. A
simple and quick way to check is to manually run rshost with your configuration file. Check the Relay Server
configuration file documentation for more details. 2) The rshost process has successfully started. Check the

log file to make sure rshost is running successfully. 3) The attaching process has permissions to attach to the
shared memory. Make sure the attaching process user has system privileges equivalent to the rshost process
user that created the shared memory.

#### 1.8.2.100 RSF11032: System error [SYS%1: %2] occurred while attaching to shared log '%3'

while attaching to shared log '%3'
Error code
Error constant
RSF_ROOT_FAILED_ATTACH_LOG
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Shared log file name
Probable cause
Please fix the problem according to the system error.

#### 1.8.2.101 RSF11033: Failed to update data structure for the list of Relay Servers in the configuration

list of Relay Servers in the configuration
Error code
Error constant
RSF_ROOT_FAILED_UPDATE_RS_LIST
Probable cause
Either there was an error broadcasting the update to some connected outbound enabler or there was a shared
memory exhaustion during the update operation. Errors with the same line label that come before this error
in the log file may contain more information. Increase the shared_mem property in the options section in the
Relay Server configuration and restart the Relay Server.

#### 1.8.2.102 RSF11034: Failed to apply backend farm changes

Error code

Error constant
RSF_ROOT_FAILED_UPDATE_FARM
Probable cause
Failed to update configuration for some of the backend farm(s). The configuration update was only partially
applied. Please retry again. Errors with the same line label that come before this error in the log file may contain
more information.

#### 1.8.2.103 RSF11035: Failed to apply backend server changes

Error code
Error constant
RSF_ROOT_FAILED_UPDATE_SERVER
Probable cause
Failed to update configuration for some of the backend server(s). The configuration update was only partially
applied. Please retry again. Errors with the same line label that come before this error in the log file may contain
more information.

#### 1.8.2.104 RSF11036: Failed broadcasting to backend server '%1' in backend farm '%2' because up channel was too busy

Error code
Error constant
RSF_ROOT_BROADCAST_UPCH_TOO_BUSY
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The broadcast to this backend server has been skipped. Please retry updating the configuration.

#### 1.8.2.105 RSF11037: Farm '%1' is already defined

Error code
Error constant
RSF_ROOT_FARM_PREVIOUSLY_DEFINED
Parameter 1
Backend farm name
Probable cause
Relay Server configuration cannot contain redundant backend farm names. Make sure your backend farm
names are unique.

#### 1.8.2.106 RSF11038: System error [SYS%1: %2] occurred while renaming the log file '%3'

while renaming the log file '%3'
Error code
Error constant
RSF_ROOT_RENAME_LOG_FAIL
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Current log file name
Probable cause
Please fix the problem according to the system error.

#### 1.8.2.107 RSF11039: Leaked a memory block in shared memory

memory
Error code
Error constant
RSF_ROOT_SHM_LEAK
Probable cause
This is an internal error. If this error persists, please contact technical support.

#### 1.8.2.108 RSF11040: Cannot open Relay Server configuration file '%1'

file '%1'
Error code
Error constant
RSF_ROOT_CONFIG_CANT_OPEN_FILE
Parameter 1
Relay Server configuration file
Probable cause
Make sure the Relay Server configuration file exists and is accessible to the rshost process.

#### 1.8.2.109 RSF11041: Cannot unhide Relay Server configuration file '%1'

configuration file '%1'
Error code
Error constant
RSF_ROOT_CONFIG_CANT_UNHIDE
Parameter 1
Relay Server configuration file
Probable cause
The configuration file may be corrupted. A new hidden configuration file must be created using the dbfhide
utility.

#### 1.8.2.110 RSF11042: Bad syntax at line %1 in configuration file '%2'

file '%2'
Error code
Error constant
RSF_ROOT_CONFIG_BAD_LINE_FMT
Parameter 1
Line number
Parameter 2
Relay Server configuration file

Probable cause
The given Relay Server configuration file contains bad syntax at the given line number. Either use the
administration tool to generate the configuration file, or consult the configuration-file documentation and fix
the file directly.

#### 1.8.2.111 RSF11043: Invalid section name at line %1 in configuration file '%2'

configuration file '%2'
Error code
Error constant
RSF_ROOT_CONFIG_BAD_SECTION_NAME
Parameter 1
Line number
Parameter 2
Relay Server configuration file
Probable cause
The given Relay Server configuration file contains an invalid section name at the given line number. Either use
the administration tool to generate the configuration file, or consult the configuration-file documentation and
fix the file directly.

#### 1.8.2.112 RSF11044: Invalid property name at line %1 in configuration file '%2'

configuration file '%2'
Error code
Error constant
RSF_ROOT_CONFIG_BAD_PROP_NAME
Parameter 1
Line number
Parameter 2
Relay Server configuration file
Probable cause
The given Relay Server configuration file contains an invalid property name at the given line number. Either use
the administration tool to generate the configuration file, or consult the configuration-file documentation and
fix the file directly.

#### 1.8.2.113 RSF11045: Invalid property value at line %1 in configuration file '%2'

configuration file '%2'
Error code
Error constant
RSF_ROOT_CONFIG_BAD_VALUE
Parameter 1
Line number
Parameter 2
Relay Server configuration file
Probable cause
The given Relay Server configuration file contains an invalid property value at the given line number. Either use
the administration tool to generate the configuration file, or consult the configuration-file documentation and
fix the file directly.

#### 1.8.2.114 RSF11046: Duplicate '%1' section at line %2 in configuration file '%3'

configuration file '%3'
Error code
Error constant
RSF_ROOT_CONFIG_CANT_REPEAT_SECTION
Parameter 1
Configuration section name
Parameter 2
Line number
Parameter 3
Relay Server configuration file
Probable cause
The given Relay Server configuration file contains a duplicate section at the given line number. Either use the
administration tool to generate the configuration file, or consult the configuration-file documentation and fix
the file directly.

#### 1.8.2.115 RSF11047: Missing required property '%1' at line %2 in configuration file '%3'

%2 in configuration file '%3'
Error code

Error constant
RSF_ROOT_CONFIG_MISSING_PROP
Parameter 1
Property name
Parameter 2
Line number
Parameter 3
Relay Server configuration file
Probable cause
The given Relay Server configuration file is missing a required property entry at the given line number. Either
use the administration tool to generate the configuration file, or consult the configuration-file documentation
and fix the file directly.

#### 1.8.2.116 RSF11048: An invalid change to '%1' has been detected on line %2 with %3 status. The problem needs to be corrected, otherwise, the Relay Server cannot be restarted

Error code
Error constant
RSF_ROOT_CONFIG_FILE_INVALID
Parameter 1
Relay Server configuration file
Parameter 2
Line number
Parameter 3
Status
Probable cause
The Relay Server configuration file has been modified in an invalid way. The problem needs to be corrected
immediately, otherwise the Relay Server cannot be restarted.

#### 1.8.2.117 RSF11049: Failed to initialize the Relay Server

Error code
Error constant
RSF_ROOT_INIT_FAILED

Probable cause
This is an internal error. If this error persists, please contact technical support.

#### 1.8.2.118 RSF11050: Giving up initializing the Relay Server after too long

after too long
Error code
Error constant
RSF_ROOT_INIT_TOO_LONG
Probable cause
The Relay Server machine might be overload by other processes. Stop running them and try again.

#### 1.8.2.119 RSF12000: System error [SYS%1: %2] occurred while initializing resource for accessing backend farm '%3'

Error code
Error constant
RSF_FARM_FAIL_ACCESS
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend farm name
Probable cause
Please fix the problem according to the system error.

#### 1.8.2.120 RSF13000: System error [SYS%1: %2] occurred while generating acceptor uuid for backend server '%3' in backend farm '%4'

Error code
Error constant
RSF_SERVER_RS_UUID_GENERATION_FAIL
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Probable cause
Please fix the problem according to the system error.

#### 1.8.2.121 RSF13001: System error [SYS%1: %2] occurred while initializing resource for accessing backend server '%3' in backend farm '%4'

Error code
Error constant
RSF_SERVER_INIT_FAIL
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Probable cause
Please fix the problem according to the system error.

#### 1.8.2.122 RSF13002: Failed to lock request list of backend server '%1' in backend farm '%2' for writing

server '%1' in backend farm '%2' for writing
Error code
Error constant
RSF_SERVER_FAIL_WLOCK_REQUEST_LIST
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The backend server may become unusable until the outbound enabler is restarted. If this error persists, please
contact technical support.

#### 1.8.2.123 RSF13003: System error [SYS%1: %2] occurred while initializing request list for backend server '%3' in backend farm '%4'

Error code
Error constant
RSF_SERVER_FAIL_INIT_REQUEST_LIST
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Probable cause
Please fix the problem according to the system error. The outbound enabler should automatically recover the
service.

#### 1.8.2.124 RSF13004: System error [SYS%1: %2] occurred while releasing up channel idle semaphore for backend server '%3' in backend farm '%4'

Error code
Error constant
RSF_SERVER_FAIL_SIGNIFYING_UPCHANNEL_IDLE
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Probable cause
The backend server may become unstable until the Relay Server is restarted. If this error persists, please
contact technical support.

#### 1.8.2.125 RSF13005: The outbound enabler for backend server '%1' in backend farm '%2' is sending %3 bytes beyond channel limit

Error code
Error constant
RSF_SERVER_CONTENT_OVERFLOW
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Number of extra bytes
Probable cause
This is an internal outbound enabler error. If this error persists, please contact technical support.

#### 1.8.2.126 RSF13006: Failed to lock request list of backend server '%1' in backend farm '%2' for reading

server '%1' in backend farm '%2' for reading
Error code
Error constant
RSF_SERVER_FAIL_RLOCK_REQUEST_LIST
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The backend server may become unusable until the outbound enabler is restarted. If this error persists, please
contact technical support.

#### 1.8.2.127 RSF13007: Failed locking download packet queue of a client of backend server '%1' in backend farm '%2' for pushing a %3 packet

Error code
Error constant
RSF_SERVER_FAIL_LOCK_PUSH_DNQ
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Packet name
Probable cause
The response to a client request was not delivered but the backend server should remain usable to other
clients. The client will likely receive an error and should retry again. If this error persists, please contact
technical support.

#### 1.8.2.128 RSF13008: System error [SYS%1: %2] occurred while initializing semaphore for download packet queue of backend server '%3' in backend farm '%4' while pushing a %5 packet

Error code
Error constant
RSF_SERVER_FAIL_INIT_DNQ_SEMA
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Parameter 5
Packet name
Probable cause
Please fix the problem according to the system error.

#### 1.8.2.129 RSF13009: Missing request list for backend server '%1' in backend farm '%2'

'%1' in backend farm '%2'
Error code
Error constant
RSF_SERVER_MISSING_REQUEST_LIST
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The outbound enabler should automatically recover the service. If this error persists, please contact technical
support.

#### 1.8.2.130 RSF13010: Detected faulty request index recycling on backend server '%1' in backend farm '%2'

on backend server '%1' in backend farm '%2'
Error code
Error constant
RSF_SERVER_FAULTY_REQUEST_IDX_RECYCLING
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
A client request and response may not have been routed properly but the backend server should remain usable
for other clients. If this error persists, please contact technical support.

#### 1.8.2.131 RSF13011: Failed allocating shared memory block for client traffic statistic collector of backend server '%1' in backend farm '%2'

Error code
Error constant
RSF_SERVER_FAIL_NEWING_CLIENT_STATISTIC
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The client request was aborted but the backend server should remain usable. The low memory situation may
be caused by temporarily high traffic volume. If this error persists, please consider increasing the shared
memory limit and restart the Relay Server.

#### 1.8.2.132 RSF14000: System error [SYS%1: %2] occurred while initializing access to backend server '%3' in backend farm '%4'

Error code

Error constant
RSF_CLIENT_FAIL_INIT_SERVER_ACCESS
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Probable cause
The client request was aborted. Please attempt to fix the problem according to the system error. If this error
persists, please contact technical support.

#### 1.8.2.133 RSF14001: Failed to lock request list of backend server '%1' in backend farm '%2' for writing when '%3'

server '%1' in backend farm '%2' for writing when
'%3'
Error code
Error constant
RSF_CLIENT_FAIL_WLOCK_REQUEST_LIST
Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Internal context
Probable cause
The backend server was too busy. The client request was aborted. To handle the load, you may need to add
more backend servers or more Relay Servers.

#### 1.8.2.134 RSF14002: Failed allocating shared memory block for client of backend server '%1' in backend farm '%2' when '%3'

Error code
Error constant
RSF_CLIENT_OUT_OF_SHM

Parameter 1
Backend server name
Parameter 2
Backend farm name
Parameter 3
Internal context
Probable cause
The client request was aborted but the backend server should remain usable for other clients. The low memory
situation may be caused by temporary high traffic volume. If this error persist, please consider increasing the
shared memory limit and restart the Relay Server.

#### 1.8.2.135 RSF14003: System error [SYS%1: %2] occurred while initializing request targeting backend server '%3' in backend farm '%4'

Error code
Error constant
RSF_CLIENT_FAIL_INIT_REQUEST
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Backend server name
Parameter 4
Backend farm name
Probable cause
The client request was aborted but the backend server should remain usable for other clients. Please fix the
problem according to the system error.

#### 1.8.2.136 RSF14004: Heap memory exhausted while client of backend server '%1' in backend farm '%2' is '%3'

backend server '%1' in backend farm '%2' is '%3'
Error code
Error constant
RSF_CLIENT_OUT_OF_MEM
Parameter 1
Backend server name
Parameter 2
Backend farm name

Parameter 3
Internal context
Probable cause
The client request was aborted but the backend server should remain usable for other clients. The low
memory situation may be caused by temporary high traffic volume. If this error persists on an IIS based Relay
Server, please check if the application pool setting is limiting memory usage of your Relay Server web server
extensions. Increasing the maximum number of worker processes in the application pool on a 32-bit IIS will
help spread the load. Upgrading to a 64-bit Relay Server or adding Relay Servers to the Relay Server farm can
also be valid solutions. Offloading other applications running on the Relay Server machine to other machines
may also help.

#### 1.8.2.137 RSF14005: Removed unexpected request from request list of backend server '%1' in backend farm '%2'

Error code
Error constant
RSF_CLIENT_REMOVED_WRONG_REQUEST
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
The client request was aborted but the backend server should remain usable for other clients. If this error
persists, please contact technical support.

### 1.9 Relay Server Warning Messages

The Relay Server warning messages are written to the Relay Server message log.
Each error has a numeric error code. Many of the error messages contain the characters %1, %2, and so on.
These characters are replaced by the parameters to the error message.
The text of each error message contains a prefix describing the type of error or warning:
RSE
Relay Server error.

RSF
Relay Server fatal error.
RSW
Relay Server warning.

#### 1.9.1 Relay Server Warning Messages Sorted by Error Code

Error code
Message text
RSW0: No warning
RSW100: System error [SYS%1: %2] occurred while calling
'%3'
RSW101: CPU monitoring is not available on this platform

RSW102: The backend connection was terminated before
the entire chunked response body was received
RSW103: The backend connection was terminated before
the entire content length response body was received. Re-
maining %1 of %2 bytes
RSW104: Ignoring invalid SAP Passport
RSW105: A change to '%1' has been detected and line %2 of
the file is different from the configuration in use
RSW106: The '%1' property in the configuration is being ig-
nored on this platform
RSW107: Too many type of clients has been accessing back-
end server '%1' in backend farm '%2'. New metrics are no
longer added

#### 1.9.2 Relay Server warning messages listed by message text

#### 1.9.2.1 RSW0: No warning

Error code
Error constant
RSW_NO_WARNING
Probable cause
There was no warning.

#### 1.9.2.2 RSW100: System error [SYS%1: %2] occurred while calling '%3'

Error code
Error constant
RSW_SYS_CALL
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
Name of the system call

Probable cause
A non-fatal system call has failed. The Relay Server should remain operational.

#### 1.9.2.3 RSW101: CPU monitoring is not available on this platform

Error code
Error constant
RSW_CPU_MON_NOT_AVAILABLE
Probable cause
The Relay Server cannot accurately report total CPU usage of all Relay Server related processes on this
platform.

#### 1.9.2.4 RSW102: The backend connection was terminated before the entire chunked response body was received

Error code
Error constant
RSW_CHUNKED_RESPONSE_NOT_COMPLETED
Probable cause
The result of this warning depends on the application protocol.

#### 1.9.2.5 RSW103: The backend connection was terminated before the entire content length response body was received. Remaining %1 of %2 bytes

Error code
Error constant
RSW_CONTENT_LENGTH_RESPONSE_NOT_COMPLETED

Probable cause
The result of this warning depends on the application protocol.

#### 1.9.2.6 RSW104: Ignoring invalid SAP Passport

Error code
Error constant
RSW_INVALID_SAP_PASSPORT
Probable cause
An invalid SAP-Passport header was found in the request and being ignored.

#### 1.9.2.7 RSW105: A change to '%1' has been detected and line %2 of the file is different from the configuration in use

Error code
Error constant
RSW_CONFIG_OUT_OF_SYNC
Parameter 1
Configuration file
Parameter 2
Line number in the file
Probable cause
The configuration on disk is different from the in use copy. The difference is not in effect until either the Relay
Server is restarted or the configuration file being applied using the online configuration tool.

#### 1.9.2.8 RSW106: The '%1' property in the configuration is being ignored on this platform

Error code
Error constant
RSW_CONFIG_UNUSED_PROPERTY

Parameter 1
Property name
Probable cause
Setting this property on this Relay Server platform has no effect. Delete or unset the property can suppress
this warning.

#### 1.9.2.9 RSW107: Too many type of clients has been accessing backend server '%1' in backend farm '%2'. New metrics are no longer added

Error code
Error constant
RSW_TOO_MANY_TYPE_OF_CLIENTS
Parameter 1
Backend server name
Parameter 2
Backend farm name
Probable cause
Traffic statistics are kept per type of client and there is an internal limit of 1600 types. The limit has been
reached and the Relay Server stop creating metrics for new type of client.

### 1.10 Outbound Enabler Error Messages

The Outbound Enabler messages are written to the Outbound Enabler message log.
Each message has a numeric code. Many of the messages contain the characters %1, %2, and so on. These
characters are replaced by the parameters to the message.

#### 1.10.1 Outbound Enabler Error Messages Sorted by Error Code

Code
Error code
Message text
OEE0: No error
OEE1000: Unable to write a GET request to ping the backend
server using http://%1:%2/%3. Ping again
OEE1001: Unable to read response headers from the back-
end server ping using http://%1:%2/%3. Pinging again

OEE1002: Unexpected HTTP status code %1 from ping
of backend server using http://%2:%3/%4. Pinging again

OEE1003: Missing Content-Length header in response to
backend server ping using http://%1:%2/%3. Pinging again

OEE1004: Missing or malformed body found in response to
backend server ping using http://%1:%2/%3. Pinging again

OEE1005: Unable to find 'AVAILABLE=' in backend status
ping response body from http://%1:%2/%3. Pinging again

OEE1006: The Outbound Enabler does not recognize 'AVAIL-
ABLE=%1' in the response to the backend server status ping
to http://%2:%3/%4. Valid values are 1, T, TRUE, ON, 0, F,
FALSE and OFF. Pinging again
OEE1007: The Output Enabler backend server status ping
to http://%1:%2/%3 reported service unavailable. Pinging
again
OEE1008: Unable to find nor shut down an Outbound Ena-
bler for server '%1' of farm '%2' using relay server '%3%4'

OEE1009: Unable to perform a network read from the Relay
Server because of [MLC%1: %2]
OEE1010: The Outbound Enabler cannot handle the WWW-
Authenticate header in the response because of [MLC%1:
%2]

Error code
Message text
OEE1011: The Outbound Enabler cannot handle the Proxy-
Authenticate header in the response because of [MLC%1:
%2]
OEE1012: The Outbound Enabler cannot handle the Authen-
tication-Info header in the response because of [MLC%1:
%2]
OEE1013: The Outbound Enabler cannot handle the Proxy-
Authentication-Info header in the response because of
[MLC%1: %2]
OEE1014: The length of an HTTP chunk length received from
the Relay Server is too big
OEE1015: An HTTP chunk length received from the Relay
Server is malformed
OEE1016: An HTTP chunk received from the Relay Server is
missing a trailing CRLF
OEE1017: The Outbound Enabler received an HTTP error sta-
tus from the Relay Server:\r %1
OEE1018: Outbound Enabler connections to the Relay Server
Web server require HTTP authentication, but no credentials
were provided
OEE1019: An Outbound Enabler connection to the Relay
Server failed HTTP authentication
OEE1020: Outbound Enabler connections to the Relay
Server Web server are going through a proxy requiring
proxy HTTP authentication, but no credentials were provided

OEE1021: An Outbound Enabler connection to the Relay
Server failed HTTP proxy authentication
OEE1022: The Outbound Enabler received an unexpected
HTTP error status:\r %1
OEE1023: The Outbound Enabler is missing the -cr
http_password parameter
OEE1024: The Outbound Enabler is missing the -cr
http_proxy_password parameter
OEE1025: The Outbound Enabler is missing the -cr
http_userid parameter
OEE1026: The Outbound Enabler is missing the -cr
http_proxy_userid parameter
OEE1027: The Outbound Enabler was unable to write an
HTTP header to the Relay Server because of [MLC%1: %2]

OEE1028: The Outbound Enabler was unable to write an
HTTP body to the Relay Server because of [MLC%1: %2]


Error code
Message text
OEE1029: The Outbound Enabler received an HTTP cookie
or header from a client indicating the client cached it from
a previous Relay Server configuration. The unexpected Relay
Server index is: %1
OEE1030: The Outbound Enabler was unable to connect to
the Relay Server using '%1' because of [MLC%2: %3]. Retry-
ing
OEE1031: The Outbound Enabler access was denied by the
Relay Server
OEE1032: Retry due to issue with the Relay Server
OEE1033: The Outbound Enabler is unable to connect to
the backend server at %1:%2 to ping it. Pinging again
OEE1034: Communication error with backend server: '%1'

OEE1035: Invalid tls_type %1 given to the Outbound Ena-
bler's -cs switch. Only RSA is supported
OEE1036: A network connection was closed by the Relay
Server or an intermediary while the Outbound Enabler was
reading from it
OEE1037: The Outbound Enabler -cr switch is missing the
%1 parameter
OEE1038: Invalid Outbound Enabler command line near '%1'

OEE1039: The Outbound Enabler connection to the Relay
Server using '%1' failed because of [MLC%2: %3]
OEE1040: The Outbound Enabler was unable to initialize
secure communications to the backend server because of
[MLC%1: %2]
OEE1041: The Outbound Enabler -cr switch does not specify
a valid Relay Server. The HTTP response from the server has
the following headers: %1
OEE1042: The Relay Server needs to be upgraded in order to
be compatible with this Outbound Enabler
OEE1043: The Relay Server at host '%1' lacks a %2 entry in
the Relay Server configuration
OEE1044: The Outbound Enabler was unable to determine
the MAC addresses of this machine
OEE1045: System error [SYS%1: %2] while %3 with the
backend server for sidx=%4 socket=%5 sfp=%6
Error code
Message text
OEE1046: Connecting to backend server at %1:%2 failed

#### 1.10.2 Outbound Enabler Error Messages Listed by Message Text

Text

#### 1.10.2.1 OEE0: No error

Error code
Error constant
OEE_NO_ERROR
Probable cause
This code indicates there was no Outbound Enabler error.

#### 1.10.2.2 OEE1000: Unable to write a GET request to ping the backend server using http://%1:%2/%3. Ping again

the backend server using http://%1:%2/%3. Ping
again
Error code
Error constant
OEE_BE_STATUS_PING_FAILED_WRITE
Parameter 1
Backend server host specified by the -cs host parameter
Parameter 2
Backend server port specified by the -cs port parameter
Parameter 3
Backend server status url specified by the -cs status_url
parameter
Probable cause
The Outbound Enabler was unable to write a GET request to the backend server during a status check. Make
sure the -cs host and port parameter are pointing to the HTTP port of the backend server. Also make sure the
backend server has not issue starting up.

#### 1.10.2.3 OEE1001: Unable to read response headers from the backend server ping using http://%1:%2/%3. Pinging again

Error code
Error constant
OEE_BE_STATUS_PING_FAILED_READ_HDR
Parameter 1
Backend server host specified by the -cs host parameter
Parameter 2
Backend server port specified by the -cs port parameter
Parameter 3
Backend server status url specified by the -cs status_url
parameter
Probable cause
The Outbound Enabler was unable to read response headers from the backend server during a status check.
Make sure the backend server is capable of serving HTTP requests of the status URL on the specified host and
port.

#### 1.10.2.4 OEE1002: Unexpected HTTP status code %1 from ping of backend server using http://%2:%3/%4. Pinging again

Error code
Error constant
OEE_BE_STATUS_PING_FAILED_HTTP_OK
Parameter 1
HTTP status code of the ping response
Parameter 2
Backend server host specified by the -cs host parameter
Parameter 3
Backend server port specified by the -cs port parameter
Parameter 4
Backend server status url specified by the -cs status_url
parameter
Probable cause
The Outbound Enabler was unable to verify a ping of the backend server because of an unexpected HTTP
status code. The HTTP status code is expected to be 200 regardless of the availability of the backend server.
Make sure the given URL is correct, then make sure the response HTTP status code is always 200. If the URL is
correct but this error persists, contact the backend server vendor's technical support team.
1.10.2.5  OEE1003: Missing Content-Length header in
response to backend server ping using http://
%1:%2/%3. Pinging again
Error code
Error constant
OEE_BE_STATUS_PING_FAILED_CONTENT_LENGTH
Parameter 1
Backend server host specified by the -cs host parameter
Parameter 2
Backend server port specified by the -cs port parameter
Parameter 3
Backend server status url specified by the -cs status_url
parameter
Probable cause
The Outbound Enabler was unable to verify a ping of the backend server because of the missing header in
the response. The response must carry a Content-Length header regardless of the availability of the backend
server. Make sure the given URL is correct. If the URL is correct but this error persists, contact the backend
server vendor's technical support team.

1.10.2.6  OEE1004: Missing or malformed body found in
response to backend server ping using http://
%1:%2/%3. Pinging again
Error code
Error constant
OEE_BE_STATUS_PING_FAILED_READ_BODY
Parameter 1
Backend server host specified by the -cs host parameter
Parameter 2
Backend server port specified by the -cs port parameter
Parameter 3
Backend server status url specified by the -cs status_url
parameter
Probable cause
The Outbound Enabler was unable to verify a ping of the backend server because of a missing or malformed
response body. The body of the response must match Content-Length header. Make sure the given URL is
correct. If the URL is correct but this error persists, contact the backend server vendor's technical support
team.

#### 1.10.2.7 OEE1005: Unable to find 'AVAILABLE=' in backend status ping response body from http://%1:%2/%3. Pinging again

Error code
Error constant
OEE_BE_STATUS_PING_AVAILABLE_NOT_FOUND
Parameter 1
Backend server host specified by the -cs host parameter
Parameter 2
Backend server port specified by the -cs port parameter
Parameter 3
Backend server status url specified by the -cs status_url
parameter
Probable cause
The Outbound Enabler was unable to verify a ping of the backend server because the body did not contain
'AVAILABLE='. Make sure the given URL is correct. If the URL is correct but this error persists, contact the
backend server vendor's technical support team.

1.10.2.8  OEE1006: The Outbound Enabler does not recognize
'AVAILABLE=%1' in the response to the backend
server status ping to http://%2:%3/%4. Valid
values are 1, T, TRUE, ON, 0, F, FALSE and OFF.
Pinging again
Error code
Error constant
OEE_BE_STATUS_PING_FAILED_PARSE_AVAILABLE_VAL
Parameter 1
The value taken from AVAILABLE=value
Parameter 2
Backend server host specified by the -cs host parameter
Parameter 3
Backend server port specified by the -cs port parameter
Parameter 4
Backend server status url specified by the -cs status_url
parameter
Probable cause
The Outbound Enabler was unable to verify a ping of the backend server because the body did not contain an
expected 'AVAILABLE=' value. Make sure the given URL is correct. If the URL is correct but this error persists,
contact the backend server vendor's technical support team.

#### 1.10.2.9 OEE1007: The Output Enabler backend server status ping to http://%1:%2/%3 reported service unavailable. Pinging again

Error code
Error constant
OEE_BE_STATUS_DOWN
Parameter 1
Backend server host specified by the -cs host parameter
Parameter 2
Backend server port specified by the -cs port parameter
Parameter 3
Backend server status url specified by the -cs status_url
parameter
Probable cause
The Outbound Enabler's ping of the backend server indicates the server is unavailable. There will be no relaying
while the ping to the backend server continues to return the same status. To resume relaying to the backend
server, configure it to return a status of available.

#### 1.10.2.10 OEE1008: Unable to find nor shut down an Outbound Enabler for server '%1' of farm '%2' using relay server '%3%4'

Error code
Error constant
OEE_SHUTDOWN_NOT_FOUND
Parameter 1
Backend server name provided by the -id switch
Parameter 2
Backend farm name provided by the -f switch
Parameter 3
Relay server host provided by the -cs host parameter
Parameter 4
Relay server url suffix provided by the -cs url_suffix parame-
ter
Probable cause
The Outbound Enabler was unable to find nor shut down an already-running Outbound Enabler for the given
backend server, farm, and relay server. If the Outbound Enabler is running, make sure the backend server, farm,
relay server, and url suffix are specified correctly

#### 1.10.2.11 OEE1009: Unable to perform a network read from the Relay Server because of [MLC%1: %2]

the Relay Server because of [MLC%1: %2]
Error code
Error constant
OEE_NET_READ_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
The Outbound Enabler was unable to read bytes sent across the network from the Relay Server. Further
information regarding the probable cause and remedy of the error can be found in the "MobiLink
Communication error messages" section of the SQL Anywhere documentation.

#### 1.10.2.12 OEE1010: The Outbound Enabler cannot handle the WWW-Authenticate header in the response because of [MLC%1: %2]

Error code
Error constant
OEE_PARSE_AUTH_HDR_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
The Outbound Enabler cannot handle the value of a WWW-Authenticate header. Further information regarding
the probable cause and remedy of the error can be found in the "MobiLink Communication error messages"
section of the SQL Anywhere documentation.

#### 1.10.2.13 OEE1011: The Outbound Enabler cannot handle the Proxy-Authenticate header in the response because of [MLC%1: %2]

Error code
Error constant
OEE_PARSE_PROXY_AUTH_HDR_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
The Outbound Enabler cannot handle the value of the Proxy-Authenticate header. Further information
regarding the probable cause and remedy of the error can be found in the "MobiLink Communication error
messages" section of the SQL Anywhere documentation.

#### 1.10.2.14 OEE1012: The Outbound Enabler cannot handle the Authentication-Info header in the response because of [MLC%1: %2]

Error code
Error constant
OEE_PARSE_AUTH_INFO_HDR_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
The Outbound Enabler cannot handle the value of the Authentication-Info header. Further information
regarding the probable cause and remedy of the error can be found in the "MobiLink Communication error
messages" section of the SQL Anywhere documentation.

#### 1.10.2.15 OEE1013: The Outbound Enabler cannot handle the Proxy-Authentication-Info header in the response because of [MLC%1: %2]

Error code
Error constant
OEE_PARSE_PROXY_AUTH_INFO_HDR_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
The Outbound Enabler cannot handle the value of the Authentication-Info header. Further information
regarding the probable cause and remedy of the error can be found in the "MobiLink Communication error
messages" section of the SQL Anywhere documentation.

#### 1.10.2.16 OEE1014: The length of an HTTP chunk length received from the Relay Server is too big

received from the Relay Server is too big
Error code
Error constant
OEE_CHUNK_LEN_TOO_LONG
Probable cause
The Outbound Enabler received an unexpectedly large HTTP chunk length in the response from the Relay
Server. A legitimate Relay Server should not cause this problem. Check the -cr switch and make sure a Relay
Server is running there by using a Web browser to fetch the status page from the Relay Server. A typical status
page URL looks like http://MyHost/rs/server/rs.dll for IIS and http://MyHost/srv/iarelayserver for Apache.

#### 1.10.2.17 OEE1015: An HTTP chunk length received from the Relay Server is malformed

Relay Server is malformed
Error code
Error constant
OEE_MALFORMED_CHUNK_LEN
Probable cause
The Outbound Enabler received a malformed chunk length in the response from the Relay Server. A legitimate
Relay Server should not cause this problem. Check the -cr switch and make sure a Relay Server is running
there by using a Web browser to fetch the status page from the Relay Server. A typical status page URL looks
like http://MyHost/rs/server/rs.dll for IIS and http://MyHost/srv/iarelayserver for Apache.

#### 1.10.2.18 OEE1016: An HTTP chunk received from the Relay Server is missing a trailing CRLF

Server is missing a trailing CRLF
Error code
Error constant
OEE_MALFORMED_CHUNK_END

Probable cause
The Outbound Enabler found a malformed chunk in the response from the Relay Server. A legitimate Relay
Server should not cause this problem. Check the -cr switch and make sure a Relay Server is running there
by using a Web browser to fetch the status page from the Relay Server. A typical status page URL looks like
http://MyHost/rs/server/rs.dll for IIS and http://MyHost/srv/iarelayserver for Apache.

#### 1.10.2.19 OEE1017: The Outbound Enabler received an HTTP error status from the Relay Server:\r %1

error status from the Relay Server:\r %1
Error code
Error constant
OEE_HTTP_ERR_FROM_RS
Parameter 1
Response headers from the Relay Server
Probable cause
Look up the meaning of the HTTP status and message and act accordingly. Check the -cr switch and make sure
a Relay Server is running there using the status page. Ensure that no network intermediaries are improperly
modifying the HTTP traffic between the Outbound Enabler and the Relay Server.

#### 1.10.2.20 OEE1018: Outbound Enabler connections to the Relay Server Web server require HTTP authentication, but no credentials were provided

Error code
Error constant
OEE_NO_CREDENTIAL
Probable cause
The Web server hosting the Relay Server is requiring HTTP authentication. Ensure the correct host and port are
specified in the -cr switch. Restart the Outbound Enabler with -cr http_userid and http_password.

#### 1.10.2.21 OEE1019: An Outbound Enabler connection to the Relay Server failed HTTP authentication

Relay Server failed HTTP authentication
Error code
Error constant
OEE_AUTH_FAILED
Probable cause
The Web server hosting the Relay Server is requiring HTTP authentication. Ensure the correct host and port are
specified in the -cr switch. Check the -cr http_userid and http_password parameters.

#### 1.10.2.22 OEE1020: Outbound Enabler connections to the Relay Server Web server are going through a proxy requiring proxy HTTP authentication, but no credentials were provided

Error code
Error constant
OEE_NO_PROXY_CREDENTIAL
Probable cause
An HTTP intermediary is requiring proxy HTTP authentication. Ensure the correct proxy_host and
proxy_port are specified in the -cr switch. Restart the Outbound Enabler with -cr http_proxy_userid and
http_proxy_password.

#### 1.10.2.23 OEE1021: An Outbound Enabler connection to the Relay Server failed HTTP proxy authentication

Relay Server failed HTTP proxy authentication
Error code
Error constant
OEE_PROXY_AUTH_FAILED

Probable cause
An HTTP intermediary is requiring proxy HTTP authentication. Ensure the correct proxy_host and proxy_port
are specified in the -cr switch. Check the -cr http_proxy_userid and http_proxy_password parameters.

#### 1.10.2.24 OEE1022: The Outbound Enabler received an unexpected HTTP error status:\r %1

unexpected HTTP error status:\r %1
Error code
Error constant
OEE_UNEXPECTED_HTTP_ERR
Parameter 1
Response headers
Probable cause
The Relay Server or intermediary unexpectedly responded with an HTTP errors status. Look up the meaning of
the HTTP status and message and act accordingly.

#### 1.10.2.25 OEE1023: The Outbound Enabler is missing the -cr http_password parameter

http_password parameter
Error code
Error constant
OEE_MISSING_HTTP_PWD
Probable cause
The parameter is required when -cr http_userid is used. Either add the http_password parameter or remove
the http_userid parameter.

#### 1.10.2.26 OEE1024: The Outbound Enabler is missing the -cr http_proxy_password parameter

http_proxy_password parameter
Error code

Error constant
OEE_MISSING_HTTP_PROXY_PWD
Probable cause
The parameter is required when -cr http_proxy_userid is used. Either add the http_proxy_password parameter
or remove the http_proxy_userid parameter.

#### 1.10.2.27 OEE1025: The Outbound Enabler is missing the -cr http_userid parameter

http_userid parameter
Error code
Error constant
OEE_MISSING_HTTP_UID
Probable cause
The parameter is required when -cr http_password is used. Either add the http_userid parameter or remove
the http_password parameter.

#### 1.10.2.28 OEE1026: The Outbound Enabler is missing the -cr http_proxy_userid parameter

http_proxy_userid parameter
Error code
Error constant
OEE_MISSING_HTTP_PROXY_UID
Probable cause
The parameter is required when -cr http_proxy_password is used. Either add the http_proxy_userid parameter
or remove the http_proxy_password parameter.

#### 1.10.2.29 OEE1027: The Outbound Enabler was unable to write an HTTP header to the Relay Server because of [MLC%1: %2]

Error code
Error constant
OEE_NET_WRITE_HDR_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
The Outbound Enabler was unable to write an HTTP header to the Relay Server. Further information regarding
the probable cause and remedy of the error can be found in the "MobiLink Communication error messages"
section of the SQL Anywhere documentation.

#### 1.10.2.30 OEE1028: The Outbound Enabler was unable to write an HTTP body to the Relay Server because of [MLC%1: %2]

Error code
Error constant
OEE_NET_WRITE_PKT_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
The Outbound Enabler was unable to write an HTTP body to the Relay Server. Further information regarding
the probable cause and remedy of the error can be found in the "MobiLink Communication error messages"
section of the SQL Anywhere documentation.

1.10.2.31  OEE1029: The Outbound Enabler received an
HTTP cookie or header from a client indicating
the client cached it from a previous Relay Server
configuration. The unexpected Relay Server index
is: %1
Error code
Error constant
OEE_RS_IDX_NOT_FOUND
Parameter 1
Zero-based index of the Relay Server from the old Relay
Server configuration file
Probable cause
The Outbound Enabler has determined that client has likely cached an HTTP cookie or header that is no longer
valid after the Relay Server farm has reduced the number of Relay Servers. The Relay Server will automatically
instruct the client software to expire the cached value upon receiving this error. There is no required user action
for this error. It is only mentioned because the extra exchange to expire the cookie is inefficient. To prevent this
error, disable cookie and/or header caching on the client.

#### 1.10.2.32 OEE1030: The Outbound Enabler was unable to connect to the Relay Server using '%1' because of [MLC%2: %3]. Retrying

Error code
Error constant
OEE_NET_CONNECT_FAILED
Parameter 1
Connect parameters
Parameter 2
MobiLink communication error code
Parameter 3
MobiLink communication error message
Probable cause
The Outbound Enabler could not connect to the Relay Server for the given reason, and will retry. Make sure
the -cr switch correctly specifies the target Relay Server. Further information regarding the probable cause
and remedy of the error can be found in the "MobiLink Communication error messages" section of the SQL
Anywhere documentation.

#### 1.10.2.33 OEE1031: The Outbound Enabler access was denied by the Relay Server

by the Relay Server
Error code
Error constant
OEE_RS_ERR_AUTH
Probable cause
Make sure the -f switch matches the backend farm id in the Relay Server configuration and the backend farm
is enabled and the backend_security is compatible with the -cr https parameter. Make sure the -id switch
matches the backend server id in the backend server is enabled. Make sure the -t switch matches the backend
server token in the Relay Server configuration. Make sure the MAC address matches the backend server MAC
in the Relay Server configuration. Also make sure the same authentication information is not shared by another
instance of the Outbound Enabler.

#### 1.10.2.34 OEE1032: Retry due to issue with the Relay Server

Error code
Error constant
OEE_RS_ERR_SERVER_ERROR
Probable cause
The Relay Server is having internal issue and has notified the Outbound Enabler to reconnect both of the up
and down channels. If this error persist, contact the Relay Server administrator to perform investigation on the
Relay Server.

#### 1.10.2.35 OEE1033: The Outbound Enabler is unable to connect to the backend server at %1:%2 to ping it. Pinging again

Error code
Error constant
OEE_BE_STATUS_PING_CONNECT_FAILED
Parameter 1
Backend server host specified by the -cs host parameter
Parameter 2
Backend server port specified by the -cs port parameter

Probable cause
Make sure the -cs host and port parameters are correct and the backend service is started up successfully.

#### 1.10.2.36 OEE1034: Communication error with backend server: '%1'

server: '%1'
Error code
Error constant
OEE_BE_IO_FAILED
Parameter 1
Error message from the MobiLink server I/O subsystem
Probable cause
This error message only applies to the Outbound Enabler integrated with MobiLink server. The subsystem error
code can be looked up in the MobiLink server error message documentation.

#### 1.10.2.37 OEE1035: Invalid tls_type %1 given to the Outbound Enabler's -cs switch. Only RSA is supported

Error code
Error constant
OEE_SACI_INVALID_TLS_TYPE
Parameter 1
The -cs tls_type parameter
Probable cause
The -cs tls_type parameter only supports RSA.

#### 1.10.2.38 OEE1036: A network connection was closed by the Relay Server or an intermediary while the Outbound Enabler was reading from it

Error code
Error constant
OEE_NET_READ_CLOSED
Probable cause
Make sure the connection timeout of the Web server is sufficient. Ensure that no intermediary has a timeout
that is shorter than the Web server timeout.

#### 1.10.2.39 OEE1037: The Outbound Enabler -cr switch is missing the %1 parameter

missing the %1 parameter
Error code
Error constant
OEE_MISSING_RS_CONNECT_PARAM
Parameter 1
Name of the parameter
Probable cause
The given parameter is required and there is no default value. See the Outbound Enabler's usage by invoking
rsoe without any arguments, or consult the documentation.

#### 1.10.2.40 OEE1038: Invalid Outbound Enabler command line near '%1'

near '%1'
Error code
Error constant
OEE_BAD_SWITCH
Parameter 1
The problematic switch

Probable cause
The Outbound Enabler cannot start up due an invalid command line. See the Outbound Enabler's usage by
invoking rsoe without any arguments, or consult the documentation.

#### 1.10.2.41 OEE1039: The Outbound Enabler connection to the Relay Server using '%1' failed because of [MLC%2: %3]

Relay Server using '%1' failed because of [MLC%2:
%3]
Error code
Error constant
OEE_INIT_RS_COMMUNICATION_FAILED
Parameter 1
Communication parameters
Parameter 2
MobiLink communication error code
Parameter 3
MobiLink communication error message
Probable cause
The Outbound Enabler connection to the Relay Server failed for the given reason. Make sure the -cr switch
correctly specifies the target Relay Server. Further information regarding the probable cause and remedy
of the error can be found in the "MobiLink Communication error messages" section of the SQL Anywhere
documentation.

#### 1.10.2.42 OEE1040: The Outbound Enabler was unable to initialize secure communications to the backend server because of [MLC%1: %2]

Error code
Error constant
OEE_INIT_SECURED_BACKEND_COMMUNICATION_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
The Outbound Enabler encountered an error initializing secure communications to the backend server. Ensure
that your -cs switch is specified correctly. Further information regarding the probable cause and remedy

of the error can be found in the "MobiLink Communication error messages" section of the SQL Anywhere
documentation.

#### 1.10.2.43 OEE1041: The Outbound Enabler -cr switch does not specify a valid Relay Server. The HTTP response from the server has the following headers: %1

Error code
Error constant
OEE_NON_RS
Parameter 1
HTTP response headers
Probable cause
Make sure the host and port parameters in the -cr switch are correct.

#### 1.10.2.44 OEE1042: The Relay Server needs to be upgraded in order to be compatible with this Outbound Enabler

in order to be compatible with this Outbound
Enabler
Error code
Error constant
OEE_RS_TOO_OLD
Probable cause
The Relay Server versions does not support protocol version negotiation. Upgrade the Relay Server.

#### 1.10.2.45 OEE1043: The Relay Server at host '%1' lacks a %2 entry in the Relay Server configuration

entry in the Relay Server configuration
Error code
Error constant
OEE_MISSING_RS_PORT
Parameter 1
The Relay Server host name

Parameter 2
The missing Relay Server configuration setting implied by
the Outbound Enabler's -cr switch
Probable cause
The https parameter of the Outbound Enabler's -cr switch must correspond with the Relay Server
configuration. Either add the given missing setting to the Relay Server configuration, or change the Outbound
Enabler's -cr switch to correspond to the Relay Server configuration.

#### 1.10.2.46 OEE1044: The Outbound Enabler was unable to determine the MAC addresses of this machine

determine the MAC addresses of this machine
Error code
Error constant
OEE_GET_MAC_FAILED
Probable cause
Make sure the network interfaces are enabled.

#### 1.10.2.47 OEE1045: System error [SYS%1: %2] while %3 with the backend server for sidx=%4 socket=%5 sfp=%6

Error code
Error constant
OEE_BACKEND_IO_SYS_ERROR
Parameter 1
System error code
Parameter 2
System error message
Parameter 3
The Outbound Enabler context where the I/O error occurred
(for technical support)
Parameter 4
Session index (for technical support)
Parameter 5
Socket handle (for technical support)
Parameter 6
Session fingerprint (for technical support)

Probable cause
Use the system error information to resolved the issue. Contact your network administrator or technical
support if you need assistance.

#### 1.10.2.48 OEE1046: Connecting to backend server at %1:%2 failed because of [MLC%3: %4]

failed because of [MLC%3: %4]
Error code
Error constant
OEE_BACKEND_CONNECT_TEST_FAILED
Parameter 1
Backend server host specified by the -cs host parameter
Parameter 2
Backend server port specified by the -cs port parameter
Parameter 3
MobiLink communication error code
Parameter 4
MobiLink communication error message
Probable cause
Make sure the backend server is running and the Outbound Enabler -cs port parameter is specified correctly
if the backend server is listening on port other than 80 for HTTP. Further information regarding the probable
cause and remedy of the error can be found in the "MobiLink Communication error messages" section of the
SQL Anywhere documentation.

#### 1.10.2.49 OEE1047: Error parsing the value of the Outbound Enabler -cs %1 parameter

Enabler -cs %1 parameter
Error code
Error constant
OEE_PARSE_RS_CONNECT_PARAM_FAILED
Parameter 1
Connection parameter name
Probable cause
Make sure the specified value match the type of the parameter.

#### 1.10.2.50 OEE1048: The communication between the Outbound Enabler and the backend server failed with [MLC%1: %2] while %3. sidx=%4 socket=%5 sfp=%6

Error code
Error constant
OEE_BACKEND_IO_ERROR
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Parameter 3
The context where the I/O error occurs (for technical sup-
port)
Parameter 4
Session index (for technical support)
Parameter 5
Socket handle (for technical support)
Parameter 6
Session fingerprint (for technical support)
Probable cause
Make sure the backend server is running and the Outbound Enabler -cs port parameter is specified correctly
if the backend server is listening on port other than 80 for HTTP. Further information regarding the probable
cause and remedy of the error can be found in the "MobiLink Communication error messages" section of the
SQL Anywhere documentation.

#### 1.10.2.51 OEE1049: The request URL is too long. Request with sidx=%1 sfp=%2 is aborted

sidx=%1 sfp=%2 is aborted
Error code
Error constant
OEE_CANT_INJECT_AFQ_HDR
Parameter 1
Session index (for technical support)
Parameter 2
Session fingerprint (for technical support)
Probable cause
The Outbound Enabler cannot handle request header with first line longer than 64k. The problem might be
workaround by reducing the size of the URL including query strings.

#### 1.10.2.52 OEE1050: Failed to lookup a session that has just started with ridx=%1 snum=%2 sfp=%3 on a %4 packet

started with ridx=%1 snum=%2 sfp=%3 on a %4
packet
Error code
Error constant
OEE_SESSION_NOT_FOUND
Parameter 1
Request index (for technical support)
Parameter 2
Session number (for technical support)
Parameter 3
Session fingerprint (for technical support)
Parameter 4
Packet name (for technical support)
Probable cause
The session might have been garbage collected due to timeout. The Relay Server will not assign a cookie to
this failing session. This is an indication of slowness in delivering the request from the client to the Outbound
Enabler. If the issue persists, report the issue to Relay Server administrators for further tracing.

#### 1.10.2.53 OEE1051: The Outbound Enabler was unable to access the session with ridx=%1 sidx=%2 snum=%3 sfp=%4 on a %5 packet due to %6

Error code
Error constant
OEE_SESSION_ACCESS_FAILED
Parameter 1
Request index (for technical support)
Parameter 2
Session index (for technical support)
Parameter 3
Session number (for technical support)
Parameter 4
Session fingerprint (for technical support)
Parameter 5
Packet name (for technical support)
Parameter 6
Reason of the failure (for technical support)
Probable cause
The session might have been garbage collected due to timeout or the client has cached an old cookie. The
Relay Server will inform the client software to expire the cookie and the client should restart from a new
session.

#### 1.10.2.54 OEE1052: The Outbound Enabler was unable to write a %1 packet to the Relay Server because of [MCL%2: %3]

Error code
Error constant
OEE_NOTIFICATION_PACKET_FAILED
Parameter 1
Packet name (for technical support)
Parameter 2
MobiLink communication error code
Parameter 3
MobiLink communication error message
Probable cause
There was a communication error between the Outbound Enabler and the Relay Server. The Outbound Enabler
will automatically attempt to recover both the up and down channels to restore communication with the
Relay Server. Abrupt service interruption is expected during this recovery period. Further information regarding
the probable cause and remedy of the error can be found in the "MobiLink Communication error messages"
section of the SQL Anywhere documentation.

#### 1.10.2.55 OEE1053: The Outbound Enabler was unable to flush a packet to the Relay Server because of [MLC%1: %2]

Error code
Error constant
OEE_NET_FLUSH_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
There was a communication error between the Outbound Enabler and the Relay Server. The Outbound Enabler
will automatically attempt to recover both the up and down channels to restore communication with the
Relay Server. Abrupt service interruption is expected during this recovery period. Further information regarding
the probable cause and remedy of the error can be found in the "MobiLink Communication error messages"
section of the SQL Anywhere documentation.

#### 1.10.2.56 OEE1054: The Outbound Enabler was unable to write a %5 packet with ridx=%1 sidx=%2 snum=%3 sfp=%4 failed because of [MLC%6: %7]

Error code
Error constant
OEE_NET_WRITE_RESPONSE_FAILED
Parameter 1
Request index (for technical support)
Parameter 2
Session index (for technical support)
Parameter 3
Session number (for technical support)
Parameter 4
Session fingerprint (for technical support)
Parameter 5
Packet name (for technical support)
Parameter 6
MobiLink communication error code
Parameter 7
MobiLink communication system error message
Probable cause
There was a communication error when the Outbound Enabler attempted to write a packet to the Relay
Server. The Outbound Enabler will automatically attempt to recover both the up and down channels to restore
communication with the Relay Server. Abrupt service interruption is expected during this recovery period.
Further information regarding the probable cause and remedy of the error can be found in the "MobiLink
Communication error messages" section of the SQL Anywhere documentation.

#### 1.10.2.57 OEE1055: The Outbound Enabler was unable to create a session error packet with ridx=%1 sidx=%2 snum=%3 sfp=%4 err=%5 for Relay Server index %6 as it cannot be found

Error code
Error constant
OEE_SESSION_ERROR_RS_IDX_NOT_FOUND
Parameter 1
Request index (for technical support)
Parameter 2
Session index (for technical support)
Parameter 3
Session number (for technical support)
Parameter 4
Session fingerprint (for technical support)
Parameter 5
Outbound Enabler error code

Parameter 6
Zero-based index of the Relay Server from the old Relay
Server configuration file
Probable cause
The client might have cached a cookie that is no longer valid after the Relay Server farm has shrunk. The Relay
Server will instruct the client software to expire the cookie cache upon receiving this error.

#### 1.10.2.58 OEE1056: Failed to report shutdown to the Relay Server

Server
Error code
Error constant
OEE_REPORT_SHUTDOWN_FAILED
Probable cause
Failed to make a new connection or failed to send a notification to the Relay Server.

#### 1.10.2.59 OEE1057: Failed connecting to backend server because of [MLC%1: %2]

because of [MLC%1: %2]
Error code
Error constant
OEE_BACKEND_CONNECT_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
Make sure the backend server is running and the Outbound Enabler -cs port parameter is specified correctly
if the backend server is listening on port other than 80 for HTTP. Further information regarding the probable
cause and remedy of the error can be found in the "MobiLink Communication error messages" section of the
SQL Anywhere documentation.

#### 1.10.2.60 OEE1058: Failed writing to the backend server because of [MLC%1: %2]

because of [MLC%1: %2]
Error code
Error constant
OEE_WRITE_BACKEND_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
There was a communication error when the Outbound Enabler attempted to write to the backend server.
Further information regarding the probable cause and remedy of the error can be found in the "MobiLink
Communication error messages" section of the SQL Anywhere documentation.

#### 1.10.2.61 OEE1059: Failed reading from the backend server because of [MLC%1: %2]

because of [MLC%1: %2]
Error code
Error constant
OEE_READ_BACKEND_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
There was a communication error when the Outbound Enabler attempted to read from the backend server.
Further information regarding the probable cause and remedy of the error can be found in the "MobiLink
Communication error messages" section of the SQL Anywhere documentation.

#### 1.10.2.62 OEE1060: Lost idle backend connection sooner than max_junction_idle_sec expires. Configure the backend server or the Relay Server configuration to agree on the idle timeout

Error code
Error constant
OEE_LOST_BACKEND_CONNECTION
Probable cause
The Relay Server will expire idle junctions containing the backend connection in max_junction_idle_sec, which
is specified as a backend server property in the Relay Server configuration file. Configuring the backend server
to increase timeout tolerance or reduce max_junction_idle_sec in the Relay Server configuration may resolve
this problem.

#### 1.10.2.63 OEE1061: Failed writing to the Relay Server because of [MLC%1: %2]

of [MLC%1: %2]
Error code
Error constant
OEE_WRITE_RS_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
There was a communication error when the Outbound Enabler attempted to write to the Relay Server.
Further information regarding the probable cause and remedy of the error can be found in the "MobiLink
Communication error messages" section of the SQL Anywhere documentation.

#### 1.10.2.64 OEE1062: Failed reading from the Relay Server because of [MLC%1: %2]

because of [MLC%1: %2]
Error code
Error constant
OEE_READ_RS_FAILED

Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
There was a communication error when the Outbound Enabler attempted to read from the Relay Server.
Further information regarding the probable cause and remedy of the error can be found in the "MobiLink
Communication error messages" section of the SQL Anywhere documentation.

#### 1.10.2.65 OEE1603: Not compatible with the Relay Server due to unknown protocol version %1

to unknown protocol version %1
Error code
Error constant
OEE_PROTOCOL_VER_UNKNOWN
Parameter 1
Protocol version of the Relay Server
Probable cause
This Outbound Enabler is not compatible with the targeted Relay Server.

#### 1.10.2.66 OEE1604: The Relay Server response with %1 instead of %2

instead of %2
Error code
Error constant
OEE_UNEXPECTED_RS_RESPONSE_STATUS
Parameter 1
HTTP response status code from the Relay Server
Parameter 2
Expected HTTP response status code from the Relay Server
Probable cause
Report this error to the Relay Server administrator.

#### 1.10.2.67 OEE1605: The response does not originate from the Relay Server server extension

Relay Server server extension
Error code
Error constant
OEE_NOT_RS
Probable cause
Make sure the value of the host, port, and url_suffix parameters in the -cr option of the Outbound Enabler
are correct. If there is intermediary between the Outbound Enabler and the Relay Server, then make sure the
destination targets the server extension of the Relay Server.

#### 1.10.2.68 OEF10000: Failed to initialize socket library [MLC%1: %2]

[MLC%1: %2]
Error code
Error constant
OEF_SOCKET_LIB_INIT_FAILED
Parameter 1
MobiLink communication error code
Parameter 2
MobiLink communication error message
Probable cause
The Outbound Enabler was unable to initialize the socket (network) library. Further information regarding
the probable cause and remedy of the error can be found in the "MobiLink Communication error messages"
section of the SQL Anywhere documentation.

#### 1.10.2.69 OEF10001: Out of memory

Error code
Error constant
OEF_OUT_OF_MEMORY

Probable cause
The Outbound Enabler was unable to allocate enough memory to function. Consider increasing the amount of
RAM, or increasing the swap file size, or reducing the number of applications running on the system.

#### 1.10.2.70 OEF10002: The Outbound Enabler was unable to create shared memory directory for communicating shutdown

Error code
Error constant
OEF_SHM_INIT_FAILED
Probable cause
In order to be able to shutdown the Outbound Enabler using the "rsoe -s" command locally, the Outbound
Enabler is creating a directory on disk for holding a piece of shared memory to communicate the shutdown
signal. However the create operation failed. Make sure to use an account with sufficient permission for running
the Outbound Enabler.

#### 1.10.2.71 OEF10003: The Outbound Enabler was unable to create shared memory for communicating shutdown

to create shared memory for communicating
shutdown
Error code
Error constant
OEF_SHM_CREATE_FAILED
Probable cause
In order to be able to shutdown the Outbound Enabler using the "rsoe -s" command locally, the Outbound
Enabler is creating a small memory mapped file for communicating the shutdown signal. However the creation
of the memory mapped file failed. Make sure to use an account with sufficient permission for running the
Outbound Enabler.

#### 1.10.2.72 OEF10004: The 'rsoe -s' command failed shutting down Outbound Enabler for server '%1' of farm '%2' using relay server '%3%4'

Error code
Error constant
OEF_SHUTDOWN_FAILED
Parameter 1
Backend server name provided by the -id switch
Parameter 2
Backend farm name provided by the -f switch
Parameter 3
Relay server host provided by the -cs host parameter
Parameter 4
Relay server url suffix provided by the -cs url_suffix parame-
ter
Probable cause
The Outbound Enabler is not responding. Try terminating it with an OS utility.

#### 1.10.2.73 OEF10005: Unable to load the Outbound Enabler support library: %1 -- %2

support library: %1 -- %2
Error code
Error constant
OEF_LOAD_DLL_FAILED
Parameter 1
Outbound Enabler support library name
Parameter 2
Reason of the failure (for technical support)
Probable cause
The support library needs to be loaded on startup but the operation failed. Use reason of the failure to resolve
the issue.

#### 1.10.2.74 OEF10006: The Outbound Enabler was unable to load required functions from the '%1' library

load required functions from the '%1' library
Error code

Error constant
OEF_LOAD_DLL_FUNC_FAILED
Parameter 1
RSOE support library name
Probable cause
Make sure the version of the support library matches the Outbound Enabler.

#### 1.10.2.75 OEF10007: Failed to initialize an Outbound Enabler support library '%1'

support library '%1'
Error code
Error constant
OEF_DLL_INIT_FAILED
Parameter 1
Outbound Enabler support library name
Probable cause
This can be caused by a problem with your command line or the Outbound Enabler could have run out of
memory. Contact technical support for assistance if the issue persists.

#### 1.10.2.76 OEF10008: Protocol error while reading %1 packet

Error code
Error constant
OEF_INVALID_PACKET
Parameter 1
The name of the malformed packet
Probable cause
A legitimate Relay Server should not cause this problem. Check the -cr switch and make sure a Relay Server is
running there by using a Web browser to fetch the status page from the Relay Server. A typical status page URL
looks like http://MyHost/rs/server/rs.dll for IIS and http://MyHost/srv/iarelayserver for Apache.

#### 1.10.2.77 OEF10009: Reduced to lowest supported protocol version but the Relay Server is still not compatible

version but the Relay Server is still not compatible
Error code
Error constant
OEF_LOWEST_PROTOCOL
Probable cause
The version of the Relay Server is too old and is thus incompatible. The Outbound Enabler has iteratively
attempted to lower the protocol version but exhausted all supported versions without success. A Relay Server
upgrade is required.

#### 1.10.2.78 OEF10010: Invalid opcode received from the Relay Server

Server
Error code
Error constant
OEF_INVALID_OPCODE
Probable cause
A legitimate Relay Server should not cause this problem. Check the -cr switch and make sure a Relay Server is
running there by using a Web browser to fetch the status page from the Relay Server. A typical status page URL
looks like http://MyHost/rs/server/rs.dll for IIS and http://MyHost/srv/iarelayserver for Apache.

#### 1.10.2.79 OEF10011: The Outbound Enabler was unable to load the %1 encryption library because of [%2]. Make it is installed properly

Error code
Error constant
OEF_SACI_LOAD_FAILED
Parameter 1
The encryption library file name
Parameter 2
Reason of the failure

Probable cause
Make sure the library is installed within the search path and make use of the reason to resolve the issue.

#### 1.10.2.80 OEF10012: The Outbound Enabler was unable to load function %1 from encryption library %2

load function %1 from encryption library %2
Error code
Error constant
OEF_SACI_LOAD_FUNC_FAILED
Parameter 1
The name of the function to be loaded
Parameter 2
The encryption library expected to contain the given func-
tion
Probable cause
Make sure the given encryption library has the same version as the Outbound Enabler.

#### 1.10.2.81 OEF10013: Encryption library version mismatch. Found version %1.%2 with implementation id %3

Found version %1.%2 with implementation id %3
Error code
Error constant
OEF_SACI_VER_MISMATCH
Parameter 1
The major version of the encryption library
Parameter 2
The minor version of the encryption library
Parameter 3
The implementation id of the encryption library
Probable cause
Make sure the encryption library has the same version as the Outbound Enabler.

#### 1.10.2.82 OEF10014: Internal error: %1

Error code
Error constant
OEF_INTERNAL_ERROR
Parameter 1
Internal error description
Probable cause
Restart the Outbound Enabler. Contact technical support for assistance if the issue persists.

#### 1.10.2.83 OEF10015: Internal error, RSOE configuration file location not specified. Contact technical support for assistance if the issue persists

Error code
Error constant
OEF_OE_CONFIG_FILE_NOT_SPECIFIED
Probable cause
The RSOE configuration file was not specified. Contact Technical Support for assistance if the issue persists.

#### 1.10.2.84 OEF10016: An error occurred while processing RSOE configuration parameters. Please make sure the RSOE configuration file exists and configuration parameters are specified correctly

Error code
Error constant
OEF_ERR_PROCESSING_OE_CONFIG_PARAMS
Probable cause
The RSOE was unable to process the configuration parameters. Make sure the RSOE configuration file actually
exists and that the configuration parameters are specified correctly.

#### 1.10.2.85 OEF10017: Protocol error

Error code
Error constant
OEF_PROTOCOL_ERROR
Probable cause
A legitimate Relay Server should not cause this problem.

### 1.11 Outbound Enabler Warning Messages

The Outbound Enabler messages are written to the Outbound Enabler message log.
Each message has a numeric code. Many of the messages contain the characters %1, %2, and so on. These
characters are replaced by the parameters to the message.

#### 1.11.1 Outbound Enabler Warning Messages Sorted by Error Code

Code
Error code
Message text
OEW0: Cannot disconnect backend session due to rid=%1
snum=%2 sfp=%3 not being found
OEW1: The proxy disallows passthrough to destination RS
port. Reconfiguring the proxy to allow RS port as destination
for CONNECT request is recommended

#### 1.11.2 Outbound Enabler Warning Messages Listed by Message Text

Message Text

#### 1.11.2.1 OEW0: Cannot disconnect backend session due to rid=%1 snum=%2 sfp=%3 not being found

rid=%1 snum=%2 sfp=%3 not being found
Error code
Error constant
OEW_CANT_DISCONNECT_BE_NOT_FOUND
Parameter 1
Request index
Parameter 2
Session number
Parameter 3
Session fingerprint
Probable cause
The Relay Server has notified the outbound enabler to disconnect a backend connection before the session
index was established by the first response in the session. However, the outbound enabler cannot lookup the
session using other pieces of internal information reported in this warning.

#### 1.11.2.2 OEW1: The proxy disallows passthrough to destination RS port. Reconfiguring the proxy to allow RS port as destination for CONNECT request is recommended

Error code
Error constant
OEW_PROXY_FORBID_PASSTHROUGH

Probable cause
If it is an Apache proxy, see mod_proxy documentation of the AllowCONNECT directive.

## Important Disclaimers and Legal Information

Hyperlinks
•
•
•
•
Videos Hosted on External Platforms
Beta and Other Experimental Features
Example Code
Bias-Free Language

www.sap.com /contactsap